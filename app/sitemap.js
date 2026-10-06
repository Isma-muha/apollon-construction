import { SITE_URL, LANGS, SERVICES, LEGAL_UPDATED } from "@/lib/site-data";

const HREFLANG = { fr: "fr-BE", nl: "nl-BE", en: "en" };

// Date de compilation : le site est publié d'un bloc, donc elle vaut pour les pages de contenu.
// Les pages légales portent leur propre date, qui ne bouge que quand leur texte change.
const BUILT = new Date();
const LEGAL_DATE = new Date(LEGAL_UPDATED);

// Absentes volontairement : /lp/… (pages Google Ads) et /contact/merci sont en noindex,
// les lister ici enverrait un signal contradictoire à Google.
const PAGES = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...SERVICES.map((s) => ({ path: `/services/${s.id}`, priority: 0.9, changeFrequency: "monthly" })),
  { path: "/realisations", priority: 0.8, changeFrequency: "monthly" },
  { path: "/primes", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly", lastModified: LEGAL_DATE },
  { path: "/confidentialite", priority: 0.2, changeFrequency: "yearly", lastModified: LEGAL_DATE }
];

export default function sitemap() {
  return PAGES.flatMap((p) =>
    LANGS.map((l) => ({
      url: `${SITE_URL}/${l}${p.path}`,
      lastModified: p.lastModified || BUILT,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: { languages: Object.fromEntries(LANGS.map((x) => [HREFLANG[x], `${SITE_URL}/${x}${p.path}`])) }
    }))
  );
}
