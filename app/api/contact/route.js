import { NextResponse } from "next/server";
import { sendLead } from "@/lib/mail";
import { SERVICES, T } from "@/lib/site-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LANGS = ["fr", "nl", "en"];
const MAX_BODY = 20_000; // octets — un lead légitime tient en quelques Ko (message plafonné à 3 000 car.)
const hits = new Map();

// Les réponses de l'API ne doivent jamais être mises en cache (ni par le CDN, ni par le navigateur).
const json = (body, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

// Limitation par IP : 5 envois / 10 min. Mémoire locale à l'instance serverless : efficace contre
// un script naïf, pas contre un attaquant distribué (il faudrait un stockage partagé type KV).
// Le pot de miel `company` et le contrôle d'origine ci-dessous complètent.
function limited(ip) {
  const now = Date.now();
  const w = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  w.push(now);
  hits.set(ip, w);
  return w.length > 5;
}

// Le formulaire vit sur ce site : un POST dont l'en-tête Origin désigne un autre hôte est refusé.
// On compare à l'hôte de la requête (et non à un domaine en dur) pour que les aperçus Vercel
// continuent de fonctionner.
function crossOrigin(req) {
  const origin = req.headers.get("origin");
  if (!origin) return false; // requêtes same-origin anciennes / outils : on laisse les autres contrôles jouer
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || "";
  try {
    return new URL(origin).host !== host;
  } catch {
    return true;
  }
}

const clean = (v, max) => String(v ?? "").replace(/\s+/g, " ").trim().slice(0, max);

export async function POST(req) {
  if (crossOrigin(req)) return json({ ok: false, error: "forbidden" }, 403);

  // Taille lue réellement (Content-Length peut manquer en transfert fragmenté).
  const raw = await req.text();
  if (raw.length > MAX_BODY) return json({ ok: false, error: "too_large" }, 413);

  let body;
  try {
    body = JSON.parse(raw);
  } catch (e) {
    return json({ ok: false, error: "bad_json" }, 400);
  }
  if (!body || typeof body !== "object") return json({ ok: false, error: "bad_json" }, 400);

  if (body.company) return json({ ok: true }); // pot de miel : champ invisible, rempli seulement par les robots

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return json({ ok: false, error: "rate_limited" }, 429);

  const lang = LANGS.includes(body.lang) ? body.lang : "fr";
  const profiles = T[lang].contact.form.profiles;
  const lead = {
    lang,
    name: clean(body.name, 80),
    phone: clean(body.phone, 30),
    email: clean(body.email, 120).toLowerCase(),
    profile: profiles.includes(body.profile) ? body.profile : profiles[0],
    service: SERVICES.some((s) => s.id === body.service) ? body.service : SERVICES[0].id,
    message: String(body.message ?? "").trim().slice(0, 3000)
  };

  const errors = [];
  if (lead.name.length < 2) errors.push("name");
  if (lead.phone.replace(/\D/g, "").length < 8) errors.push("phone");
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) errors.push("email");
  if (errors.length) return json({ ok: false, error: "invalid", fields: errors }, 400);

  const meta = {
    page: clean(body.page, 200),
    referrer: clean(body.referrer, 200),
    gclid: clean(body.gclid, 120),
    utm_source: clean(body.utm_source, 80),
    utm_campaign: clean(body.utm_campaign, 120),
    ip
  };

  try {
    const info = await sendLead(lead, meta);
    // Mode test (MAIL_TRANSPORT=json) : le message est renvoyé au lieu d'être envoyé. Jamais en
    // production, même si la variable y traînait : on ne renvoie pas un lead au navigateur.
    const debug = process.env.MAIL_TRANSPORT === "json" && process.env.NODE_ENV !== "production" ? { message: JSON.parse(info.message) } : {};
    return json({ ok: true, ...debug });
  } catch (e) {
    console.error("[contact] envoi impossible :", e && e.message);
    return json({ ok: false, error: "send_failed" }, 500);
  }
}
