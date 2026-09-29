// Contenu et données du site Apollon Construction.
// GÉNÉRÉ par tools/compose-data.mjs à partir du contenu de l'ancien site (tools/_extract_*.json)
// et de textes rédigés pour les nouvelles pages. Modifier ce fichier directement est possible,
// mais relancer `node tools/compose-data.mjs` l'écrasera.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.apollonconstruction.be";
export const LANGS = ["fr","nl","en"];
export const PHONE = "0499 89 60 86";
export const PHONE_HREF = "tel:+32499896086";
export const PHONES = [
 { num: "0499 89 60 86", href: "tel:+32499896086", wa: "https://wa.me/32499896086", codes: ["fr", "nl", "en"], langs: "Français · Nederlands · English", tag: "FR · NL · EN" },
 { num: "0471 93 29 18", href: "tel:+32471932918", wa: null, codes: ["fr", "en"], langs: "Français · English", tag: "FR · EN" }
];
export const WHATSAPP = "https://wa.me/32499896086";
export const phonesFor = (lang) => PHONES.filter((p) => p.codes.includes(lang));
export const EMAIL = "info@apollonconstruction.be";
export const ADDRESS = { street: "Oudesmidsestraat 20", zip: "1700", city: "Dilbeek" };
export const REVIEWS_URL = "https://share.google/aO4CXjZ8n3OlEY00c";
export const SOCIAL = { instagram: "https://www.instagram.com/apollon.construction", facebook: "https://www.facebook.com/profile.php?id=61570944591480", linkedin: "https://www.linkedin.com/company/apollon-construction" };
export const ZONES = ["Bruxelles-Ville","Ixelles","Uccle","Etterbeek","Auderghem","Woluwe-Saint-Lambert","Woluwe-Saint-Pierre","Forest","Molenbeek","Saint-Gilles","Anderlecht","Schaerbeek","Laeken","Jette","Dilbeek","Zaventem","Brabant wallon","Brabant flamand"];
export const ZONES_L = { fr: ZONES, nl: ["Brussel-Stad", "Elsene", "Ukkel", "Etterbeek", "Oudergem", "Sint-Lambrechts-Woluwe", "Sint-Pieters-Woluwe", "Vorst", "Molenbeek", "Sint-Gillis", "Anderlecht", "Schaarbeek", "Laken", "Jette", "Dilbeek", "Zaventem", "Waals-Brabant", "Vlaams-Brabant"], en: ["Brussels City", "Ixelles", "Uccle", "Etterbeek", "Auderghem", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre", "Forest", "Molenbeek", "Saint-Gilles", "Anderlecht", "Schaerbeek", "Laeken", "Jette", "Dilbeek", "Zaventem", "Walloon Brabant", "Flemish Brabant"] };
export const REVIEWS = [
 {
  "name": "Mahmood Hussein",
  "badge": "Local Guide",
  "when": {
   "fr": "il y a 4 mois",
   "nl": "4 maanden geleden",
   "en": "4 months ago"
  },
  "text": {
   "fr": "Excellent service de la part d'Apollon Construction. Travail soigné, équipe ponctuelle et très professionnelle du début à la fin. Respect des délais et résultat impeccable. Je recommande vivement !",
   "nl": "Uitstekende service van Apollon Construction. Verzorgd werk, punctueel en zeer professioneel van begin tot einde. Naleving van de termijnen en onberispelijk resultaat. Ik beveel sterk aan!",
   "en": "Excellent service from Apollon Construction. Careful work, punctual and very professional team. Deadlines respected and impeccable result. Highly recommend!"
  }
 },
 {
  "name": "E.",
  "badge": "Local Guide",
  "when": {
   "fr": "il y a un an",
   "nl": "een jaar geleden",
   "en": "1 year ago"
  },
  "text": {
   "fr": "Top service ! Rapide et efficace. Panne électrique résolue en moins de 24h. Je recommande fortement !",
   "nl": "Top service! Snel en efficiënt. Elektrisch probleem opgelost binnen 24u. Ik beveel sterk aan!",
   "en": "Top service! Fast and efficient. Electrical issue solved in under 24h. Highly recommend!"
  }
 },
 {
  "name": "Leona Muhaxheri",
  "badge": "",
  "when": {
   "fr": "il y a 5 mois",
   "nl": "5 maanden geleden",
   "en": "5 months ago"
  },
  "text": {
   "fr": "Très satisfaite de leurs travaux et de leur professionnalisme. Merci pour votre travail.",
   "nl": "Zeer tevreden over hun werk en hun professionalisme. Dank u voor uw werk.",
   "en": "Very satisfied with their work and professionalism. Thank you."
  }
 }
];
export const SERVICES = [
 {
  "id": "renovation-interieure",
  "focus": "core",
  "primes": false,
  "img": "/images/chantier-renovation.jpg",
  "gallery": [
   "/images/chantier-renovation.jpg",
   "/images/humidite-04-enduit.jpg",
   "/uploads/apres1.jpg"
  ],
  "related": [
   "salle-de-bain",
   "electricite-rgie",
   "renovation-complete"
  ],
  "name": {
   "fr": "Rénovation intérieure",
   "nl": "Binnenrenovatie",
   "en": "Interior renovation"
  },
  "tag": {
   "fr": "Plafonnage, humidité, peinture, sols",
   "nl": "Pleisterwerk, vocht, schilderwerk, vloeren",
   "en": "Plastering, damp, painting, flooring"
  },
  "intro": {
   "fr": "Appartement à rafraîchir avant une location, maison à remettre à neuf, mur qui s'effrite à cause de l'humidité : Apollon Construction s'occupe du plafonnage, de la peinture, des sols et des finitions, avec une seule équipe du début à la fin.",
   "nl": "Een appartement opfrissen vóór verhuur, een woning volledig vernieuwen, een muur die afbrokkelt door vocht: Apollon Construction verzorgt het pleisterwerk, het schilderwerk, de vloeren en de afwerking, met één team van begin tot einde.",
   "en": "A flat to refresh before renting it out, a house to bring back to new, a wall crumbling because of damp: Apollon Construction takes care of plastering, painting, flooring and finishing, with one team from start to finish."
  },
  "includes": {
   "fr": [
    "Plafonnage et enduits murs et plafonds, rebouchage, lissage",
    "Traitement des murs humides : retrait de l'enduit, séchage, réenduisage",
    "Peinture intérieure murs, plafonds, boiseries",
    "Pose de sols : vinyle, stratifié, parquet, carrelage",
    "Faux plafonds et cloisons en plaques de plâtre, isolation acoustique",
    "Portes intérieures, plinthes, menuiseries",
    "Remise en état complète avant vente ou mise en location",
    "Coordination avec nos équipes salle de bain et électricité"
   ],
   "nl": [
    "Pleisterwerk muren en plafonds, opvullen, uitvlakken",
    "Behandeling van vochtige muren: pleister verwijderen, drogen, opnieuw pleisteren",
    "Binnenschilderwerk muren, plafonds, houtwerk",
    "Vloeren plaatsen: vinyl, laminaat, parket, tegels",
    "Verlaagde plafonds en gipskartonwanden, akoestische isolatie",
    "Binnendeuren, plinten, schrijnwerk",
    "Volledig opknappen vóór verkoop of verhuur",
    "Coördinatie met onze badkamer- en elektriciteitsteams"
   ],
   "en": [
    "Plastering of walls and ceilings, filling, skimming",
    "Damp wall treatment: stripping, drying, re-plastering",
    "Interior painting of walls, ceilings, woodwork",
    "Flooring: vinyl, laminate, parquet, tiles",
    "Plasterboard false ceilings and partitions, acoustic insulation",
    "Interior doors, skirting boards, joinery",
    "Full refurbishment before sale or letting",
    "Coordination with our bathroom and electrical teams"
   ]
  },
  "seoTitle": {
   "fr": "Rénovation intérieure à Bruxelles | Apollon Construction",
   "nl": "Binnenrenovatie in Brussel | Apollon Construction",
   "en": "Interior renovation in Brussels | Apollon Construction"
  },
  "seoDesc": {
   "fr": "Plafonnage, murs humides, peinture, sols, cloisons : rénovation intérieure à Bruxelles et en Brabant par une seule équipe. Devis gratuit sous 48 h.",
   "nl": "Pleisterwerk, vochtige muren, schilderwerk, vloeren, wanden: binnenrenovatie in Brussel en Brabant door één team. Gratis offerte binnen 48 u.",
   "en": "Plastering, damp walls, painting, flooring, partitions: interior renovation in Brussels and Brabant by one team. Free quote within 48 h."
  },
  "h1": {
   "fr": "Rénovation intérieure & finitions à Bruxelles",
   "nl": "Binnenrenovatie & afwerking in Brussel",
   "en": "Interior renovation & finishing in Brussels"
  },
  "badges": {
   "fr": [
    "Devis gratuit sous 48h",
    "Chantier propre, gravats évacués",
    "TVA 6 % si logement de plus de 10 ans",
    "Équipe bilingue FR/NL"
   ],
   "nl": [
    "Gratis offerte binnen 48u",
    "Propere werf, puin afgevoerd",
    "6 % btw voor woningen ouder dan 10 jaar",
    "Tweetalig team FR/NL"
   ],
   "en": [
    "Free quote within 48h",
    "Clean site, rubble removed",
    "6% VAT on homes older than 10 years",
    "Bilingual team FR/NL"
   ]
  },
  "includesTitle": {
   "fr": "Nos prestations de rénovation intérieure",
   "nl": "Onze diensten binnenrenovatie",
   "en": "Our interior renovation services"
  },
  "body": {
   "fr": [
    {
     "h2": "Humidité : on traite la cause, pas seulement la tache",
     "p": [
      "Un enduit gorgé d'humidité qui cloque ou s'effrite ne se répare pas avec une couche de peinture. Nous retirons l'enduit abîmé jusqu'à la brique, laissons le mur sécher le temps nécessaire, traitons la source (ventilation, infiltration, remontée capillaire) puis réenduisons et repeignons.",
      "Cela prend parfois plus de temps qu'un simple coup de rouleau. Mais c'est la seule façon d'obtenir un résultat qui tient."
     ]
    },
    {
     "h2": "Du petit chantier à la remise à neuf complète",
     "p": [
      "Une chambre à replâtrer, un salon à repeindre, un sol à poser avant l'arrivée d'un locataire ou un appartement entier à remettre en état : nous adaptons l'équipe à la taille du chantier. Dans les 19 communes de Bruxelles, en Brabant flamand et en Brabant wallon."
     ]
    }
   ],
   "nl": [
    {
     "h2": "Vocht: we pakken de oorzaak aan, niet alleen de vlek",
     "p": [
      "Een met vocht doordrongen pleisterlaag die blaast of afbrokkelt, herstel je niet met een laag verf. We verwijderen de beschadigde pleister tot op de baksteen, laten de muur de nodige tijd drogen, behandelen de bron (ventilatie, insijpeling, opstijgend vocht) en pleisteren en schilderen daarna opnieuw.",
      "Dat duurt soms langer dan een snelle rolbeurt. Maar het is de enige manier om een resultaat te krijgen dat blijft."
     ]
    },
    {
     "h2": "Van kleine werf tot volledige vernieuwing",
     "p": [
      "Een slaapkamer opnieuw bepleisteren, een woonkamer schilderen, een vloer leggen vóór een huurder intrekt of een volledig appartement opknappen: we passen het team aan de omvang van de werf aan. In de 19 Brusselse gemeenten, in Vlaams-Brabant en in Waals-Brabant."
     ]
    }
   ],
   "en": [
    {
     "h2": "Damp: we treat the cause, not just the stain",
     "p": [
      "Plaster soaked with moisture that blisters or crumbles cannot be fixed with a coat of paint. We strip the damaged plaster back to the brick, let the wall dry for as long as it needs, treat the source (ventilation, infiltration, rising damp), then re-plaster and repaint.",
      "It sometimes takes longer than a quick roller job. But it is the only way to get a result that lasts."
     ]
    },
    {
     "h2": "From a single room to a complete refurbishment",
     "p": [
      "A bedroom to re-plaster, a living room to repaint, a floor to lay before a tenant moves in or a whole flat to refurbish: we size the team to the job. Across the 19 municipalities of Brussels, Flemish Brabant and Walloon Brabant."
     ]
    }
   ]
  },
  "process": {
   "fr": [
    {
     "title": "Visite gratuite",
     "desc": "On regarde l'état des supports, l'humidité, la ventilation, et on écoute ce que vous voulez."
    },
    {
     "title": "Devis sous 48h",
     "desc": "Poste par poste : préparation, enduit, peinture, sols. Vous savez ce que vous payez."
    },
    {
     "title": "Travaux",
     "desc": "Sols et meubles protégés, pièce par pièce, gravats évacués chaque jour."
    },
    {
     "title": "Réception",
     "desc": "Contrôle ensemble, nettoyage de fin de chantier, garantie sur les travaux."
    }
   ],
   "nl": [
    {
     "title": "Gratis bezoek",
     "desc": "We bekijken de staat van de ondergrond, het vocht, de ventilatie, en luisteren naar wat u wilt."
    },
    {
     "title": "Offerte binnen 48u",
     "desc": "Post per post: voorbereiding, pleister, verf, vloeren. U weet wat u betaalt."
    },
    {
     "title": "Werken",
     "desc": "Vloeren en meubels beschermd, kamer per kamer, puin dagelijks afgevoerd."
    },
    {
     "title": "Oplevering",
     "desc": "Samen controleren, eindschoonmaak, garantie op de werken."
    }
   ],
   "en": [
    {
     "title": "Free site visit",
     "desc": "We look at the surfaces, the damp, the ventilation, and listen to what you want."
    },
    {
     "title": "Quote within 48h",
     "desc": "Itemised: preparation, plaster, paint, flooring. You know what you pay for."
    },
    {
     "title": "Works",
     "desc": "Floors and furniture protected, room by room, rubble removed daily."
    },
    {
     "title": "Handover",
     "desc": "Checked together, end-of-site cleaning, guarantee on the works."
    }
   ]
  },
  "faq": {
   "fr": [
    {
     "q": "Combien coûte un plafonnage ou une peinture à Bruxelles ?",
     "a": "Le prix dépend de la surface, de l'état des supports (fissures, humidité, ancien papier peint) et du niveau de finition. Nous venons voir gratuitement et remettons un devis poste par poste sous 48h."
    },
    {
     "q": "Faites-vous les petits chantiers, une seule pièce ?",
     "a": "Oui. Une chambre à replâtrer ou un salon à repeindre est un chantier comme un autre, avec le même soin."
    },
    {
     "q": "Comment savez-vous d'où vient l'humidité ?",
     "a": "Lors de la visite, nous regardons l'emplacement des traces, la ventilation, l'état des façades et des joints. Si un diagnostic plus poussé est nécessaire, nous vous le disons avant de commencer, pas après."
    },
    {
     "q": "Combien de temps faut-il laisser sécher un mur ?",
     "a": "Cela dépend de l'épaisseur du mur, de la saison et de la ventilation : de quelques semaines à plusieurs mois. Nous mesurons l'humidité avant de réenduire plutôt que de fixer une date à l'avance."
    },
    {
     "q": "Puis-je rester dans le logement pendant les travaux ?",
     "a": "Dans la plupart des cas, oui. Nous travaillons pièce par pièce, protégeons les sols et les meubles et évacuons les gravats chaque jour."
    },
    {
     "q": "Puis-je bénéficier de la TVA à 6 % ?",
     "a": "Oui si le logement a plus de 10 ans et est utilisé principalement comme habitation privée. Le taux réduit est appliqué sur la facture."
    }
   ],
   "nl": [
    {
     "q": "Wat kost pleisterwerk of schilderwerk in Brussel?",
     "a": "De prijs hangt af van de oppervlakte, de staat van de ondergrond (scheuren, vocht, oud behang) en het afwerkingsniveau. We komen gratis kijken en bezorgen binnen 48u een offerte post per post."
    },
    {
     "q": "Doen jullie ook kleine werven, één kamer?",
     "a": "Ja. Een slaapkamer opnieuw bepleisteren of een woonkamer schilderen is een werf zoals een andere, met dezelfde zorg."
    },
    {
     "q": "Hoe weten jullie waar het vocht vandaan komt?",
     "a": "Tijdens het bezoek bekijken we de plaats van de sporen, de ventilatie, de staat van de gevels en de voegen. Als een grondigere diagnose nodig is, zeggen we het u vóór we beginnen, niet erna."
    },
    {
     "q": "Hoe lang moet een muur drogen?",
     "a": "Dat hangt af van de dikte van de muur, het seizoen en de ventilatie: van enkele weken tot meerdere maanden. We meten het vochtgehalte vóór we opnieuw pleisteren in plaats van op voorhand een datum vast te leggen."
    },
    {
     "q": "Kan ik tijdens de werken in de woning blijven?",
     "a": "In de meeste gevallen wel. We werken kamer per kamer, beschermen vloeren en meubels en voeren het puin dagelijks af."
    },
    {
     "q": "Kom ik in aanmerking voor 6 % btw?",
     "a": "Ja, als de woning ouder is dan 10 jaar en hoofdzakelijk als privéwoning wordt gebruikt. Het verlaagde tarief wordt op de factuur toegepast."
    }
   ],
   "en": [
    {
     "q": "How much does plastering or painting cost in Brussels?",
     "a": "The price depends on the surface, the condition of the substrate (cracks, damp, old wallpaper) and the level of finish. We visit for free and send an itemised quote within 48h."
    },
    {
     "q": "Do you take on small jobs, a single room?",
     "a": "Yes. A bedroom to re-plaster or a living room to repaint is a job like any other, done with the same care."
    },
    {
     "q": "How do you know where the damp comes from?",
     "a": "During the visit we look at where the marks are, the ventilation, the condition of the facades and joints. If a more thorough diagnosis is needed, we tell you before starting, not after."
    },
    {
     "q": "How long does a wall need to dry?",
     "a": "It depends on the wall thickness, the season and the ventilation: from a few weeks to several months. We measure the moisture before re-plastering rather than fixing a date in advance."
    },
    {
     "q": "Can I stay in the home during the works?",
     "a": "In most cases, yes. We work room by room, protect floors and furniture and remove rubble every day."
    },
    {
     "q": "Can I get the 6% VAT rate?",
     "a": "Yes, if the home is more than 10 years old and mainly used as a private residence. The reduced rate is applied on the invoice."
    }
   ]
  },
  "caseStudy": {
   "fr": {
    "kicker": "Chantier récent",
    "h2": "Humidité : on a pris le temps",
    "p": "Sur ce chantier, l'enduit était gorgé d'humidité. Nous avons tout retiré jusqu'à la brique, laissé le mur sécher à nu tout l'été, puis réenduit. Prochaine étape : la peinture.",
    "images": [
     {
      "src": "/images/humidite-01-avant-apres.jpg",
      "alt": "Mur humide avant et après réenduisage — chantier Apollon Construction",
      "caption": "Avant / après enduit"
     },
     {
      "src": "/images/humidite-02-diagnostic.jpg",
      "alt": "Diagnostic : enduit gorgé d'humidité retiré jusqu'à la brique",
      "caption": "01 · Diagnostic — enduit retiré"
     },
     {
      "src": "/images/humidite-03-sechage.jpg",
      "alt": "Séchage du mur à nu pendant tout l'été avant réenduisage",
      "caption": "02 · Séchage — tout l'été"
     },
     {
      "src": "/images/humidite-04-enduit.jpg",
      "alt": "Murs réenduits, prêts pour la peinture",
      "caption": "03 · Enduit — murs réenduits"
     }
    ]
   },
   "nl": {
    "kicker": "Recente werf",
    "h2": "Vochtprobleem — zonder haast opgelost",
    "p": "Op deze werf was de pleisterlaag doordrongen van vocht. We hebben alles verwijderd tot op de baksteen, de muur de hele zomer laten drogen en daarna opnieuw gepleisterd. Volgende stap: schilderen.",
    "images": [
     {
      "src": "/images/humidite-01-avant-apres.jpg",
      "alt": "Vochtige muur vóór en na het pleisteren — werf Apollon Construction",
      "caption": "Vóór / na pleisterwerk"
     },
     {
      "src": "/images/humidite-02-diagnostic.jpg",
      "alt": "Diagnose: vochtige bepleistering volledig verwijderd tot op de baksteen",
      "caption": "01 · Diagnose — pleister verwijderd"
     },
     {
      "src": "/images/humidite-03-sechage.jpg",
      "alt": "De muur droogde de hele zomer vóór het plamuren",
      "caption": "02 · Drogen — de hele zomer"
     },
     {
      "src": "/images/humidite-04-enduit.jpg",
      "alt": "Opnieuw gepleisterde muren, klaar om te schilderen",
      "caption": "03 · Pleister — opnieuw gepleisterd"
     }
    ]
   },
   "en": {
    "kicker": "Recent project",
    "h2": "Damp: we took the time",
    "p": "On this project the plaster was soaked with moisture. We stripped everything back to the brick, let the bare wall dry all summer, then re-plastered. Next step: painting.",
    "images": [
     {
      "src": "/images/humidite-01-avant-apres.jpg",
      "alt": "Damp wall before and after re-plastering — Apollon Construction project",
      "caption": "Before / after plaster"
     },
     {
      "src": "/images/humidite-02-diagnostic.jpg",
      "alt": "Diagnosis: damp plaster stripped back to the brick",
      "caption": "01 · Diagnosis — plaster removed"
     },
     {
      "src": "/images/humidite-03-sechage.jpg",
      "alt": "Bare wall drying all summer before re-plastering",
      "caption": "02 · Drying — all summer"
     },
     {
      "src": "/images/humidite-04-enduit.jpg",
      "alt": "Re-plastered walls, ready for painting",
      "caption": "03 · Plaster — walls re-plastered"
     }
    ]
   }
  },
  "formOptions": {
   "fr": [
    "Rénovation intérieure",
    "Plafonnage / enduits",
    "Mur humide à traiter",
    "Peinture",
    "Pose de sol (vinyle, stratifié, parquet, carrelage)",
    "Remise en état avant location / vente",
    "Autre"
   ],
   "nl": [
    "Binnenrenovatie",
    "Pleisterwerk",
    "Vochtige muur te behandelen",
    "Schilderwerk",
    "Vloer plaatsen (vinyl, laminaat, parket, tegels)",
    "Opknappen vóór verhuur / verkoop",
    "Andere"
   ],
   "en": [
    "Interior renovation",
    "Plastering",
    "Damp wall to treat",
    "Painting",
    "Flooring (vinyl, laminate, parquet, tiles)",
    "Refurbishment before letting / sale",
    "Other"
   ]
  },
  "ctaTitle": {
   "fr": "Parlons de votre intérieur",
   "nl": "Laten we het over uw interieur hebben",
   "en": "Let's talk about your interior"
  },
  "ctaText": {
   "fr": "Réponse sous 24h, devis gratuit sous 48h. Quelques photos des pièces suffisent pour commencer.",
   "nl": "Antwoord binnen 24u, gratis offerte binnen 48u. Enkele foto's van de ruimtes volstaan om te beginnen.",
   "en": "Reply within 24h, free quote within 48h. A few photos of the rooms are enough to get started."
  }
 },
 {
  "id": "salle-de-bain",
  "focus": "core",
  "primes": false,
  "img": "/images/chantier-sdb-1.jpg",
  "gallery": [
   "/images/chantier-sdb-1.jpg",
   "/images/chantier-sdb-2.jpg"
  ],
  "related": [
   "electricite-rgie",
   "renovation-interieure",
   "cuisine"
  ],
  "name": {
   "fr": "Salle de bain",
   "nl": "Badkamer",
   "en": "Bathroom"
  },
  "tag": {
   "fr": "Douche à l'italienne, carrelage, plomberie",
   "nl": "Inloopdouche, tegels, sanitair",
   "en": "Walk-in shower, tiling, plumbing"
  },
  "intro": {
   "fr": "De la démolition au dernier joint de silicone, Apollon Construction rénove votre salle de bain de A à Z : douche à l'italienne, carrelage, plomberie, électricité, faux plafond et meuble-vasque. Un seul interlocuteur, un devis clair poste par poste, un chantier propre.",
   "nl": "Van de afbraak tot de laatste siliconenvoeg: Apollon Construction renoveert uw badkamer van A tot Z — inloopdouche, tegels, sanitair, elektriciteit, verlaagd plafond en badkamermeubel. Eén aanspreekpunt, een duidelijke offerte post per post, een propere werf.",
   "en": "From demolition to the last bead of silicone, Apollon Construction renovates your bathroom from A to Z: walk-in shower, tiling, plumbing, electrics, false ceiling and vanity unit. One contact person, a clear itemised quote, a clean site."
  },
  "includes": {
   "fr": [
    "Démolition et évacuation des gravats",
    "Plomberie : alimentation, évacuation, raccordements",
    "Douche à l'italienne ou receveur extra-plat, paroi vitrée",
    "Carrelage sol et murs, faïence, joints époxy sur demande",
    "Électricité conforme RGIE : prises, éclairage LED, sèche-serviettes",
    "Faux plafond avec spots encastrés, ventilation",
    "Meuble-vasque, miroir, robinetterie, WC suspendu",
    "Peinture, finitions et nettoyage de fin de chantier"
   ],
   "nl": [
    "Afbraak en afvoer van puin",
    "Sanitair: toevoer, afvoer, aansluitingen",
    "Inloopdouche of extra platte douchebak, glazen wand",
    "Vloer- en wandtegels, faience, epoxyvoegen op aanvraag",
    "Elektriciteit conform AREI: stopcontacten, LED-verlichting, handdoekradiator",
    "Verlaagd plafond met inbouwspots, ventilatie",
    "Badkamermeubel, spiegel, kraanwerk, hangtoilet",
    "Schilderwerk, afwerking en eindschoonmaak"
   ],
   "en": [
    "Demolition and rubble removal",
    "Plumbing: supply, drainage, connections",
    "Walk-in shower or ultra-flat tray, glass screen",
    "Floor and wall tiling, epoxy grout on request",
    "RGIE-compliant electrics: sockets, LED lighting, towel radiator",
    "False ceiling with recessed spots, ventilation",
    "Vanity unit, mirror, taps, wall-hung WC",
    "Painting, finishing and end-of-site cleaning"
   ]
  },
  "seoTitle": {
   "fr": "Rénovation salle de bain Bruxelles | Apollon Construction",
   "nl": "Badkamerrenovatie Brussel | Apollon Construction",
   "en": "Bathroom renovation Brussels | Apollon Construction"
  },
  "seoDesc": {
   "fr": "Salle de bain clé en main à Bruxelles : démolition, plomberie, électricité, carrelage, douche à l'italienne. Chantier propre, devis gratuit sous 48 h.",
   "nl": "Badkamer sleutel op de deur in Brussel: afbraak, sanitair, elektriciteit, tegelwerk, inloopdouche. Propere werf, gratis offerte binnen 48 u.",
   "en": "Turnkey bathroom in Brussels: demolition, plumbing, electrics, tiling, walk-in shower. Clean site, free quote within 48 h."
  },
  "h1": {
   "fr": "Rénovation de salle de bain à Bruxelles",
   "nl": "Badkamerrenovatie in Brussel",
   "en": "Bathroom renovation in Brussels"
  },
  "badges": {
   "fr": [
    "Devis gratuit sous 48h",
    "TVA 6 % si logement de plus de 10 ans",
    "Équipe propre, pas de sous-traitance",
    "RC Pro & garantie décennale"
   ],
   "nl": [
    "Gratis offerte binnen 48u",
    "6 % btw voor woningen ouder dan 10 jaar",
    "Eigen team, geen onderaanneming",
    "BA verzekerd & tienjarige garantie"
   ],
   "en": [
    "Free quote within 48h",
    "6% VAT on homes older than 10 years",
    "Own team, no subcontracting",
    "Liability insured & 10-year guarantee"
   ]
  },
  "includesTitle": {
   "fr": "Ce que comprend notre rénovation de salle de bain",
   "nl": "Wat onze badkamerrenovatie omvat",
   "en": "What our bathroom renovation includes"
  },
  "body": {
   "fr": [
    {
     "h2": "Une salle de bain clé en main, sans intermédiaire",
     "p": [
      "Beaucoup de rénovations de salle de bain traînent parce qu'il faut coordonner un plombier, un carreleur, un électricien et un plafonneur qui ne se parlent pas. Chez Apollon Construction, ces métiers font partie de la même équipe. Vous avez un seul contact, un seul planning, une seule facture.",
      "Nous intervenons dans les 19 communes de Bruxelles, en Brabant flamand et en Brabant wallon, pour les particuliers, les propriétaires bailleurs et les syndics."
     ]
    },
    {
     "h2": "Des choix qui tiennent dans le temps",
     "p": [
      "Une salle de bain se refait tous les quinze ou vingt ans. Ce qui compte, ce n'est pas seulement le carrelage que l'on voit, mais l'étanchéité sous la douche, la pente d'évacuation, la ventilation et les circuits électriques conformes au RGIE. C'est là que nous passons le plus de temps, parce que c'est là que les problèmes arrivent quand c'est mal fait."
     ]
    }
   ],
   "nl": [
    {
     "h2": "Een sleutel-op-de-deur badkamer, zonder tussenpersoon",
     "p": [
      "Veel badkamerrenovaties slepen aan omdat een loodgieter, een tegelzetter, een elektricien en een stukadoor op elkaar moeten wachten. Bij Apollon Construction zitten die vakmensen in hetzelfde team. U hebt één contactpersoon, één planning, één factuur.",
      "We werken in de 19 Brusselse gemeenten, in Vlaams-Brabant en in Waals-Brabant, voor particulieren, verhuurders en syndici."
     ]
    },
    {
     "h2": "Keuzes die blijven duren",
     "p": [
      "Een badkamer wordt om de vijftien à twintig jaar vernieuwd. Wat telt is niet alleen de tegel die u ziet, maar de waterdichting onder de douche, de afvoerhelling, de ventilatie en de elektrische kringen conform het AREI. Daar besteden we de meeste tijd aan, want daar ontstaan de problemen als het slecht gedaan is."
     ]
    }
   ],
   "en": [
    {
     "h2": "A turnkey bathroom, no middlemen",
     "p": [
      "Many bathroom renovations drag on because a plumber, a tiler, an electrician and a plasterer have to wait for each other. At Apollon Construction these trades are part of the same team. You get one contact, one schedule, one invoice.",
      "We work across the 19 municipalities of Brussels, Flemish Brabant and Walloon Brabant, for homeowners, landlords and building managers."
     ]
    },
    {
     "h2": "Choices that last",
     "p": [
      "A bathroom gets redone every fifteen or twenty years. What matters is not just the tiles you see, but the waterproofing under the shower, the drainage slope, the ventilation and RGIE-compliant electrical circuits. That is where we spend the most time, because that is where problems appear when it is done badly."
     ]
    }
   ]
  },
  "process": {
   "fr": [
    {
     "title": "Visite gratuite",
     "desc": "Nous venons mesurer la pièce, vérifier la plomberie existante et écouter ce que vous voulez."
    },
    {
     "title": "Devis sous 48h",
     "desc": "Un devis poste par poste : démolition, plomberie, carrelage, électricité, finitions. Rien de caché."
    },
    {
     "title": "Chantier",
     "desc": "Une seule équipe du début à la fin. Sols et parties communes protégés, gravats évacués."
    },
    {
     "title": "Réception & garantie",
     "desc": "On vérifie tout ensemble : étanchéité, évacuations, électricité. Garantie décennale."
    }
   ],
   "nl": [
    {
     "title": "Gratis bezoek",
     "desc": "We meten de ruimte op, controleren het bestaande sanitair en luisteren naar wat u wilt."
    },
    {
     "title": "Offerte binnen 48u",
     "desc": "Een offerte post per post: afbraak, sanitair, tegels, elektriciteit, afwerking. Niets verborgen."
    },
    {
     "title": "Werf",
     "desc": "Eén team van begin tot einde. Vloeren en gemene delen beschermd, puin afgevoerd."
    },
    {
     "title": "Oplevering & garantie",
     "desc": "We controleren alles samen: waterdichting, afvoeren, elektriciteit. Tienjarige garantie."
    }
   ],
   "en": [
    {
     "title": "Free site visit",
     "desc": "We measure the room, check the existing plumbing and listen to what you want."
    },
    {
     "title": "Quote within 48h",
     "desc": "An itemised quote: demolition, plumbing, tiling, electrics, finishing. Nothing hidden."
    },
    {
     "title": "Works",
     "desc": "One team from start to finish. Floors and common areas protected, rubble removed."
    },
    {
     "title": "Handover & guarantee",
     "desc": "We check everything together: waterproofing, drains, electrics. 10-year guarantee."
    }
   ]
  },
  "faq": {
   "fr": [
    {
     "q": "Combien coûte une rénovation de salle de bain à Bruxelles ?",
     "a": "Cela dépend de la surface, de l'état de la plomberie existante et des matériaux que vous choisissez (carrelage, meuble, robinetterie). C'est pourquoi nous ne donnons pas de prix au m² : nous venons sur place gratuitement et vous remettons un devis détaillé poste par poste sous 48h, sans engagement."
    },
    {
     "q": "Puis-je bénéficier de la TVA à 6 % ?",
     "a": "Oui, si votre logement a plus de 10 ans et est utilisé principalement comme habitation privée. Le taux réduit est appliqué directement sur la facture."
    },
    {
     "q": "Combien de temps dure le chantier ?",
     "a": "Une salle de bain standard prend généralement deux à trois semaines, selon l'ampleur des travaux et les délais de livraison des matériaux. Le planning est fixé avant le début du chantier."
    },
    {
     "q": "Dois-je acheter les matériaux moi-même ?",
     "a": "Comme vous préférez. Vous pouvez choisir vos carrelages, meubles et robinetterie vous-même ou nous les faire fournir. Dans les deux cas, nous vous conseillons sur ce qui est adapté : format du carrelage, pente de la douche, étanchéité."
    },
    {
     "q": "Intervenez-vous dans les appartements en copropriété ?",
     "a": "Oui. Nous protégeons les parties communes, évacuons les gravats et respectons le règlement de copropriété (horaires, usage de l'ascenseur)."
    },
    {
     "q": "Ma salle de bain a des traces d'humidité, que faire ?",
     "a": "Nous traitons la cause avant de refaire les finitions : ventilation, étanchéité, enduit. Voir notre page rénovation intérieure et traitement de l'humidité."
    }
   ],
   "nl": [
    {
     "q": "Wat kost een badkamerrenovatie in Brussel?",
     "a": "Dat hangt af van de oppervlakte, de staat van het bestaande sanitair en de materialen die u kiest (tegels, meubel, kraanwerk). Daarom geven we geen prijs per m²: we komen gratis ter plaatse en bezorgen u binnen 48u een gedetailleerde offerte post per post, vrijblijvend."
    },
    {
     "q": "Kom ik in aanmerking voor 6 % btw?",
     "a": "Ja, als uw woning ouder is dan 10 jaar en hoofdzakelijk als privéwoning wordt gebruikt. Het verlaagde tarief wordt rechtstreeks op de factuur toegepast."
    },
    {
     "q": "Hoe lang duren de werken?",
     "a": "Een standaard badkamer neemt doorgaans twee tot drie weken in beslag, afhankelijk van de omvang van de werken en de levertermijnen van de materialen. De planning wordt vóór de start vastgelegd."
    },
    {
     "q": "Moet ik de materialen zelf kopen?",
     "a": "Zoals u wilt. U kunt uw tegels, meubels en kraanwerk zelf kiezen of ze door ons laten leveren. In beide gevallen adviseren we u over wat geschikt is: tegelformaat, douchehelling, waterdichting."
    },
    {
     "q": "Werken jullie in appartementen in mede-eigendom?",
     "a": "Ja. We beschermen de gemene delen, voeren het puin af en respecteren het reglement van mede-eigendom (uren, gebruik van de lift)."
    },
    {
     "q": "Mijn badkamer vertoont vochtsporen, wat nu?",
     "a": "We pakken eerst de oorzaak aan voor we de afwerking vernieuwen: ventilatie, waterdichting, pleisterwerk. Zie onze pagina binnenrenovatie en vochtbehandeling."
    }
   ],
   "en": [
    {
     "q": "How much does a bathroom renovation cost in Brussels?",
     "a": "It depends on the surface, the condition of the existing plumbing and the materials you choose (tiles, unit, taps). That is why we do not quote a price per m²: we visit for free and send you a detailed itemised quote within 48h, with no commitment."
    },
    {
     "q": "Can I get the 6% VAT rate?",
     "a": "Yes, if your home is more than 10 years old and mainly used as a private residence. The reduced rate is applied directly on the invoice."
    },
    {
     "q": "How long do the works take?",
     "a": "A standard bathroom usually takes two to three weeks, depending on the scope and material delivery times. The schedule is fixed before the works start."
    },
    {
     "q": "Do I have to buy the materials myself?",
     "a": "As you prefer. You can choose your tiles, furniture and taps yourself or have us supply them. Either way we advise you on what works: tile format, shower slope, waterproofing."
    },
    {
     "q": "Do you work in apartment buildings?",
     "a": "Yes. We protect the common areas, remove the rubble and respect the building rules (hours, use of the lift)."
    },
    {
     "q": "My bathroom shows signs of damp, what should I do?",
     "a": "We treat the cause before redoing the finishes: ventilation, waterproofing, plaster. See our interior renovation and damp treatment page."
    }
   ]
  },
  "caseStudy": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "formOptions": {
   "fr": [
    "Salle de bain complète",
    "Douche à l'italienne",
    "Carrelage sol et murs",
    "Plomberie & sanitaires",
    "Salle de douche / WC",
    "Autre"
   ],
   "nl": [
    "Volledige badkamer",
    "Inloopdouche",
    "Vloer- en wandtegels",
    "Sanitair & loodgieterij",
    "Doucheruimte / WC",
    "Andere"
   ],
   "en": [
    "Complete bathroom",
    "Walk-in shower",
    "Floor and wall tiling",
    "Plumbing & sanitary",
    "Shower room / WC",
    "Other"
   ]
  },
  "ctaTitle": {
   "fr": "Parlons de votre salle de bain",
   "nl": "Laten we het over uw badkamer hebben",
   "en": "Let's talk about your bathroom"
  },
  "ctaText": {
   "fr": "Réponse sous 24h, devis gratuit sous 48h. Envoyez-nous quelques photos et les dimensions de la pièce, on s'occupe du reste.",
   "nl": "Antwoord binnen 24u, gratis offerte binnen 48u. Stuur ons enkele foto's en de afmetingen van de ruimte, wij doen de rest.",
   "en": "Reply within 24h, free quote within 48h. Send us a few photos and the room dimensions, we take care of the rest."
  }
 },
 {
  "id": "electricite-rgie",
  "focus": "core",
  "primes": false,
  "img": "/uploads/avant6.jpg",
  "gallery": [],
  "related": [
   "salle-de-bain",
   "renovation-interieure",
   "energie"
  ],
  "name": {
   "fr": "Électricité & RGIE",
   "nl": "Elektriciteit & AREI",
   "en": "Electrics & RGIE"
  },
  "tag": {
   "fr": "Mise en conformité, tableau, contrôle",
   "nl": "Conformering, zekeringkast, keuring",
   "en": "Compliance, panel, inspection"
  },
  "intro": {
   "fr": "Rapport de contrôle non conforme ? Vente ou achat d'une maison ? Installation vétuste ? Apollon Construction remet votre installation électrique aux normes du RGIE : tableau, différentiels, mise à la terre, circuits, schémas. Nous préparons le contrôle par l'organisme agréé et vous accompagnons jusqu'au rapport conforme.",
   "nl": "Niet-conform keuringsverslag? Verkoop of aankoop van een woning? Verouderde installatie? Apollon Construction brengt uw elektrische installatie in orde volgens het AREI: zekeringkast, differentieelschakelaars, aarding, kringen, schema's. We bereiden de keuring door het erkend organisme voor en begeleiden u tot het conforme verslag.",
   "en": "Non-compliant inspection report? Buying or selling a house? Outdated installation? Apollon Construction brings your electrical installation up to the Belgian RGIE standard: panel, RCDs, earthing, circuits, diagrams. We prepare the inspection by the approved body and support you until the report is compliant."
  },
  "includes": {
   "fr": [
    "Lecture du rapport de contrôle et chiffrage précis des infractions à corriger",
    "Remplacement ou mise à niveau du tableau électrique : différentiels 300 mA et 30 mA, disjoncteurs",
    "Mise à la terre, liaison équipotentielle, piquet de terre",
    "Circuits dédiés : machine à laver, four, plaques, pompe à chaleur, borne de recharge",
    "Rénovation complète d'installation, en monophasé ou en triphasé",
    "Schémas unifilaire et de position, dossier prêt pour l'organisme agréé",
    "Prise de rendez-vous et présence lors du contrôle (Vinçotte, ACEG, BTV…)",
    "Dépannage et diagnostic de panne"
   ],
   "nl": [
    "Lezen van het keuringsverslag en nauwkeurige begroting van de inbreuken",
    "Vervanging of upgrade van de zekeringkast: differentieelschakelaars 300 mA en 30 mA, automaten",
    "Aarding, equipotentiaalverbinding, aardingspin",
    "Aparte kringen: wasmachine, oven, kookplaat, warmtepomp, laadpaal",
    "Volledige renovatie van de installatie, monofasig of driefasig",
    "Eendraads- en situatieschema's, dossier klaar voor het erkend organisme",
    "Afspraak en aanwezigheid bij de keuring (Vinçotte, ACEG, BTV…)",
    "Depannage en diagnose van storingen"
   ],
   "en": [
    "Reading the inspection report and precise pricing of the violations to fix",
    "Replacing or upgrading the electrical panel: 300 mA and 30 mA RCDs, circuit breakers",
    "Earthing, equipotential bonding, earth rod",
    "Dedicated circuits: washing machine, oven, hob, heat pump, EV charger",
    "Full rewiring, single-phase or three-phase",
    "Single-line and location diagrams, file ready for the approved body",
    "Booking and attending the inspection (Vinçotte, ACEG, BTV…)",
    "Troubleshooting and fault diagnosis"
   ]
  },
  "seoTitle": {
   "fr": "Électricien & mise en conformité RGIE Bruxelles | Apollon",
   "nl": "Elektricien & AREI-keuring Brussel | Apollon Construction",
   "en": "Electrician & RGIE compliance Brussels | Apollon"
  },
  "seoDesc": {
   "fr": "Mise en conformité RGIE, tableau électrique, rénovation complète de l'installation à Bruxelles et en Brabant. Certificat garanti, devis sous 48 h.",
   "nl": "AREI-conformering, zekeringkast, volledige vernieuwing van de installatie in Brussel en Brabant. Keuringsattest gegarandeerd, offerte binnen 48 u.",
   "en": "RGIE compliance, fuse board, full rewiring in Brussels and Brabant. Inspection certificate guaranteed, quote within 48 h."
  },
  "h1": {
   "fr": "Mise en conformité électrique RGIE à Bruxelles",
   "nl": "Elektrische installatie conform AREI in Brussel",
   "en": "RGIE electrical compliance in Brussels"
  },
  "badges": {
   "fr": [
    "Réponse sous 24h",
    "Devis gratuit poste par poste",
    "Schémas unifilaire et de position fournis",
    "TVA 6 % si logement de plus de 10 ans"
   ],
   "nl": [
    "Antwoord binnen 24u",
    "Gratis offerte post per post",
    "Eendraads- en situatieschema's inbegrepen",
    "6 % btw voor woningen ouder dan 10 jaar"
   ],
   "en": [
    "Reply within 24h",
    "Free itemised quote",
    "Single-line and location diagrams included",
    "6% VAT on homes older than 10 years"
   ]
  },
  "includesTitle": {
   "fr": "Notre intervention",
   "nl": "Onze tussenkomst",
   "en": "What we do"
  },
  "body": {
   "fr": [
    {
     "h2": "Quand faut-il une mise en conformité RGIE ?",
     "p": [
      "À la vente d'une habitation dont l'installation électrique date d'avant le 1er octobre 1981, un contrôle par un organisme agréé est obligatoire. Si le rapport est non conforme, l'acheteur dispose de 18 mois à partir de l'acte pour faire réaliser les travaux et un nouveau contrôle.",
      "En dehors d'une vente, une mise en conformité s'impose après une rénovation lourde, lors d'une augmentation de puissance, si votre installation présente des infractions (absence de différentiel 30 mA pour la salle de bain, mise à la terre insuffisante, tableau sans schémas) ou simplement parce que le contrôle périodique de 25 ans arrive à échéance."
     ]
    },
    {
     "h2": "Ce qu'on vous dit clairement",
     "p": [
      "Un rapport non conforme ne veut pas dire tout refaire. Nous lisons le rapport point par point, séparons ce qui est obligatoire de ce qui est conseillé et chiffrons chaque poste. Vous décidez en connaissance de cause."
     ]
    }
   ],
   "nl": [
    {
     "h2": "Wanneer is een AREI-conformering nodig?",
     "p": [
      "Bij de verkoop van een woning waarvan de elektrische installatie dateert van vóór 1 oktober 1981 is een keuring door een erkend organisme verplicht. Is het verslag niet conform, dan heeft de koper 18 maanden vanaf de akte om de werken te laten uitvoeren en een nieuwe keuring te laten doen.",
      "Buiten een verkoop is een conformering nodig na een zware renovatie, bij een vermogensverhoging, als uw installatie inbreuken vertoont (geen differentieel van 30 mA voor de badkamer, onvoldoende aarding, zekeringkast zonder schema's) of gewoon omdat de periodieke keuring van 25 jaar vervalt."
     ]
    },
    {
     "h2": "Wat we u duidelijk zeggen",
     "p": [
      "Een niet-conform verslag betekent niet dat alles opnieuw moet. We lezen het verslag punt per punt, scheiden wat verplicht is van wat aangeraden is en begroten elke post. U beslist met kennis van zaken."
     ]
    }
   ],
   "en": [
    {
     "h2": "When do you need RGIE compliance work?",
     "p": [
      "When selling a home whose electrical installation dates from before 1 October 1981, an inspection by an approved body is mandatory. If the report is non-compliant, the buyer has 18 months from the deed to have the works done and a new inspection carried out.",
      "Outside a sale, compliance work is needed after a major renovation, when increasing the power supply, if your installation shows violations (no 30 mA RCD for the bathroom, insufficient earthing, panel without diagrams) or simply because the 25-year periodic inspection is due."
     ]
    },
    {
     "h2": "What we tell you plainly",
     "p": [
      "A non-compliant report does not mean redoing everything. We read the report point by point, separate what is mandatory from what is advisable and price each item. You decide with full knowledge."
     ]
    }
   ]
  },
  "process": {
   "fr": [
    {
     "title": "Envoyez le rapport",
     "desc": "Votre rapport de contrôle ou quelques photos du tableau suffisent pour une première estimation."
    },
    {
     "title": "Visite & devis sous 48h",
     "desc": "On vérifie sur place, on chiffre chaque infraction. Obligatoire et conseillé sont séparés."
    },
    {
     "title": "Travaux",
     "desc": "Planifiés avec vous, coupures réduites au minimum, chantier propre."
    },
    {
     "title": "Contrôle & rapport conforme",
     "desc": "Dossier et schémas prêts, rendez-vous avec l'organisme agréé, présence le jour J."
    }
   ],
   "nl": [
    {
     "title": "Stuur het verslag",
     "desc": "Uw keuringsverslag of enkele foto's van de kast volstaan voor een eerste inschatting."
    },
    {
     "title": "Bezoek & offerte binnen 48u",
     "desc": "We controleren ter plaatse en begroten elke inbreuk. Verplicht en aangeraden worden gescheiden."
    },
    {
     "title": "Werken",
     "desc": "Samen met u gepland, onderbrekingen tot een minimum beperkt, propere werf."
    },
    {
     "title": "Keuring & conform verslag",
     "desc": "Dossier en schema's klaar, afspraak met het erkend organisme, aanwezig op de dag zelf."
    }
   ],
   "en": [
    {
     "title": "Send the report",
     "desc": "Your inspection report or a few photos of the panel are enough for a first estimate."
    },
    {
     "title": "Visit & quote within 48h",
     "desc": "We check on site and price each violation. Mandatory and advisable are kept separate."
    },
    {
     "title": "Works",
     "desc": "Scheduled with you, power cuts kept to a minimum, clean site."
    },
    {
     "title": "Inspection & compliant report",
     "desc": "File and diagrams ready, appointment with the approved body, present on the day."
    }
   ]
  },
  "faq": {
   "fr": [
    {
     "q": "Qu'est-ce que le RGIE ?",
     "a": "Le Règlement Général sur les Installations Électriques est la réglementation belge qui fixe les règles de sécurité des installations électriques. Depuis le 1er juin 2020, il est organisé en trois Livres ; le Livre 1 concerne les installations domestiques."
    },
    {
     "q": "Le contrôle électrique est-il obligatoire ?",
     "a": "Oui dans plusieurs cas : vente d'un logement dont l'installation date d'avant 1981, nouvelle installation ou modification importante, augmentation de puissance, et contrôle périodique tous les 25 ans pour les installations domestiques."
    },
    {
     "q": "Combien de temps ai-je après l'achat pour me mettre en conformité ?",
     "a": "18 mois à partir de l'acte de vente pour faire réaliser les travaux et faire recontrôler l'installation par un organisme agréé."
    },
    {
     "q": "Faut-il refaire toute l'installation ?",
     "a": "Rarement. Souvent, corriger les infractions listées dans le rapport suffit : tableau, différentiels, mise à la terre, quelques circuits. Nous vous disons clairement ce qui est obligatoire et ce qui est simplement conseillé."
    },
    {
     "q": "Combien coûte une mise en conformité ?",
     "a": "Tout dépend du nombre d'infractions et de l'état de l'installation. Envoyez-nous le rapport de contrôle : nous chiffrons précisément chaque point, gratuitement et sans engagement."
    },
    {
     "q": "Faites-vous aussi le contrôle ?",
     "a": "Non : le contrôle doit être réalisé par un organisme agréé indépendant. Nous préparons le dossier et les schémas, prenons le rendez-vous si vous le souhaitez et sommes présents le jour du contrôle."
    },
    {
     "q": "Mon ancien tableau contient-il de l'amiante ?",
     "a": "Les anciens tableaux à plaque et certains appareillages en bakélite peuvent en contenir. Nous le signalons lors de la visite et organisons le retrait dans les règles avant les travaux."
    }
   ],
   "nl": [
    {
     "q": "Wat is het AREI?",
     "a": "Het Algemeen Reglement op de Elektrische Installaties is de Belgische reglementering die de veiligheidsregels voor elektrische installaties vastlegt. Sinds 1 juni 2020 bestaat het uit drie Boeken; Boek 1 betreft de huishoudelijke installaties."
    },
    {
     "q": "Is de elektrische keuring verplicht?",
     "a": "Ja, in meerdere gevallen: verkoop van een woning met een installatie van vóór 1981, nieuwe installatie of belangrijke wijziging, vermogensverhoging, en periodieke keuring om de 25 jaar voor huishoudelijke installaties."
    },
    {
     "q": "Hoeveel tijd heb ik na de aankoop om in orde te zijn?",
     "a": "18 maanden vanaf de verkoopakte om de werken te laten uitvoeren en de installatie opnieuw te laten keuren door een erkend organisme."
    },
    {
     "q": "Moet de hele installatie vernieuwd worden?",
     "a": "Zelden. Vaak volstaat het om de inbreuken uit het verslag weg te werken: kast, differentieelschakelaars, aarding, enkele kringen. We zeggen u duidelijk wat verplicht is en wat enkel aangeraden."
    },
    {
     "q": "Wat kost een conformering?",
     "a": "Dat hangt af van het aantal inbreuken en de staat van de installatie. Stuur ons het keuringsverslag: we begroten elk punt nauwkeurig, gratis en vrijblijvend."
    },
    {
     "q": "Doen jullie ook de keuring?",
     "a": "Nee: de keuring moet door een onafhankelijk erkend organisme gebeuren. Wij bereiden het dossier en de schema's voor, maken de afspraak als u dat wenst en zijn aanwezig op de dag van de keuring."
    },
    {
     "q": "Bevat mijn oude zekeringkast asbest?",
     "a": "Oude kasten met plaat en sommige bakelieten apparatuur kunnen asbest bevatten. We melden het tijdens het bezoek en organiseren de verwijdering volgens de regels vóór de werken."
    }
   ],
   "en": [
    {
     "q": "What is the RGIE?",
     "a": "The Règlement Général sur les Installations Électriques (AREI in Dutch) is the Belgian regulation setting the safety rules for electrical installations. Since 1 June 2020 it is organised in three Books; Book 1 covers domestic installations."
    },
    {
     "q": "Is the electrical inspection mandatory?",
     "a": "Yes, in several cases: sale of a home with an installation dating from before 1981, new installation or major modification, power increase, and periodic inspection every 25 years for domestic installations."
    },
    {
     "q": "How long do I have after buying to become compliant?",
     "a": "18 months from the deed of sale to have the works done and the installation re-inspected by an approved body."
    },
    {
     "q": "Do I have to rewire everything?",
     "a": "Rarely. Often fixing the violations listed in the report is enough: panel, RCDs, earthing, a few circuits. We tell you clearly what is mandatory and what is merely advisable."
    },
    {
     "q": "How much does compliance work cost?",
     "a": "It depends on the number of violations and the condition of the installation. Send us the inspection report: we price each point precisely, free of charge and without commitment."
    },
    {
     "q": "Do you also carry out the inspection?",
     "a": "No: the inspection must be carried out by an independent approved body. We prepare the file and diagrams, book the appointment if you wish and are present on inspection day."
    },
    {
     "q": "Does my old panel contain asbestos?",
     "a": "Old board-type panels and some bakelite equipment may contain asbestos. We flag it during the visit and organise proper removal before the works."
    }
   ]
  },
  "caseStudy": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "formOptions": {
   "fr": [
    "Mise en conformité RGIE",
    "Nouveau tableau électrique",
    "Rénovation complète de l'installation",
    "Circuit dédié (four, machine à laver, borne, PAC)",
    "Dépannage électrique",
    "Autre"
   ],
   "nl": [
    "AREI-conformering",
    "Nieuwe zekeringkast",
    "Volledige renovatie van de installatie",
    "Aparte kring (oven, wasmachine, laadpaal, warmtepomp)",
    "Elektrische depannage",
    "Andere"
   ],
   "en": [
    "RGIE compliance",
    "New electrical panel",
    "Full rewiring",
    "Dedicated circuit (oven, washing machine, EV charger, heat pump)",
    "Electrical repair",
    "Other"
   ]
  },
  "ctaTitle": {
   "fr": "Envoyez-nous votre rapport de contrôle",
   "nl": "Stuur ons uw keuringsverslag",
   "en": "Send us your inspection report"
  },
  "ctaText": {
   "fr": "Réponse sous 24h. Chaque infraction est chiffrée séparément, vous savez exactement ce qui est obligatoire.",
   "nl": "Antwoord binnen 24u. Elke inbreuk wordt apart begroot, u weet precies wat verplicht is.",
   "en": "Reply within 24h. Each violation is priced separately, so you know exactly what is mandatory."
  }
 },
 {
  "id": "cuisine",
  "focus": "core",
  "primes": false,
  "img": "/uploads/apres3.jpg",
  "gallery": [
   "/uploads/apres4.jpg",
   "/images/chantier-cuisine.jpg",
   "/uploads/apres1.jpg"
  ],
  "related": [
   "renovation-interieure",
   "electricite-rgie",
   "salle-de-bain"
  ],
  "name": {
   "fr": "Cuisine",
   "nl": "Keuken",
   "en": "Kitchen"
  },
  "tag": {
   "fr": "Le cœur de la maison, repensé",
   "nl": "Het hart van het huis, herdacht",
   "en": "The heart of the home, rethought"
  },
  "intro": {
   "fr": "Ouverture sur le séjour, îlot central, nouveau plafond avec éclairage intégré, rangements optimisés : nous réalisons votre cuisine de A à Z, techniques comprises. Un seul interlocuteur du plan à la pose, un chantier protégé du premier au dernier jour.",
   "nl": "Open naar de leefruimte, centraal eiland, nieuw plafond met geïntegreerde verlichting, geoptimaliseerde opbergruimte: wij realiseren uw keuken van A tot Z, technieken inbegrepen. Eén aanspreekpunt van plan tot plaatsing, een beschermde werf van de eerste tot de laatste dag.",
   "en": "Opened onto the living room, central island, new ceiling with integrated lighting, optimised storage: we build your kitchen from A to Z, technical works included. One contact from plan to installation, a site protected from the first day to the last."
  },
  "includes": {
   "fr": [
    "Plans et implantation sur mesure, conseil sur les matériaux",
    "Démolition, évacuation, ouverture de murs (avec étude si porteur)",
    "Électricité conforme RGIE : circuits dédiés four, plaques, lave-vaisselle",
    "Plomberie, évacuation, raccordement gaz",
    "Faux plafond, spots encastrés, corniches, hotte encastrée",
    "Pose du mobilier et des plans de travail",
    "Crédence, carrelage ou parquet, peinture des murs",
    "Nettoyage de fin de chantier et réception ensemble"
   ],
   "nl": [
    "Plannen en indeling op maat, materiaaladvies",
    "Afbraak, afvoer, openen van muren (met studie indien dragend)",
    "Elektriciteit conform AREI: aparte kringen oven, kookplaat, vaatwasser",
    "Sanitair, afvoer, gasaansluiting",
    "Verlaagd plafond, inbouwspots, sierlijsten, inbouwdampkap",
    "Plaatsing van meubels en werkbladen",
    "Spatwand, tegels of parket, schilderwerk",
    "Eindschoonmaak en gezamenlijke oplevering"
   ],
   "en": [
    "Custom plans and layout, advice on materials",
    "Demolition, removal, opening of walls (with a study if load-bearing)",
    "RGIE-compliant electrics: dedicated circuits for oven, hob, dishwasher",
    "Plumbing, drainage, gas connection",
    "False ceiling, recessed spots, cornices, built-in hood",
    "Installation of units and worktops",
    "Splashback, tiles or parquet, wall painting",
    "End-of-site cleaning and joint handover"
   ]
  },
  "seoTitle": {
   "fr": "Rénovation de cuisine à Bruxelles | Apollon Construction",
   "nl": "Keukenrenovatie in Brussel | Apollon Construction",
   "en": "Kitchen renovation in Brussels | Apollon Construction"
  },
  "seoDesc": {
   "fr": "Cuisine équipée sur mesure à Bruxelles : démolition, électricité, plomberie, faux plafond, pose du mobilier, crédence, sol. Devis gratuit, TVA 6 %.",
   "nl": "Keuken op maat in Brussel: afbraak, elektriciteit, sanitair, verlaagd plafond, plaatsing meubels, spatwand, vloer. Gratis offerte, 6 % btw.",
   "en": "Bespoke fitted kitchen in Brussels: demolition, electrics, plumbing, false ceiling, unit installation, splashback, flooring. Free quote, 6% VAT."
  },
  "h1": {
   "fr": "Rénovation de cuisine à Bruxelles",
   "nl": "Keukenrenovatie in Brussel",
   "en": "Kitchen renovation in Brussels"
  },
  "badges": {
   "fr": [
    "Devis gratuit sous 48h",
    "TVA 6 % si logement de plus de 10 ans",
    "Électricité conforme RGIE",
    "Équipe propre, pas de sous-traitance"
   ],
   "nl": [
    "Gratis offerte binnen 48u",
    "6 % btw voor woningen ouder dan 10 jaar",
    "Elektriciteit conform AREI",
    "Eigen team, geen onderaanneming"
   ],
   "en": [
    "Free quote within 48h",
    "6% VAT on homes older than 10 years",
    "RGIE-compliant electrics",
    "Own team, no subcontracting"
   ]
  },
  "includesTitle": {
   "fr": "Ce que comprend notre rénovation de cuisine",
   "nl": "Wat onze keukenrenovatie omvat",
   "en": "What our kitchen renovation includes"
  },
  "body": {
   "fr": [
    {
     "h2": "La cuisine, c'est d'abord de la technique",
     "p": [
      "Ce qu'on voit — les façades, le plan de travail, la crédence — représente la moitié du travail. L'autre moitié est derrière : les circuits électriques dédiés, les arrivées et évacuations d'eau au bon endroit, l'extraction de la hotte, un plafond qui intègre proprement l'éclairage. C'est ce qui fait qu'une cuisine se vit bien pendant vingt ans, et c'est là que nous passons le plus de temps.",
      "Nous coordonnons électricien, plombier, plafonneur et menuisier dans la même équipe : un seul planning, une seule facture, personne qui se renvoie la responsabilité."
     ]
    },
    {
     "h2": "Vous avez déjà commandé votre cuisine ? Très bien.",
     "p": [
      "Beaucoup de clients choisissent leurs meubles chez un cuisiniste et nous confient la préparation de la pièce et la pose : démolition, techniques, plafond, sol, peinture, puis montage. Nous travaillons à partir de leur plan et vérifions les raccordements avant la livraison, pour que tout tombe juste le jour du montage."
     ]
    }
   ],
   "nl": [
    {
     "h2": "Een keuken is eerst en vooral techniek",
     "p": [
      "Wat u ziet — de fronten, het werkblad, de spatwand — is de helft van het werk. De andere helft zit erachter: aparte elektrische kringen, water op de juiste plaats, de afzuiging van de dampkap, een plafond dat de verlichting netjes integreert. Dat maakt dat een keuken twintig jaar goed meegaat, en daar besteden we de meeste tijd aan.",
      "Wij coördineren elektricien, loodgieter, stukadoor en schrijnwerker in hetzelfde team: één planning, één factuur, niemand die de verantwoordelijkheid doorschuift."
     ]
    },
    {
     "h2": "Uw keuken al besteld? Prima.",
     "p": [
      "Veel klanten kiezen hun meubels bij een keukenzaak en vertrouwen ons de voorbereiding van de ruimte en de plaatsing toe: afbraak, technieken, plafond, vloer, schilderwerk, daarna montage. We werken op basis van hun plan en controleren de aansluitingen vóór de levering, zodat alles klopt op de dag van de montage."
     ]
    }
   ],
   "en": [
    {
     "h2": "A kitchen is technical work first",
     "p": [
      "What you see — the fronts, the worktop, the splashback — is half the job. The other half is behind it: dedicated electrical circuits, water supply and drainage in the right place, hood extraction, a ceiling that integrates the lighting cleanly. That is what makes a kitchen pleasant to live in for twenty years, and where we spend the most time.",
      "We coordinate the electrician, plumber, plasterer and joiner within the same team: one schedule, one invoice, nobody passing the buck."
     ]
    },
    {
     "h2": "Already ordered your kitchen? Perfect.",
     "p": [
      "Many clients choose their units from a kitchen retailer and entrust us with preparing the room and installing: demolition, technical works, ceiling, floor, painting, then assembly. We work from their plan and check the connections before delivery, so everything fits on installation day."
     ]
    }
   ]
  },
  "process": {
   "fr": [
    {
     "title": "Visite gratuite",
     "desc": "On mesure la pièce, on vérifie les arrivées d'eau, l'électricité, l'extraction, et on écoute ce que vous voulez."
    },
    {
     "title": "Devis sous 48h",
     "desc": "Poste par poste : démolition, électricité, plomberie, plafond, pose, finitions. Rien de caché."
    },
    {
     "title": "Chantier",
     "desc": "Une seule équipe. Mobilier et plans de travail protégés, gravats évacués, coupures d'eau et d'électricité planifiées."
    },
    {
     "title": "Réception",
     "desc": "Tout est testé ensemble : électricité, eau, hotte, éclairage. Garantie sur les travaux."
    }
   ],
   "nl": [
    {
     "title": "Gratis bezoek",
     "desc": "We meten de ruimte op, controleren water, elektriciteit en afzuiging, en luisteren naar wat u wilt."
    },
    {
     "title": "Offerte binnen 48u",
     "desc": "Post per post: afbraak, elektriciteit, sanitair, plafond, plaatsing, afwerking. Niets verborgen."
    },
    {
     "title": "Werf",
     "desc": "Eén team. Meubels en werkbladen beschermd, puin afgevoerd, onderbrekingen van water en stroom gepland."
    },
    {
     "title": "Oplevering",
     "desc": "Alles wordt samen getest: elektriciteit, water, dampkap, verlichting. Garantie op de werken."
    }
   ],
   "en": [
    {
     "title": "Free site visit",
     "desc": "We measure the room, check water, electrics and extraction, and listen to what you want."
    },
    {
     "title": "Quote within 48h",
     "desc": "Itemised: demolition, electrics, plumbing, ceiling, installation, finishes. Nothing hidden."
    },
    {
     "title": "Works",
     "desc": "One team. Units and worktops protected, rubble removed, water and power cuts planned."
    },
    {
     "title": "Handover",
     "desc": "Everything is tested together: electrics, water, hood, lighting. Guarantee on the works."
    }
   ]
  },
  "faq": {
   "fr": [
    {
     "q": "Combien coûte une rénovation de cuisine à Bruxelles ?",
     "a": "Tout dépend de ce qui change : une pose et des finitions coûtent bien moins qu'une ouverture de mur avec déplacement des techniques. Nous ne donnons pas de prix au m² : nous venons gratuitement, puis remettons un devis poste par poste sous 48h."
    },
    {
     "q": "Combien de temps dure le chantier ?",
     "a": "Une cuisine avec techniques à déplacer prend en général deux à quatre semaines, montage compris. Le planning est fixé avant le début et intègre les délais de livraison de vos meubles."
    },
    {
     "q": "Pouvez-vous ouvrir le mur entre la cuisine et le séjour ?",
     "a": "Oui. Si le mur est porteur, une étude de stabilité est nécessaire et nous la coordonnons ; le devis le précise avant que vous décidiez."
    },
    {
     "q": "Faites-vous uniquement la pose de meubles achetés ailleurs ?",
     "a": "Oui, à condition de préparer la pièce nous-mêmes (techniques, plafond, sol) pour garantir le résultat. Nous travaillons à partir du plan de votre cuisiniste."
    },
    {
     "q": "Puis-je bénéficier de la TVA à 6 % ?",
     "a": "Oui si le logement a plus de 10 ans et sert principalement d'habitation privée. Le taux réduit s'applique aux travaux ; le mobilier fourni séparément reste à 21 %."
    }
   ],
   "nl": [
    {
     "q": "Wat kost een keukenrenovatie in Brussel?",
     "a": "Dat hangt af van wat er verandert: plaatsing en afwerking kosten veel minder dan een muur openen en de technieken verplaatsen. We geven geen prijs per m²: we komen gratis langs en bezorgen binnen 48u een offerte post per post."
    },
    {
     "q": "Hoe lang duren de werken?",
     "a": "Een keuken met te verplaatsen technieken duurt doorgaans twee tot vier weken, montage inbegrepen. De planning wordt vóór de start vastgelegd en houdt rekening met de levertermijn van uw meubels."
    },
    {
     "q": "Kunnen jullie de muur tussen keuken en leefruimte openen?",
     "a": "Ja. Als de muur dragend is, is een stabiliteitsstudie nodig en coördineren wij die; de offerte vermeldt dit vóór u beslist."
    },
    {
     "q": "Plaatsen jullie ook enkel meubels die elders gekocht zijn?",
     "a": "Ja, op voorwaarde dat we de ruimte zelf voorbereiden (technieken, plafond, vloer) om het resultaat te garanderen. We werken op basis van het plan van uw keukenzaak."
    },
    {
     "q": "Kom ik in aanmerking voor 6 % btw?",
     "a": "Ja, als de woning ouder is dan 10 jaar en hoofdzakelijk als privéwoning dient. Het verlaagde tarief geldt voor de werken; apart geleverde meubels blijven aan 21 %."
    }
   ],
   "en": [
    {
     "q": "How much does a kitchen renovation cost in Brussels?",
     "a": "It depends on what changes: installation and finishes cost far less than opening a wall and moving the services. We don't quote per m²: we visit for free, then send an itemised quote within 48h."
    },
    {
     "q": "How long do the works take?",
     "a": "A kitchen with services to move usually takes two to four weeks, assembly included. The schedule is fixed before the start and includes your units' delivery time."
    },
    {
     "q": "Can you open the wall between the kitchen and the living room?",
     "a": "Yes. If the wall is load-bearing, a structural study is required and we coordinate it; the quote states this before you decide."
    },
    {
     "q": "Do you only install units bought elsewhere?",
     "a": "Yes, provided we prepare the room ourselves (services, ceiling, floor) to guarantee the result. We work from your retailer's plan."
    },
    {
     "q": "Can I get the 6% VAT rate?",
     "a": "Yes, if the home is more than 10 years old and mainly used as a private residence. The reduced rate applies to the works; units supplied separately stay at 21%."
    }
   ]
  },
  "caseStudy": {
   "fr": {
    "kicker": "Chantier récent",
    "h2": "Cuisine — plafond, éclairage et peinture",
    "p": "Nouveau plafond avec caisson lumineux intégré, spots encastrés, corniches, climatisation intégrée et mise en peinture complète des murs. Mobilier et plans de travail protégés du premier au dernier jour.",
    "images": [
     {
      "src": "/uploads/avant3.jpg",
      "alt": "Cuisine avant travaux — plafond à refaire, murs à peindre",
      "caption": "Avant — plafond et murs"
     },
     {
      "src": "/uploads/apres1.jpg",
      "alt": "Cuisine après travaux — caisson lumineux et spots encastrés",
      "caption": "Après — plafond, spots, peinture"
     },
     {
      "src": "/uploads/avant4.jpg",
      "alt": "Chantier en cours — protections et préparation du plafond",
      "caption": "Pendant — protections en place"
     },
     {
      "src": "/uploads/apres3.jpg",
      "alt": "Cuisine terminée, vue depuis la porte",
      "caption": "Après — vue d'ensemble"
     }
    ]
   },
   "nl": {
    "kicker": "Recente werf",
    "h2": "Keuken — plafond, verlichting en schilderwerk",
    "p": "Nieuw plafond met geïntegreerde lichtkoof, inbouwspots, sierlijsten, ingebouwde airco en volledig schilderwerk van de muren. Meubels en werkbladen beschermd van de eerste tot de laatste dag.",
    "images": [
     {
      "src": "/uploads/avant3.jpg",
      "alt": "Keuken vóór de werken — plafond te vernieuwen, muren te schilderen",
      "caption": "Vóór — plafond en muren"
     },
     {
      "src": "/uploads/apres1.jpg",
      "alt": "Keuken na de werken — lichtkoof en inbouwspots",
      "caption": "Na — plafond, spots, schilderwerk"
     },
     {
      "src": "/uploads/avant4.jpg",
      "alt": "Werf in uitvoering — beschermingen en voorbereiding van het plafond",
      "caption": "Tijdens — beschermingen geplaatst"
     },
     {
      "src": "/uploads/apres3.jpg",
      "alt": "Afgewerkte keuken, zicht vanaf de deur",
      "caption": "Na — overzicht"
     }
    ]
   },
   "en": {
    "kicker": "Recent project",
    "h2": "Kitchen — ceiling, lighting and painting",
    "p": "New ceiling with integrated light box, recessed spots, cornices, built-in air conditioning and full repainting of the walls. Units and worktops protected from the first day to the last.",
    "images": [
     {
      "src": "/uploads/avant3.jpg",
      "alt": "Kitchen before works — ceiling to redo, walls to paint",
      "caption": "Before — ceiling and walls"
     },
     {
      "src": "/uploads/apres1.jpg",
      "alt": "Kitchen after works — light box and recessed spots",
      "caption": "After — ceiling, spots, painting"
     },
     {
      "src": "/uploads/avant4.jpg",
      "alt": "Works in progress — protections and ceiling preparation",
      "caption": "During — protections in place"
     },
     {
      "src": "/uploads/apres3.jpg",
      "alt": "Finished kitchen, view from the door",
      "caption": "After — overview"
     }
    ]
   }
  },
  "formOptions": {
   "fr": [
    "Cuisine complète",
    "Préparation + pose de cuisine",
    "Ouverture de mur",
    "Plafond, éclairage, peinture",
    "Autre"
   ],
   "nl": [
    "Volledige keuken",
    "Voorbereiding + plaatsing keuken",
    "Muur openen",
    "Plafond, verlichting, schilderwerk",
    "Andere"
   ],
   "en": [
    "Complete kitchen",
    "Preparation + kitchen installation",
    "Wall opening",
    "Ceiling, lighting, painting",
    "Other"
   ]
  },
  "ctaTitle": {
   "fr": "Parlons de votre cuisine",
   "nl": "Laten we het over uw keuken hebben",
   "en": "Let's talk about your kitchen"
  },
  "ctaText": {
   "fr": "Réponse sous 24h, devis gratuit sous 48h. Envoyez-nous le plan ou quelques photos de la pièce.",
   "nl": "Antwoord binnen 24u, gratis offerte binnen 48u. Stuur ons het plan of enkele foto's van de ruimte.",
   "en": "Reply within 24h, free quote within 48h. Send us the plan or a few photos of the room."
  }
 },
 {
  "id": "renovation-complete",
  "focus": "core",
  "primes": false,
  "img": "/uploads/avant5.jpg",
  "gallery": [
   "/uploads/apres1.jpg",
   "/images/chantier-renovation.jpg"
  ],
  "related": [
   "renovation-interieure",
   "salle-de-bain",
   "cuisine"
  ],
  "name": {
   "fr": "Rénovation complète",
   "nl": "Totaalrenovatie",
   "en": "Complete renovation"
  },
  "tag": {
   "fr": "Clé en main, avant vente ou location",
   "nl": "Sleutel op de deur, vóór verkoop of verhuur",
   "en": "Turnkey, before sale or letting"
  },
  "intro": {
   "fr": "Appartement à remettre à neuf avant une vente ou une location, maison à rénover de A à Z, bureau à transformer : nous pilotons l'ensemble du projet — démolition, techniques, plafonnage, sols, peinture, salle de bain, cuisine — avec une seule équipe et un seul numéro à appeler.",
   "nl": "Een appartement opknappen vóór verkoop of verhuur, een woning van A tot Z renoveren, een kantoor verbouwen: wij sturen het volledige project — afbraak, technieken, pleisterwerk, vloeren, schilderwerk, badkamer, keuken — met één team en één nummer om te bellen.",
   "en": "A flat to refurbish before a sale or letting, a house to renovate from A to Z, an office to transform: we run the whole project — demolition, services, plastering, flooring, painting, bathroom, kitchen — with one team and one number to call."
  },
  "includes": {
   "fr": [
    "Démolition, évacuation et mise en conformité",
    "Électricité RGIE, plomberie et chauffage",
    "Plafonnage, faux plafonds, cloisons",
    "Sols : carrelage, parquet, vinyle, stratifié",
    "Salle de bain et cuisine, techniques comprises",
    "Peinture et finitions",
    "Planning détaillé, suivi hebdomadaire, reporting photo",
    "Réception ensemble, garantie décennale, service après-vente"
   ],
   "nl": [
    "Afbraak, afvoer en conformiteit",
    "Elektriciteit AREI, sanitair en verwarming",
    "Pleisterwerk, verlaagde plafonds, wanden",
    "Vloeren: tegels, parket, vinyl, laminaat",
    "Badkamer en keuken, technieken inbegrepen",
    "Schilderwerk en afwerking",
    "Gedetailleerde planning, wekelijkse opvolging, fotorapportering",
    "Gezamenlijke oplevering, tienjarige garantie, dienst na verkoop"
   ],
   "en": [
    "Demolition, removal and compliance",
    "RGIE electrics, plumbing and heating",
    "Plastering, false ceilings, partitions",
    "Flooring: tiles, parquet, vinyl, laminate",
    "Bathroom and kitchen, services included",
    "Painting and finishes",
    "Detailed schedule, weekly follow-up, photo reporting",
    "Joint handover, ten-year guarantee, after-sales service"
   ]
  },
  "seoTitle": {
   "fr": "Rénovation complète clé en main Bruxelles | Apollon",
   "nl": "Totaalrenovatie sleutel op de deur Brussel | Apollon",
   "en": "Turnkey complete renovation Brussels | Apollon"
  },
  "seoDesc": {
   "fr": "Appartement, maison ou bureau remis à neuf à Bruxelles et en Brabant : tous les corps de métier, un seul interlocuteur. Devis gratuit sous 48 h.",
   "nl": "Appartement, woning of kantoor volledig vernieuwd in Brussel en Brabant: alle vakmannen, één aanspreekpunt. Gratis offerte binnen 48 u.",
   "en": "Apartment, house or office fully renovated in Brussels and Brabant: all trades, one point of contact. Free quote within 48 h."
  },
  "h1": {
   "fr": "Rénovation complète et coordination de chantier à Bruxelles",
   "nl": "Totaalrenovatie en werfcoördinatie in Brussel",
   "en": "Complete renovation and project management in Brussels"
  },
  "badges": {
   "fr": [
    "Un seul interlocuteur",
    "Planning remis avant le démarrage",
    "Reporting photo régulier",
    "TVA 6 % si logement de plus de 10 ans"
   ],
   "nl": [
    "Eén aanspreekpunt",
    "Planning vóór de start",
    "Regelmatige fotorapportering",
    "6 % btw voor woningen ouder dan 10 jaar"
   ],
   "en": [
    "One point of contact",
    "Schedule provided before the start",
    "Regular photo reporting",
    "6% VAT on homes older than 10 years"
   ]
  },
  "includesTitle": {
   "fr": "Ce que comprend une rénovation complète",
   "nl": "Wat een totaalrenovatie omvat",
   "en": "What a complete renovation includes"
  },
  "body": {
   "fr": [
    {
     "h2": "Un seul interlocuteur, un seul planning, une seule facture",
     "p": [
      "Une rénovation complète mobilise cinq ou six métiers. Quand ils dépendent d'entreprises différentes, le chantier s'arrête chaque fois que l'un attend l'autre. Chez Apollon Construction, ces métiers font partie de la même équipe et sont coordonnés par une seule personne, qui vous fait un point régulier avec photos.",
      "Vous savez qui appeler, vous savez où en est le chantier, et le devis poste par poste vous dit exactement ce que vous payez."
     ]
    },
    {
     "h2": "Avant une vente ou une mise en location",
     "p": [
      "Propriétaires bailleurs, agents immobiliers, promoteurs : nous remettons en état rapidement — peinture, sols, salle de bain, mise en conformité électrique — pour que le bien se loue ou se vende au meilleur prix. Gestion multi-lots et tarifs partenaires pour les collaborations régulières."
     ]
    }
   ],
   "nl": [
    {
     "h2": "Eén aanspreekpunt, één planning, één factuur",
     "p": [
      "Een totaalrenovatie mobiliseert vijf of zes vakgebieden. Wanneer die van verschillende bedrijven afhangen, valt de werf stil telkens de ene op de andere wacht. Bij Apollon Construction zitten die vakmensen in hetzelfde team en worden ze gecoördineerd door één persoon, die u regelmatig een stand van zaken met foto's bezorgt.",
      "U weet wie te bellen, u weet hoever de werf staat, en de offerte post per post zegt u precies wat u betaalt."
     ]
    },
    {
     "h2": "Vóór een verkoop of verhuur",
     "p": [
      "Verhuurders, vastgoedmakelaars, promotoren: wij knappen snel op — schilderwerk, vloeren, badkamer, elektrische conformering — zodat het pand tegen de beste prijs verhuurd of verkocht wordt. Multi-lot beheer en partnertarieven voor regelmatige samenwerking."
     ]
    }
   ],
   "en": [
    {
     "h2": "One contact, one schedule, one invoice",
     "p": [
      "A complete renovation involves five or six trades. When they belong to different companies, the site stops every time one waits for another. At Apollon Construction these trades are part of the same team and coordinated by one person, who gives you regular updates with photos.",
      "You know who to call, you know where the site stands, and the itemised quote tells you exactly what you pay."
     ]
    },
    {
     "h2": "Before a sale or letting",
     "p": [
      "Landlords, estate agents, developers: we refurbish quickly — painting, flooring, bathroom, electrical compliance — so the property lets or sells at the best price. Multi-unit management and partner rates for regular collaborations."
     ]
    }
   ]
  },
  "process": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "faq": {
   "fr": [
    {
     "q": "Combien de temps dure une rénovation complète ?",
     "a": "De quatre à douze semaines pour un appartement, selon la surface et l'ampleur des techniques. Le planning est remis avant le démarrage et fait l'objet d'un engagement contractuel."
    },
    {
     "q": "Faut-il un architecte ?",
     "a": "Pas pour une rénovation sans modification de structure ni de façade. Si un permis ou une étude de stabilité est nécessaire (mur porteur, extension), nous vous le disons dès la visite et travaillons avec votre architecte ou le nôtre."
    },
    {
     "q": "Puis-je habiter le logement pendant les travaux ?",
     "a": "Pour une rénovation complète, c'est rarement confortable : plusieurs pièces sont ouvertes en même temps. Nous vous le disons franchement après la visite, et nous organisons le phasage quand c'est possible."
    },
    {
     "q": "Travaillez-vous avec les agences et les syndics ?",
     "a": "Oui. Remise en état entre deux locataires, parties communes, gestion de plusieurs lots : un interlocuteur dédié et des tarifs partenaires sur volume."
    },
    {
     "q": "Puis-je bénéficier de la TVA à 6 % ?",
     "a": "Oui si le logement a plus de 10 ans et est utilisé principalement comme habitation privée. Le taux réduit est appliqué sur la facture."
    }
   ],
   "nl": [
    {
     "q": "Hoe lang duurt een totaalrenovatie?",
     "a": "Vier tot twaalf weken voor een appartement, afhankelijk van de oppervlakte en de omvang van de technieken. De planning wordt vóór de start bezorgd en is contractueel bindend."
    },
    {
     "q": "Is een architect nodig?",
     "a": "Niet voor een renovatie zonder wijziging van structuur of gevel. Als een vergunning of stabiliteitsstudie nodig is (dragende muur, uitbreiding), zeggen we het u bij het bezoek en werken we met uw architect of de onze."
    },
    {
     "q": "Kan ik in de woning blijven tijdens de werken?",
     "a": "Bij een totaalrenovatie is dat zelden comfortabel: meerdere ruimtes liggen tegelijk open. We zeggen het u eerlijk na het bezoek en organiseren een fasering waar mogelijk."
    },
    {
     "q": "Werken jullie met makelaars en syndici?",
     "a": "Ja. Opknappen tussen twee huurders, gemene delen, beheer van meerdere loten: een vast aanspreekpunt en partnertarieven op volume."
    },
    {
     "q": "Kom ik in aanmerking voor 6 % btw?",
     "a": "Ja, als de woning ouder is dan 10 jaar en hoofdzakelijk als privéwoning wordt gebruikt. Het verlaagde tarief wordt op de factuur toegepast."
    }
   ],
   "en": [
    {
     "q": "How long does a complete renovation take?",
     "a": "Four to twelve weeks for a flat, depending on the surface and the extent of the services. The schedule is provided before the start and is contractually binding."
    },
    {
     "q": "Do I need an architect?",
     "a": "Not for a renovation without structural or façade changes. If a permit or structural study is needed (load-bearing wall, extension), we tell you at the visit and work with your architect or ours."
    },
    {
     "q": "Can I live in the home during the works?",
     "a": "For a complete renovation it is rarely comfortable: several rooms are open at the same time. We tell you frankly after the visit and phase the works where possible."
    },
    {
     "q": "Do you work with agencies and building managers?",
     "a": "Yes. Refurbishment between two tenants, common areas, several units: a dedicated contact and partner rates on volume."
    },
    {
     "q": "Can I get the 6% VAT rate?",
     "a": "Yes, if the home is more than 10 years old and mainly used as a private residence. The reduced rate is applied on the invoice."
    }
   ]
  },
  "caseStudy": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "formOptions": {
   "fr": [
    "Rénovation complète d'appartement",
    "Rénovation complète de maison",
    "Remise en état avant location / vente",
    "Bureau / commerce",
    "Autre"
   ],
   "nl": [
    "Totaalrenovatie appartement",
    "Totaalrenovatie woning",
    "Opknappen vóór verhuur / verkoop",
    "Kantoor / handelszaak",
    "Andere"
   ],
   "en": [
    "Complete flat renovation",
    "Complete house renovation",
    "Refurbishment before letting / sale",
    "Office / shop",
    "Other"
   ]
  },
  "ctaTitle": {
   "fr": "Parlons de votre projet",
   "nl": "Laten we het over uw project hebben",
   "en": "Let's talk about your project"
  },
  "ctaText": {
   "fr": "Réponse sous 24h, visite gratuite, devis détaillé sous 48h. Un plan et quelques photos suffisent pour commencer.",
   "nl": "Antwoord binnen 24u, gratis plaatsbezoek, gedetailleerde offerte binnen 48u. Een plan en enkele foto's volstaan om te beginnen.",
   "en": "Reply within 24h, free site visit, detailed quote within 48h. A plan and a few photos are enough to get started."
  }
 },
 {
  "id": "isolation-facade",
  "focus": "secondary",
  "primes": true,
  "img": "/images/ite-chantier.jpg",
  "gallery": [
   "/images/chantier-facade-1.jpg",
   "/images/chantier-facade-2.jpg",
   "/images/chantier-ardoise-1.jpg"
  ],
  "related": [
   "toiture",
   "energie",
   "renovation-complete"
  ],
  "name": {
   "fr": "Isolation & façade",
   "nl": "Isolatie & gevel",
   "en": "Insulation & façade"
  },
  "tag": {
   "fr": "ITE, ravalement, enduit de finition",
   "nl": "BUI, bepleistering, afwerkingslaag",
   "en": "EWI, rendering, finish coat"
  },
  "intro": {
   "fr": "L'isolation thermique par l'extérieur (ITE) est la solution la plus efficace pour rénover votre bâtiment sans perdre de surface habitable. Apollon Construction intervient sur tous types de façades à Bruxelles et en Brabant.",
   "nl": "Buitenmuurisolatie (BUI) is de meest efficiënte oplossing om uw gebouw te renoveren zonder binnenoppervlak te verliezen. Apollon Construction werkt op alle types gevels in Brussel en Brabant.",
   "en": "External wall insulation (EWI) is the most effective solution to renovate your building without losing interior floor space. Apollon Construction works on all types of facades in Brussels and Brabant."
  },
  "includes": {
   "fr": [
    "Diagnostic gratuit sur site",
    "Panneaux EPS, laine de roche ou liège certifiés",
    "Enduit de finition ou bardage bois/composite",
    "Suppression totale des ponts thermiques",
    "Primes jusqu'à 75€/m²",
    "Garantie décennale"
   ],
   "nl": [
    "Gratis diagnose ter plaatse",
    "Gecertificeerde EPS, steenwol of kurk panelen",
    "Afwerkingsbepleistering of hout/composiet bekleding",
    "Volledige eliminatie van koudebruggen",
    "Premies tot 75€/m²",
    "Tienjarige garantie"
   ],
   "en": [
    "Free on-site diagnosis",
    "Certified EPS, rock wool or cork panels",
    "Finish render or timber/composite cladding",
    "Complete elimination of thermal bridges",
    "Grants up to €75/m²",
    "Decennial guarantee"
   ]
  },
  "seoTitle": {
   "fr": "Isolation de façade (ITE) Bruxelles | Apollon Construction",
   "nl": "Gevelisolatie (buitenisolatie) Brussel | Apollon",
   "en": "External wall insulation Brussels | Apollon Construction"
  },
  "seoDesc": {
   "fr": "Isolation par l'extérieur, crépi et rénovation de façade à Bruxelles et en Brabant. Primes régionales, devis gratuit sous 48 h.",
   "nl": "Buitenisolatie, crepi en gevelrenovatie in Brussel en Brabant. Regionale premies, gratis offerte binnen 48 u.",
   "en": "External insulation, render and façade renovation in Brussels and Brabant. Regional grants, free quote within 48 h."
  },
  "h1": {
   "fr": "Isolation de façade & ravalement à Bruxelles",
   "nl": "Gevelisolatie & bepleistering in Brussel",
   "en": "Facade insulation & rendering in Brussels"
  },
  "badges": {
   "fr": [
    "Diagnostic gratuit sur site",
    "Devis sous 48h",
    "Partenaire Batibouw+",
    "Garantie décennale"
   ],
   "nl": [
    "Gratis diagnose ter plaatse",
    "Offerte binnen 48u",
    "Partner Batibouw+",
    "Tienjarige garantie"
   ],
   "en": [
    "Free on-site diagnosis",
    "Quote within 48h",
    "Batibouw+ partner",
    "Ten-year guarantee"
   ]
  },
  "includesTitle": {
   "fr": "Ce que comprend ce service",
   "nl": "Wat deze dienst omvat",
   "en": "What this service includes"
  },
  "body": {
   "fr": [
    {
     "h2": "Isoler sans perdre un mètre carré",
     "p": [
      "Nos équipes posent des panneaux isolants (EPS, laine de roche ou liège) directement sur votre façade existante, puis appliquent un enduit de finition ou un bardage. Résultat : zéro pont thermique, aucune perte de surface intérieure.",
      "Vous bénéficiez de primes régionales : jusqu'à 75€/m² en Wallonie et en Flandre. Apollon Construction vous aide dans les démarches administratives."
     ]
    }
   ],
   "nl": [
    {
     "h2": "Isoleren zonder een vierkante meter te verliezen",
     "p": [
      "Onze teams plaatsen isolatiepanelen (EPS, steenwol of kurk) op uw bestaande gevel, daarna een afwerkingsbepleistering of gevelbekleding. Resultaat: geen koudebruggen, geen verlies van binnenruimte.",
      "U profiteert van regionale premies: tot 75€/m² in Wallonië en Vlaanderen. Apollon Construction helpt u bij de administratieve procedures."
     ]
    }
   ],
   "en": [
    {
     "h2": "Insulate without losing a square metre",
     "p": [
      "Our teams fix insulation panels (EPS, rock wool or cork) directly to your existing facade, then apply a finish render or cladding. Result: zero thermal bridges, no loss of interior space.",
      "You benefit from regional grants: up to €75/m² in Wallonia and Flanders. Apollon Construction helps you with the administrative procedures."
     ]
    }
   ]
  },
  "process": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "faq": {
   "fr": [
    {
     "q": "Combien coûte une isolation de façade à Bruxelles ?",
     "a": "Le prix varie entre 80 et 150 €/m² selon le type d'isolation (EPS, laine de roche) et la finition. Demandez un devis gratuit pour une estimation précise."
    },
    {
     "q": "Combien de temps durent les travaux ?",
     "a": "Pour une maison moyenne, une ITE prend 5 à 10 jours ouvrables. On travaille efficacement en minimisant les perturbations."
    },
    {
     "q": "Quelles sont les primes disponibles pour l'isolation de façade ?",
     "a": "En Wallonie jusqu'à 75 €/m² via la Prime Habitation. En Flandre, MijnVerbouwPremie jusqu'à 35 %. À Bruxelles, RENOLUTION est suspendue pour 2025-2026. On vous accompagne dans la démarche."
    }
   ],
   "nl": [
    {
     "q": "Wat kost buitenmuurisolatie in Brussel?",
     "a": "De prijs varieert tussen 80 en 150 €/m² afhankelijk van het isolatietype (EPS, steenwol) en de afwerking. Vraag een gratis offerte aan voor een exacte schatting."
    },
    {
     "q": "Hoelang duurt de uitvoering?",
     "a": "Voor een gemiddelde woning duurt BUI 5 tot 10 werkdagen. We werken snel en beperken de hinder tot een minimum."
    },
    {
     "q": "Welke premies zijn beschikbaar voor gevelisolatie?",
     "a": "In Wallonië tot 75 €/m² via Prime Habitation. In Vlaanderen MijnVerbouwPremie tot 35 %. Brussel: RENOLUTION opgeschort voor 2025-2026. Wij begeleiden u bij de aanvraag."
    }
   ],
   "en": [
    {
     "q": "How much does external wall insulation cost in Brussels?",
     "a": "The price ranges from €80 to €150/m² depending on the insulation type (EPS, rock wool) and finish. Request a free quote for an exact estimate."
    },
    {
     "q": "How long does the work take?",
     "a": "For an average house, EWI takes 5 to 10 working days. We work efficiently and minimise disruption."
    },
    {
     "q": "What grants are available for façade insulation?",
     "a": "In Wallonia up to €75/m² via Prime Habitation. In Flanders MijnVerbouwPremie up to 35%. Brussels: RENOLUTION suspended for 2025-2026. We guide you through the application."
    }
   ]
  },
  "caseStudy": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "formOptions": {
   "fr": [
    "Isolation par l'extérieur (ITE)",
    "Ravalement et enduit",
    "Peinture de façade",
    "Bardage",
    "Autre"
   ],
   "nl": [
    "Buitenmuurisolatie (BUI)",
    "Bepleistering",
    "Gevelschilderwerk",
    "Gevelbekleding",
    "Andere"
   ],
   "en": [
    "External wall insulation (EWI)",
    "Rendering",
    "Façade painting",
    "Cladding",
    "Other"
   ]
  },
  "ctaTitle": {
   "fr": "Parlons de votre façade",
   "nl": "Laten we het over uw gevel hebben",
   "en": "Let's talk about your façade"
  },
  "ctaText": {
   "fr": "Réponse sous 24h, diagnostic gratuit sur site, devis sous 48h.",
   "nl": "Antwoord binnen 24u, gratis diagnose ter plaatse, offerte binnen 48u.",
   "en": "Reply within 24h, free on-site diagnosis, quote within 48h."
  }
 },
 {
  "id": "toiture",
  "focus": "secondary",
  "primes": true,
  "img": "/images/toiture-ardoise.jpg",
  "gallery": [],
  "related": [
   "isolation-facade",
   "energie",
   "renovation-complete"
  ],
  "name": {
   "fr": "Toiture",
   "nl": "Dak",
   "en": "Roofing"
  },
  "tag": {
   "fr": "Réfection, réparation, étanchéité",
   "nl": "Renovatie, herstel, waterdichting",
   "en": "Renovation, repair, waterproofing"
  },
  "intro": {
   "fr": "Apollon Construction prend en charge tous vos travaux de toiture à Bruxelles et en Brabant. De la réparation ponctuelle à la réfection complète, nos couvreurs interviennent sur tuiles, ardoises, zinc et toitures plates.",
   "nl": "Apollon Construction verzorgt al uw dakwerken in Brussel en Brabant. Van gedeeltelijk herstel tot volledige dakrenovatie, onze dakdekkers werken op dakpannen, leien, zink en platte daken.",
   "en": "Apollon Construction handles all your roofing works in Brussels and Brabant. From partial repair to complete renovation, our roofers work on tiles, slates, zinc and flat roofs."
  },
  "includes": {
   "fr": [
    "Inspection et diagnostic complet",
    "Remplacement de tuiles ou ardoises",
    "Réfection complète avec sous-toiture",
    "Isolation des combles (perdus ou aménagés)",
    "Zinguerie : gouttières, chéneaux, solins",
    "Membranes EPDM, bitumineuses ou TPO",
    "Isolation en panneaux PUR ou PIR",
    "Relevés, évacuations et trop-pleins"
   ],
   "nl": [
    "Volledige inspectie en diagnose",
    "Vervanging van dakpannen of leien",
    "Volledige renovatie met onderdak",
    "Isolatie van de vliering",
    "Loodgieterswerk: goten, dakgoten, windveren",
    "EPDM, bitumineuze of TPO membranen",
    "PUR of PIR isolatiepanelen",
    "Opstaande randen, afvoeren en overloopen"
   ],
   "en": [
    "Full inspection and diagnosis",
    "Tile or slate replacement",
    "Complete renovation with underlay",
    "Loft insulation (lost or converted)",
    "Zinc work: gutters, flashings",
    "EPDM, bituminous or TPO membranes",
    "PUR or PIR insulation panels",
    "Edge details, drainage and overflows"
   ]
  },
  "seoTitle": {
   "fr": "Toiture : réfection & étanchéité Bruxelles | Apollon",
   "nl": "Dakwerken & dakdichting Brussel | Apollon Construction",
   "en": "Roofing: repair & waterproofing Brussels | Apollon"
  },
  "seoDesc": {
   "fr": "Réfection et réparation de toiture à Bruxelles : tuiles, ardoises, zinc, toiture plate EPDM. Diagnostic gratuit, devis sous 48 h.",
   "nl": "Dakrenovatie en dakherstelling in Brussel: pannen, leien, zink, plat dak EPDM. Gratis diagnose, offerte binnen 48 u.",
   "en": "Roof renovation and repair in Brussels: tiles, slates, zinc, EPDM flat roof. Free diagnosis, quote within 48 h."
  },
  "h1": {
   "fr": "Toiture à Bruxelles : réfection, réparation & étanchéité",
   "nl": "Dak in Brussel: renovatie, herstel & waterdichting",
   "en": "Roofing in Brussels: renovation, repair & waterproofing"
  },
  "badges": {
   "fr": [
    "Diagnostic gratuit",
    "Devis sous 48h",
    "Partenaire Batibouw+",
    "Garantie étanchéité 10–20 ans"
   ],
   "nl": [
    "Gratis diagnose",
    "Offerte binnen 48u",
    "Partner Batibouw+",
    "Waterdichtheidsgarantie 10–20 jaar"
   ],
   "en": [
    "Free diagnosis",
    "Quote within 48h",
    "Batibouw+ partner",
    "Waterproofing guarantee 10–20 years"
   ]
  },
  "includesTitle": {
   "fr": "Toiture inclinée et toiture plate",
   "nl": "Hellend dak en plat dak",
   "en": "Pitched and flat roofs"
  },
  "body": {
   "fr": [
    {
     "h2": "Un diagnostic avant tout devis",
     "p": [
      "Chaque chantier commence par un diagnostic complet de votre toiture. On vous remet un rapport détaillé et un devis transparent avant de commencer les travaux.",
      "En Wallonie, la prime toiture est accessible sans audit énergétique obligatoire — Apollon Construction vous accompagne dans les démarches pour maximiser votre remboursement."
     ]
    }
   ],
   "nl": [
    {
     "h2": "Een diagnose vóór elke offerte",
     "p": [
      "Elk project begint met een volledige diagnose van uw dak. We bezorgen u een gedetailleerd rapport en een transparante offerte voor de start van de werken.",
      "In Wallonië is de dakpremie toegankelijk zonder verplichte energieaudit — Apollon Construction begeleidt u bij de procedures om uw terugbetaling te maximaliseren."
     ]
    }
   ],
   "en": [
    {
     "h2": "A diagnosis before any quote",
     "p": [
      "Every project starts with a full diagnosis of your roof. We provide a detailed report and a transparent quote before starting the works.",
      "In Wallonia, the roofing grant is accessible without a mandatory energy audit — Apollon Construction guides you through the procedures to maximise your reimbursement."
     ]
    }
   ]
  },
  "process": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "faq": {
   "fr": [
    {
     "q": "Combien coûte une réfection de toiture à Bruxelles ?",
     "a": "Les prix varient : réparation partielle à partir de 500 €, réfection complète entre 8 000 et 25 000 € selon le type et la surface. Diagnostic gratuit sur site."
    },
    {
     "q": "Faut-il un audit énergétique pour la prime toiture en Wallonie ?",
     "a": "Non. Depuis le 14 février 2025, l'audit énergétique n'est plus obligatoire pour les travaux de toiture en Wallonie. Vous pouvez déposer la demande directement."
    },
    {
     "q": "Combien de temps dure une réfection complète ?",
     "a": "Entre 3 et 10 jours ouvrables pour une maison moyenne. On travaille vite et proprement, avec un minimum de perturbations."
    }
   ],
   "nl": [
    {
     "q": "Wat kost een dakrenovatie in Brussel?",
     "a": "De prijs varieert sterk: gedeeltelijk herstel vanaf 500 €, volledige renovatie tussen 8.000 en 25.000 € afhankelijk van het daktype en de oppervlakte. Gratis diagnose ter plaatse."
    },
    {
     "q": "Is een energieaudit verplicht voor de dakpremie in Wallonië?",
     "a": "Nee. Sinds 14 februari 2025 is de energieaudit niet meer verplicht voor dakwerken in Wallonië. U kunt direct een aanvraag indienen."
    },
    {
     "q": "Hoe lang duurt een volledige dakrenovatie?",
     "a": "Tussen 3 en 10 werkdagen voor een doorsnee woning. We werken snel en netjes, met minimale hinder."
    }
   ],
   "en": [
    {
     "q": "How much does a roof renovation cost in Brussels?",
     "a": "Prices vary widely: partial repair from €500, full renovation between €8,000 and €25,000 depending on roof type and surface. Free on-site diagnosis."
    },
    {
     "q": "Is an energy audit required for the roofing grant in Wallonia?",
     "a": "No. Since 14 February 2025, the energy audit is no longer required for roofing works in Wallonia. You can apply directly."
    },
    {
     "q": "How long does a full roof renovation take?",
     "a": "Between 3 and 10 working days for an average house. We work quickly and cleanly, with minimal disruption."
    }
   ]
  },
  "caseStudy": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "formOptions": {
   "fr": [
    "Toiture inclinée",
    "Toiture plate",
    "Réparation / fuite",
    "Isolation de toiture",
    "Autre"
   ],
   "nl": [
    "Hellend dak",
    "Plat dak",
    "Herstelling / lek",
    "Dakisolatie",
    "Andere"
   ],
   "en": [
    "Pitched roof",
    "Flat roof",
    "Repair / leak",
    "Roof insulation",
    "Other"
   ]
  },
  "ctaTitle": {
   "fr": "Parlons de votre toiture",
   "nl": "Laten we het over uw dak hebben",
   "en": "Let's talk about your roof"
  },
  "ctaText": {
   "fr": "Réponse sous 24h, diagnostic gratuit sur site, devis sous 48h.",
   "nl": "Antwoord binnen 24u, gratis diagnose ter plaatse, offerte binnen 48u.",
   "en": "Reply within 24h, free on-site diagnosis, quote within 48h."
  }
 },
 {
  "id": "energie",
  "focus": "secondary",
  "primes": true,
  "img": "/uploads/apres3.jpg",
  "gallery": [],
  "related": [
   "electricite-rgie",
   "isolation-facade",
   "toiture"
  ],
  "name": {
   "fr": "Énergie & technique",
   "nl": "Energie & techniek",
   "en": "Energy & technical"
  },
  "tag": {
   "fr": "Pompe à chaleur, solaire, clim, borne",
   "nl": "Warmtepomp, zonnepanelen, airco, laadpaal",
   "en": "Heat pump, solar, AC, EV charger"
  },
  "intro": {
   "fr": "Apollon Solutions est le pôle technique d’Apollon Group. Une équipe certifiée pour vos installations énergétiques à Bruxelles et en Brabant — du dimensionnement à la mise en service, primes comprises.",
   "nl": "Apollon Solutions is de technische pool van Apollon Group. Eén gecertificeerd team voor uw energie-installaties in Brussel en Brabant — van dimensionering tot indienststelling, premies inbegrepen.",
   "en": "Apollon Solutions is the technical arm of Apollon Group. One certified team for your energy installations in Brussels and Brabant — from sizing to commissioning, grants included."
  },
  "includes": {
   "fr": [
    "Pompe à chaleur — Air/eau, air/air et hybride. Dimensionnement, remplacement de chaudière mazout ou gaz, raccordement et mise en service par des frigoristes agréés.",
    "Panneaux solaires — Étude de production, pose en toiture, onduleur et raccordement conforme RGIE. Autoconsommation, suivi et batterie en option.",
    "Climatisation — Split, multi-split et gainable. Installation discrète, entretien et recharge par techniciens certifiés en fluides frigorigènes.",
    "Électricité (RGIE) — Installation neuve, mise en conformité, tableaux et rénovation. Rapport de conformité RGIE inclus, domotique et éclairage LED.",
    "Ventilation (VMC) — Simple et double flux. Air sain, récupération de chaleur et conformité PEB sur le neuf et la rénovation lourde.",
    "Bornes de recharge — Installation de bornes pour véhicules électriques, dimensionnement de la puissance et protection du tableau."
   ],
   "nl": [
    "Warmtepomp — Lucht/water, lucht/lucht en hybride. Dimensionering, vervanging van mazout- of gasketel, aansluiting en indienststelling door erkende koeltechnici.",
    "Zonnepanelen — Productiestudie, plaatsing op dak, omvormer en aansluiting conform RGIE. Zelfverbruik, opvolging en batterij als optie.",
    "Airconditioning — Split, multi-split en kanaaltoestel. Discrete installatie, onderhoud en herlading door gecertificeerde koeltechnici.",
    "Elektriciteit (RGIE) — Nieuwe installatie, conformstelling, borden en renovatie. RGIE-conformiteitsverslag inbegrepen, domotica en LED.",
    "Ventilatie (VMC) — Enkele en dubbele flux. Gezonde lucht, warmterecuperatie en EPB-conformiteit bij nieuwbouw en zware renovatie.",
    "Laadpalen — Installatie van laadpalen voor elektrische voertuigen, vermogensdimensionering en bescherming van het bord."
   ],
   "en": [
    "Heat pump — Air/water, air/air and hybrid. Sizing, replacement of oil or gas boiler, connection and commissioning by certified F-gas technicians.",
    "Solar panels — Production study, roof installation, inverter and RGIE-compliant connection. Self-consumption, monitoring and optional battery.",
    "Air conditioning — Split, multi-split and ducted. Discreet installation, maintenance and recharge by certified F-gas technicians.",
    "Electricity (RGIE) — New installation, compliance, panels and renovation. RGIE conformity report included, home automation and LED.",
    "Ventilation (MVHR) — Single and double flow. Clean air, heat recovery and EPB compliance on new builds and heavy renovation.",
    "EV chargers — Installation of charging points for electric vehicles, power sizing and panel protection."
   ]
  },
  "seoTitle": {
   "fr": "Rénovation énergétique & primes Bruxelles | Apollon",
   "nl": "Energetische renovatie & premies Brussel | Apollon",
   "en": "Energy renovation & grants Brussels | Apollon"
  },
  "seoDesc": {
   "fr": "Isolation, châssis, chauffage : rénovation énergétique à Bruxelles et en Brabant avec accompagnement primes. Devis gratuit sous 48 h.",
   "nl": "Isolatie, ramen, verwarming: energetische renovatie in Brussel en Brabant met begeleiding voor premies. Gratis offerte binnen 48 u.",
   "en": "Insulation, windows, heating: energy renovation in Brussels and Brabant with grant support. Free quote within 48 h."
  },
  "h1": {
   "fr": "Énergie & technique : pompe à chaleur, solaire, électricité",
   "nl": "Energie & techniek: warmtepomp, zonnepanelen, elektriciteit",
   "en": "Energy & technical: heat pump, solar, electricity"
  },
  "badges": {
   "fr": [
    "Conforme RGIE",
    "Frigoristes agréés",
    "Devis 48h"
   ],
   "nl": [
    "Conform AREI",
    "Erkende koeltechnici",
    "Offerte 48u"
   ],
   "en": [
    "RGIE compliant",
    "F-gas certified",
    "Quote 48h"
   ]
  },
  "includesTitle": {
   "fr": "Tout le technique, sous un seul toit",
   "nl": "Alle techniek, onder één dak",
   "en": "All the technical work, under one roof"
  },
  "body": {
   "fr": [
    {
     "h2": "Plus besoin de jongler entre trois corps de métier",
     "p": [
      "Un chauffagiste, un électricien, un installateur solaire qui se renvoient la balle : c’est là que les chantiers techniques dérapent. Apollon Solutions coordonne l’ensemble, avec une seule équipe et une seule garantie."
     ]
    },
    {
     "h2": "Les primes, on s’en occupe",
     "p": [
      "Pompe à chaleur, photovoltaïque, isolation : les aides régionales évoluent vite et dépendent de votre situation. On vérifie votre éligibilité, on monte le dossier, et on vous remet une estimation nette avant que vous signiez."
     ]
    }
   ],
   "nl": [
    {
     "h2": "Geen gejongleer meer tussen drie vakmensen",
     "p": [
      "Een verwarmingsinstallateur, een elektricien, een zonne-installateur die naar elkaar verwijzen: daar lopen technische werven mis. Apollon Solutions coördineert het geheel, met één team en één garantie."
     ]
    },
    {
     "h2": "De premies, wij regelen ze",
     "p": [
      "Warmtepomp, zonnepanelen, isolatie: de regionale premies evolueren snel en hangen af van uw situatie. Wij checken uw recht, stellen het dossier samen en geven u een netto-raming vóór u tekent."
     ]
    }
   ],
   "en": [
    {
     "h2": "No more juggling three different trades",
     "p": [
      "A heating engineer, an electrician, a solar installer passing the buck: that is where technical projects go wrong. Apollon Solutions coordinates the whole thing, with one team and one warranty."
     ]
    },
    {
     "h2": "Grants? We handle them",
     "p": [
      "Heat pump, solar, insulation: regional grants change fast and depend on your situation. We check your eligibility, build the file, and give you a net estimate before you sign."
     ]
    }
   ]
  },
  "process": {
   "fr": [
    {
     "title": "Audit sur place",
     "desc": "On évalue votre installation, vos consommations et vos besoins. Gratuit."
    },
    {
     "title": "Étude & devis 48h",
     "desc": "Dimensionnement, matériel, estimation des primes. Devis clair, poste par poste."
    },
    {
     "title": "Installation",
     "desc": "Notre équipe technique réalise les travaux. Un interlocuteur unique, délais tenus."
    },
    {
     "title": "Mise en service & primes",
     "desc": "Contrôle, attestations RGIE, et accompagnement de vos dossiers de primes."
    }
   ],
   "nl": [
    {
     "title": "Audit ter plaatse",
     "desc": "We evalueren uw installatie, verbruik en behoeften. Gratis."
    },
    {
     "title": "Studie & offerte 48u",
     "desc": "Dimensionering, materiaal, premieraming. Heldere offerte, post per post."
    },
    {
     "title": "Installatie",
     "desc": "Ons technisch team voert de werken uit. Eén aanspreekpunt, termijnen gerespecteerd."
    },
    {
     "title": "Indienststelling & premies",
     "desc": "Controle, RGIE-attesten en begeleiding van uw premiedossiers."
    }
   ],
   "en": [
    {
     "title": "On-site audit",
     "desc": "We assess your installation, consumption and needs. Free of charge."
    },
    {
     "title": "Study & quote 48h",
     "desc": "Sizing, equipment, grant estimate. A clear quote, line by line."
    },
    {
     "title": "Installation",
     "desc": "Our technical team carries out the work. One single contact, deadlines met."
    },
    {
     "title": "Commissioning & grants",
     "desc": "Inspection, RGIE certificates, and support with your grant files."
    }
   ]
  },
  "faq": {
   "fr": [
    {
     "q": "Puis-je remplacer ma chaudière mazout par une pompe à chaleur ?",
     "a": "Oui, c’est l’une des demandes les plus fréquentes depuis la fin des nouvelles installations mazout. Lors de l’audit, on vérifie que votre logement s’y prête (isolation, émetteurs) et on propose la solution adaptée, hybride si nécessaire."
    },
    {
     "q": "Vous gérez les dossiers de primes ?",
     "a": "On vérifie votre éligibilité et on monte le dossier complet. Les montants dépendent de votre région et de vos revenus, et la décision revient à l’administration — mais on vous remet une estimation avant signature."
    },
    {
     "q": "Travaillez-vous avec les syndics et les architectes ?",
     "a": "Oui, pour les immeubles, les parties communes (chaufferie, électricité, ventilation) et les projets de rénovation énergétique."
    }
   ],
   "nl": [
    {
     "q": "Kan ik mijn mazoutketel vervangen door een warmtepomp?",
     "a": "Ja, dat is een van de meest gevraagde sinds het einde van nieuwe mazoutinstallaties. Bij de audit kijken we of uw woning geschikt is (isolatie, afgifte) en stellen we de juiste oplossing voor, hybride indien nodig."
    },
    {
     "q": "Regelen jullie de premiedossiers?",
     "a": "We checken uw recht en stellen het volledige dossier samen. De bedragen hangen af van uw regio en inkomen, en de beslissing ligt bij de administratie — maar u krijgt een raming vóór ondertekening."
    },
    {
     "q": "Werken jullie met syndici en architecten?",
     "a": "Ja, voor gebouwen, gemeenschappelijke delen (stookplaats, elektriciteit, ventilatie) en energierenovatieprojecten."
    }
   ],
   "en": [
    {
     "q": "Can I replace my oil boiler with a heat pump?",
     "a": "Yes, it is one of the most common requests since the end of new oil installations. During the audit we check that your home is suitable (insulation, emitters) and propose the right solution, hybrid if needed."
    },
    {
     "q": "Do you handle the grant files?",
     "a": "We check your eligibility and build the full file. Amounts depend on your region and income, and the decision rests with the authorities — but you get an estimate before signing."
    },
    {
     "q": "Do you work with building managers and architects?",
     "a": "Yes, for buildings, common areas (boiler room, electricity, ventilation) and energy renovation projects."
    }
   ]
  },
  "caseStudy": {
   "fr": null,
   "nl": null,
   "en": null
  },
  "formOptions": {
   "fr": [
    "Pompe à chaleur",
    "Panneaux solaires",
    "Climatisation",
    "Électricité (RGIE)",
    "Ventilation (VMC)",
    "Borne de recharge",
    "Autre"
   ],
   "nl": [
    "Warmtepomp",
    "Zonnepanelen",
    "Airconditioning",
    "Elektriciteit (AREI)",
    "Ventilatie (VMC)",
    "Laadpaal",
    "Andere"
   ],
   "en": [
    "Heat pump",
    "Solar panels",
    "Air conditioning",
    "Electrical (RGIE)",
    "Ventilation (MVHR)",
    "EV charger",
    "Other"
   ]
  },
  "ctaTitle": {
   "fr": "Parlons de votre installation",
   "nl": "Laten we het over uw installatie hebben",
   "en": "Let's talk about your installation"
  },
  "ctaText": {
   "fr": "Audit gratuit sur place, étude et devis sous 48h, primes vérifiées avec vous.",
   "nl": "Gratis audit ter plaatse, studie en offerte binnen 48u, premies samen met u nagekeken.",
   "en": "Free on-site audit, study and quote within 48h, grants checked with you."
  }
 }
];
export const PROJECTS = [
 {
  "img": "/uploads/apres1.jpg",
  "cat": "renovation-interieure",
  "title": {
   "fr": "Cuisine — plafond, éclairage et peinture",
   "nl": "Keuken — plafond, verlichting en schilderwerk",
   "en": "Kitchen — ceiling, lighting and painting"
  },
  "place": "Brabant flamand"
 },
 {
  "img": "/images/chantier-sdb-1.jpg",
  "cat": "salle-de-bain",
  "title": {
   "fr": "Salle de bain, finitions dorées",
   "nl": "Badkamer met gouden afwerking",
   "en": "Bathroom with brass finishes"
  },
  "place": "Bruxelles"
 },
 {
  "img": "/images/chantier-sdb-2.jpg",
  "cat": "salle-de-bain",
  "title": {
   "fr": "Douche à l'italienne et meuble-vasque",
   "nl": "Inloopdouche en badkamermeubel",
   "en": "Walk-in shower and vanity unit"
  },
  "place": "Bruxelles"
 },
 {
  "img": "/images/chantier-cuisine.jpg",
  "cat": "cuisine",
  "title": {
   "fr": "Cuisine équipée sur mesure",
   "nl": "Keuken op maat",
   "en": "Bespoke fitted kitchen"
  },
  "place": "Bruxelles"
 },
 {
  "img": "/images/humidite-02-diagnostic.jpg",
  "cat": "renovation-interieure",
  "title": {
   "fr": "Mur humide : enduit retiré, séché, réenduit",
   "nl": "Vochtige muur: pleister verwijderd, gedroogd, opnieuw gepleisterd",
   "en": "Damp wall: stripped, dried, re-plastered"
  },
  "place": "Bruxelles"
 },
 {
  "img": "/images/chantier-renovation.jpg",
  "cat": "renovation-complete",
  "title": {
   "fr": "Rénovation intérieure et peinture",
   "nl": "Binnenrenovatie en schilderwerk",
   "en": "Interior renovation and painting"
  },
  "place": "Bruxelles"
 },
 {
  "img": "/uploads/apres4.jpg",
  "cat": "cuisine",
  "title": {
   "fr": "Éclairage intégré et climatisation encastrée",
   "nl": "Geïntegreerde verlichting en inbouwairco",
   "en": "Integrated lighting and built-in air conditioning"
  },
  "place": "Brabant flamand"
 },
 {
  "img": "/images/chantier-facade-1.jpg",
  "cat": "isolation-facade",
  "title": {
   "fr": "Isolation thermique et ravalement de façade",
   "nl": "Thermische isolatie en gevelbepleistering",
   "en": "Thermal insulation and façade rendering"
  },
  "place": "Bruxelles"
 },
 {
  "img": "/images/chantier-facade-2.jpg",
  "cat": "isolation-facade",
  "title": {
   "fr": "Enduit de façade, immeuble",
   "nl": "Gevelbepleistering, appartementsgebouw",
   "en": "Façade render, apartment building"
  },
  "place": "Bruxelles"
 },
 {
  "img": "/images/chantier-ardoise-1.jpg",
  "cat": "isolation-facade",
  "title": {
   "fr": "Pose de l'isolant, chantier ITE",
   "nl": "Plaatsing van de isolatie, BUI-werf",
   "en": "Insulation boards going up, EWI site"
  },
  "place": "Bruxelles"
 }
];
export const T = {
 "fr": {
  "nav": {
   "home": "Accueil",
   "services": "Services",
   "projects": "Réalisations",
   "primes": "Primes & TVA",
   "contact": "Contact",
   "cta": "Devis gratuit",
   "ctaShort": "Devis",
   "call": "Appeler",
   "orCall": "Ou appelez-nous",
   "speaks": "Répond en",
   "hoursShort": "Lun–Sam",
   "whatsapp": "WhatsApp",
   "allServices": "Tous les services →",
   "menuNote": "Un projet qui mêle plusieurs métiers ? C'est notre spécialité.",
   "phone": "0499 89 60 86"
  },
  "stats": [
   {
    "n": "24h",
    "u": "",
    "l": "réponse, dans votre langue"
   },
   {
    "n": "48h",
    "u": "",
    "l": "devis détaillé, poste par poste"
   },
   {
    "n": "0€",
    "u": "",
    "l": "visite et déplacement"
   },
   {
    "n": "6",
    "u": " %",
    "l": "de TVA si logement de plus de 10 ans"
   }
  ],
  "trust": [
   {
    "label": "★★★★★ 5.0 Google"
   },
   {
    "label": "TrustUp Pro"
   },
   {
    "label": "Batibouw+"
   },
   {
    "label": "RGIE · RC Pro"
   }
  ],
  "stepsTitle": "Du premier appel à la réception des travaux.",
  "steps": [
   {
    "n": "1",
    "t": "Visite gratuite",
    "d": "On se déplace chez vous pour évaluer le chantier, prendre les mesures et comprendre vos besoins."
   },
   {
    "n": "2",
    "t": "Devis détaillé sous 48h",
    "d": "Un devis clair, poste par poste, sans frais cachés. Vous savez exactement ce que vous payez."
   },
   {
    "n": "3",
    "t": "Exécution soignée",
    "d": "Notre équipe propre réalise les travaux. Un interlocuteur unique vous tient informé à chaque étape."
   },
   {
    "n": "4",
    "t": "Réception & garantie",
    "d": "Inspection finale ensemble. Chantier nettoyé, garantie décennale, service après-vente réactif."
   }
  ],
  "cta": {
   "title": "Parlons.",
   "sub": "Réponse sous 24h, visite gratuite, devis détaillé sous 48h. Quelques photos suffisent pour commencer."
  },
  "footer": {
   "rights": "© 2026 Apollon Group SRL (Apollon Construction) — 1700 Dilbeek",
   "vat": "TVA BE 1025.392.245",
   "address": "Oudesmidsestraat 20, 1700 Dilbeek",
   "hours": "Lun–Ven 8h–18h · Sam 9h–13h",
   "zone": "Bruxelles 19 communes, Brabant wallon & flamand",
   "legal": "Mentions légales",
   "rgpd": "Politique RGPD"
  },
  "home": {
   "seoTitle": "Rénovation intérieure Bruxelles | Apollon Construction",
   "seoDesc": "Salle de bain, électricité RGIE, plafonnage, peinture : une équipe, un devis clair sous 48 h, TVA 6 %. Bruxelles et Brabant. Avis Google 5/5.",
   "kicker": "Rénovation intérieure — Bruxelles & Brabant",
   "lead": "Salle de bain, électricité, plafonnage, peinture, sols, façade, toiture : une seule équipe, un devis clair poste par poste, un chantier propre.",
   "h1a": "Rénover",
   "h1b": "sans compromis.",
   "m1": "Rénovation intérieure, salle de bain, électricité, façade. Devis flous, retards, chantiers sales : on a vu ce qui ne va pas dans le secteur, et on fait ",
   "m2": "l'inverse.",
   "servicesIntro": "Huit métiers, une seule équipe. Pas de sous-traitance cachée, pas de renvoi de responsabilité : la même main du gros œuvre aux finitions, dans les 19 communes de Bruxelles et en Brabant.",
   "worksTitle": "Le travail parle.",
   "worksLink": "Toutes nos réalisations →",
   "quote": "« On ne promet pas d'être les plus gros. On promet d'être les plus sérieux. »",
   "aboutKicker": "Pourquoi nous",
   "aboutTitle": "Une jeune entreprise, des professionnels expérimentés.",
   "aboutText": "Apollon Construction est une entreprise récente, fondée par des professionnels avec plus de 5 ans d'expérience dans la rénovation à Bruxelles. On a créé Apollon pour faire les choses différemment : des chantiers propres, un suivi transparent et des prix justes. Chaque chantier compte. On traite le vôtre comme si c'était le nôtre — parce que notre réputation en dépend.",
   "aboutPoints": [
    [
     "Équipe bilingue FR/NL",
     "Deux interlocuteurs dédiés pour vous servir dans votre langue."
    ],
    [
     "Réactivité",
     "Réponse sous 24h, devis sous 48h."
    ],
    [
     "Transparence totale",
     "Devis détaillé poste par poste. Pas de surprise à la facture finale."
    ],
    [
     "Assurance & conformité",
     "RC professionnelle, installations conformes au RGIE, accès à la profession en règle."
    ]
   ],
   "archKicker": "Architectes, agents & promoteurs",
   "archTitle": "Votre sous-traitant de confiance à Bruxelles.",
   "archText": "Respect scrupuleux des plans, reporting photo régulier, remise en état rapide avant vente ou location, gestion multi-lots et tarifs partenaires sur volume. Un interlocuteur dédié, des délais contractuels tenus.",
   "archLink": "Établir une collaboration →",
   "tvaKicker": "TVA réduite",
   "tvaBig": "6",
   "tvaText": "de TVA sur vos travaux si votre logement a plus de 10 ans. Le taux réduit est appliqué directement sur la facture, et on vérifie les primes régionales avec vous.",
   "tvaLink": "Primes & TVA →",
   "reviewsKicker": "Avis Google",
   "reviewsTitle": "Ce que disent nos clients.",
   "reviewLink": "5.0 sur Google · voir tous les avis →",
   "zonesLabel": "Nous intervenons à :",
   "partnersLabel": "Partenaires & garanties"
  },
  "sp": {
   "kicker": "Services",
   "title": "Huit métiers, une seule équipe.",
   "seoTitle": "Nos services de rénovation à Bruxelles — Apollon Construction",
   "intro": "De la salle de bain à la toiture, un seul interlocuteur. Particuliers, architectes, agents immobiliers — nous adaptons notre approche. Choisissez un service pour découvrir ce qu'il comprend.",
   "detailKicker": "Service",
   "includesTitle": "Ce que comprend ce service",
   "galleryTitle": "Réalisations",
   "otherTitle": "Autres services",
   "faqTitle": "Questions fréquentes",
   "caseKicker": "Chantier récent",
   "primesNote": "Ce service peut être éligible aux primes régionales (Wallonie, Flandre). On vérifie votre situation lors de la visite gratuite.",
   "primesLink": "Voir primes & TVA →",
   "quoteBtn": "Demander un devis pour ce service",
   "discover": "Découvrir →",
   "zonesLabel": "Nous intervenons à :"
  },
  "projects": {
   "kicker": "Réalisations",
   "title": "Le travail parle.",
   "seoTitle": "Réalisations — Rénovations à Bruxelles et en Brabant | Apollon Construction",
   "seoDesc": "Salles de bain, cuisines, plafonnage, traitement de l'humidité, façades : nos chantiers récents à Bruxelles et en Brabant, avec photos avant/après.",
   "intro": "Une sélection de chantiers récents à Bruxelles et dans le Brabant. Uniquement nos propres chantiers, photographiés par notre équipe. Filtrez par métier.",
   "all": "Tous"
  },
  "lp": {
   "kicker": "Bruxelles & Brabant — réponse sous 24 h",
   "formTitle": "Recevez votre devis gratuit",
   "formSub": "Rappel sous 24 h ouvrées. Sans engagement.",
   "call": "Appeler",
   "quote": "Devis gratuit",
   "orCall": "ou appelez directement",
   "whyTitle": "Pourquoi les clients nous choisissent.",
   "why": [
    {
     "t": "Un devis clair, poste par poste",
     "d": "Vous savez exactement ce que vous payez. Pas de surprise à la facture finale."
    },
    {
     "t": "Une seule équipe, du début à la fin",
     "d": "Plomberie, électricité, carrelage, peinture : nos propres ouvriers, pas de sous-traitance en cascade."
    },
    {
     "t": "Chantier propre, délais tenus",
     "d": "Bâches, évacuation quotidienne des gravats, planning fixé avant de commencer."
    }
   ],
   "photosTitle": "Nos chantiers récents",
   "faqTitle": "Questions fréquentes",
   "finalTitle": "Parlons de votre projet.",
   "finalSub": "Décrivez vos travaux en deux lignes, on vous rappelle sous 24 h avec les bonnes questions.",
   "backToForm": "Demander un devis"
  },
  "consent": {
   "text": "Nous utilisons des cookies de mesure (Google Ads) pour savoir quelles annonces vous amènent ici. Aucune revente de données.",
   "accept": "Accepter",
   "refuse": "Refuser"
  },
  "contact": {
   "kicker": "Contact",
   "title": "Parlons.",
   "seoTitle": "Contact — Apollon Construction Bruxelles",
   "seoDesc": "Contactez Apollon Construction pour votre devis gratuit : salle de bain, électricité RGIE, rénovation intérieure, façade et toiture à Bruxelles. Réponse sous 24h.",
   "intro": "Devis, question technique ou collaboration régulière : nous vous répondons sous 24 heures.",
   "form": {
    "title": "Demande de devis gratuit",
    "sub": "Réponse sous 24h — sans engagement",
    "name": "Nom complet",
    "email": "Email",
    "phone": "Téléphone",
    "profile": "Vous êtes",
    "profiles": [
     "Particulier",
     "Architecte",
     "Agent immobilier",
     "Promoteur immobilier",
     "Ingénieur / Bureau d'études",
     "Autre"
    ],
    "service": "Type de travaux",
    "message": "Description du projet",
    "messagePh": "Décrivez vos travaux : type de bien, pièce(s), superficie, commune, délai souhaité...",
    "send": "Envoyer ma demande",
    "rgpd": "Vos données sont protégées et ne seront jamais revendues (RGPD)",
    "photos": "Des photos ? Envoyez-les à info@apollonconstruction.be après votre demande : le devis n'en sera que plus précis.",
    "sentTitle": "Merci, c'est envoyé.",
    "sentText": "Demande envoyée ! Nous vous rappelons sous 24h.",
    "sending": "Envoi en cours…",
    "error": "L'envoi a échoué. Réessayez ou appelez-nous directement au 0499 89 60 86.",
    "thanksSteps": [
     "Nous lisons votre demande et vous rappelons sous 24 h ouvrées.",
     "Visite sur place gratuite si nécessaire, puis devis détaillé poste par poste sous 48 h.",
     "Vous avez des photos ? Envoyez-les à info@apollonconstruction.be, le devis n'en sera que plus précis."
    ],
    "thanksBack": "Retour à l'accueil"
   },
   "labels": {
    "phone": "Téléphone",
    "email": "Email",
    "address": "Siège",
    "zone": "Zone d'intervention",
    "hours": "Heures d'ouverture"
   }
  }
 },
 "nl": {
  "nav": {
   "home": "Home",
   "services": "Diensten",
   "projects": "Realisaties",
   "primes": "Premies & btw",
   "contact": "Contact",
   "cta": "Gratis offerte",
   "ctaShort": "Offerte",
   "call": "Bellen",
   "orCall": "Of bel ons",
   "speaks": "Antwoordt in",
   "hoursShort": "Ma–Za",
   "whatsapp": "WhatsApp",
   "allServices": "Alle diensten →",
   "menuNote": "Een project met meerdere vakgebieden? Dat is onze specialiteit.",
   "phone": "0499 89 60 86"
  },
  "stats": [
   {
    "n": "24u",
    "u": "",
    "l": "antwoord, in uw taal"
   },
   {
    "n": "48u",
    "u": "",
    "l": "gedetailleerde offerte, post per post"
   },
   {
    "n": "0€",
    "u": "",
    "l": "plaatsbezoek en verplaatsing"
   },
   {
    "n": "6",
    "u": " %",
    "l": "btw voor woningen ouder dan 10 jaar"
   }
  ],
  "trust": [
   {
    "label": "★★★★★ 5.0 Google"
   },
   {
    "label": "TrustUp Pro"
   },
   {
    "label": "Batibouw+"
   },
   {
    "label": "AREI · BA verzekerd"
   }
  ],
  "stepsTitle": "Van het eerste telefoontje tot de oplevering.",
  "steps": [
   {
    "n": "1",
    "t": "Gratis plaatsbezoek",
    "d": "We komen ter plaatse om de werf te evalueren, de maten te nemen en uw behoeften te begrijpen."
   },
   {
    "n": "2",
    "t": "Gedetailleerde offerte binnen 48u",
    "d": "Een duidelijke offerte, post per post, zonder verborgen kosten. U weet precies wat u betaalt."
   },
   {
    "n": "3",
    "t": "Verzorgde uitvoering",
    "d": "Ons eigen team voert de werken uit. Eén aanspreekpunt houdt u op de hoogte bij elke stap."
   },
   {
    "n": "4",
    "t": "Oplevering & garantie",
    "d": "Gezamenlijke eindkeuring. Werf opgeruimd, tienjarige garantie, reactieve dienst na verkoop."
   }
  ],
  "cta": {
   "title": "Laten we praten.",
   "sub": "Antwoord binnen 24u, gratis plaatsbezoek, gedetailleerde offerte binnen 48u. Enkele foto's volstaan om te beginnen."
  },
  "footer": {
   "rights": "© 2026 Apollon Group BV (Apollon Construction) — 1700 Dilbeek",
   "vat": "BTW BE 1025.392.245",
   "address": "Oudesmidsestraat 20, 1700 Dilbeek",
   "hours": "Ma–Vr 8u–18u · Za 9u–13u",
   "zone": "Brussel 19 gemeenten, Waals- & Vlaams-Brabant",
   "legal": "Juridische vermeldingen",
   "rgpd": "AVG-beleid"
  },
  "home": {
   "seoTitle": "Binnenrenovatie Brussel | Apollon Construction",
   "seoDesc": "Badkamer, elektriciteit AREI, pleisterwerk, schilderwerk: één team, duidelijke offerte binnen 48 u, 6 % btw. Brussel en Brabant. Google 5/5.",
   "kicker": "Binnenrenovatie — Brussel & Brabant",
   "lead": "Badkamer, elektriciteit, pleisterwerk, schilderwerk, vloeren, gevel, dak: één team, een duidelijke offerte post per post, een propere werf.",
   "h1a": "Renoveren",
   "h1b": "zonder compromis.",
   "m1": "Binnenrenovatie, badkamer, elektriciteit, gevel. Vage offertes, vertragingen, vuile werven: we zagen wat er misloopt in de sector, en wij doen ",
   "m2": "het omgekeerde.",
   "servicesIntro": "Acht vakgebieden, één team. Geen verborgen onderaanneming, geen doorgeschoven verantwoordelijkheid: dezelfde hand van ruwbouw tot afwerking, in de 19 Brusselse gemeenten en in Brabant.",
   "worksTitle": "Het werk spreekt.",
   "worksLink": "Al onze realisaties →",
   "quote": "« We beloven niet de grootste te zijn. We beloven de meest serieuze te zijn. »",
   "aboutKicker": "Waarom wij",
   "aboutTitle": "Een jong bedrijf, ervaren professionals.",
   "aboutText": "Apollon Construction is een recent bedrijf, opgericht door professionals met meer dan 5 jaar ervaring in renovatie in Brussel. We creëerden Apollon om dingen anders te doen: propere werven, transparante opvolging en eerlijke prijzen. Elke werf telt. We behandelen de uwe alsof het de onze was — want onze reputatie hangt ervan af.",
   "aboutPoints": [
    [
     "Tweetalig team FR/NL",
     "Twee vaste contactpersonen om u in uw taal te bedienen."
    ],
    [
     "Reactiviteit",
     "Antwoord binnen 24u, offerte binnen 48u."
    ],
    [
     "Totale transparantie",
     "Gedetailleerde offerte post per post. Geen verrassingen op de eindfactuur."
    ],
    [
     "Verzekering & conformiteit",
     "BA beroepsaansprakelijkheid, installaties conform het AREI, toegang tot het beroep in orde."
    ]
   ],
   "archKicker": "Architecten, makelaars & promotoren",
   "archTitle": "Uw betrouwbare onderaannemer in Brussel.",
   "archText": "Nauwgezette naleving van de plannen, regelmatige fotorapportering, snelle opknapbeurt vóór verkoop of verhuur, multi-lot beheer en partnertarieven op volume. Een vast aanspreekpunt, contractuele termijnen die worden nageleefd.",
   "archLink": "Een samenwerking starten →",
   "tvaKicker": "Verlaagde btw",
   "tvaBig": "6",
   "tvaText": "btw op uw werken als uw woning ouder is dan 10 jaar. Het verlaagde tarief wordt rechtstreeks op de factuur toegepast, en we controleren de regionale premies samen met u.",
   "tvaLink": "Premies & btw →",
   "reviewsKicker": "Google beoordelingen",
   "reviewsTitle": "Wat onze klanten zeggen.",
   "reviewLink": "5.0 op Google · alle beoordelingen →",
   "zonesLabel": "Wij werken in:",
   "partnersLabel": "Partners & garanties"
  },
  "sp": {
   "kicker": "Diensten",
   "title": "Acht vakgebieden, één team.",
   "seoTitle": "Onze renovatiediensten in Brussel — Apollon Construction",
   "intro": "Van de badkamer tot het dak, één aanspreekpunt. Particulieren, architecten, vastgoedmakelaars — wij passen onze aanpak aan. Kies een dienst om te ontdekken wat ze omvat.",
   "detailKicker": "Dienst",
   "includesTitle": "Wat deze dienst omvat",
   "galleryTitle": "Realisaties",
   "otherTitle": "Andere diensten",
   "faqTitle": "Veelgestelde vragen",
   "caseKicker": "Recente werf",
   "primesNote": "Deze dienst kan in aanmerking komen voor regionale premies (Wallonië, Vlaanderen). We controleren uw situatie tijdens het gratis plaatsbezoek.",
   "primesLink": "Premies & btw bekijken →",
   "quoteBtn": "Offerte aanvragen voor deze dienst",
   "discover": "Ontdekken →",
   "zonesLabel": "Wij werken in:"
  },
  "projects": {
   "kicker": "Realisaties",
   "title": "Het werk spreekt.",
   "seoTitle": "Realisaties — Renovaties in Brussel en Brabant | Apollon Construction",
   "seoDesc": "Badkamers, keukens, pleisterwerk, vochtbehandeling, gevels: onze recente werven in Brussel en Brabant, met foto's vóór/na.",
   "intro": "Een selectie van recente werven in Brussel en Brabant. Alleen onze eigen werven, gefotografeerd door ons team. Filter per vakgebied.",
   "all": "Alle"
  },
  "lp": {
   "kicker": "Brussel & Brabant — antwoord binnen 24 u",
   "formTitle": "Ontvang uw gratis offerte",
   "formSub": "We bellen u binnen 24 werkuren terug. Vrijblijvend.",
   "call": "Bellen",
   "quote": "Gratis offerte",
   "orCall": "of bel rechtstreeks",
   "whyTitle": "Waarom klanten voor ons kiezen.",
   "why": [
    {
     "t": "Een duidelijke offerte, post per post",
     "d": "U weet precies wat u betaalt. Geen verrassingen op de eindfactuur."
    },
    {
     "t": "Eén team, van begin tot einde",
     "d": "Sanitair, elektriciteit, tegels, schilderwerk: onze eigen vakmannen, geen onderaanneming in cascade."
    },
    {
     "t": "Propere werf, deadlines gehaald",
     "d": "Afdekking, dagelijkse afvoer van puin, planning vastgelegd voor de start."
    }
   ],
   "photosTitle": "Onze recente werven",
   "faqTitle": "Veelgestelde vragen",
   "finalTitle": "Laten we over uw project praten.",
   "finalSub": "Beschrijf uw werken in twee regels, we bellen u binnen 24 u terug met de juiste vragen.",
   "backToForm": "Offerte aanvragen"
  },
  "consent": {
   "text": "We gebruiken meetcookies (Google Ads) om te weten welke advertenties u hierheen brengen. Geen doorverkoop van gegevens.",
   "accept": "Aanvaarden",
   "refuse": "Weigeren"
  },
  "contact": {
   "kicker": "Contact",
   "title": "Laten we praten.",
   "seoTitle": "Contact — Apollon Construction Brussel",
   "seoDesc": "Contacteer Apollon Construction voor uw gratis offerte: badkamer, elektriciteit AREI, binnenrenovatie, gevel en dak in Brussel. Antwoord binnen 24u.",
   "intro": "Offerte, technische vraag of vaste samenwerking: we antwoorden u binnen 24 uur.",
   "form": {
    "title": "Aanvraag gratis offerte",
    "sub": "Antwoord binnen 24u — vrijblijvend",
    "name": "Volledige naam",
    "email": "E-mail",
    "phone": "Telefoon",
    "profile": "U bent",
    "profiles": [
     "Particulier",
     "Architect",
     "Vastgoedmakelaar",
     "Vastgoedpromotor",
     "Ingenieur / Studiebureau",
     "Andere"
    ],
    "service": "Type werken",
    "message": "Projectbeschrijving",
    "messagePh": "Beschrijf uw werken: type woning, ruimte(s), oppervlakte, gemeente, gewenste termijn...",
    "send": "Mijn aanvraag versturen",
    "rgpd": "Uw gegevens zijn beschermd en worden nooit doorverkocht (AVG)",
    "photos": "Foto's? Stuur ze na uw aanvraag naar info@apollonconstruction.be: zo wordt de offerte nauwkeuriger.",
    "sentTitle": "Bedankt, verzonden.",
    "sentText": "Aanvraag verzonden! We bellen u binnen 24u terug.",
    "sending": "Bezig met verzenden…",
    "error": "Verzenden mislukt. Probeer opnieuw of bel ons rechtstreeks op 0499 89 60 86.",
    "thanksSteps": [
     "We lezen uw aanvraag en bellen u binnen 24 werkuren terug.",
     "Gratis plaatsbezoek indien nodig, daarna een gedetailleerde offerte post per post binnen 48 u.",
     "Heeft u foto's? Stuur ze naar info@apollonconstruction.be, dan wordt de offerte nog preciezer."
    ],
    "thanksBack": "Terug naar home"
   },
   "labels": {
    "phone": "Telefoon",
    "email": "E-mail",
    "address": "Zetel",
    "zone": "Werkgebied",
    "hours": "Openingsuren"
   }
  }
 },
 "en": {
  "nav": {
   "home": "Home",
   "services": "Services",
   "projects": "Projects",
   "primes": "Grants & VAT",
   "contact": "Contact",
   "cta": "Free quote",
   "ctaShort": "Quote",
   "call": "Call",
   "orCall": "Or call us",
   "speaks": "Speaks",
   "hoursShort": "Mon–Sat",
   "whatsapp": "WhatsApp",
   "allServices": "All services →",
   "menuNote": "A project that combines several trades? That's our specialty.",
   "phone": "0499 89 60 86"
  },
  "stats": [
   {
    "n": "24h",
    "u": "",
    "l": "reply, in your language"
   },
   {
    "n": "48h",
    "u": "",
    "l": "itemised quote, line by line"
   },
   {
    "n": "0€",
    "u": "",
    "l": "site visit and travel"
   },
   {
    "n": "6",
    "u": "%",
    "l": "VAT on homes older than 10 years"
   }
  ],
  "trust": [
   {
    "label": "★★★★★ 5.0 Google"
   },
   {
    "label": "TrustUp Pro"
   },
   {
    "label": "Batibouw+"
   },
   {
    "label": "RGIE · Liability insured"
   }
  ],
  "stepsTitle": "From the first call to handover.",
  "steps": [
   {
    "n": "1",
    "t": "Free site visit",
    "d": "We visit your site to assess the works, take measurements and understand your needs."
   },
   {
    "n": "2",
    "t": "Detailed quote within 48h",
    "d": "A clear quote, line by line, no hidden costs. You know exactly what you pay."
   },
   {
    "n": "3",
    "t": "Quality execution",
    "d": "Our own team carries out the works. One contact keeps you informed at every step."
   },
   {
    "n": "4",
    "t": "Handover & guarantee",
    "d": "Final inspection together. Site cleaned, ten-year guarantee, responsive after-sales service."
   }
  ],
  "cta": {
   "title": "Let's talk.",
   "sub": "Reply within 24h, free site visit, detailed quote within 48h. A few photos are enough to get started."
  },
  "footer": {
   "rights": "© 2026 Apollon Group SRL (Apollon Construction) — 1700 Dilbeek",
   "vat": "VAT BE 1025.392.245",
   "address": "Oudesmidsestraat 20, 1700 Dilbeek",
   "hours": "Mon–Fri 8am–6pm · Sat 9am–1pm",
   "zone": "Brussels 19 municipalities, Walloon & Flemish Brabant",
   "legal": "Legal notices",
   "rgpd": "GDPR Policy"
  },
  "home": {
   "seoTitle": "Interior renovation Brussels | Apollon Construction",
   "seoDesc": "Bathroom, RGIE electrics, plastering, painting: one team, a clear quote within 48 h, 6% VAT. Brussels and Brabant. Google rating 5/5.",
   "kicker": "Interior renovation — Brussels & Brabant",
   "lead": "Bathroom, electrics, plastering, painting, flooring, façade, roofing: one team, a clear itemised quote, a clean site.",
   "h1a": "Renovate",
   "h1b": "without compromise.",
   "m1": "Interior renovation, bathrooms, electrics, façades. Vague quotes, delays, messy sites: we've seen what goes wrong in this industry, and we do ",
   "m2": "the opposite.",
   "servicesIntro": "Eight trades, one team. No hidden subcontracting, no passing the buck: the same hands from structural work to finishes, across the 19 municipalities of Brussels and Brabant.",
   "worksTitle": "The work speaks.",
   "worksLink": "All our projects →",
   "quote": "“We don't promise to be the biggest. We promise to be the most serious.”",
   "aboutKicker": "Why us",
   "aboutTitle": "A young company, experienced professionals.",
   "aboutText": "Apollon Construction is a recent company, founded by professionals with over 5 years of renovation experience in Brussels. We created Apollon to do things differently: clean sites, transparent follow-up and fair prices. Every project counts. We treat yours as if it were ours — because our reputation depends on it.",
   "aboutPoints": [
    [
     "Bilingual team FR/NL",
     "Two dedicated contacts to serve you in your language."
    ],
    [
     "Reactivity",
     "Reply within 24h, quote within 48h."
    ],
    [
     "Total transparency",
     "Detailed quote line by line. No surprises on the final invoice."
    ],
    [
     "Insurance & compliance",
     "Professional liability, RGIE-compliant installations, trade access in order."
    ]
   ],
   "archKicker": "Architects, agents & developers",
   "archTitle": "Your trusted subcontractor in Brussels.",
   "archText": "Plans followed to the letter, regular photo reporting, fast refurbishment before sale or letting, multi-unit management and partner rates on volume. A dedicated contact, contractual deadlines kept.",
   "archLink": "Start a collaboration →",
   "tvaKicker": "Reduced VAT",
   "tvaBig": "6",
   "tvaText": "VAT on your works if your home is more than 10 years old. The reduced rate is applied directly on the invoice, and we check the regional grants with you.",
   "tvaLink": "Grants & VAT →",
   "reviewsKicker": "Google reviews",
   "reviewsTitle": "What our clients say.",
   "reviewLink": "5.0 on Google · all reviews →",
   "zonesLabel": "We work in:",
   "partnersLabel": "Partners & guarantees"
  },
  "sp": {
   "kicker": "Services",
   "title": "Eight trades, one team.",
   "seoTitle": "Our renovation services in Brussels — Apollon Construction",
   "intro": "From the bathroom to the roof, one point of contact. Homeowners, architects, estate agents — we adapt our approach. Choose a service to see what it includes.",
   "detailKicker": "Service",
   "includesTitle": "What this service includes",
   "galleryTitle": "Projects",
   "otherTitle": "Other services",
   "faqTitle": "Frequently asked questions",
   "caseKicker": "Recent project",
   "primesNote": "This service may be eligible for regional grants (Wallonia, Flanders). We check your situation during the free site visit.",
   "primesLink": "See grants & VAT →",
   "quoteBtn": "Request a quote for this service",
   "discover": "Discover →",
   "zonesLabel": "We work in:"
  },
  "projects": {
   "kicker": "Projects",
   "title": "The work speaks.",
   "seoTitle": "Projects — Renovations in Brussels and Brabant | Apollon Construction",
   "seoDesc": "Bathrooms, kitchens, plastering, damp treatment, façades: our recent projects in Brussels and Brabant, with before/after photos.",
   "intro": "A selection of recent projects in Brussels and Brabant. Only our own sites, photographed by our team. Filter by trade.",
   "all": "All"
  },
  "lp": {
   "kicker": "Brussels & Brabant — reply within 24 h",
   "formTitle": "Get your free quote",
   "formSub": "Call back within 24 working hours. No obligation.",
   "call": "Call",
   "quote": "Free quote",
   "orCall": "or call us directly",
   "whyTitle": "Why clients choose us.",
   "why": [
    {
     "t": "A clear itemised quote",
     "d": "You know exactly what you pay for. No surprises on the final invoice."
    },
    {
     "t": "One team from start to finish",
     "d": "Plumbing, electrics, tiling, painting: our own workers, no chains of subcontractors."
    },
    {
     "t": "Clean site, deadlines kept",
     "d": "Protective sheeting, daily rubble removal, schedule fixed before we start."
    }
   ],
   "photosTitle": "Our recent projects",
   "faqTitle": "Frequently asked questions",
   "finalTitle": "Let's talk about your project.",
   "finalSub": "Describe your works in two lines, we call you back within 24 h with the right questions.",
   "backToForm": "Request a quote"
  },
  "consent": {
   "text": "We use measurement cookies (Google Ads) to know which ads bring you here. No data resale.",
   "accept": "Accept",
   "refuse": "Refuse"
  },
  "contact": {
   "kicker": "Contact",
   "title": "Let's talk.",
   "seoTitle": "Contact — Apollon Construction Brussels",
   "seoDesc": "Contact Apollon Construction for your free quote: bathroom, RGIE electrics, interior renovation, facade and roofing in Brussels. Reply within 24h.",
   "intro": "Quote, technical question or ongoing collaboration: we reply within 24 hours.",
   "form": {
    "title": "Free quote request",
    "sub": "Reply within 24h — no commitment",
    "name": "Full name",
    "email": "Email",
    "phone": "Phone",
    "profile": "You are",
    "profiles": [
     "Private individual",
     "Architect",
     "Real estate agent",
     "Property developer",
     "Engineer / Consultancy",
     "Other"
    ],
    "service": "Type of works",
    "message": "Project description",
    "messagePh": "Describe your works: property type, room(s), surface, municipality, desired timing...",
    "send": "Send my request",
    "rgpd": "Your data is protected and will never be sold (GDPR)",
    "photos": "Photos? Send them to info@apollonconstruction.be after your request for a more accurate quote.",
    "sentTitle": "Thank you, it's sent.",
    "sentText": "Request sent! We'll call you back within 24h.",
    "sending": "Sending…",
    "error": "Sending failed. Try again or call us directly on 0499 89 60 86.",
    "thanksSteps": [
     "We read your request and call you back within 24 working hours.",
     "Free site visit if needed, then a detailed itemised quote within 48 h.",
     "Got photos? Send them to info@apollonconstruction.be and the quote will be even more accurate."
    ],
    "thanksBack": "Back to home"
   },
   "labels": {
    "phone": "Phone",
    "email": "Email",
    "address": "Office",
    "zone": "Area covered",
    "hours": "Opening hours"
   }
  }
 }
};
export const AA = {
 "fr": {
  "kicker": "Avant / Après",
  "title": "Glissez pour voir la différence.",
  "before": "Avant",
  "after": "Après",
  "hint": "Glissez le curseur ↔",
  "caseTitle": "Cuisine — plafond, éclairage et peinture",
  "caseText": "Nouveau plafond avec caisson lumineux intégré, spots encastrés, corniches, climatisation encastrée et mise en peinture complète des murs. Mobilier et plans de travail protégés du premier au dernier jour.",
  "videos": "Le chantier en vidéo — avant / après",
  "videosText": "Deux chantiers filmés par notre équipe, du premier coup de burin aux finitions.",
  "view1": "Vue vers la fenêtre",
  "view2": "Vue vers le mur de fond",
  "view3": "Vue depuis la porte"
 },
 "nl": {
  "kicker": "Voor / Na",
  "title": "Schuif om het verschil te zien.",
  "before": "Voor",
  "after": "Na",
  "hint": "Verschuif de cursor ↔",
  "caseTitle": "Keuken — plafond, verlichting en schilderwerk",
  "caseText": "Nieuw plafond met geïntegreerde lichtkoof, inbouwspots, sierlijsten, ingebouwde airco en volledig schilderwerk van de muren. Meubels en werkbladen beschermd van de eerste tot de laatste dag.",
  "videos": "De werf in beeld — voor / na",
  "videosText": "Twee werven gefilmd door ons team, van de eerste beitelslag tot de afwerking.",
  "view1": "Zicht naar het raam",
  "view2": "Zicht naar de achterwand",
  "view3": "Zicht vanaf de deur"
 },
 "en": {
  "kicker": "Before / After",
  "title": "Drag to see the difference.",
  "before": "Before",
  "after": "After",
  "hint": "Drag the slider ↔",
  "caseTitle": "Kitchen — ceiling, lighting and painting",
  "caseText": "New ceiling with integrated light box, recessed spots, cornices, built-in air conditioning and full repainting of the walls. Units and worktops protected from the first day to the last.",
  "videos": "The site on video — before / after",
  "videosText": "Two projects filmed by our team, from the first chisel blow to the finishing touches.",
  "view1": "View towards the window",
  "view2": "View towards the back wall",
  "view3": "View from the door"
 }
};
export const CASES = [{"before":"/uploads/avant3.jpg","after":"/uploads/apres1.jpg"},{"before":"/uploads/avant2.jpg","after":"/uploads/apres2.jpg"},{"before":"/uploads/avant4.jpg","after":"/uploads/apres3.jpg"}];
export const VIDEOS = [
 {
  "src": "/uploads/video-sdb.mp4",
  "poster": "/uploads/video-sdb-poster.jpg",
  "label": {
   "fr": "Salle de bain",
   "nl": "Badkamer",
   "en": "Bathroom"
  },
  "title": {
   "fr": "Salle de bain — avant, pendant, après",
   "nl": "Badkamer — voor, tijdens, na",
   "en": "Bathroom — before, during, after"
  },
  "text": {
   "fr": "Murs mis à nu et plomberie refaite, puis douche à l'italienne avec paroi vitrée, carrelage effet marbre du sol au plafond, meuble-vasque suspendu et sèche-serviettes.",
   "nl": "Muren tot op de steen gestript en sanitair vernieuwd, daarna een inloopdouche met glazen wand, tegels in marmerlook van vloer tot plafond, hangend wastafelmeubel en handdoekradiator.",
   "en": "Walls stripped back and plumbing redone, then a walk-in shower with glass screen, marble-look tiles from floor to ceiling, wall-hung basin unit and towel radiator."
  }
 },
 {
  "src": "/uploads/video-sejour.mp4",
  "poster": "/uploads/video-sejour-poster.jpg",
  "label": {
   "fr": "Séjour",
   "nl": "Woonkamer",
   "en": "Living room"
  },
  "title": {
   "fr": "Séjour — murs remis à neuf et nouveau sol",
   "nl": "Woonkamer — muren vernieuwd en nieuwe vloer",
   "en": "Living room — walls renewed and new floor"
  },
  "text": {
   "fr": "Anciens revêtements arrachés, murs replâtrés et repeints, plinthes et pose d'un sol en bois neuf. Un séjour prêt à vivre, livré propre.",
   "nl": "Oude bekleding verwijderd, muren opnieuw gepleisterd en geschilderd, plinten en een nieuwe houten vloer. Een woonkamer klaar om in te leven, proper opgeleverd.",
   "en": "Old coverings stripped, walls re-plastered and repainted, skirting boards and a new wooden floor. A living room ready to live in, handed over clean."
  }
 }
];
export const PRIMES = {
 "fr": {
  "seoTitle": "Primes Rénovation 2025-2026 — Bruxelles, Wallonie, Flandre",
  "seoDesc": "Guide complet des primes de rénovation en Belgique. Wallonie: Prime Habitation. Bruxelles: RENOLUTION suspendue. Flandre: MijnVerbouwPremie.",
  "kicker": "Primes & TVA 2025–2026",
  "title": "Ce que la Belgique finance. Et ce qu'on gère pour vous.",
  "intro": "TVA réduite à 6 %, primes régionales pour l'isolation et la toiture : les aides changent chaque année et dépendent de votre Région et de vos revenus. On vérifie votre situation lors de la visite gratuite et on monte le dossier avec vous.",
  "update": "✓ Mis à jour — avril 2026 · Valable jusqu'au 30 septembre 2026",
  "button": "Vérifier ma situation avec un expert",
  "tva": {
   "kicker": "Pour tous, dans les trois Régions",
   "title": "TVA à 6 % sur la rénovation",
   "text": "Si votre logement a plus de 10 ans et sert principalement d'habitation privée, les travaux de rénovation (main-d'œuvre et matériaux posés par l'entreprise) sont facturés à 6 % au lieu de 21 %. C'est l'aide la plus simple et la plus sûre : elle s'applique directement sur notre facture, sans dossier à introduire.",
   "note": "Ne s'applique pas au mobilier fourni séparément ni aux logements de moins de 10 ans."
  },
  "regionsTitle": "Situation par région.",
  "regions": [
   {
    "prog": "Wallonie",
    "status": "Primes actives",
    "active": true,
    "amount": "Jusqu'à 70%",
    "desc": "Prime Habitation depuis le 14 fév. 2025. Audit non obligatoire pour la toiture. Valable jusqu'au 30 sept. 2026."
   },
   {
    "prog": "Bruxelles",
    "status": "Suspendues 2025-2026",
    "active": false,
    "amount": "Suspendu",
    "desc": "Primes RENOLUTION suspendues pour factures 2025-2026. Dossiers 2024 approuvés : paiement en cours (56M€ débloqués). Transition vers prêts à taux zéro dès 2027."
   },
   {
    "prog": "Flandre",
    "status": "Primes actives",
    "active": true,
    "amount": "Jusqu'à 35%",
    "desc": "MijnVerbouwPremie actif. Max 4.025€ pour la toiture. Prime PEB jusqu'au 30 juin 2026."
   }
  ],
  "details": [
   {
    "h": "Wallonie — Prime Habitation",
    "p": [
     "Depuis le 14 février 2025, la Wallonie a simplifié son système avec la Prime Habitation unique.",
     "Pour les travaux de toiture : l'audit énergétique n'est plus obligatoire."
    ],
    "alert": "Montants réduits d'environ 60% vs l'ancien système. R5 (revenus très élevés) : non éligible.",
    "ok": "Deadline : 30 septembre 2026",
    "th": [
     "Catégorie",
     "Plafond"
    ],
    "rows": [
     [
      "R1 — Revenus très modestes",
      "70% TVAC"
     ],
     [
      "R2 — Revenus modestes",
      "70% TVAC"
     ],
     [
      "R3 — Revenus moyens",
      "50% TVAC"
     ],
     [
      "R4 — Revenus élevés",
      "50% TVAC"
     ],
     [
      "R5 — Revenus très élevés",
      "Non éligible"
     ]
    ],
    "link": "Site officiel : wallonie.be — Prime Habitation 2025"
   },
   {
    "h": "Bruxelles — RENOLUTION",
    "p": [
     "Pour les factures datées de 2024 dont le dossier a été approuvé, les paiements sont en cours. Aucune nouvelle demande n'est possible pour les factures 2025 ou 2026."
    ],
    "alert": "Primes RENOLUTION suspendues pour les factures 2025. Attendez la décision du nouveau gouvernement.",
    "th": [
     "Travaux",
     "Cat. I",
     "Cat. II",
     "Cat. III"
    ],
    "rows": [
     [
      "Isolation toiture",
      "75 €/m²",
      "55 €/m²",
      "35 €/m²"
     ],
     [
      "Isolation façade (ITE)",
      "30 €/m²",
      "25 €/m²",
      "20 €/m²"
     ],
     [
      "Bonus biosourcé",
      "+10 €/m²",
      "+10 €/m²",
      "+10 €/m²"
     ]
    ],
    "note": "Montants valables uniquement pour factures datées de 2024.",
    "link": "Suivez l'évolution : renolution.brussels · homegrade.brussels"
   },
   {
    "h": "Flandre — MijnVerbouwPremie",
    "p": [
     "Toutes les demandes via Mijn Verbouwloket. Depuis le 1er janvier 2025, les montants ont été réduits.",
     "Maximum 35% des coûts, plafond 4.025 € pour la toiture."
    ],
    "alert": "À partir du 1er juillet 2026, les primes pour revenus élevés sont supprimées.",
    "steps": [
     [
      "Connectez-vous sur Mijn Verbouwloket",
      "Toutes les démarches en ligne."
     ],
     [
      "Faites réaliser les travaux par un entrepreneur agréé",
      "Apollon Construction est enregistré."
     ],
     [
      "Introduisez la demande dans les 2 ans",
      "Cat. 1 et 2 : avant le 28 février 2026."
     ]
    ],
    "link": "Site officiel : mijnverbouwloket.be"
   }
  ],
  "covered": "Travaux couverts :",
  "note": "Les montants et conditions évoluent chaque année et dépendent de vos revenus et du bien. Informations données à titre indicatif ; nous vérifions votre éligibilité précise lors de la visite gratuite.",
  "stepsTitle": "Notre accompagnement, inclus dans chaque chantier.",
  "steps": [
   {
    "n": "1",
    "t": "Analyse d'éligibilité",
    "d": "Lors de la visite gratuite, on identifie la TVA applicable et les primes possibles pour votre bien et votre situation."
   },
   {
    "n": "2",
    "t": "Devis conforme",
    "d": "Nos devis détaillés poste par poste répondent aux exigences des administrations régionales."
   },
   {
    "n": "3",
    "t": "Constitution du dossier",
    "d": "On rassemble avec vous les documents, attestations et photos exigés pour la demande."
   },
   {
    "n": "4",
    "t": "Suivi jusqu'au paiement",
    "d": "On reste votre contact jusqu'au versement de la prime, y compris en cas de demande de complément."
   }
  ],
  "ctaTitle": "On vous aide à obtenir vos primes.",
  "ctaSub": "Apollon Construction vous accompagne dans les démarches et s'assure que vos travaux répondent aux critères d'éligibilité."
 },
 "nl": {
  "seoTitle": "Renovatiepremies 2025-2026 — Brussel, Wallonië, Vlaanderen",
  "seoDesc": "Complete gids van de renovatiepremies in België. Wallonië: Prime Habitation. Brussel: RENOLUTION opgeschort. Vlaanderen: MijnVerbouwPremie.",
  "kicker": "Premies & btw 2025–2026",
  "title": "Wat België financiert. En wat wij voor u regelen.",
  "intro": "Btw verlaagd tot 6 %, regionale premies voor isolatie en dak: de steun verandert elk jaar en hangt af van uw Gewest en uw inkomen. We controleren uw situatie tijdens het gratis plaatsbezoek en stellen het dossier samen met u op.",
  "update": "✓ Bijgewerkt — april 2026 · Geldig tot 30 september 2026",
  "button": "Mijn situatie nakijken met een expert",
  "tva": {
   "kicker": "Voor iedereen, in de drie Gewesten",
   "title": "6 % btw op renovatie",
   "text": "Als uw woning ouder is dan 10 jaar en hoofdzakelijk als privéwoning dient, worden de renovatiewerken (arbeid en door het bedrijf geplaatste materialen) gefactureerd aan 6 % in plaats van 21 %. Het is de eenvoudigste en zekerste steun: ze geldt rechtstreeks op onze factuur, zonder dossier in te dienen.",
   "note": "Geldt niet voor apart geleverde meubels of woningen jonger dan 10 jaar."
  },
  "regionsTitle": "Situatie per gewest.",
  "regions": [
   {
    "prog": "Wallonië",
    "status": "Premies actief",
    "active": true,
    "amount": "Tot 70%",
    "desc": "Prime Habitation depuis le 14 fév. 2025. Geen audit vereist voor dakwerken. Geldig tot 30 sept. 2026."
   },
   {
    "prog": "Brussel",
    "status": "Opgeschort 2025-2026",
    "active": false,
    "amount": "Opgeschort",
    "desc": "RENOLUTION premies opgeschort voor facturen 2025-2026. Goedgekeurde dossiers 2024: betalingen in uitvoering (56M€ vrijgemaakt). Overgang naar renteloze leningen vanaf 2027."
   },
   {
    "prog": "Vlaanderen",
    "status": "Premies actief",
    "active": true,
    "amount": "Tot 35%",
    "desc": "MijnVerbouwPremie actief. Max 4.025€ voor het dak. EPC-premie tot 30 juni 2026."
   }
  ],
  "details": [
   {
    "h": "Wallonië — Prime Habitation",
    "p": [
     "Depuis le 14 februari 2025 heeft Wallonië zijn systeem vereenvoudigd met de unieke Prime Habitation.",
     "Voor dakwerken: de energieaudit is niet meer verplicht."
    ],
    "alert": "Basisbedragen gemiddeld 60% verlaagd. R5 (zeer hoge inkomens): niet in aanmerking.",
    "ok": "Deadline: 30 september 2026",
    "th": [
     "Categorie",
     "Plafond"
    ],
    "rows": [
     [
      "R1 — Zeer bescheiden inkomens",
      "70% TVAC"
     ],
     [
      "R2 — Bescheiden inkomens",
      "70% TVAC"
     ],
     [
      "R3 — Gemiddelde inkomens",
      "50% TVAC"
     ],
     [
      "R4 — Hoge inkomens",
      "50% TVAC"
     ],
     [
      "R5 — Zeer hoge inkomens",
      "Niet in aanmerking"
     ]
    ],
    "link": "Officiële site: wallonie.be — Prime Habitation 2025"
   },
   {
    "h": "Brussel — RENOLUTION",
    "p": [
     "Voor facturen van 2024 waarvan het dossier is goedgekeurd, zijn de betalingen in uitvoering. Geen nieuwe aanvraag mogelijk voor facturen 2025 of 2026."
    ],
    "alert": "RENOLUTION premies opgeschort voor facturen van 2025. Wacht op de beslissing van de nieuwe Brusselse regering.",
    "th": [
     "Type werken",
     "Cat. I",
     "Cat. II",
     "Cat. III"
    ],
    "rows": [
     [
      "Dakisolatie",
      "75 €/m²",
      "55 €/m²",
      "35 €/m²"
     ],
     [
      "Gevelisolatie (BUI)",
      "30 €/m²",
      "25 €/m²",
      "20 €/m²"
     ],
     [
      "Biobased bonus",
      "+10 €/m²",
      "+10 €/m²",
      "+10 €/m²"
     ]
    ],
    "note": "Bedragen alleen geldig voor facturen gedateerd in 2024.",
    "link": "Volg de evolutie: renolution.brussels · homegrade.brussels"
   },
   {
    "h": "Vlaanderen — MijnVerbouwPremie",
    "p": [
     "Alle aanvragen verlopen via Mijn Verbouwloket. Depuis le 1 januari 2025 zijn de bedragen verlaagd.",
     "Maximaal 35% van de kosten, plafond 4.025 € voor het dak."
    ],
    "alert": "Vanaf 1 juli 2026 worden de premies voor hoge inkomens geschrapt.",
    "steps": [
     [
      "Log in op Mijn Verbouwloket",
      "Alle procedures online."
     ],
     [
      "Laat de werken uitvoeren door een erkende aannemer",
      "Apollon Construction is geregistreerd."
     ],
     [
      "Dien de aanvraag in binnen 2 jaar",
      "Cat. 1 en 2: vóór 28 februari 2026."
     ]
    ],
    "link": "Officiële site: mijnverbouwloket.be"
   }
  ],
  "covered": "Gedekte werken:",
  "note": "Bedragen en voorwaarden veranderen elk jaar en hangen af van uw inkomen en het pand. Indicatieve informatie; we controleren uw exacte recht tijdens het gratis plaatsbezoek.",
  "stepsTitle": "Onze begeleiding, inbegrepen bij elke werf.",
  "steps": [
   {
    "n": "1",
    "t": "Analyse van uw recht",
    "d": "Tijdens het gratis plaatsbezoek bepalen we de toepasselijke btw en de mogelijke premies voor uw pand en situatie."
   },
   {
    "n": "2",
    "t": "Conforme offerte",
    "d": "Onze gedetailleerde offertes beantwoorden aan de eisen van de gewestelijke administraties."
   },
   {
    "n": "3",
    "t": "Samenstelling van het dossier",
    "d": "We verzamelen samen met u de documenten, attesten en foto's die vereist zijn voor de aanvraag."
   },
   {
    "n": "4",
    "t": "Opvolging tot uitbetaling",
    "d": "We blijven uw contact tot de premie is uitbetaald, ook bij een vraag om aanvullende stukken."
   }
  ],
  "ctaTitle": "Wij helpen u uw premies te verkrijgen.",
  "ctaSub": "Apollon Construction begeleidt u bij de administratieve procedures en zorgt dat uw werken voldoen aan de premievoorwaarden."
 },
 "en": {
  "seoTitle": "Renovation Grants 2025-2026 — Brussels, Wallonia, Flanders",
  "seoDesc": "Complete guide to renovation grants in Belgium. Wallonia: Prime Habitation. Brussels: RENOLUTION suspended. Flanders: MijnVerbouwPremie.",
  "kicker": "Grants & VAT 2025–2026",
  "title": "What Belgium funds. And what we handle for you.",
  "intro": "VAT reduced to 6%, regional grants for insulation and roofing: support changes every year and depends on your Region and income. We check your situation during the free site visit and build the application with you.",
  "update": "✓ Updated — April 2026 · Valid until 30 September 2026",
  "button": "Check my situation with an expert",
  "tva": {
   "kicker": "For everyone, in all three Regions",
   "title": "6% VAT on renovation",
   "text": "If your home is more than 10 years old and mainly used as a private residence, renovation works (labour and materials installed by the company) are invoiced at 6% instead of 21%. It is the simplest and most reliable support: it applies directly on our invoice, with no application to file.",
   "note": "Does not apply to furniture supplied separately or homes under 10 years old."
  },
  "regionsTitle": "Situation by region.",
  "regions": [
   {
    "prog": "Wallonia",
    "status": "Grants active",
    "active": true,
    "amount": "Up to 70%",
    "desc": "Prime Habitation since 14 Feb. 2025. No audit required for roofing. Valid until 30 Sept. 2026."
   },
   {
    "prog": "Brussels",
    "status": "Suspended 2025-2026",
    "active": false,
    "amount": "Suspended",
    "desc": "RENOLUTION grants suspended for 2025-2026 invoices. Approved 2024 files: payments in progress (€56M released). Transition to interest-free loans from 2027."
   },
   {
    "prog": "Flanders",
    "status": "Grants active",
    "active": true,
    "amount": "Up to 35%",
    "desc": "MijnVerbouwPremie active. Max €4,025 for roofing. EPC grant until 30 June 2026."
   }
  ],
  "details": [
   {
    "h": "Wallonia — Prime Habitation",
    "p": [
     "Since 14 February 2025, Wallonia simplified its system with a single grant: the Prime Habitation.",
     "For roofing works: no energy audit required."
    ],
    "alert": "Base amounts reduced by about 60% vs. the old system. R5 (very high incomes): not eligible.",
    "ok": "Deadline: 30 September 2026",
    "th": [
     "Category",
     "Cap"
    ],
    "rows": [
     [
      "R1 — Very modest income",
      "70% incl. VAT"
     ],
     [
      "R2 — Modest income",
      "70% incl. VAT"
     ],
     [
      "R3 — Average income",
      "50% incl. VAT"
     ],
     [
      "R4 — High income",
      "50% incl. VAT"
     ],
     [
      "R5 — Very high income",
      "Not eligible"
     ]
    ],
    "link": "Official site: wallonie.be — Prime Habitation 2025"
   },
   {
    "h": "Brussels — RENOLUTION",
    "p": [
     "For invoices dated 2024 with an approved file, payments are in progress. No new applications are possible for 2025 or 2026 invoices."
    ],
    "alert": "RENOLUTION grants suspended for 2025 invoices. Wait for the new Brussels government's decision.",
    "th": [
     "Works",
     "Cat. I",
     "Cat. II",
     "Cat. III"
    ],
    "rows": [
     [
      "Roof insulation",
      "€75/m²",
      "€55/m²",
      "€35/m²"
     ],
     [
      "Facade insulation (EWI)",
      "€30/m²",
      "€25/m²",
      "€20/m²"
     ],
     [
      "Bio-based bonus",
      "+€10/m²",
      "+€10/m²",
      "+€10/m²"
     ]
    ],
    "note": "Amounts valid only for invoices dated 2024.",
    "link": "Follow updates: renolution.brussels · homegrade.brussels"
   },
   {
    "h": "Flanders — MijnVerbouwPremie",
    "p": [
     "All applications go through Mijn Verbouwloket. Since 1 January 2025, amounts have been reduced.",
     "Maximum 35% of costs, cap €4,025 for roofing."
    ],
    "alert": "From 1 July 2026, grants for high-income households are removed.",
    "steps": [
     [
      "Log in to Mijn Verbouwloket",
      "All procedures online."
     ],
     [
      "Have works done by a registered contractor",
      "Apollon Construction is registered."
     ],
     [
      "Submit application within 2 years",
      "Cat. 1 and 2: before 28 February 2026."
     ]
    ],
    "link": "Official site: mijnverbouwloket.be"
   }
  ],
  "covered": "Works covered:",
  "note": "Amounts and conditions change every year and depend on your income and the property. Indicative information; we check your precise eligibility during the free site visit.",
  "stepsTitle": "Our support, included with every project.",
  "steps": [
   {
    "n": "1",
    "t": "Eligibility analysis",
    "d": "During the free site visit we identify the applicable VAT and the possible grants for your property and situation."
   },
   {
    "n": "2",
    "t": "Compliant quote",
    "d": "Our itemised quotes meet the requirements of the regional administrations."
   },
   {
    "n": "3",
    "t": "Building the application",
    "d": "We gather the documents, certificates and photos required for the application with you."
   },
   {
    "n": "4",
    "t": "Follow-up until payment",
    "d": "We remain your contact until the grant is paid, including any requests for additional documents."
   }
  ],
  "ctaTitle": "We help you obtain your grants.",
  "ctaSub": "Apollon Construction guides you through the administrative process and ensures your works meet grant eligibility criteria."
 }
};

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
