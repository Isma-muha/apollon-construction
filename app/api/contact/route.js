import { NextResponse } from "next/server";
import { sendLead } from "@/lib/mail";
import { SERVICES, T } from "@/lib/site-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LANGS = ["fr", "nl", "en"];
const hits = new Map();

function limited(ip) {
  const now = Date.now();
  const w = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  w.push(now);
  hits.set(ip, w);
  return w.length > 5;
}

const clean = (v, max) => String(v ?? "").replace(/\s+/g, " ").trim().slice(0, max);

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  if (body.company) return NextResponse.json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });

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
  if (errors.length) return NextResponse.json({ ok: false, error: "invalid", fields: errors }, { status: 400 });

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
    const debug = process.env.MAIL_TRANSPORT === "json" ? { message: JSON.parse(info.message) } : {};
    return NextResponse.json({ ok: true, ...debug });
  } catch (e) {
    console.error("[contact] envoi impossible :", e && e.message);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
