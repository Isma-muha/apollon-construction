import { SITE_URL, LANGS, PHONE_HREF, EMAIL, ADDRESS, SOCIAL, ZONES } from "@/lib/site-data";

const OG_LOCALE = { fr: "fr_BE", nl: "nl_BE", en: "en_GB" };
const HREFLANG = { fr: "fr-BE", nl: "nl-BE", en: "en" };

// path = "" | "/services" | "/services/cuisine" ... (without lang prefix)
export function pageMetadata({ lang, path = "", title, description, image = "/images/chantier-sdb-1.jpg" }) {
  const url = (l) => `${SITE_URL}/${l}${path}`;
  const languages = Object.fromEntries(LANGS.map((l) => [HREFLANG[l], url(l)]));
  languages["x-default"] = url("fr");
  return {
    title,
    description,
    alternates: { canonical: url(lang), languages },
    openGraph: {
      title,
      description,
      url: url(lang),
      siteName: "Apollon Construction",
      locale: OG_LOCALE[lang],
      type: "website",
      images: [{ url: `${SITE_URL}${image}`, width: 1600, height: 1200 }]
    },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}${image}`] },
    robots: { index: true, follow: true }
  };
}

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": `${SITE_URL}/#organization`,
    name: "Apollon Construction",
    legalName: "Apollon Group SRL",
    description:
      "Entreprise de rénovation à Bruxelles et en Brabant : rénovation intérieure, salle de bain, électricité et mise en conformité RGIE, cuisine, plafonnage, peinture, façade, isolation et toiture.",
    url: SITE_URL,
    image: `${SITE_URL}/images/chantier-sdb-1.jpg`,
    logo: `${SITE_URL}/logo/ac.png`,
    telephone: PHONE_HREF.replace("tel:", ""),
    email: EMAIL,
    vatID: "BE1025.392.245",
    priceRange: "€€",
    address: { "@type": "PostalAddress", streetAddress: ADDRESS.street, postalCode: ADDRESS.zip, addressLocality: ADDRESS.city, addressRegion: "Vlaams-Brabant", addressCountry: "BE" },
    areaServed: ZONES,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "13:00" }
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "6", bestRating: "5" },
    sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.linkedin]
  };
}

export function serviceSchema(s, lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: s.name,
    description: s.seoDesc,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ZONES,
    url: `${SITE_URL}/${lang}/services/${s.id}`
  };
}

export function faqSchema(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url }))
  };
}
