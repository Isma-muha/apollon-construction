import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { T, LANGS, EMAIL } from "@/lib/site-data";
import { PhoneButtons } from "@/components/Blocks";

const SERIF = "'Libre Caslon Text',serif";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Page de confirmation après envoi du formulaire. Non indexée : sert d'URL de conversion Google Ads.
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const fm = T[lang].contact.form;
  return { title: `${fm.sentTitle} — Apollon Construction`, robots: { index: false, follow: false } };
}

export default async function ThanksPage({ params }) {
  const { lang } = await params;
  const t = T[lang];
  const fm = t.contact.form;
  return (
    <div className="pg pg-light">
      <SiteNav lang={lang} active="contact" onDark={false} />
      <main>
        <header style={{ padding: "170px 4vw 72px", minHeight: "70vh", display: "grid", alignContent: "center", gap: 28 }}>
          <div style={{ color: "#11642e", fontSize: 44, lineHeight: 1 }}>✓</div>
          <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(48px,8vw,140px)", lineHeight: 0.95, margin: 0, letterSpacing: "-0.03em", maxWidth: "12ch" }}>{fm.sentTitle}</h1>
          <p style={{ margin: 0, color: "#5a5449", fontSize: 18, lineHeight: 1.6, maxWidth: "48ch" }}>{fm.sentText}</p>
          <ol style={{ margin: "8px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 14, maxWidth: "60ch" }}>
            {fm.thanksSteps.map((s, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 14, alignItems: "baseline", fontSize: 16, lineHeight: 1.6, color: "#0e0f0d" }}>
                <span style={{ fontFamily: SERIF, fontSize: 28, color: "#11642e", lineHeight: 1 }}>{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
            <Link href={`/${lang}`} className="btn btn-dark">{fm.thanksBack}</Link>
            <PhoneButtons lang={lang} dark={false} />
            <a href={`mailto:${EMAIL}`} className="btn" style={{ border: "1px solid #0e0f0d", background: "transparent", color: "#0e0f0d" }}>{EMAIL}</a>
          </div>
        </header>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
