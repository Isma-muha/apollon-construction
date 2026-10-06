import { T, SERVICES, LANGS, EMAIL, phonesFor } from "@/lib/site-data";

// Les trois variantes traduites de la page 404, réduites au strict nécessaire :
// le composant client ne doit pas embarquer tout site-data (180 Ko) dans le bundle navigateur.
export function notFoundVariants() {
  return LANGS.map((lang) => ({
    lang,
    nf: T[lang].nf,
    nav: T[lang].nav,
    services: SERVICES.map((s) => ({ id: s.id, name: s.name[lang] })),
    phones: phonesFor(lang).map((p) => ({ num: p.num, href: p.href, langs: p.langs })),
    footer: {
      legal: T[lang].footer.legal,
      rgpd: T[lang].footer.rgpd,
      rights: T[lang].footer.rights,
      vat: T[lang].footer.vat,
      address: T[lang].footer.address,
      hours: T[lang].footer.hours,
      email: EMAIL
    }
  }));
}
