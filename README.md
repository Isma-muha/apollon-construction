# Site Apollon Construction — refonte

Site Next.js 14 (App Router), trilingue FR / NL / EN, design de la maquette de refonte,
contenu repris de l'ancien site (textes SEO, services, primes, avis, coordonnées) avec
priorité à la rénovation intérieure.

Le formulaire de contact envoie chaque demande par e-mail (SMTP Hostinger) via `app/api/contact`
— voir « Formulaire » ci-dessous. Pas d'analytics, pas de domaine, pas de déploiement inclus.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000 → redirige vers /fr
```

## Structure

- `app/[lang]/…` — pages (fr / nl / en) : accueil, services, services/[id], realisations,
  primes, contact. `app/sitemap.js` et `app/robots.js` génèrent sitemap.xml et robots.txt.
- `lib/site-data.js` — **tout le contenu** (textes 3 langues, 8 services avec FAQ, projets,
  primes). Fichier généré par `node tools/compose-data.mjs` à partir de
  `tools/_extract_*.json` (contenu extrait de l'ancien site) + textes rédigés dans le script.
  Pour modifier un texte : soit directement dans `lib/site-data.js`, soit dans
  `tools/compose-data.mjs` puis relancer le script.
- `lib/seo.js` — métadonnées par page (title, description, canonical, hreflang, Open Graph)
  et données structurées JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList).
- `components/` — nav (`SiteNav` serveur + `SiteNavClient`), footer, blocs partagés
  (`Blocks.js` : étapes, avis, zones, FAQ, étude de cas, CTA…), comparateur avant/après,
  grille de réalisations, formulaire.
- `public/images/` — photos de l'ancien site ; `public/uploads/` — photos et vidéos du
  chantier cuisine ; `public/logo/` — logos (symbole vert / blanc, logo complet, Batibouw, TrustUp).

## Formulaire de contact → e-mail

`components/ContactForm.js` envoie un POST JSON à `app/api/contact/route.js`, qui valide
(nom, téléphone, e-mail, service, honeypot, 5 envois / 10 min / IP) puis appelle
`lib/mail.js` (nodemailer, SMTP Hostinger : `smtp.hostinger.com`, port 465 SSL). Après succès,
redirection vers `/[lang]/contact/merci` (page non indexée = URL de conversion Google Ads).
Les paramètres `gclid`, `utm_source`, `utm_campaign` de l'URL d'arrivée sont conservés en
session et joints à l'e-mail.

Variables d'environnement à définir (Vercel → Settings → Environment Variables) :

| Variable    | Valeur                              |
|-------------|-------------------------------------|
| `SMTP_USER` | `info@apollonconstruction.be`       |
| `SMTP_PASS` | mot de passe de la boîte Hostinger  |
| `LEAD_TO`   | destinataire (défaut : `SMTP_USER`) |

Test sans envoi réel : `MAIL_TRANSPORT=json npm run dev`, puis un POST sur `/api/contact`
renvoie le message construit.

## Google Ads : pages d'atterrissage et conversions

- `/[lang]/lp/[service]` (ex. `/fr/lp/salle-de-bain`) : une page d'atterrissage par service,
  sans menu, formulaire court (nom, téléphone, e-mail, message) visible d'emblée, barre fixe
  « Appeler / Devis » sur mobile, non indexée. À utiliser comme URL finale des annonces, avec
  le service qui correspond au groupe d'annonces.
- `components/Analytics.js` : balise Google Ads (gtag) + mode consentement v2 (bandeau
  Accepter / Refuser, signaux `ad_storage`, `ad_user_data`, `ad_personalization`). Ne charge
  rien tant que `NEXT_PUBLIC_GADS_ID` est vide. Conversions envoyées : « formulaire » à
  l'arrivée sur `/contact/merci`, « appel » au clic sur un lien `tel:`.
  Les libellés viennent de Google Ads → Objectifs → Conversions → « + Nouvelle action » →
  Site web → « Envoi de formulaire » et « Clic sur numéro » (balise Google, libellé de conversion).

## Aperçu HTML autonome (sans serveur)

```bash
node tools/build-single.mjs --light   # ~3,5 Mo, photos compressées, sans vidéos (aperçu app)
node tools/build-single.mjs           # version complète avec vidéos (~12 Mo)
```

Le script fait un export statique de Next (`STATIC_EXPORT=1`) puis regroupe les 39 pages dans
un seul fichier avec routage par `#/fr/…`. C'est un **aperçu visuel** : le SEO (URLs, balises,
sitemap, données structurées) n'existe que dans la version Next.js déployée.

## Avant de lancer Google Ads

1. Déployer la version Next.js (Vercel ou autre) sur le domaine, avec
   `NEXT_PUBLIC_SITE_URL=https://www.apollonconstruction.be`.
2. Définir `SMTP_USER` / `SMTP_PASS` sur Vercel et faire un envoi de test depuis le site en
   ligne. Conversion Google Ads : page de destination `/fr/contact/merci` (+ clic téléphone).
3. Revérifier la page Primes : les chiffres viennent de l'ancien site, datés d'avril 2026 et
   annoncés valables jusqu'au 30 septembre 2026.
4. Remplacer les emplacements « photo à venir » (électricité, toiture, énergie) par de vraies
   photos dès qu'elles existent — `img` et `gallery` dans `tools/compose-data.mjs`.
5. Polices : le site charge Libre Caslon Text et Archivo depuis Google Fonts (`app/layout.js`).
   Une fois déployé avec accès réseau au build, passer à `next/font/google` pour les servir
   depuis le domaine (supprime une requête bloquante, ~0,3 s de LCP mobile).
6. Créer / vérifier la fiche Google Business Profile et Search Console (soumettre
   `sitemap.xml`). Le référencement naturel dépend surtout de ça, des avis et du temps.

## Audit Lighthouse (export statique, mobile, servi compressé, 27/09/2026)

Accueil : performance 94, accessibilité 100, bonnes pratiques 96, SEO 100 — LCP 2,7 s, CLS 0.
Service salle de bain : 94 / 100 / 96 / 100. Contact : 95 / 100 / 96 / 100.
Les 4 points de « bonnes pratiques » manquants viennent d'une erreur console due au blocage de
Google Fonts dans l'environnement de test, pas du site. Titres ≤ 60 caractères et descriptions
≤ 155 caractères sur toutes les pages (`tools/_seo_override.mjs`).
