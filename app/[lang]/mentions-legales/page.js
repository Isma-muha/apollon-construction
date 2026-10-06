import LegalPage from "@/components/LegalPage";
import { LEGAL, LANGS } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  const L = LEGAL[params.lang].mentions;
  return pageMetadata({ lang: params.lang, path: "/mentions-legales", title: L.seoTitle, description: L.seoDesc });
}

export default function Page({ params }) {
  return <LegalPage lang={params.lang} doc="mentions" />;
}
