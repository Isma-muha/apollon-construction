import LegalPage from "@/components/LegalPage";
import { LEGAL, LANGS } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const L = LEGAL[lang].privacy;
  return pageMetadata({ lang, path: "/confidentialite", title: L.seoTitle, description: L.seoDesc });
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <LegalPage lang={lang} doc="privacy" />;
}
