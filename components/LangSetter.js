import { LANGS } from "@/lib/site-data";

// <html lang> est rendu par app/layout.js, qui ne connaît pas la langue de la page.
// Ce script corrige l'attribut pendant l'analyse du HTML, avant l'affichage et avant
// l'hydratation React — un useEffect, lui, arrivait trop tard pour les lecteurs d'écran.
// Les annotations hreflang (lib/seo.js) restent le signal de langue destiné aux moteurs.
export default function LangSetter({ lang }) {
  const safe = LANGS.includes(lang) ? lang : "fr";
  return (
    <script
      dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(safe)}` }}
    />
  );
}
