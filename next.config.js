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

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: isExport,
  output: isExport ? "export" : undefined,
  images: { unoptimized: true },
  async redirects() {
    if (isExport) return [];
    return [{ source: "/", destination: "/fr", permanent: true }];
  },
  async headers() {
    // Ignoré en export statique (pas de serveur pour les poser) : même garde que redirects().
    if (isExport) return [];
    return [{ source: "/(.*)", headers: securityHeaders }];
  }
};

module.exports = nextConfig;
