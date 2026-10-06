// Titres (≤ 60 car.) et descriptions (≤ 155 car.) optimisés pour l'affichage Google.
export const SEO = {
  home: {
    fr: ["Rénovation intérieure Bruxelles | Apollon Construction", "Salle de bain, électricité RGIE, plafonnage, peinture : une équipe, un devis clair sous 48 h, TVA 6 %. Bruxelles et Brabant. Avis Google 5/5."],
    nl: ["Binnenrenovatie Brussel | Apollon Construction", "Badkamer, elektriciteit AREI, pleisterwerk, schilderwerk: één team, duidelijke offerte binnen 48 u, 6 % btw. Brussel en Brabant. Google 5/5."],
    en: ["Interior renovation Brussels | Apollon Construction", "Bathroom, RGIE electrics, plastering, painting: one team, a clear quote within 48 h, 6% VAT. Brussels and Brabant. Google rating 5/5."]
  },
  "renovation-interieure": {
    fr: ["Rénovation intérieure à Bruxelles | Apollon Construction", "Plafonnage, murs humides, peinture, sols, cloisons : rénovation intérieure à Bruxelles et en Brabant par une seule équipe. Devis gratuit sous 48 h."],
    nl: ["Binnenrenovatie in Brussel | Apollon Construction", "Pleisterwerk, vochtige muren, schilderwerk, vloeren, wanden: binnenrenovatie in Brussel en Brabant door één team. Gratis offerte binnen 48 u."],
    en: ["Interior renovation in Brussels | Apollon Construction", "Plastering, damp walls, painting, flooring, partitions: interior renovation in Brussels and Brabant by one team. Free quote within 48 h."]
  },
  "salle-de-bain": {
    fr: ["Rénovation salle de bain Bruxelles | Apollon Construction", "Salle de bain clé en main à Bruxelles : démolition, plomberie, électricité, carrelage, douche à l'italienne. Chantier propre, devis gratuit sous 48 h."],
    nl: ["Badkamerrenovatie Brussel | Apollon Construction", "Badkamer sleutel op de deur in Brussel: afbraak, sanitair, elektriciteit, tegelwerk, inloopdouche. Propere werf, gratis offerte binnen 48 u."],
    en: ["Bathroom renovation Brussels | Apollon Construction", "Turnkey bathroom in Brussels: demolition, plumbing, electrics, tiling, walk-in shower. Clean site, free quote within 48 h."]
  },
  "electricite-rgie": {
    fr: ["Électricien & mise en conformité RGIE Bruxelles | Apollon", "Mise en conformité RGIE, tableau électrique, rénovation complète de l'installation à Bruxelles et en Brabant. Certificat garanti, devis sous 48 h."],
    nl: ["Elektricien & AREI-keuring Brussel | Apollon Construction", "AREI-conformering, zekeringkast, volledige vernieuwing van de installatie in Brussel en Brabant. Keuringsattest gegarandeerd, offerte binnen 48 u."],
    en: ["Electrician & RGIE compliance Brussels | Apollon", "RGIE compliance, fuse board, full rewiring in Brussels and Brabant. Inspection certificate guaranteed, quote within 48 h."]
  },
  cuisine: {
    fr: ["Rénovation de cuisine à Bruxelles | Apollon Construction", "Cuisine équipée sur mesure à Bruxelles : démolition, électricité, plomberie, faux plafond, pose du mobilier, crédence, sol. Devis gratuit, TVA 6 %."],
    nl: ["Keukenrenovatie in Brussel | Apollon Construction", "Keuken op maat in Brussel: afbraak, elektriciteit, sanitair, verlaagd plafond, plaatsing meubels, spatwand, vloer. Gratis offerte, 6 % btw."],
    en: ["Kitchen renovation in Brussels | Apollon Construction", "Bespoke fitted kitchen in Brussels: demolition, electrics, plumbing, false ceiling, unit installation, splashback, flooring. Free quote, 6% VAT."]
  },
  "renovation-complete": {
    fr: ["Rénovation complète clé en main Bruxelles | Apollon", "Appartement, maison ou bureau remis à neuf à Bruxelles et en Brabant : tous les corps de métier, un seul interlocuteur. Devis gratuit sous 48 h."],
    nl: ["Totaalrenovatie sleutel op de deur Brussel | Apollon", "Appartement, woning of kantoor volledig vernieuwd in Brussel en Brabant: alle vakmannen, één aanspreekpunt. Gratis offerte binnen 48 u."],
    en: ["Turnkey complete renovation Brussels | Apollon", "Apartment, house or office fully renovated in Brussels and Brabant: all trades, one point of contact. Free quote within 48 h."]
  },
  "isolation-facade": {
    fr: ["Isolation de façade (ITE) Bruxelles | Apollon Construction", "Isolation par l'extérieur, crépi et rénovation de façade à Bruxelles et en Brabant. Primes régionales, devis gratuit sous 48 h."],
    nl: ["Gevelisolatie (buitenisolatie) Brussel | Apollon", "Buitenisolatie, crepi en gevelrenovatie in Brussel en Brabant. Begeleiding bij regionale premies, gratis offerte binnen 48 u."],
    en: ["External wall insulation Brussels | Apollon Construction", "External insulation, render and façade renovation in Brussels and Brabant. Regional grants, free quote within 48 h."]
  },
  toiture: {
    fr: ["Toiture : réfection & étanchéité Bruxelles | Apollon", "Réfection et réparation de toiture à Bruxelles : tuiles, ardoises, zinc, toiture plate EPDM. Diagnostic gratuit, devis sous 48 h."],
    nl: ["Dakwerken & dakdichting Brussel | Apollon Construction", "Dakrenovatie en dakherstelling in Brussel: pannen, leien, zink, plat dak EPDM. Gratis diagnose, offerte binnen 48 u."],
    en: ["Roofing: repair & waterproofing Brussels | Apollon", "Roof renovation and repair in Brussels: tiles, slates, zinc, EPDM flat roof. Free diagnosis, quote within 48 h."]
  },
  energie: {
    fr: ["Rénovation énergétique & primes Bruxelles | Apollon", "Isolation, châssis, chauffage : rénovation énergétique à Bruxelles et en Brabant avec accompagnement primes. Devis gratuit sous 48 h."],
    nl: ["Energetische renovatie & premies Brussel | Apollon", "Isolatie, ramen, verwarming: energetische renovatie in Brussel en Brabant met begeleiding voor premies. Gratis offerte binnen 48 u."],
    en: ["Energy renovation & grants Brussels | Apollon", "Insulation, windows, heating: energy renovation in Brussels and Brabant with grant support. Free quote within 48 h."]
  },

  // --- pages hors services : l'ancienne version laissait Google tronquer ces quatre-là ---
  services: {
    fr: ["Services de rénovation à Bruxelles | Apollon Construction", "Salle de bain, électricité RGIE, cuisine, plafonnage, façade, toiture : huit métiers, une seule équipe à Bruxelles et en Brabant. Devis sous 48 h."],
    nl: ["Renovatiediensten in Brussel | Apollon Construction", "Badkamer, elektriciteit AREI, keuken, pleisterwerk, gevel, dak: acht vakgebieden, één team in Brussel en Brabant. Offerte binnen 48 u."],
    en: ["Renovation services in Brussels | Apollon Construction", "Bathroom, RGIE electrics, kitchen, plastering, façade, roofing: eight trades, one team in Brussels and Brabant. Quote within 48 h."]
  },
  realisations: {
    fr: ["Réalisations : nos chantiers à Bruxelles | Apollon", "Salles de bain, cuisines, plafonnage, humidité, façades : nos chantiers récents à Bruxelles et en Brabant, en photos avant/après."],
    nl: ["Realisaties: onze werven in Brussel | Apollon", "Badkamers, keukens, pleisterwerk, vocht, gevels: onze recente werven in Brussel en Brabant, in foto's vóór/na."],
    en: ["Projects: our renovations in Brussels | Apollon", "Bathrooms, kitchens, plastering, damp, façades: our recent projects in Brussels and Brabant, in before/after photos."]
  },
  contact: {
    fr: ["Contact & devis gratuit | Apollon Construction Bruxelles", "Devis gratuit sous 48 h : salle de bain, électricité RGIE, rénovation, façade, toiture à Bruxelles et en Brabant. Réponse sous 24 h."],
    nl: ["Contact & gratis offerte | Apollon Construction Brussel", "Gratis offerte binnen 48 u: badkamer, elektriciteit AREI, renovatie, gevel, dak in Brussel en Brabant. Antwoord binnen 24 u."],
    en: ["Contact & free quote | Apollon Construction Brussels", "Free quote within 48 h: bathroom, RGIE electrics, renovation, façade, roofing in Brussels and Brabant. Reply within 24 h."]
  },
  primes: {
    fr: ["Primes rénovation & TVA 6 % en Belgique | Apollon", "TVA à 6 %, primes régionales isolation et toiture à Bruxelles, en Wallonie et en Flandre. On vérifie vos droits et on monte le dossier avec vous."],
    nl: ["Renovatiepremies & 6 % btw in België | Apollon", "6 % btw, regionale premies voor isolatie en dak in Brussel, Wallonië en Vlaanderen. Wij checken uw rechten en stellen het dossier samen op."],
    en: ["Renovation grants & 6% VAT in Belgium | Apollon", "6% VAT, regional insulation and roofing grants in Brussels, Wallonia and Flanders. We check your entitlement and build the application with you."]
  }
};
