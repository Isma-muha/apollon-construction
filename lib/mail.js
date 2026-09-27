import nodemailer from "nodemailer";
import { SERVICES, PHONE } from "@/lib/site-data";

// Variables d'environnement (à définir sur Vercel → Settings → Environment Variables) :
//   SMTP_USER  = info@apollonconstruction.be     (compte Hostinger qui envoie)
//   SMTP_PASS  = mot de passe de cette boîte
//   LEAD_TO    = info@apollonconstruction.be     (destinataire des leads, optionnel — défaut : SMTP_USER)
//   SMTP_HOST  = smtp.hostinger.com (défaut)  SMTP_PORT = 465 (défaut, SSL)
//   MAIL_TRANSPORT=json → aucun envoi réel, le message est renvoyé en JSON (tests)

const LANG_LABEL = { fr: "Français", nl: "Nederlands", en: "English" };

export function mailConfig() {
  return {
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    to: process.env.LEAD_TO || process.env.SMTP_USER || "info@apollonconstruction.be",
    json: process.env.MAIL_TRANSPORT === "json"
  };
}

function transporter() {
  const c = mailConfig();
  if (c.json) return nodemailer.createTransport({ jsonTransport: true });
  return nodemailer.createTransport({
    host: c.host,
    port: c.port,
    secure: c.port === 465,
    auth: { user: c.user, pass: c.pass }
  });
}

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function serviceName(id, lang) {
  const s = SERVICES.find((x) => x.id === id);
  return s ? s.name[lang] || s.name.fr : id || "—";
}

function fmtDate(d) {
  return new Intl.DateTimeFormat("fr-BE", { dateStyle: "full", timeStyle: "short", timeZone: "Europe/Brussels" }).format(d);
}

export function buildLeadEmail(lead, meta = {}) {
  const lang = ["fr", "nl", "en"].includes(lead.lang) ? lead.lang : "fr";
  const service = serviceName(lead.service, "fr");
  const serviceLocal = lang === "fr" ? "" : ` (${serviceName(lead.service, lang)})`;
  const date = fmtDate(new Date());
  const phoneDigits = String(lead.phone || "").replace(/[^\d+]/g, "");
  const message = String(lead.message || "").trim();
  const source = [meta.page, meta.referrer && !meta.referrer.includes("apollonconstruction") ? `via ${meta.referrer}` : ""].filter(Boolean).join(" · ");
  const ads = [meta.gclid ? "Google Ads (gclid présent)" : "", meta.utm_source ? `utm_source=${meta.utm_source}` : "", meta.utm_campaign ? `campagne=${meta.utm_campaign}` : ""].filter(Boolean).join(" · ");

  const subject = `Nouveau lead — ${service} — ${lead.name}${lead.profile && lead.profile !== "Particulier" ? ` (${lead.profile})` : ""}`;

  const row = (label, value, opts = {}) => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e6e1d6;font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#6b6457;width:150px;vertical-align:top">${label}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e6e1d6;font:${opts.big ? "500 18px" : "400 15px"}/1.5 Arial,Helvetica,sans-serif;color:#0e0f0d;vertical-align:top">${value}</td>
    </tr>`;

  const html = `<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#f3eee4">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3eee4;padding:28px 12px">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e6e1d6">
  <tr><td style="background:#0e0f0d;padding:22px 24px">
    <div style="font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.3em;text-transform:uppercase;color:#a8dbb4">Apollon Construction — site web</div>
    <div style="font:400 26px/1.15 Georgia,'Times New Roman',serif;color:#ffffff;margin-top:8px">Nouvelle demande de devis</div>
    <div style="font:400 13px/1.5 Arial,Helvetica,sans-serif;color:#b8b1a3;margin-top:6px">${esc(date)}</div>
  </td></tr>
  <tr><td style="padding:8px 0 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Nom", `<strong>${esc(lead.name)}</strong>`, { big: true })}
      ${row("Téléphone", `<a href="tel:${esc(phoneDigits)}" style="color:#11642e;text-decoration:none;font-weight:600">${esc(lead.phone)}</a>`, { big: true })}
      ${row("E-mail", lead.email ? `<a href="mailto:${esc(lead.email)}" style="color:#11642e;text-decoration:none">${esc(lead.email)}</a>` : `<span style="color:#8f887a">non renseigné</span>`)}
      ${row("Profil", esc(lead.profile || "—"))}
      ${row("Travaux", `<strong>${esc(service)}</strong>${esc(serviceLocal)}`)}
      ${row("Langue", esc(LANG_LABEL[lang]))}
    </table>
  </td></tr>
  <tr><td style="padding:22px 24px 8px">
    <div style="font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#6b6457;margin-bottom:8px">Description du projet</div>
    <div style="font:400 15px/1.6 Arial,Helvetica,sans-serif;color:#0e0f0d;background:#f3eee4;padding:16px;border-left:3px solid #11642e;white-space:pre-wrap">${message ? esc(message) : '<span style="color:#8f887a">Aucun message.</span>'}</div>
  </td></tr>
  <tr><td style="padding:16px 24px 24px">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="background:#11642e;border-radius:999px"><a href="tel:${esc(phoneDigits)}" style="display:inline-block;padding:12px 22px;font:600 14px/1 Arial,Helvetica,sans-serif;color:#ffffff;text-decoration:none">Appeler ${esc(lead.name.split(" ")[0])}</a></td>
      ${lead.email ? `<td style="width:10px"></td><td style="border:1px solid #0e0f0d;border-radius:999px"><a href="mailto:${esc(lead.email)}?subject=${encodeURIComponent("Votre demande de devis — Apollon Construction")}" style="display:inline-block;padding:12px 22px;font:600 14px/1 Arial,Helvetica,sans-serif;color:#0e0f0d;text-decoration:none">Répondre par e-mail</a></td>` : ""}
    </tr></table>
  </td></tr>
  <tr><td style="padding:14px 24px;border-top:1px solid #e6e1d6;font:400 12px/1.6 Arial,Helvetica,sans-serif;color:#8f887a">
    Source : ${esc(source || "formulaire de contact")}${ads ? `<br>Campagne : ${esc(ads)}` : ""}<br>
    Envoyé automatiquement par le formulaire du site. Répondre à cet e-mail écrit directement au client${lead.email ? "" : " (pas d'adresse fournie : appelez-le)"}.
  </td></tr>
</table>
</td></tr></table>
</body></html>`;

  const text = [
    `NOUVELLE DEMANDE DE DEVIS — ${date}`,
    ``,
    `Nom        : ${lead.name}`,
    `Téléphone  : ${lead.phone}`,
    `E-mail     : ${lead.email || "non renseigné"}`,
    `Profil     : ${lead.profile || "—"}`,
    `Travaux    : ${service}${serviceLocal}`,
    `Langue     : ${LANG_LABEL[lang]}`,
    ``,
    `Description du projet :`,
    message || "(aucun message)",
    ``,
    `Source : ${source || "formulaire de contact"}${ads ? ` — ${ads}` : ""}`,
    `Apollon Construction · ${PHONE}`
  ].join("\n");

  return { subject, html, text };
}

export async function sendLead(lead, meta) {
  const c = mailConfig();
  if (!c.json && (!c.user || !c.pass)) throw new Error("SMTP_USER / SMTP_PASS manquants");
  const { subject, html, text } = buildLeadEmail(lead, meta);
  const info = await transporter().sendMail({
    from: { name: "Site Apollon Construction", address: c.user || c.to },
    to: c.to,
    replyTo: lead.email ? { name: lead.name, address: lead.email } : undefined,
    subject,
    text,
    html
  });
  return info;
}
