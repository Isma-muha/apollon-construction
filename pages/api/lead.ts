import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Apollon Construction <devis@apollonconstruction.be>';
const TO = 'info@apollonconstruction.be';

type LeadBody = {
  name?: string; nom?: string;
  phone?: string; telephone?: string;
  email?: string;
  type?: string; service?: string;
  message?: string;
  _gotcha?: string;
  tel?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[0-9\s().-]{7,20}$/;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as LeadBody;
  if (body._gotcha) return res.status(200).json({ ok: true });

  const name = (body.name || body.nom || '').trim().slice(0, 120);
  const phone = (body.phone || body.telephone || '').trim().slice(0, 40);
  const email = (body.email || '').trim().slice(0, 200);
  const type = (body.type || body.service || '').trim().slice(0, 100);
  const message = (body.message || '').trim().slice(0, 4000);

  if (!phone || !PHONE_RE.test(phone)) return res.status(400).json({ error: 'Numéro de téléphone invalide' });
  if (!email || !EMAIL_RE.test(email)) return res.status(400).json({ error: 'Adresse email invalide' });

  const referer = req.headers['referer'] || 'direct';
  const subject = `Nouveau devis — ${type || 'Demande'} — ${name || email}`;

  const internalHtml = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;color:#111">
      <h2 style="color:#16a34a">Nouvelle demande de devis</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 12px;background:#f6f6f6;width:140px"><b>Nom</b></td><td style="padding:6px 12px">${escape(name) || '<i>non renseigné</i>'}</td></tr>
        <tr><td style="padding:6px 12px;background:#f6f6f6"><b>Téléphone</b></td><td style="padding:6px 12px"><a href="tel:${escape(phone)}">${escape(phone)}</a></td></tr>
        <tr><td style="padding:6px 12px;background:#f6f6f6"><b>Email</b></td><td style="padding:6px 12px"><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        <tr><td style="padding:6px 12px;background:#f6f6f6"><b>Type</b></td><td style="padding:6px 12px">${escape(type) || '<i>non renseigné</i>'}</td></tr>
        <tr><td style="padding:6px 12px;background:#f6f6f6;vertical-align:top"><b>Message</b></td><td style="padding:6px 12px;white-space:pre-wrap">${escape(message) || '<i>aucun</i>'}</td></tr>
      </table>
      <p style="color:#666;font-size:12px;margin-top:20px">Page : ${escape(String(referer))}</p>
    </div>
  `;

  const clientHtml = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;color:#111">
      <p>Bonjour ${escape(name) || ''},</p>
      <p>Nous avons bien reçu votre demande de devis pour <b>${escape(type) || 'vos travaux'}</b>. Un de nos conseillers vous contactera dans les <b>48 heures ouvrables</b>.</p>
      <p>Urgence : FR 0486 27 88 52 — NL 0499 89 60 86</p>
      <p>Cordialement,<br><b>Apollon Construction</b><br>Bruxelles — TVA BE1025.392.245</p>
    </div>
  `;

  try {
    const internal = await resend.emails.send({ from: FROM, to: TO, replyTo: email, subject, html: internalHtml });
    if (internal.error) {
      console.error('Resend internal error:', internal.error);
      return res.status(502).json({ error: 'Envoi impossible, réessayez' });
    }
    resend.emails.send({ from: FROM, to: email, subject: 'Votre demande de devis — Apollon Construction', html: clientHtml }).catch(err => console.error('autoreply:', err));
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Lead handler error:', err);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
