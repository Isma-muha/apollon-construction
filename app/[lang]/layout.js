import { notFound } from "next/navigation";
import { LANGS, T } from "@/lib/site-data";
import LangSetter from "@/components/LangSetter";
import Analytics from "@/components/Analytics";
import { MobileBar } from "@/components/Blocks";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Toute langue hors fr/nl/en renvoie un 404 avant que les pages ne s'exécutent.
// Sans ça, /de entrait dans les pages et plantait sur T[lang] indéfini.
export const dynamicParams = false;

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang)) notFound();
  return (
    <>
      <LangSetter lang={lang} />
      {children}
      <MobileBar lang={lang} />
      <Analytics consent={T[lang].consent} />
    </>
  );
}
