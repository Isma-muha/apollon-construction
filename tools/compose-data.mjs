// Compose lib/site-data.js from the old site's extracted content (tools/_extract_*.json)
// + hand-written content for the pages the old site did not have.
// Run: node tools/compose-data.mjs
import { SEO as SEO_OVERRIDE } from "./_seo_override.mjs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const L = JSON.parse(fs.readFileSync(path.join(__dirname, "_extract_landings.json"), "utf8"));
const O = JSON.parse(fs.readFileSync(path.join(__dirname, "_extract_other.json"), "utf8"));
const LANGS = ["fr", "nl", "en"];
const tri = (fr, nl, en) => ({ fr, nl, en });
const per = (fn) => Object.fromEntries(LANGS.map((l) => [l, fn(l)]));

const IMG = (n) => `/images/${n}.jpg`;
const UP = (n) => `/uploads/${n}.jpg`;

// ---------------------------------------------------------------- global texts
const T = per((l) => {
  const c = O["common_" + l];
  const F = l === "fr", N = l === "nl";
  return {
    nav: {
      home: F ? "Accueil" : "Home",
      services: c.nav.services,
      projects: F ? "Réalisations" : N ? "Realisaties" : "Projects",
      primes: F ? "Primes & TVA" : N ? "Premies & btw" : "Grants & VAT",
      contact: "Contact",
      cta: F ? "Devis gratuit" : N ? "Gratis offerte" : "Free quote",
      allServices: F ? "Tous les services →" : N ? "Alle diensten →" : "All services →",
      menuNote: F ? "Un projet qui mêle plusieurs métiers ? C'est notre spécialité." : N ? "Een project met meerdere vakgebieden? Dat is onze specialiteit." : "A project that combines several trades? That's our specialty.",
      phone: "0499 89 60 86"
    },
    stats: F
      ? [{ n: "24h", u: "", l: "réponse, dans votre langue" }, { n: "48h", u: "", l: "devis détaillé, poste par poste" }, { n: "0€", u: "", l: "visite et déplacement" }, { n: "6", u: " %", l: "de TVA si logement de plus de 10 ans" }]
      : N
      ? [{ n: "24u", u: "", l: "antwoord, in uw taal" }, { n: "48u", u: "", l: "gedetailleerde offerte, post per post" }, { n: "0€", u: "", l: "plaatsbezoek en verplaatsing" }, { n: "6", u: " %", l: "btw voor woningen ouder dan 10 jaar" }]
      : [{ n: "24h", u: "", l: "reply, in your language" }, { n: "48h", u: "", l: "itemised quote, line by line" }, { n: "0€", u: "", l: "site visit and travel" }, { n: "6", u: "%", l: "VAT on homes older than 10 years" }],
    trust: [{ label: "★★★★★ 5.0 Google" }, { label: "TrustUp Pro" }, { label: "Batibouw+" }, { label: F ? "RGIE · RC Pro" : N ? "AREI · BA verzekerd" : "RGIE · Liability insured" }],
    stepsTitle: F ? "Du premier appel à la réception des travaux." : N ? "Van het eerste telefoontje tot de oplevering." : "From the first call to handover.",
    steps: F
      ? [
          { n: "1", t: "Visite gratuite", d: "On se déplace chez vous pour évaluer le chantier, prendre les mesures et comprendre vos besoins." },
          { n: "2", t: "Devis détaillé sous 48h", d: "Un devis clair, poste par poste, sans frais cachés. Vous savez exactement ce que vous payez." },
          { n: "3", t: "Exécution soignée", d: "Notre équipe propre réalise les travaux. Un interlocuteur unique vous tient informé à chaque étape." },
          { n: "4", t: "Réception & garantie", d: "Inspection finale ensemble. Chantier nettoyé, garantie décennale, service après-vente réactif." }
        ]
      : N
      ? [
          { n: "1", t: "Gratis plaatsbezoek", d: "We komen ter plaatse om de werf te evalueren, de maten te nemen en uw behoeften te begrijpen." },
          { n: "2", t: "Gedetailleerde offerte binnen 48u", d: "Een duidelijke offerte, post per post, zonder verborgen kosten. U weet precies wat u betaalt." },
          { n: "3", t: "Verzorgde uitvoering", d: "Ons eigen team voert de werken uit. Eén aanspreekpunt houdt u op de hoogte bij elke stap." },
          { n: "4", t: "Oplevering & garantie", d: "Gezamenlijke eindkeuring. Werf opgeruimd, tienjarige garantie, reactieve dienst na verkoop." }
        ]
      : [
          { n: "1", t: "Free site visit", d: "We visit your site to assess the works, take measurements and understand your needs." },
          { n: "2", t: "Detailed quote within 48h", d: "A clear quote, line by line, no hidden costs. You know exactly what you pay." },
          { n: "3", t: "Quality execution", d: "Our own team carries out the works. One contact keeps you informed at every step." },
          { n: "4", t: "Handover & guarantee", d: "Final inspection together. Site cleaned, ten-year guarantee, responsive after-sales service." }
        ],
    cta: {
      title: F ? "Parlons." : N ? "Laten we praten." : "Let's talk.",
      sub: F ? "Réponse sous 24h, visite gratuite, devis détaillé sous 48h. Quelques photos suffisent pour commencer." : N ? "Antwoord binnen 24u, gratis plaatsbezoek, gedetailleerde offerte binnen 48u. Enkele foto's volstaan om te beginnen." : "Reply within 24h, free site visit, detailed quote within 48h. A few photos are enough to get started."
    },
    footer: {
      rights: c.footer.copy,
      vat: c.footer.vat,
      address: "Oudesmidsestraat 20, 1700 Dilbeek",
      hours: c.contact.hours_value,
      zone: c.contact.zone_value,
      legal: c.footer.legal,
      rgpd: c.footer.rgpd
    },
    home: {
      seoTitle: SEO_OVERRIDE.home[l][0],
      seoDesc: SEO_OVERRIDE.home[l][1],
      kicker: F ? "Rénovation intérieure — Bruxelles & Brabant" : N ? "Binnenrenovatie — Brussel & Brabant" : "Interior renovation — Brussels & Brabant",
      lead: F ? "Salle de bain, électricité, plafonnage, peinture, sols, façade, toiture : une seule équipe, un devis clair poste par poste, un chantier propre." : N ? "Badkamer, elektriciteit, pleisterwerk, schilderwerk, vloeren, gevel, dak: één team, een duidelijke offerte post per post, een propere werf." : "Bathroom, electrics, plastering, painting, flooring, façade, roofing: one team, a clear itemised quote, a clean site.",
      h1a: F ? "Rénover" : N ? "Renoveren" : "Renovate",
      h1b: F ? "sans compromis." : N ? "zonder compromis." : "without compromise.",
      m1: F ? "Rénovation intérieure, salle de bain, électricité, façade. Devis flous, retards, chantiers sales : on a vu ce qui ne va pas dans le secteur, et on fait " : N ? "Binnenrenovatie, badkamer, elektriciteit, gevel. Vage offertes, vertragingen, vuile werven: we zagen wat er misloopt in de sector, en wij doen " : "Interior renovation, bathrooms, electrics, façades. Vague quotes, delays, messy sites: we've seen what goes wrong in this industry, and we do ",
      m2: F ? "l'inverse." : N ? "het omgekeerde." : "the opposite.",
      servicesIntro: F ? "Huit métiers, une seule équipe. Pas de sous-traitance cachée, pas de renvoi de responsabilité : la même main du gros œuvre aux finitions, dans les 19 communes de Bruxelles et en Brabant." : N ? "Acht vakgebieden, één team. Geen verborgen onderaanneming, geen doorgeschoven verantwoordelijkheid: dezelfde hand van ruwbouw tot afwerking, in de 19 Brusselse gemeenten en in Brabant." : "Eight trades, one team. No hidden subcontracting, no passing the buck: the same hands from structural work to finishes, across the 19 municipalities of Brussels and Brabant.",
      worksTitle: F ? "Le travail parle." : N ? "Het werk spreekt." : "The work speaks.",
      worksLink: F ? "Toutes nos réalisations →" : N ? "Al onze realisaties →" : "All our projects →",
      quote: F ? "« On ne promet pas d'être les plus gros. On promet d'être les plus sérieux. »" : N ? "« We beloven niet de grootste te zijn. We beloven de meest serieuze te zijn. »" : "“We don't promise to be the biggest. We promise to be the most serious.”",
      aboutKicker: F ? "Pourquoi nous" : N ? "Waarom wij" : "Why us",
      aboutTitle: F ? "Une jeune entreprise, des professionnels expérimentés." : N ? "Een jong bedrijf, ervaren professionals." : "A young company, experienced professionals.",
      aboutText: F ? "Apollon Construction est une entreprise récente, fondée par des professionnels avec plus de 5 ans d'expérience dans la rénovation à Bruxelles. On a créé Apollon pour faire les choses différemment : des chantiers propres, un suivi transparent et des prix justes. Chaque chantier compte. On traite le vôtre comme si c'était le nôtre — parce que notre réputation en dépend." : N ? "Apollon Construction is een recent bedrijf, opgericht door professionals met meer dan 5 jaar ervaring in renovatie in Brussel. We creëerden Apollon om dingen anders te doen: propere werven, transparante opvolging en eerlijke prijzen. Elke werf telt. We behandelen de uwe alsof het de onze was — want onze reputatie hangt ervan af." : "Apollon Construction is a recent company, founded by professionals with over 5 years of renovation experience in Brussels. We created Apollon to do things differently: clean sites, transparent follow-up and fair prices. Every project counts. We treat yours as if it were ours — because our reputation depends on it.",
      aboutPoints: F
        ? [["Équipe bilingue FR/NL", "Deux interlocuteurs dédiés pour vous servir dans votre langue."], ["Réactivité", "Réponse sous 24h, devis sous 48h."], ["Transparence totale", "Devis détaillé poste par poste. Pas de surprise à la facture finale."], ["Assurance & conformité", "RC professionnelle, installations conformes au RGIE, accès à la profession en règle."]]
        : N
        ? [["Tweetalig team FR/NL", "Twee vaste contactpersonen om u in uw taal te bedienen."], ["Reactiviteit", "Antwoord binnen 24u, offerte binnen 48u."], ["Totale transparantie", "Gedetailleerde offerte post per post. Geen verrassingen op de eindfactuur."], ["Verzekering & conformiteit", "BA beroepsaansprakelijkheid, installaties conform het AREI, toegang tot het beroep in orde."]]
        : [["Bilingual team FR/NL", "Two dedicated contacts to serve you in your language."], ["Reactivity", "Reply within 24h, quote within 48h."], ["Total transparency", "Detailed quote line by line. No surprises on the final invoice."], ["Insurance & compliance", "Professional liability, RGIE-compliant installations, trade access in order."]],
      archKicker: F ? "Architectes, agents & promoteurs" : N ? "Architecten, makelaars & promotoren" : "Architects, agents & developers",
      archTitle: F ? "Votre sous-traitant de confiance à Bruxelles." : N ? "Uw betrouwbare onderaannemer in Brussel." : "Your trusted subcontractor in Brussels.",
      archText: F ? "Respect scrupuleux des plans, reporting photo régulier, remise en état rapide avant vente ou location, gestion multi-lots et tarifs partenaires sur volume. Un interlocuteur dédié, des délais contractuels tenus." : N ? "Nauwgezette naleving van de plannen, regelmatige fotorapportering, snelle opknapbeurt vóór verkoop of verhuur, multi-lot beheer en partnertarieven op volume. Een vast aanspreekpunt, contractuele termijnen die worden nageleefd." : "Plans followed to the letter, regular photo reporting, fast refurbishment before sale or letting, multi-unit management and partner rates on volume. A dedicated contact, contractual deadlines kept.",
      archLink: F ? "Établir une collaboration →" : N ? "Een samenwerking starten →" : "Start a collaboration →",
      tvaKicker: F ? "TVA réduite" : N ? "Verlaagde btw" : "Reduced VAT",
      tvaBig: "6",
      tvaText: F ? "de TVA sur vos travaux si votre logement a plus de 10 ans. Le taux réduit est appliqué directement sur la facture, et on vérifie les primes régionales avec vous." : N ? "btw op uw werken als uw woning ouder is dan 10 jaar. Het verlaagde tarief wordt rechtstreeks op de factuur toegepast, en we controleren de regionale premies samen met u." : "VAT on your works if your home is more than 10 years old. The reduced rate is applied directly on the invoice, and we check the regional grants with you.",
      tvaLink: F ? "Primes & TVA →" : N ? "Premies & btw →" : "Grants & VAT →",
      reviewsKicker: F ? "Avis Google" : N ? "Google beoordelingen" : "Google reviews",
      reviewsTitle: F ? "Ce que disent nos clients." : N ? "Wat onze klanten zeggen." : "What our clients say.",
      reviewLink: F ? "5.0 sur Google · voir tous les avis →" : N ? "5.0 op Google · alle beoordelingen →" : "5.0 on Google · all reviews →",
      zonesLabel: F ? "Nous intervenons à :" : N ? "Wij werken in:" : "We work in:",
      partnersLabel: F ? "Partenaires & garanties" : N ? "Partners & garanties" : "Partners & guarantees"
    },
    sp: {
      kicker: c.nav.services,
      title: F ? "Huit métiers, une seule équipe." : N ? "Acht vakgebieden, één team." : "Eight trades, one team.",
      seoTitle: F ? "Nos services de rénovation à Bruxelles — Apollon Construction" : N ? "Onze renovatiediensten in Brussel — Apollon Construction" : "Our renovation services in Brussels — Apollon Construction",
      intro: F ? "De la salle de bain à la toiture, un seul interlocuteur. Particuliers, architectes, agents immobiliers — nous adaptons notre approche. Choisissez un service pour découvrir ce qu'il comprend." : N ? "Van de badkamer tot het dak, één aanspreekpunt. Particulieren, architecten, vastgoedmakelaars — wij passen onze aanpak aan. Kies een dienst om te ontdekken wat ze omvat." : "From the bathroom to the roof, one point of contact. Homeowners, architects, estate agents — we adapt our approach. Choose a service to see what it includes.",
      detailKicker: F ? "Service" : N ? "Dienst" : "Service",
      includesTitle: F ? "Ce que comprend ce service" : N ? "Wat deze dienst omvat" : "What this service includes",
      galleryTitle: F ? "Réalisations" : N ? "Realisaties" : "Projects",
      otherTitle: F ? "Autres services" : N ? "Andere diensten" : "Other services",
      faqTitle: F ? "Questions fréquentes" : N ? "Veelgestelde vragen" : "Frequently asked questions",
      caseKicker: F ? "Chantier récent" : N ? "Recente werf" : "Recent project",
      primesNote: F ? "Ce service peut être éligible aux primes régionales (Wallonie, Flandre). On vérifie votre situation lors de la visite gratuite." : N ? "Deze dienst kan in aanmerking komen voor regionale premies (Wallonië, Vlaanderen). We controleren uw situatie tijdens het gratis plaatsbezoek." : "This service may be eligible for regional grants (Wallonia, Flanders). We check your situation during the free site visit.",
      primesLink: F ? "Voir primes & TVA →" : N ? "Premies & btw bekijken →" : "See grants & VAT →",
      quoteBtn: F ? "Demander un devis pour ce service" : N ? "Offerte aanvragen voor deze dienst" : "Request a quote for this service",
      discover: F ? "Découvrir →" : N ? "Ontdekken →" : "Discover →",
      zonesLabel: F ? "Nous intervenons à :" : N ? "Wij werken in:" : "We work in:"
    },
    projects: {
      kicker: F ? "Réalisations" : N ? "Realisaties" : "Projects",
      title: F ? "Le travail parle." : N ? "Het werk spreekt." : "The work speaks.",
      seoTitle: F ? "Réalisations — Rénovations à Bruxelles et en Brabant | Apollon Construction" : N ? "Realisaties — Renovaties in Brussel en Brabant | Apollon Construction" : "Projects — Renovations in Brussels and Brabant | Apollon Construction",
      seoDesc: F ? "Salles de bain, cuisines, plafonnage, traitement de l'humidité, façades : nos chantiers récents à Bruxelles et en Brabant, avec photos avant/après." : N ? "Badkamers, keukens, pleisterwerk, vochtbehandeling, gevels: onze recente werven in Brussel en Brabant, met foto's vóór/na." : "Bathrooms, kitchens, plastering, damp treatment, façades: our recent projects in Brussels and Brabant, with before/after photos.",
      intro: F ? "Une sélection de chantiers récents à Bruxelles et dans le Brabant. Uniquement nos propres chantiers, photographiés par notre équipe. Filtrez par métier." : N ? "Een selectie van recente werven in Brussel en Brabant. Alleen onze eigen werven, gefotografeerd door ons team. Filter per vakgebied." : "A selection of recent projects in Brussels and Brabant. Only our own sites, photographed by our team. Filter by trade.",
      all: F ? "Tous" : N ? "Alle" : "All"
    },
    lp: {
      kicker: F ? "Bruxelles & Brabant — réponse sous 24 h" : N ? "Brussel & Brabant — antwoord binnen 24 u" : "Brussels & Brabant — reply within 24 h",
      formTitle: F ? "Recevez votre devis gratuit" : N ? "Ontvang uw gratis offerte" : "Get your free quote",
      formSub: F ? "Rappel sous 24 h ouvrées. Sans engagement." : N ? "We bellen u binnen 24 werkuren terug. Vrijblijvend." : "Call back within 24 working hours. No obligation.",
      call: F ? "Appeler" : N ? "Bellen" : "Call",
      quote: F ? "Devis gratuit" : N ? "Gratis offerte" : "Free quote",
      orCall: F ? "ou appelez directement" : N ? "of bel rechtstreeks" : "or call us directly",
      whyTitle: F ? "Pourquoi les clients nous choisissent." : N ? "Waarom klanten voor ons kiezen." : "Why clients choose us.",
      why: F ? [
        { t: "Un devis clair, poste par poste", d: "Vous savez exactement ce que vous payez. Pas de surprise à la facture finale." },
        { t: "Une seule équipe, du début à la fin", d: "Plomberie, électricité, carrelage, peinture : nos propres ouvriers, pas de sous-traitance en cascade." },
        { t: "Chantier propre, délais tenus", d: "Bâches, évacuation quotidienne des gravats, planning fixé avant de commencer." }
      ] : N ? [
        { t: "Een duidelijke offerte, post per post", d: "U weet precies wat u betaalt. Geen verrassingen op de eindfactuur." },
        { t: "Eén team, van begin tot einde", d: "Sanitair, elektriciteit, tegels, schilderwerk: onze eigen vakmannen, geen onderaanneming in cascade." },
        { t: "Propere werf, deadlines gehaald", d: "Afdekking, dagelijkse afvoer van puin, planning vastgelegd voor de start." }
      ] : [
        { t: "A clear itemised quote", d: "You know exactly what you pay for. No surprises on the final invoice." },
        { t: "One team from start to finish", d: "Plumbing, electrics, tiling, painting: our own workers, no chains of subcontractors." },
        { t: "Clean site, deadlines kept", d: "Protective sheeting, daily rubble removal, schedule fixed before we start." }
      ],
      photosTitle: F ? "Nos chantiers récents" : N ? "Onze recente werven" : "Our recent projects",
      faqTitle: F ? "Questions fréquentes" : N ? "Veelgestelde vragen" : "Frequently asked questions",
      finalTitle: F ? "Parlons de votre projet." : N ? "Laten we over uw project praten." : "Let's talk about your project.",
      finalSub: F ? "Décrivez vos travaux en deux lignes, on vous rappelle sous 24 h avec les bonnes questions." : N ? "Beschrijf uw werken in twee regels, we bellen u binnen 24 u terug met de juiste vragen." : "Describe your works in two lines, we call you back within 24 h with the right questions.",
      backToForm: F ? "Demander un devis" : N ? "Offerte aanvragen" : "Request a quote"
    },
    consent: {
      text: F ? "Nous utilisons des cookies de mesure (Google Ads) pour savoir quelles annonces vous amènent ici. Aucune revente de données." : N ? "We gebruiken meetcookies (Google Ads) om te weten welke advertenties u hierheen brengen. Geen doorverkoop van gegevens." : "We use measurement cookies (Google Ads) to know which ads bring you here. No data resale.",
      accept: F ? "Accepter" : N ? "Aanvaarden" : "Accept",
      refuse: F ? "Refuser" : N ? "Weigeren" : "Refuse"
    },
    contact: {
      kicker: "Contact",
      title: F ? "Parlons." : N ? "Laten we praten." : "Let's talk.",
      seoTitle: c.meta.contact_title,
      seoDesc: c.meta.contact_desc,
      intro: c.contact.desc,
      form: {
        title: c.contact.form_h3,
        sub: c.contact.form_sub,
        name: c.contact.field_name,
        email: F ? "Email" : N ? "E-mail" : "Email",
        phone: c.contact.field_phone,
        profile: c.contact.field_profile,
        profiles: [c.contact.opt_priv, c.contact.opt_arch, c.contact.opt_agent, c.contact.opt_dev, c.contact.opt_eng, c.contact.opt_other],
        service: c.contact.field_works,
        message: c.contact.field_message,
        messagePh: c.contact.ph_message,
        send: c.contact.btn_send.replace(" →", ""),
        rgpd: c.contact.rgpd,
        photos: c.contact.photos_hint,
        sentTitle: F ? "Merci, c'est envoyé." : N ? "Bedankt, verzonden." : "Thank you, it's sent.",
        sentText: c.contact.success,
        sending: F ? "Envoi en cours…" : N ? "Bezig met verzenden…" : "Sending…",
        error: F ? "L'envoi a échoué. Réessayez ou appelez-nous directement au 0499 89 60 86." : N ? "Verzenden mislukt. Probeer opnieuw of bel ons rechtstreeks op 0499 89 60 86." : "Sending failed. Try again or call us directly on 0499 89 60 86.",
        thanksSteps: F ? ["Nous lisons votre demande et vous rappelons sous 24 h ouvrées.", "Visite sur place gratuite si nécessaire, puis devis détaillé poste par poste sous 48 h.", "Vous avez des photos ? Envoyez-les à info@apollonconstruction.be, le devis n'en sera que plus précis."] : N ? ["We lezen uw aanvraag en bellen u binnen 24 werkuren terug.", "Gratis plaatsbezoek indien nodig, daarna een gedetailleerde offerte post per post binnen 48 u.", "Heeft u foto's? Stuur ze naar info@apollonconstruction.be, dan wordt de offerte nog preciezer."] : ["We read your request and call you back within 24 working hours.", "Free site visit if needed, then a detailed itemised quote within 48 h.", "Got photos? Send them to info@apollonconstruction.be and the quote will be even more accurate."],
        thanksBack: F ? "Retour à l'accueil" : N ? "Terug naar home" : "Back to home"
      },
      labels: { phone: c.contact.phone_label, email: F ? "Email" : N ? "E-mail" : "Email", address: F ? "Siège" : N ? "Zetel" : "Office", zone: c.contact.zone_label, hours: c.contact.hours_label }
    }
  };
});

// ---------------------------------------------------------------- zones
const ZONES = ["Bruxelles-Ville", "Ixelles", "Uccle", "Etterbeek", "Auderghem", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre", "Forest", "Molenbeek", "Saint-Gilles", "Anderlecht", "Schaerbeek", "Laeken", "Jette", "Dilbeek", "Zaventem", "Brabant wallon", "Brabant flamand"];

// ---------------------------------------------------------------- reviews
const REVIEWS = [
  { name: "Mahmood Hussein", badge: "Local Guide", when: tri("il y a 4 mois", "4 maanden geleden", "4 months ago"), text: tri("Excellent service de la part d'Apollon Construction. Travail soigné, équipe ponctuelle et très professionnelle du début à la fin. Respect des délais et résultat impeccable. Je recommande vivement !", "Uitstekende service van Apollon Construction. Verzorgd werk, punctueel en zeer professioneel van begin tot einde. Naleving van de termijnen en onberispelijk resultaat. Ik beveel sterk aan!", "Excellent service from Apollon Construction. Careful work, punctual and very professional team. Deadlines respected and impeccable result. Highly recommend!") },
  { name: "E.", badge: "Local Guide", when: tri("il y a un an", "een jaar geleden", "1 year ago"), text: tri("Top service ! Rapide et efficace. Panne électrique résolue en moins de 24h. Je recommande fortement !", "Top service! Snel en efficiënt. Elektrisch probleem opgelost binnen 24u. Ik beveel sterk aan!", "Top service! Fast and efficient. Electrical issue solved in under 24h. Highly recommend!") },
  { name: "Leona Muhaxheri", badge: "", when: tri("il y a 5 mois", "5 maanden geleden", "5 months ago"), text: tri("Très satisfaite de leurs travaux et de leur professionnalisme. Merci pour votre travail.", "Zeer tevreden over hun werk en hun professionalisme. Dank u voor uw werk.", "Very satisfied with their work and professionalism. Thank you.") }
];

// ---------------------------------------------------------------- services
function fromLanding(key, extra) {
  return per((l) => {
    const c = L[key][l];
    return {
      name: c.kicker,
      seoTitle: c.title,
      seoDesc: c.desc,
      h1: c.h1,
      intro: c.intro,
      badges: c.badges,
      includes: c.points,
      includesTitle: c.pointsH2,
      body: c.body,
      process: c.process,
      faq: c.faq,
      caseStudy: c.caseStudy || null,
      formOptions: c.formOptions,
      ctaTitle: c.ctaH2,
      ctaText: c.ctaP,
      ...(extra ? extra(l, c) : {})
    };
  });
}

const S_RENO = fromLanding("renovation-interieure", (l) => ({
  tag: l === "fr" ? "Plafonnage, humidité, peinture, sols" : l === "nl" ? "Pleisterwerk, vocht, schilderwerk, vloeren" : "Plastering, damp, painting, flooring"
}));
const S_SDB = fromLanding("renovation-salle-de-bain", (l) => ({
  name: l === "fr" ? "Salle de bain" : l === "nl" ? "Badkamer" : "Bathroom",
  tag: l === "fr" ? "Douche à l'italienne, carrelage, plomberie" : l === "nl" ? "Inloopdouche, tegels, sanitair" : "Walk-in shower, tiling, plumbing"
}));
const S_ELEC = fromLanding("electricite-rgie", (l) => ({
  name: l === "fr" ? "Électricité & RGIE" : l === "nl" ? "Elektriciteit & AREI" : "Electrics & RGIE",
  tag: l === "fr" ? "Mise en conformité, tableau, contrôle" : l === "nl" ? "Conformering, zekeringkast, keuring" : "Compliance, panel, inspection"
}));

const S_CUISINE = {
  fr: {
    name: "Cuisine", tag: "Le cœur de la maison, repensé",
    seoTitle: "Rénovation de cuisine à Bruxelles — Cuisine équipée sur mesure | Apollon Construction",
    seoDesc: "Rénovation de cuisine à Bruxelles et en Brabant : démolition, électricité et plomberie, faux plafond et spots, pose du mobilier et des plans de travail, crédence, sol, peinture. Une seule équipe, devis gratuit sous 48h, TVA 6 %.",
    h1: "Rénovation de cuisine à Bruxelles",
    intro: "Ouverture sur le séjour, îlot central, nouveau plafond avec éclairage intégré, rangements optimisés : nous réalisons votre cuisine de A à Z, techniques comprises. Un seul interlocuteur du plan à la pose, un chantier protégé du premier au dernier jour.",
    badges: ["Devis gratuit sous 48h", "TVA 6 % si logement de plus de 10 ans", "Électricité conforme RGIE", "Équipe propre, pas de sous-traitance"],
    includesTitle: "Ce que comprend notre rénovation de cuisine",
    includes: ["Plans et implantation sur mesure, conseil sur les matériaux", "Démolition, évacuation, ouverture de murs (avec étude si porteur)", "Électricité conforme RGIE : circuits dédiés four, plaques, lave-vaisselle", "Plomberie, évacuation, raccordement gaz", "Faux plafond, spots encastrés, corniches, hotte encastrée", "Pose du mobilier et des plans de travail", "Crédence, carrelage ou parquet, peinture des murs", "Nettoyage de fin de chantier et réception ensemble"],
    body: [
      { h2: "La cuisine, c'est d'abord de la technique", p: ["Ce qu'on voit — les façades, le plan de travail, la crédence — représente la moitié du travail. L'autre moitié est derrière : les circuits électriques dédiés, les arrivées et évacuations d'eau au bon endroit, l'extraction de la hotte, un plafond qui intègre proprement l'éclairage. C'est ce qui fait qu'une cuisine se vit bien pendant vingt ans, et c'est là que nous passons le plus de temps.", "Nous coordonnons électricien, plombier, plafonneur et menuisier dans la même équipe : un seul planning, une seule facture, personne qui se renvoie la responsabilité."] },
      { h2: "Vous avez déjà commandé votre cuisine ? Très bien.", p: ["Beaucoup de clients choisissent leurs meubles chez un cuisiniste et nous confient la préparation de la pièce et la pose : démolition, techniques, plafond, sol, peinture, puis montage. Nous travaillons à partir de leur plan et vérifions les raccordements avant la livraison, pour que tout tombe juste le jour du montage."] }
    ],
    process: [
      { title: "Visite gratuite", desc: "On mesure la pièce, on vérifie les arrivées d'eau, l'électricité, l'extraction, et on écoute ce que vous voulez." },
      { title: "Devis sous 48h", desc: "Poste par poste : démolition, électricité, plomberie, plafond, pose, finitions. Rien de caché." },
      { title: "Chantier", desc: "Une seule équipe. Mobilier et plans de travail protégés, gravats évacués, coupures d'eau et d'électricité planifiées." },
      { title: "Réception", desc: "Tout est testé ensemble : électricité, eau, hotte, éclairage. Garantie sur les travaux." }
    ],
    caseStudy: {
      kicker: "Chantier récent", h2: "Cuisine — plafond, éclairage et peinture",
      p: "Nouveau plafond avec caisson lumineux intégré, spots encastrés, corniches, climatisation intégrée et mise en peinture complète des murs. Mobilier et plans de travail protégés du premier au dernier jour.",
      images: [
        { src: UP("avant3"), alt: "Cuisine avant travaux — plafond à refaire, murs à peindre", caption: "Avant — plafond et murs" },
        { src: UP("apres1"), alt: "Cuisine après travaux — caisson lumineux et spots encastrés", caption: "Après — plafond, spots, peinture" },
        { src: UP("avant4"), alt: "Chantier en cours — protections et préparation du plafond", caption: "Pendant — protections en place" },
        { src: UP("apres3"), alt: "Cuisine terminée, vue depuis la porte", caption: "Après — vue d'ensemble" }
      ]
    },
    faq: [
      { q: "Combien coûte une rénovation de cuisine à Bruxelles ?", a: "Tout dépend de ce qui change : une pose et des finitions coûtent bien moins qu'une ouverture de mur avec déplacement des techniques. Nous ne donnons pas de prix au m² : nous venons gratuitement, puis remettons un devis poste par poste sous 48h." },
      { q: "Combien de temps dure le chantier ?", a: "Une cuisine avec techniques à déplacer prend en général deux à quatre semaines, montage compris. Le planning est fixé avant le début et intègre les délais de livraison de vos meubles." },
      { q: "Pouvez-vous ouvrir le mur entre la cuisine et le séjour ?", a: "Oui. Si le mur est porteur, une étude de stabilité est nécessaire et nous la coordonnons ; le devis le précise avant que vous décidiez." },
      { q: "Faites-vous uniquement la pose de meubles achetés ailleurs ?", a: "Oui, à condition de préparer la pièce nous-mêmes (techniques, plafond, sol) pour garantir le résultat. Nous travaillons à partir du plan de votre cuisiniste." },
      { q: "Puis-je bénéficier de la TVA à 6 % ?", a: "Oui si le logement a plus de 10 ans et sert principalement d'habitation privée. Le taux réduit s'applique aux travaux ; le mobilier fourni séparément reste à 21 %." }
    ],
    formOptions: ["Cuisine complète", "Préparation + pose de cuisine", "Ouverture de mur", "Plafond, éclairage, peinture", "Autre"],
    ctaTitle: "Parlons de votre cuisine", ctaText: "Réponse sous 24h, devis gratuit sous 48h. Envoyez-nous le plan ou quelques photos de la pièce."
  },
  nl: {
    name: "Keuken", tag: "Het hart van het huis, herdacht",
    seoTitle: "Keukenrenovatie in Brussel — Keuken op maat | Apollon Construction",
    seoDesc: "Keukenrenovatie in Brussel en Brabant: afbraak, elektriciteit en sanitair, verlaagd plafond en spots, plaatsing van meubels en werkbladen, spatwand, vloer, schilderwerk. Eén team, gratis offerte binnen 48u, 6 % btw.",
    h1: "Keukenrenovatie in Brussel",
    intro: "Open naar de leefruimte, centraal eiland, nieuw plafond met geïntegreerde verlichting, geoptimaliseerde opbergruimte: wij realiseren uw keuken van A tot Z, technieken inbegrepen. Eén aanspreekpunt van plan tot plaatsing, een beschermde werf van de eerste tot de laatste dag.",
    badges: ["Gratis offerte binnen 48u", "6 % btw voor woningen ouder dan 10 jaar", "Elektriciteit conform AREI", "Eigen team, geen onderaanneming"],
    includesTitle: "Wat onze keukenrenovatie omvat",
    includes: ["Plannen en indeling op maat, materiaaladvies", "Afbraak, afvoer, openen van muren (met studie indien dragend)", "Elektriciteit conform AREI: aparte kringen oven, kookplaat, vaatwasser", "Sanitair, afvoer, gasaansluiting", "Verlaagd plafond, inbouwspots, sierlijsten, inbouwdampkap", "Plaatsing van meubels en werkbladen", "Spatwand, tegels of parket, schilderwerk", "Eindschoonmaak en gezamenlijke oplevering"],
    body: [
      { h2: "Een keuken is eerst en vooral techniek", p: ["Wat u ziet — de fronten, het werkblad, de spatwand — is de helft van het werk. De andere helft zit erachter: aparte elektrische kringen, water op de juiste plaats, de afzuiging van de dampkap, een plafond dat de verlichting netjes integreert. Dat maakt dat een keuken twintig jaar goed meegaat, en daar besteden we de meeste tijd aan.", "Wij coördineren elektricien, loodgieter, stukadoor en schrijnwerker in hetzelfde team: één planning, één factuur, niemand die de verantwoordelijkheid doorschuift."] },
      { h2: "Uw keuken al besteld? Prima.", p: ["Veel klanten kiezen hun meubels bij een keukenzaak en vertrouwen ons de voorbereiding van de ruimte en de plaatsing toe: afbraak, technieken, plafond, vloer, schilderwerk, daarna montage. We werken op basis van hun plan en controleren de aansluitingen vóór de levering, zodat alles klopt op de dag van de montage."] }
    ],
    process: [
      { title: "Gratis bezoek", desc: "We meten de ruimte op, controleren water, elektriciteit en afzuiging, en luisteren naar wat u wilt." },
      { title: "Offerte binnen 48u", desc: "Post per post: afbraak, elektriciteit, sanitair, plafond, plaatsing, afwerking. Niets verborgen." },
      { title: "Werf", desc: "Eén team. Meubels en werkbladen beschermd, puin afgevoerd, onderbrekingen van water en stroom gepland." },
      { title: "Oplevering", desc: "Alles wordt samen getest: elektriciteit, water, dampkap, verlichting. Garantie op de werken." }
    ],
    caseStudy: {
      kicker: "Recente werf", h2: "Keuken — plafond, verlichting en schilderwerk",
      p: "Nieuw plafond met geïntegreerde lichtkoof, inbouwspots, sierlijsten, ingebouwde airco en volledig schilderwerk van de muren. Meubels en werkbladen beschermd van de eerste tot de laatste dag.",
      images: [
        { src: UP("avant3"), alt: "Keuken vóór de werken — plafond te vernieuwen, muren te schilderen", caption: "Vóór — plafond en muren" },
        { src: UP("apres1"), alt: "Keuken na de werken — lichtkoof en inbouwspots", caption: "Na — plafond, spots, schilderwerk" },
        { src: UP("avant4"), alt: "Werf in uitvoering — beschermingen en voorbereiding van het plafond", caption: "Tijdens — beschermingen geplaatst" },
        { src: UP("apres3"), alt: "Afgewerkte keuken, zicht vanaf de deur", caption: "Na — overzicht" }
      ]
    },
    faq: [
      { q: "Wat kost een keukenrenovatie in Brussel?", a: "Dat hangt af van wat er verandert: plaatsing en afwerking kosten veel minder dan een muur openen en de technieken verplaatsen. We geven geen prijs per m²: we komen gratis langs en bezorgen binnen 48u een offerte post per post." },
      { q: "Hoe lang duren de werken?", a: "Een keuken met te verplaatsen technieken duurt doorgaans twee tot vier weken, montage inbegrepen. De planning wordt vóór de start vastgelegd en houdt rekening met de levertermijn van uw meubels." },
      { q: "Kunnen jullie de muur tussen keuken en leefruimte openen?", a: "Ja. Als de muur dragend is, is een stabiliteitsstudie nodig en coördineren wij die; de offerte vermeldt dit vóór u beslist." },
      { q: "Plaatsen jullie ook enkel meubels die elders gekocht zijn?", a: "Ja, op voorwaarde dat we de ruimte zelf voorbereiden (technieken, plafond, vloer) om het resultaat te garanderen. We werken op basis van het plan van uw keukenzaak." },
      { q: "Kom ik in aanmerking voor 6 % btw?", a: "Ja, als de woning ouder is dan 10 jaar en hoofdzakelijk als privéwoning dient. Het verlaagde tarief geldt voor de werken; apart geleverde meubels blijven aan 21 %." }
    ],
    formOptions: ["Volledige keuken", "Voorbereiding + plaatsing keuken", "Muur openen", "Plafond, verlichting, schilderwerk", "Andere"],
    ctaTitle: "Laten we het over uw keuken hebben", ctaText: "Antwoord binnen 24u, gratis offerte binnen 48u. Stuur ons het plan of enkele foto's van de ruimte."
  },
  en: {
    name: "Kitchen", tag: "The heart of the home, rethought",
    seoTitle: "Kitchen renovation in Brussels — Bespoke fitted kitchen | Apollon Construction",
    seoDesc: "Kitchen renovation in Brussels and Brabant: demolition, electrics and plumbing, false ceiling and spots, installation of units and worktops, splashback, flooring, painting. One team, free quote within 48h, 6% VAT.",
    h1: "Kitchen renovation in Brussels",
    intro: "Opened onto the living room, central island, new ceiling with integrated lighting, optimised storage: we build your kitchen from A to Z, technical works included. One contact from plan to installation, a site protected from the first day to the last.",
    badges: ["Free quote within 48h", "6% VAT on homes older than 10 years", "RGIE-compliant electrics", "Own team, no subcontracting"],
    includesTitle: "What our kitchen renovation includes",
    includes: ["Custom plans and layout, advice on materials", "Demolition, removal, opening of walls (with a study if load-bearing)", "RGIE-compliant electrics: dedicated circuits for oven, hob, dishwasher", "Plumbing, drainage, gas connection", "False ceiling, recessed spots, cornices, built-in hood", "Installation of units and worktops", "Splashback, tiles or parquet, wall painting", "End-of-site cleaning and joint handover"],
    body: [
      { h2: "A kitchen is technical work first", p: ["What you see — the fronts, the worktop, the splashback — is half the job. The other half is behind it: dedicated electrical circuits, water supply and drainage in the right place, hood extraction, a ceiling that integrates the lighting cleanly. That is what makes a kitchen pleasant to live in for twenty years, and where we spend the most time.", "We coordinate the electrician, plumber, plasterer and joiner within the same team: one schedule, one invoice, nobody passing the buck."] },
      { h2: "Already ordered your kitchen? Perfect.", p: ["Many clients choose their units from a kitchen retailer and entrust us with preparing the room and installing: demolition, technical works, ceiling, floor, painting, then assembly. We work from their plan and check the connections before delivery, so everything fits on installation day."] }
    ],
    process: [
      { title: "Free site visit", desc: "We measure the room, check water, electrics and extraction, and listen to what you want." },
      { title: "Quote within 48h", desc: "Itemised: demolition, electrics, plumbing, ceiling, installation, finishes. Nothing hidden." },
      { title: "Works", desc: "One team. Units and worktops protected, rubble removed, water and power cuts planned." },
      { title: "Handover", desc: "Everything is tested together: electrics, water, hood, lighting. Guarantee on the works." }
    ],
    caseStudy: {
      kicker: "Recent project", h2: "Kitchen — ceiling, lighting and painting",
      p: "New ceiling with integrated light box, recessed spots, cornices, built-in air conditioning and full repainting of the walls. Units and worktops protected from the first day to the last.",
      images: [
        { src: UP("avant3"), alt: "Kitchen before works — ceiling to redo, walls to paint", caption: "Before — ceiling and walls" },
        { src: UP("apres1"), alt: "Kitchen after works — light box and recessed spots", caption: "After — ceiling, spots, painting" },
        { src: UP("avant4"), alt: "Works in progress — protections and ceiling preparation", caption: "During — protections in place" },
        { src: UP("apres3"), alt: "Finished kitchen, view from the door", caption: "After — overview" }
      ]
    },
    faq: [
      { q: "How much does a kitchen renovation cost in Brussels?", a: "It depends on what changes: installation and finishes cost far less than opening a wall and moving the services. We don't quote per m²: we visit for free, then send an itemised quote within 48h." },
      { q: "How long do the works take?", a: "A kitchen with services to move usually takes two to four weeks, assembly included. The schedule is fixed before the start and includes your units' delivery time." },
      { q: "Can you open the wall between the kitchen and the living room?", a: "Yes. If the wall is load-bearing, a structural study is required and we coordinate it; the quote states this before you decide." },
      { q: "Do you only install units bought elsewhere?", a: "Yes, provided we prepare the room ourselves (services, ceiling, floor) to guarantee the result. We work from your retailer's plan." },
      { q: "Can I get the 6% VAT rate?", a: "Yes, if the home is more than 10 years old and mainly used as a private residence. The reduced rate applies to the works; units supplied separately stay at 21%." }
    ],
    formOptions: ["Complete kitchen", "Preparation + kitchen installation", "Wall opening", "Ceiling, lighting, painting", "Other"],
    ctaTitle: "Let's talk about your kitchen", ctaText: "Reply within 24h, free quote within 48h. Send us the plan or a few photos of the room."
  }
};

const S_COMPLETE = {
  fr: {
    name: "Rénovation complète", tag: "Clé en main, avant vente ou location",
    seoTitle: "Rénovation complète d'appartement ou de maison à Bruxelles — Clé en main | Apollon Construction",
    seoDesc: "Rénovation complète à Bruxelles et en Brabant : remise à neuf d'appartement, de maison ou de bureau, coordination de tous les corps de métier, un seul interlocuteur. Idéal avant vente ou mise en location. Devis gratuit sous 48h.",
    h1: "Rénovation complète et coordination de chantier à Bruxelles",
    intro: "Appartement à remettre à neuf avant une vente ou une location, maison à rénover de A à Z, bureau à transformer : nous pilotons l'ensemble du projet — démolition, techniques, plafonnage, sols, peinture, salle de bain, cuisine — avec une seule équipe et un seul numéro à appeler.",
    badges: ["Un seul interlocuteur", "Planning remis avant le démarrage", "Reporting photo régulier", "TVA 6 % si logement de plus de 10 ans"],
    includesTitle: "Ce que comprend une rénovation complète",
    includes: ["Démolition, évacuation et mise en conformité", "Électricité RGIE, plomberie et chauffage", "Plafonnage, faux plafonds, cloisons", "Sols : carrelage, parquet, vinyle, stratifié", "Salle de bain et cuisine, techniques comprises", "Peinture et finitions", "Planning détaillé, suivi hebdomadaire, reporting photo", "Réception ensemble, garantie décennale, service après-vente"],
    body: [
      { h2: "Un seul interlocuteur, un seul planning, une seule facture", p: ["Une rénovation complète mobilise cinq ou six métiers. Quand ils dépendent d'entreprises différentes, le chantier s'arrête chaque fois que l'un attend l'autre. Chez Apollon Construction, ces métiers font partie de la même équipe et sont coordonnés par une seule personne, qui vous fait un point régulier avec photos.", "Vous savez qui appeler, vous savez où en est le chantier, et le devis poste par poste vous dit exactement ce que vous payez."] },
      { h2: "Avant une vente ou une mise en location", p: ["Propriétaires bailleurs, agents immobiliers, promoteurs : nous remettons en état rapidement — peinture, sols, salle de bain, mise en conformité électrique — pour que le bien se loue ou se vende au meilleur prix. Gestion multi-lots et tarifs partenaires pour les collaborations régulières."] }
    ],
    process: null,
    caseStudy: null,
    faq: [
      { q: "Combien de temps dure une rénovation complète ?", a: "De quatre à douze semaines pour un appartement, selon la surface et l'ampleur des techniques. Le planning est remis avant le démarrage et fait l'objet d'un engagement contractuel." },
      { q: "Faut-il un architecte ?", a: "Pas pour une rénovation sans modification de structure ni de façade. Si un permis ou une étude de stabilité est nécessaire (mur porteur, extension), nous vous le disons dès la visite et travaillons avec votre architecte ou le nôtre." },
      { q: "Puis-je habiter le logement pendant les travaux ?", a: "Pour une rénovation complète, c'est rarement confortable : plusieurs pièces sont ouvertes en même temps. Nous vous le disons franchement après la visite, et nous organisons le phasage quand c'est possible." },
      { q: "Travaillez-vous avec les agences et les syndics ?", a: "Oui. Remise en état entre deux locataires, parties communes, gestion de plusieurs lots : un interlocuteur dédié et des tarifs partenaires sur volume." },
      { q: "Puis-je bénéficier de la TVA à 6 % ?", a: "Oui si le logement a plus de 10 ans et est utilisé principalement comme habitation privée. Le taux réduit est appliqué sur la facture." }
    ],
    formOptions: ["Rénovation complète d'appartement", "Rénovation complète de maison", "Remise en état avant location / vente", "Bureau / commerce", "Autre"],
    ctaTitle: "Parlons de votre projet", ctaText: "Réponse sous 24h, visite gratuite, devis détaillé sous 48h. Un plan et quelques photos suffisent pour commencer."
  },
  nl: {
    name: "Totaalrenovatie", tag: "Sleutel op de deur, vóór verkoop of verhuur",
    seoTitle: "Totaalrenovatie van appartement of woning in Brussel — Sleutel op de deur | Apollon Construction",
    seoDesc: "Totaalrenovatie in Brussel en Brabant: appartement, woning of kantoor volledig vernieuwen, coördinatie van alle vakmannen, één aanspreekpunt. Ideaal vóór verkoop of verhuur. Gratis offerte binnen 48u.",
    h1: "Totaalrenovatie en werfcoördinatie in Brussel",
    intro: "Een appartement opknappen vóór verkoop of verhuur, een woning van A tot Z renoveren, een kantoor verbouwen: wij sturen het volledige project — afbraak, technieken, pleisterwerk, vloeren, schilderwerk, badkamer, keuken — met één team en één nummer om te bellen.",
    badges: ["Eén aanspreekpunt", "Planning vóór de start", "Regelmatige fotorapportering", "6 % btw voor woningen ouder dan 10 jaar"],
    includesTitle: "Wat een totaalrenovatie omvat",
    includes: ["Afbraak, afvoer en conformiteit", "Elektriciteit AREI, sanitair en verwarming", "Pleisterwerk, verlaagde plafonds, wanden", "Vloeren: tegels, parket, vinyl, laminaat", "Badkamer en keuken, technieken inbegrepen", "Schilderwerk en afwerking", "Gedetailleerde planning, wekelijkse opvolging, fotorapportering", "Gezamenlijke oplevering, tienjarige garantie, dienst na verkoop"],
    body: [
      { h2: "Eén aanspreekpunt, één planning, één factuur", p: ["Een totaalrenovatie mobiliseert vijf of zes vakgebieden. Wanneer die van verschillende bedrijven afhangen, valt de werf stil telkens de ene op de andere wacht. Bij Apollon Construction zitten die vakmensen in hetzelfde team en worden ze gecoördineerd door één persoon, die u regelmatig een stand van zaken met foto's bezorgt.", "U weet wie te bellen, u weet hoever de werf staat, en de offerte post per post zegt u precies wat u betaalt."] },
      { h2: "Vóór een verkoop of verhuur", p: ["Verhuurders, vastgoedmakelaars, promotoren: wij knappen snel op — schilderwerk, vloeren, badkamer, elektrische conformering — zodat het pand tegen de beste prijs verhuurd of verkocht wordt. Multi-lot beheer en partnertarieven voor regelmatige samenwerking."] }
    ],
    process: null, caseStudy: null,
    faq: [
      { q: "Hoe lang duurt een totaalrenovatie?", a: "Vier tot twaalf weken voor een appartement, afhankelijk van de oppervlakte en de omvang van de technieken. De planning wordt vóór de start bezorgd en is contractueel bindend." },
      { q: "Is een architect nodig?", a: "Niet voor een renovatie zonder wijziging van structuur of gevel. Als een vergunning of stabiliteitsstudie nodig is (dragende muur, uitbreiding), zeggen we het u bij het bezoek en werken we met uw architect of de onze." },
      { q: "Kan ik in de woning blijven tijdens de werken?", a: "Bij een totaalrenovatie is dat zelden comfortabel: meerdere ruimtes liggen tegelijk open. We zeggen het u eerlijk na het bezoek en organiseren een fasering waar mogelijk." },
      { q: "Werken jullie met makelaars en syndici?", a: "Ja. Opknappen tussen twee huurders, gemene delen, beheer van meerdere loten: een vast aanspreekpunt en partnertarieven op volume." },
      { q: "Kom ik in aanmerking voor 6 % btw?", a: "Ja, als de woning ouder is dan 10 jaar en hoofdzakelijk als privéwoning wordt gebruikt. Het verlaagde tarief wordt op de factuur toegepast." }
    ],
    formOptions: ["Totaalrenovatie appartement", "Totaalrenovatie woning", "Opknappen vóór verhuur / verkoop", "Kantoor / handelszaak", "Andere"],
    ctaTitle: "Laten we het over uw project hebben", ctaText: "Antwoord binnen 24u, gratis plaatsbezoek, gedetailleerde offerte binnen 48u. Een plan en enkele foto's volstaan om te beginnen."
  },
  en: {
    name: "Complete renovation", tag: "Turnkey, before sale or letting",
    seoTitle: "Complete apartment or house renovation in Brussels — Turnkey | Apollon Construction",
    seoDesc: "Complete renovation in Brussels and Brabant: apartment, house or office brought back to new, coordination of all trades, one point of contact. Ideal before sale or letting. Free quote within 48h.",
    h1: "Complete renovation and project management in Brussels",
    intro: "A flat to refurbish before a sale or letting, a house to renovate from A to Z, an office to transform: we run the whole project — demolition, services, plastering, flooring, painting, bathroom, kitchen — with one team and one number to call.",
    badges: ["One point of contact", "Schedule provided before the start", "Regular photo reporting", "6% VAT on homes older than 10 years"],
    includesTitle: "What a complete renovation includes",
    includes: ["Demolition, removal and compliance", "RGIE electrics, plumbing and heating", "Plastering, false ceilings, partitions", "Flooring: tiles, parquet, vinyl, laminate", "Bathroom and kitchen, services included", "Painting and finishes", "Detailed schedule, weekly follow-up, photo reporting", "Joint handover, ten-year guarantee, after-sales service"],
    body: [
      { h2: "One contact, one schedule, one invoice", p: ["A complete renovation involves five or six trades. When they belong to different companies, the site stops every time one waits for another. At Apollon Construction these trades are part of the same team and coordinated by one person, who gives you regular updates with photos.", "You know who to call, you know where the site stands, and the itemised quote tells you exactly what you pay."] },
      { h2: "Before a sale or letting", p: ["Landlords, estate agents, developers: we refurbish quickly — painting, flooring, bathroom, electrical compliance — so the property lets or sells at the best price. Multi-unit management and partner rates for regular collaborations."] }
    ],
    process: null, caseStudy: null,
    faq: [
      { q: "How long does a complete renovation take?", a: "Four to twelve weeks for a flat, depending on the surface and the extent of the services. The schedule is provided before the start and is contractually binding." },
      { q: "Do I need an architect?", a: "Not for a renovation without structural or façade changes. If a permit or structural study is needed (load-bearing wall, extension), we tell you at the visit and work with your architect or ours." },
      { q: "Can I live in the home during the works?", a: "For a complete renovation it is rarely comfortable: several rooms are open at the same time. We tell you frankly after the visit and phase the works where possible." },
      { q: "Do you work with agencies and building managers?", a: "Yes. Refurbishment between two tenants, common areas, several units: a dedicated contact and partner rates on volume." },
      { q: "Can I get the 6% VAT rate?", a: "Yes, if the home is more than 10 years old and mainly used as a private residence. The reduced rate is applied on the invoice." }
    ],
    formOptions: ["Complete flat renovation", "Complete house renovation", "Refurbishment before letting / sale", "Office / shop", "Other"],
    ctaTitle: "Let's talk about your project", ctaText: "Reply within 24h, free site visit, detailed quote within 48h. A plan and a few photos are enough to get started."
  }
};

const ISO_FAQ = {
  fr: [
    { q: "Combien coûte une isolation de façade à Bruxelles ?", a: "Le prix varie entre 80 et 150 €/m² selon le type d'isolation (EPS, laine de roche) et la finition. Demandez un devis gratuit pour une estimation précise." },
    { q: "Combien de temps durent les travaux ?", a: "Pour une maison moyenne, une ITE prend 5 à 10 jours ouvrables. On travaille efficacement en minimisant les perturbations." },
    { q: "Quelles sont les primes disponibles pour l'isolation de façade ?", a: "En Wallonie jusqu'à 75 €/m² via la Prime Habitation. En Flandre, MijnVerbouwPremie jusqu'à 35 %. À Bruxelles, RENOLUTION est suspendue pour 2025-2026. On vous accompagne dans la démarche." }
  ],
  nl: [
    { q: "Wat kost buitenmuurisolatie in Brussel?", a: "De prijs varieert tussen 80 en 150 €/m² afhankelijk van het isolatietype (EPS, steenwol) en de afwerking. Vraag een gratis offerte aan voor een exacte schatting." },
    { q: "Hoelang duurt de uitvoering?", a: "Voor een gemiddelde woning duurt BUI 5 tot 10 werkdagen. We werken snel en beperken de hinder tot een minimum." },
    { q: "Welke premies zijn beschikbaar voor gevelisolatie?", a: "In Wallonië tot 75 €/m² via Prime Habitation. In Vlaanderen MijnVerbouwPremie tot 35 %. Brussel: RENOLUTION opgeschort voor 2025-2026. Wij begeleiden u bij de aanvraag." }
  ],
  en: [
    { q: "How much does external wall insulation cost in Brussels?", a: "The price ranges from €80 to €150/m² depending on the insulation type (EPS, rock wool) and finish. Request a free quote for an exact estimate." },
    { q: "How long does the work take?", a: "For an average house, EWI takes 5 to 10 working days. We work efficiently and minimise disruption." },
    { q: "What grants are available for façade insulation?", a: "In Wallonia up to €75/m² via Prime Habitation. In Flanders MijnVerbouwPremie up to 35%. Brussels: RENOLUTION suspended for 2025-2026. We guide you through the application." }
  ]
};
const S_ISO = per((l) => {
  const c = O["isolation-facade"][l];
  const F = l === "fr", N = l === "nl";
  return {
    name: F ? "Isolation & façade" : N ? "Isolatie & gevel" : "Insulation & façade",
    tag: F ? "ITE, ravalement, enduit de finition" : N ? "BUI, bepleistering, afwerkingslaag" : "EWI, rendering, finish coat",
    seoTitle: c.title, seoDesc: c.desc, h1: c.h1, intro: c.intro,
    badges: F ? ["Diagnostic gratuit sur site", "Devis sous 48h", "Partenaire Batibouw+", "Garantie décennale"] : N ? ["Gratis diagnose ter plaatse", "Offerte binnen 48u", "Partner Batibouw+", "Tienjarige garantie"] : ["Free on-site diagnosis", "Quote within 48h", "Batibouw+ partner", "Ten-year guarantee"],
    includesTitle: F ? "Ce que comprend ce service" : N ? "Wat deze dienst omvat" : "What this service includes",
    includes: c.points,
    body: [{ h2: F ? "Isoler sans perdre un mètre carré" : N ? "Isoleren zonder een vierkante meter te verliezen" : "Insulate without losing a square metre", p: [c.p2, c.p3] }],
    process: null, caseStudy: null,
    faq: ISO_FAQ[l],
    formOptions: F ? ["Isolation par l'extérieur (ITE)", "Ravalement et enduit", "Peinture de façade", "Bardage", "Autre"] : N ? ["Buitenmuurisolatie (BUI)", "Bepleistering", "Gevelschilderwerk", "Gevelbekleding", "Andere"] : ["External wall insulation (EWI)", "Rendering", "Façade painting", "Cladding", "Other"],
    ctaTitle: F ? "Parlons de votre façade" : N ? "Laten we het over uw gevel hebben" : "Let's talk about your façade",
    ctaText: F ? "Réponse sous 24h, diagnostic gratuit sur site, devis sous 48h." : N ? "Antwoord binnen 24u, gratis diagnose ter plaatse, offerte binnen 48u." : "Reply within 24h, free on-site diagnosis, quote within 48h."
  };
});

const ROOF_FAQ = {
  fr: [
    { q: "Combien coûte une réfection de toiture à Bruxelles ?", a: "Les prix varient : réparation partielle à partir de 500 €, réfection complète entre 8 000 et 25 000 € selon le type et la surface. Diagnostic gratuit sur site." },
    { q: "Faut-il un audit énergétique pour la prime toiture en Wallonie ?", a: "Non. Depuis le 14 février 2025, l'audit énergétique n'est plus obligatoire pour les travaux de toiture en Wallonie. Vous pouvez déposer la demande directement." },
    { q: "Combien de temps dure une réfection complète ?", a: "Entre 3 et 10 jours ouvrables pour une maison moyenne. On travaille vite et proprement, avec un minimum de perturbations." }
  ],
  nl: [
    { q: "Wat kost een dakrenovatie in Brussel?", a: "De prijs varieert sterk: gedeeltelijk herstel vanaf 500 €, volledige renovatie tussen 8.000 en 25.000 € afhankelijk van het daktype en de oppervlakte. Gratis diagnose ter plaatse." },
    { q: "Is een energieaudit verplicht voor de dakpremie in Wallonië?", a: "Nee. Sinds 14 februari 2025 is de energieaudit niet meer verplicht voor dakwerken in Wallonië. U kunt direct een aanvraag indienen." },
    { q: "Hoe lang duurt een volledige dakrenovatie?", a: "Tussen 3 en 10 werkdagen voor een doorsnee woning. We werken snel en netjes, met minimale hinder." }
  ],
  en: [
    { q: "How much does a roof renovation cost in Brussels?", a: "Prices vary widely: partial repair from €500, full renovation between €8,000 and €25,000 depending on roof type and surface. Free on-site diagnosis." },
    { q: "Is an energy audit required for the roofing grant in Wallonia?", a: "No. Since 14 February 2025, the energy audit is no longer required for roofing works in Wallonia. You can apply directly." },
    { q: "How long does a full roof renovation take?", a: "Between 3 and 10 working days for an average house. We work quickly and cleanly, with minimal disruption." }
  ]
};
const S_ROOF = per((l) => {
  const c = O["toiture"][l];
  const F = l === "fr", N = l === "nl";
  return {
    name: F ? "Toiture" : N ? "Dak" : "Roofing",
    tag: F ? "Réfection, réparation, étanchéité" : N ? "Renovatie, herstel, waterdichting" : "Renovation, repair, waterproofing",
    seoTitle: c.title, seoDesc: c.desc, h1: c.h1, intro: c.intro,
    badges: F ? ["Diagnostic gratuit", "Devis sous 48h", "Partenaire Batibouw+", "Garantie étanchéité 10–20 ans"] : N ? ["Gratis diagnose", "Offerte binnen 48u", "Partner Batibouw+", "Waterdichtheidsgarantie 10–20 jaar"] : ["Free diagnosis", "Quote within 48h", "Batibouw+ partner", "Waterproofing guarantee 10–20 years"],
    includesTitle: F ? "Toiture inclinée et toiture plate" : N ? "Hellend dak en plat dak" : "Pitched and flat roofs",
    includes: [...c.points.slice(0, 5), ...c.points2.slice(0, 3)],
    body: [{ h2: F ? "Un diagnostic avant tout devis" : N ? "Een diagnose vóór elke offerte" : "A diagnosis before any quote", p: [c.p2, c.p3] }],
    process: null, caseStudy: null,
    faq: ROOF_FAQ[l],
    formOptions: F ? ["Toiture inclinée", "Toiture plate", "Réparation / fuite", "Isolation de toiture", "Autre"] : N ? ["Hellend dak", "Plat dak", "Herstelling / lek", "Dakisolatie", "Andere"] : ["Pitched roof", "Flat roof", "Repair / leak", "Roof insulation", "Other"],
    ctaTitle: F ? "Parlons de votre toiture" : N ? "Laten we het over uw dak hebben" : "Let's talk about your roof",
    ctaText: F ? "Réponse sous 24h, diagnostic gratuit sur site, devis sous 48h." : N ? "Antwoord binnen 24u, gratis diagnose ter plaatse, offerte binnen 48u." : "Reply within 24h, free on-site diagnosis, quote within 48h."
  };
});

const S_ENERGY = per((l) => {
  const c = O["solutions"][l];
  const F = l === "fr", N = l === "nl";
  return {
    name: F ? "Énergie & technique" : N ? "Energie & techniek" : "Energy & technical",
    tag: F ? "Pompe à chaleur, solaire, clim, borne" : N ? "Warmtepomp, zonnepanelen, airco, laadpaal" : "Heat pump, solar, AC, EV charger",
    seoTitle: c.title, seoDesc: c.desc, h1: c.h1, intro: c.intro,
    badges: c.badges.map((b) => b.replace(" ✓", "")),
    includesTitle: c.svc_h,
    includes: c.services.map((s) => `${s.t} — ${s.d}`),
    body: [{ h2: c.one_h, p: [c.one_p] }, { h2: c.prime_h, p: [c.prime_p] }],
    process: c.steps.map((s) => ({ title: s.t, desc: s.d })),
    caseStudy: null,
    faq: c.faq,
    formOptions: c.formOpts,
    ctaTitle: F ? "Parlons de votre installation" : N ? "Laten we het over uw installatie hebben" : "Let's talk about your installation",
    ctaText: F ? "Audit gratuit sur place, étude et devis sous 48h, primes vérifiées avec vous." : N ? "Gratis audit ter plaatse, studie en offerte binnen 48u, premies samen met u nagekeken." : "Free on-site audit, study and quote within 48h, grants checked with you."
  };
});

const SERVICES = [
  { id: "renovation-interieure", focus: "core", primes: false, img: IMG("chantier-renovation"), gallery: [IMG("chantier-renovation"), IMG("humidite-04-enduit"), UP("apres1")], c: S_RENO, related: ["salle-de-bain", "electricite-rgie", "renovation-complete"] },
  { id: "salle-de-bain", focus: "core", primes: false, img: IMG("chantier-sdb-1"), gallery: [IMG("chantier-sdb-1"), IMG("chantier-sdb-2")], c: S_SDB, related: ["electricite-rgie", "renovation-interieure", "cuisine"] },
  { id: "electricite-rgie", focus: "core", primes: false, img: UP("avant6"), gallery: [], c: S_ELEC, related: ["salle-de-bain", "renovation-interieure", "energie"] },
  { id: "cuisine", focus: "core", primes: false, img: UP("apres3"), gallery: [UP("apres4"), IMG("chantier-cuisine"), UP("apres1")], c: S_CUISINE, related: ["renovation-interieure", "electricite-rgie", "salle-de-bain"] },
  { id: "renovation-complete", focus: "core", primes: false, img: UP("avant5"), gallery: [UP("apres1"), IMG("chantier-renovation")], c: S_COMPLETE, related: ["renovation-interieure", "salle-de-bain", "cuisine"] },
  { id: "isolation-facade", focus: "secondary", primes: true, img: IMG("ite-chantier"), gallery: [IMG("chantier-facade-1"), IMG("chantier-facade-2"), IMG("chantier-ardoise-1")], c: S_ISO, related: ["toiture", "energie", "renovation-complete"] },
  { id: "toiture", focus: "secondary", primes: true, img: IMG("toiture-ardoise"), gallery: [], c: S_ROOF, related: ["isolation-facade", "energie", "renovation-complete"] },
  { id: "energie", focus: "secondary", primes: true, img: UP("apres3"), gallery: [], c: S_ENERGY, related: ["electricite-rgie", "isolation-facade", "toiture"] }
].map((s) => ({
  id: s.id, focus: s.focus, primes: s.primes, img: s.img, gallery: s.gallery, related: s.related,
  name: per((l) => s.c[l].name), tag: per((l) => s.c[l].tag),
  intro: per((l) => s.c[l].intro), includes: per((l) => s.c[l].includes),
  seoTitle: per((l) => (SEO_OVERRIDE[s.id] ? SEO_OVERRIDE[s.id][l][0] : s.c[l].seoTitle)), seoDesc: per((l) => (SEO_OVERRIDE[s.id] ? SEO_OVERRIDE[s.id][l][1] : s.c[l].seoDesc)),
  h1: per((l) => s.c[l].h1), badges: per((l) => s.c[l].badges), includesTitle: per((l) => s.c[l].includesTitle),
  body: per((l) => s.c[l].body), process: per((l) => s.c[l].process || null), faq: per((l) => s.c[l].faq),
  caseStudy: per((l) => s.c[l].caseStudy || null), formOptions: per((l) => s.c[l].formOptions),
  ctaTitle: per((l) => s.c[l].ctaTitle), ctaText: per((l) => s.c[l].ctaText)
}));

// ---------------------------------------------------------------- projects (only real photos)
const PROJECTS = [
  { img: UP("apres1"), cat: "renovation-interieure", title: tri("Cuisine — plafond, éclairage et peinture", "Keuken — plafond, verlichting en schilderwerk", "Kitchen — ceiling, lighting and painting"), place: "Brabant flamand" },
  { img: IMG("chantier-sdb-1"), cat: "salle-de-bain", title: tri("Salle de bain, finitions dorées", "Badkamer met gouden afwerking", "Bathroom with brass finishes"), place: "Bruxelles" },
  { img: IMG("chantier-sdb-2"), cat: "salle-de-bain", title: tri("Douche à l'italienne et meuble-vasque", "Inloopdouche en badkamermeubel", "Walk-in shower and vanity unit"), place: "Bruxelles" },
  { img: IMG("chantier-cuisine"), cat: "cuisine", title: tri("Cuisine équipée sur mesure", "Keuken op maat", "Bespoke fitted kitchen"), place: "Bruxelles" },
  { img: IMG("humidite-02-diagnostic"), cat: "renovation-interieure", title: tri("Mur humide : enduit retiré, séché, réenduit", "Vochtige muur: pleister verwijderd, gedroogd, opnieuw gepleisterd", "Damp wall: stripped, dried, re-plastered"), place: "Bruxelles" },
  { img: IMG("chantier-renovation"), cat: "renovation-complete", title: tri("Rénovation intérieure et peinture", "Binnenrenovatie en schilderwerk", "Interior renovation and painting"), place: "Bruxelles" },
  { img: UP("apres4"), cat: "cuisine", title: tri("Éclairage intégré et climatisation encastrée", "Geïntegreerde verlichting en inbouwairco", "Integrated lighting and built-in air conditioning"), place: "Brabant flamand" },
  { img: IMG("chantier-facade-1"), cat: "isolation-facade", title: tri("Isolation thermique et ravalement de façade", "Thermische isolatie en gevelbepleistering", "Thermal insulation and façade rendering"), place: "Bruxelles" },
  { img: IMG("chantier-facade-2"), cat: "isolation-facade", title: tri("Enduit de façade, immeuble", "Gevelbepleistering, appartementsgebouw", "Façade render, apartment building"), place: "Bruxelles" },
  { img: IMG("chantier-ardoise-1"), cat: "isolation-facade", title: tri("Pose de l'isolant, chantier ITE", "Plaatsing van de isolatie, BUI-werf", "Insulation boards going up, EWI site"), place: "Bruxelles" }
];

const AA = {
  fr: { kicker: "Avant / Après", title: "Glissez pour voir la différence.", before: "Avant", after: "Après", hint: "Glissez le curseur ↔", caseTitle: "Cuisine — plafond, éclairage et peinture", caseText: "Nouveau plafond avec caisson lumineux intégré, spots encastrés, corniches, climatisation encastrée et mise en peinture complète des murs. Mobilier et plans de travail protégés du premier au dernier jour.", videos: "Le chantier en vidéo — avant / après", videosText: "Deux chantiers filmés par notre équipe, du premier coup de burin aux finitions.", view1: "Vue vers la fenêtre", view2: "Vue vers le mur de fond", view3: "Vue depuis la porte" },
  nl: { kicker: "Voor / Na", title: "Schuif om het verschil te zien.", before: "Voor", after: "Na", hint: "Verschuif de cursor ↔", caseTitle: "Keuken — plafond, verlichting en schilderwerk", caseText: "Nieuw plafond met geïntegreerde lichtkoof, inbouwspots, sierlijsten, ingebouwde airco en volledig schilderwerk van de muren. Meubels en werkbladen beschermd van de eerste tot de laatste dag.", videos: "De werf in beeld — voor / na", videosText: "Twee werven gefilmd door ons team, van de eerste beitelslag tot de afwerking.", view1: "Zicht naar het raam", view2: "Zicht naar de achterwand", view3: "Zicht vanaf de deur" },
  en: { kicker: "Before / After", title: "Drag to see the difference.", before: "Before", after: "After", hint: "Drag the slider ↔", caseTitle: "Kitchen — ceiling, lighting and painting", caseText: "New ceiling with integrated light box, recessed spots, cornices, built-in air conditioning and full repainting of the walls. Units and worktops protected from the first day to the last.", videos: "The site on video — before / after", videosText: "Two projects filmed by our team, from the first chisel blow to the finishing touches.", view1: "View towards the window", view2: "View towards the back wall", view3: "View from the door" }
};
const CASES = [
  { before: UP("avant3"), after: UP("apres1") },
  { before: UP("avant2"), after: UP("apres2") },
  { before: UP("avant4"), after: UP("apres3") }
];
const VIDEOS = [
  {
    src: "/uploads/video-sdb.mp4", poster: "/uploads/video-sdb-poster.jpg",
    label: tri("Salle de bain", "Badkamer", "Bathroom"),
    title: tri("Salle de bain — avant, pendant, après", "Badkamer — voor, tijdens, na", "Bathroom — before, during, after"),
    text: tri(
      "Murs mis à nu et plomberie refaite, puis douche à l'italienne avec paroi vitrée, carrelage effet marbre du sol au plafond, meuble-vasque suspendu et sèche-serviettes.",
      "Muren tot op de steen gestript en sanitair vernieuwd, daarna een inloopdouche met glazen wand, tegels in marmerlook van vloer tot plafond, hangend wastafelmeubel en handdoekradiator.",
      "Walls stripped back and plumbing redone, then a walk-in shower with glass screen, marble-look tiles from floor to ceiling, wall-hung basin unit and towel radiator."
    )
  },
  {
    src: "/uploads/video-sejour.mp4", poster: "/uploads/video-sejour-poster.jpg",
    label: tri("Séjour", "Woonkamer", "Living room"),
    title: tri("Séjour — murs remis à neuf et nouveau sol", "Woonkamer — muren vernieuwd en nieuwe vloer", "Living room — walls renewed and new floor"),
    text: tri(
      "Anciens revêtements arrachés, murs replâtrés et repeints, plinthes et pose d'un sol en bois neuf. Un séjour prêt à vivre, livré propre.",
      "Oude bekleding verwijderd, muren opnieuw gepleisterd en geschilderd, plinten en een nieuwe houten vloer. Een woonkamer klaar om in te leven, proper opgeleverd.",
      "Old coverings stripped, walls re-plastered and repainted, skirting boards and a new wooden floor. A living room ready to live in, handed over clean."
    )
  }
];

// ---------------------------------------------------------------- primes & TVA
const PRIMES = per((l) => {
  const p = O.primes[l];
  const F = l === "fr", N = l === "nl";
  return {
    seoTitle: p.title, seoDesc: p.desc,
    kicker: F ? "Primes & TVA 2025–2026" : N ? "Premies & btw 2025–2026" : "Grants & VAT 2025–2026",
    title: F ? "Ce que la Belgique finance. Et ce qu'on gère pour vous." : N ? "Wat België financiert. En wat wij voor u regelen." : "What Belgium funds. And what we handle for you.",
    intro: F ? "TVA réduite à 6 %, primes régionales pour l'isolation et la toiture : les aides changent chaque année et dépendent de votre Région et de vos revenus. On vérifie votre situation lors de la visite gratuite et on monte le dossier avec vous." : N ? "Btw verlaagd tot 6 %, regionale premies voor isolatie en dak: de steun verandert elk jaar en hangt af van uw Gewest en uw inkomen. We controleren uw situatie tijdens het gratis plaatsbezoek en stellen het dossier samen met u op." : "VAT reduced to 6%, regional grants for insulation and roofing: support changes every year and depends on your Region and income. We check your situation during the free site visit and build the application with you.",
    update: p.update,
    button: F ? "Vérifier ma situation avec un expert" : N ? "Mijn situatie nakijken met een expert" : "Check my situation with an expert",
    tva: {
      kicker: F ? "Pour tous, dans les trois Régions" : N ? "Voor iedereen, in de drie Gewesten" : "For everyone, in all three Regions",
      title: F ? "TVA à 6 % sur la rénovation" : N ? "6 % btw op renovatie" : "6% VAT on renovation",
      text: F ? "Si votre logement a plus de 10 ans et sert principalement d'habitation privée, les travaux de rénovation (main-d'œuvre et matériaux posés par l'entreprise) sont facturés à 6 % au lieu de 21 %. C'est l'aide la plus simple et la plus sûre : elle s'applique directement sur notre facture, sans dossier à introduire." : N ? "Als uw woning ouder is dan 10 jaar en hoofdzakelijk als privéwoning dient, worden de renovatiewerken (arbeid en door het bedrijf geplaatste materialen) gefactureerd aan 6 % in plaats van 21 %. Het is de eenvoudigste en zekerste steun: ze geldt rechtstreeks op onze factuur, zonder dossier in te dienen." : "If your home is more than 10 years old and mainly used as a private residence, renovation works (labour and materials installed by the company) are invoiced at 6% instead of 21%. It is the simplest and most reliable support: it applies directly on our invoice, with no application to file.",
      note: F ? "Ne s'applique pas au mobilier fourni séparément ni aux logements de moins de 10 ans." : N ? "Geldt niet voor apart geleverde meubels of woningen jonger dan 10 jaar." : "Does not apply to furniture supplied separately or homes under 10 years old."
    },
    regionsTitle: p.ov_h + ".",
    regions: p.regions.map((r) => ({ prog: r.title, status: r.status.replace(/^[✓⚠] /, ""), active: /✓/.test(r.status), amount: r.amount, desc: r.desc })),
    details: [
      { h: p.wal.h, p: [p.wal.p1, p.wal.p2], alert: p.wal.alert.replace(/^⚠ /, ""), ok: p.wal.ok.replace(/^✓ /, ""), th: p.wal.th, rows: p.wal.rows, link: p.wal.link.replace(/^🔗 /, "") },
      { h: p.bru.h, p: [p.bru.p2], alert: p.bru.alert.replace(/^🔴 /, ""), th: p.bru.th, rows: p.bru.rows, note: p.bru.note, link: p.bru.link.replace(/^🔗 /, "") },
      { h: p.fla.h, p: [p.fla.p1, p.fla.p2], alert: p.fla.alert.replace(/^⚠ /, ""), steps: p.fla.steps, link: p.fla.link.replace(/^🔗 /, "") }
    ],
    covered: F ? "Travaux couverts :" : N ? "Gedekte werken:" : "Works covered:",
    note: F ? "Les montants et conditions évoluent chaque année et dépendent de vos revenus et du bien. Informations données à titre indicatif ; nous vérifions votre éligibilité précise lors de la visite gratuite." : N ? "Bedragen en voorwaarden veranderen elk jaar en hangen af van uw inkomen en het pand. Indicatieve informatie; we controleren uw exacte recht tijdens het gratis plaatsbezoek." : "Amounts and conditions change every year and depend on your income and the property. Indicative information; we check your precise eligibility during the free site visit.",
    stepsTitle: F ? "Notre accompagnement, inclus dans chaque chantier." : N ? "Onze begeleiding, inbegrepen bij elke werf." : "Our support, included with every project.",
    steps: F
      ? [{ n: "1", t: "Analyse d'éligibilité", d: "Lors de la visite gratuite, on identifie la TVA applicable et les primes possibles pour votre bien et votre situation." }, { n: "2", t: "Devis conforme", d: "Nos devis détaillés poste par poste répondent aux exigences des administrations régionales." }, { n: "3", t: "Constitution du dossier", d: "On rassemble avec vous les documents, attestations et photos exigés pour la demande." }, { n: "4", t: "Suivi jusqu'au paiement", d: "On reste votre contact jusqu'au versement de la prime, y compris en cas de demande de complément." }]
      : N
      ? [{ n: "1", t: "Analyse van uw recht", d: "Tijdens het gratis plaatsbezoek bepalen we de toepasselijke btw en de mogelijke premies voor uw pand en situatie." }, { n: "2", t: "Conforme offerte", d: "Onze gedetailleerde offertes beantwoorden aan de eisen van de gewestelijke administraties." }, { n: "3", t: "Samenstelling van het dossier", d: "We verzamelen samen met u de documenten, attesten en foto's die vereist zijn voor de aanvraag." }, { n: "4", t: "Opvolging tot uitbetaling", d: "We blijven uw contact tot de premie is uitbetaald, ook bij een vraag om aanvullende stukken." }]
      : [{ n: "1", t: "Eligibility analysis", d: "During the free site visit we identify the applicable VAT and the possible grants for your property and situation." }, { n: "2", t: "Compliant quote", d: "Our itemised quotes meet the requirements of the regional administrations." }, { n: "3", t: "Building the application", d: "We gather the documents, certificates and photos required for the application with you." }, { n: "4", t: "Follow-up until payment", d: "We remain your contact until the grant is paid, including any requests for additional documents." }],
    ctaTitle: p.cta.h + ".",
    ctaSub: p.cta.p
  };
});

// ---------------------------------------------------------------- output
const out = `// Contenu et données du site Apollon Construction.
// GÉNÉRÉ par tools/compose-data.mjs à partir du contenu de l'ancien site (tools/_extract_*.json)
// et de textes rédigés pour les nouvelles pages. Modifier ce fichier directement est possible,
// mais relancer \`node tools/compose-data.mjs\` l'écrasera.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.apollonconstruction.be";
export const LANGS = ${JSON.stringify(LANGS)};
export const PHONE = "0499 89 60 86";
export const PHONE_HREF = "tel:+32499896086";
export const PHONES = [
 { num: "0499 89 60 86", href: "tel:+32499896086", tag: "FR · NL · EN" },
 { num: "0471 93 29 18", href: "tel:+32471932918", tag: "FR · EN" }
];
export const EMAIL = "info@apollonconstruction.be";
export const ADDRESS = { street: "Oudesmidsestraat 20", zip: "1700", city: "Dilbeek" };
export const REVIEWS_URL = "https://share.google/aO4CXjZ8n3OlEY00c";
export const SOCIAL = { instagram: "https://www.instagram.com/apollon.construction", facebook: "https://www.facebook.com/profile.php?id=61570944591480", linkedin: "https://www.linkedin.com/company/apollon-construction" };
export const ZONES = ${JSON.stringify(ZONES)};
export const ZONES_L = { fr: ZONES, nl: ["Brussel-Stad", "Elsene", "Ukkel", "Etterbeek", "Oudergem", "Sint-Lambrechts-Woluwe", "Sint-Pieters-Woluwe", "Vorst", "Molenbeek", "Sint-Gillis", "Anderlecht", "Schaarbeek", "Laken", "Jette", "Dilbeek", "Zaventem", "Waals-Brabant", "Vlaams-Brabant"], en: ["Brussels City", "Ixelles", "Uccle", "Etterbeek", "Auderghem", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre", "Forest", "Molenbeek", "Saint-Gilles", "Anderlecht", "Schaerbeek", "Laeken", "Jette", "Dilbeek", "Zaventem", "Walloon Brabant", "Flemish Brabant"] };
export const REVIEWS = ${JSON.stringify(REVIEWS, null, 1)};
export const SERVICES = ${JSON.stringify(SERVICES, null, 1)};
export const PROJECTS = ${JSON.stringify(PROJECTS, null, 1)};
export const T = ${JSON.stringify(T, null, 1)};
export const AA = ${JSON.stringify(AA, null, 1)};
export const CASES = ${JSON.stringify(CASES)};
export const VIDEOS = ${JSON.stringify(VIDEOS, null, 1)};
export const PRIMES = ${JSON.stringify(PRIMES, null, 1)};

export function localizeService(s, lang, i) {
  const pick = (v) => (v && typeof v === "object" && !Array.isArray(v) && lang in v ? v[lang] : v);
  return {
    id: s.id, img: s.img, primes: s.primes, focus: s.focus, related: s.related,
    num: String((i ?? 0) + 1).padStart(2, "0"),
    name: s.name[lang], tag: s.tag[lang], intro: s.intro[lang],
    seoTitle: s.seoTitle[lang], seoDesc: s.seoDesc[lang], h1: s.h1[lang], badges: s.badges[lang],
    includesTitle: s.includesTitle[lang],
    includes: s.includes[lang].map((text, k) => ({ n: String(k + 1).padStart(2, "0"), text })),
    body: s.body[lang], process: s.process[lang], faq: s.faq[lang], caseStudy: s.caseStudy[lang],
    formOptions: s.formOptions[lang], ctaTitle: s.ctaTitle[lang], ctaText: s.ctaText[lang],
    gallery: s.gallery.map((img) => ({ img }))
  };
}

const PLACES = { "Bruxelles": { fr: "Bruxelles", nl: "Brussel", en: "Brussels" }, "Brabant flamand": { fr: "Brabant flamand", nl: "Vlaams-Brabant", en: "Flemish Brabant" }, "Brabant wallon": { fr: "Brabant wallon", nl: "Waals-Brabant", en: "Walloon Brabant" } };
export function localizeProject(p, lang, i) {
  const s = SERVICES.find((x) => x.id === p.cat);
  return { img: p.img, cat: p.cat, catName: s ? s.name[lang] : "", title: p.title[lang], place: (PLACES[p.place] || {})[lang] || p.place, num: String((i ?? 0) + 1).padStart(2, "0") };
}
`;
fs.writeFileSync(path.join(__dirname, "..", "lib", "site-data.js"), out);
console.log("written lib/site-data.js", (out.length / 1024).toFixed(0), "KB");
