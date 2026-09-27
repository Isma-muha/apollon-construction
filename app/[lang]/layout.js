import { notFound } from "next/navigation";
import { LANGS, T } from "@/lib/site-data";
import LangSetter from "@/components/LangSetter";
import Analytics from "@/components/Analytics";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function LangLayout({ children, params }) {
  const { lang } = params;
  if (!LANGS.includes(lang)) notFound();
  return (
    <>
      <LangSetter lang={lang} />
      {children}
      <Analytics consent={T[lang].consent} />
    </>
  );
}
