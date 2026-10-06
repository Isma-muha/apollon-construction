import "./globals.css";
import { SITE_URL } from "@/lib/site-data";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Apollon Construction — Rénovation intérieure à Bruxelles",
  description: "Entreprise de rénovation à Bruxelles et en Brabant : salle de bain, électricité RGIE, plafonnage, peinture, cuisine, façade et toiture. Devis gratuit sous 48h.",
  icons: { icon: "/logo/mark.svg" }
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0e0f0d" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Sans JavaScript, l'observateur qui révèle les blocs ne tourne jamais : on les affiche. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
