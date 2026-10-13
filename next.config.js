/** @type {import('next').NextConfig} */
const isExport = !!process.env.STATIC_EXPORT;
const isDev = process.env.NODE_ENV !== "production";

// Domaines tiers autorisés. Le site n'en charge que deux familles : Google Fonts (polices)
// et la balise Google Ads via gtag (components/Analytics.js), inactive tant que
// NEXT_PUBLIC_GADS_ID est vide. Tout autre domaine est bloqué par le navigateur.
const GOOGLE_TAG = ["https://www.googletagmanager.com", "https://googleads.g.doubleclick.net", "https://www.google.com", "https://www.google.be"];
const GOOGLE_PING = [...GOOGLE_TAG, "https://www.google-analytics.com", "https://*.google-analytics.com", "https://*.analytics.google.com", "https://pagead2.googlesyndication.com", "https://td.doubleclick.net"];

// Content-Security-Policy. 'unsafe-inline' reste nécessaire sur script-src : les pages sont
// pré-construites (pas de middleware, donc pas de nonce par requête) et Next.js injecte ses
// propres scripts inline d'hydratation. La politique bloque malgré tout tout script chargé
// depuis un domaine non listé, l'intégration du site dans une iframe, les <object>/<embed>,
// la réécriture de <base> et l'envoi de formulaires vers l'extérieur.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "upgrade-insecure-requests",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} ${GOOGLE_TAG.join(" ")}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  `img-src 'self' data: blob: ${GOOGLE_PING.join(" ")}`,
  "media-src 'self'",
  `connect-src 'self' ${GOOGLE_PING.join(" ")}`,
  "frame-src https://www.googletagmanager.com https://td.doubleclick.net https://www.google.com"
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Doublon volontaire de frame-ancestors pour les navigateurs anciens.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" }
  // Strict-Transport-Security : posé par Vercel sur le domaine (max-age 2 ans), on ne le double pas.
];

// ---------------------------------------------------------------- redirections héritées
// L'ancien site (en ligne d'avril au 30 septembre 2026) exposait d'autres adresses, indexées
// par Google pendant six mois. La refonte les a remplacées sans redirection : elles répondaient
// 404, d'où le motif « Introuvable (404) » signalé par Search Console le 13 octobre.
// Il utilisait le routage i18n de Next : français sans préfixe, 'nl' et 'en' préfixés.
const LANGS = ["fr", "nl", "en"];

// Anciennes pages dont le chemin n'existe plus tel quel.
// /facade-toiture était le pôle « Façade & Toiture » (libellé nav.facade de l'ancien site).
// Les deux métiers sont aujourd'hui deux pages distinctes : on renvoie vers la liste des
// services, qui les présente toutes les deux, plutôt que d'en choisir une arbitrairement.
const LEGACY = {
  "/solutions": "/services",
  "/facade-toiture": "/services",
  "/toiture": "/services/toiture",
  "/isolation-facade": "/services/isolation-facade"
};

// /contact et /primes ont gardé le même chemin : /nl/contact, /en/contact, /nl/primes et
// /en/primes répondent déjà 200 sur le nouveau site. On ne redirige donc QUE leur version
// française sans préfixe — rediriger les versions préfixées créerait une boucle.
const LEGACY_FR_ONLY = { "/contact": "/fr/contact", "/primes": "/fr/primes" };

function legacyRedirects() {
  const out = [];
  for (const [from, to] of Object.entries(LEGACY)) {
    out.push({ source: from, destination: `/fr${to}`, permanent: true });
    for (const l of LANGS) out.push({ source: `/${l}${from}`, destination: `/${l}${to}`, permanent: true });
  }
  for (const [from, to] of Object.entries(LEGACY_FR_ONLY)) {
    out.push({ source: from, destination: to, permanent: true });
  }
  return out;
}

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: isExport,
  output: isExport ? "export" : undefined,
  images: { unoptimized: true },
  async redirects() {
    if (isExport) return [];
    return [{ source: "/", destination: "/fr", permanent: true }, ...legacyRedirects()];
  },
  async headers() {
    // Ignoré en export statique (pas de serveur pour les poser) : même garde que redirects().
    if (isExport) return [];
    return [{ source: "/(.*)", headers: securityHeaders }];
  }
};

module.exports = nextConfig;
