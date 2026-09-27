import { SITE_URL, LANGS, SERVICES } from "@/lib/site-data";

const HREFLANG = { fr: "fr-BE", nl: "nl-BE", en: "en" };

export default function sitemap() {
  const paths = ["", "/services", "/realisations", "/primes", "/contact", ...SERVICES.map((s) => `/services/${s.id}`)];
  const now = new Date();
  return paths.flatMap((p) =>
    LANGS.map((l) => ({
      url: `${SITE_URL}/${l}${p}`,
      lastModified: now,
      changeFrequency: p === "" ? "weekly" : "monthly",
      priority: p === "" ? 1 : p.startsWith("/services/") ? 0.9 : 0.7,
      alternates: { languages: Object.fromEntries(LANGS.map((x) => [HREFLANG[x], `${SITE_URL}/${x}${p}`])) }
    }))
  );
}
