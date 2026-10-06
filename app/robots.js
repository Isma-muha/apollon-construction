import { SITE_URL } from "@/lib/site-data";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /api/ n'a aucun contenu à indexer. Les pages /lp/… restent autorisées au crawl
        // exprès : c'est leur balise noindex qui doit être lue, et un Disallow l'empêcherait.
        disallow: ["/api/"]
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
