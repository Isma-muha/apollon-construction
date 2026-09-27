import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import RealisationsGrid from "@/components/RealisationsGrid";
import BeforeAfter from "@/components/BeforeAfter";
import { CtaBlock, Zones } from "@/components/Blocks";
import { T, AA, SERVICES, PROJECTS, CASES, VIDEOS, localizeProject, LANGS, SITE_URL } from "@/lib/site-data";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

const SERIF = "'Libre Caslon Text',serif";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  const t = T[params.lang].projects;
  return pageMetadata({ lang: params.lang, path: "/realisations", title: t.seoTitle, description: t.seoDesc, image: "/uploads/apres1.jpg" });
}

export default function RealisationsPage({ params }) {
  const { lang } = params;
  const t = T[lang];
  const aa = AA[lang];
  const P = PROJECTS.map((p, i) => localizeProject(p, lang, i));
  const cats = SERVICES.filter((s) => PROJECTS.some((p) => p.cat === s.id)).map((s) => ({ id: s.id, label: s.name[lang] }));
  const views = [aa.view1, aa.view2, aa.view3];

  return (
    <div className="pg pg-light">
      <JsonLd data={breadcrumbSchema([{ name: t.nav.home, url: `${SITE_URL}/${lang}` }, { name: t.nav.projects, url: `${SITE_URL}/${lang}/realisations` }])} />
      <SiteNav lang={lang} active="projects" onDark={false} />
      <main>

      <header style={{ padding: "170px 4vw 48px" }}>
        <span className="kicker" style={{ color: "#11642e" }}>{t.projects.kicker}</span>
        <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(48px,9vw,160px)", lineHeight: 0.92, margin: "20px 0 32px", letterSpacing: "-0.02em" }}>{t.projects.title}</h1>
        <div style={{ borderBottom: "1px solid #0e0f0d", paddingBottom: 28 }}>
          <p style={{ maxWidth: "56ch", fontSize: 17, lineHeight: 1.65, color: "#5a5449", margin: 0 }}>{t.projects.intro}</p>
        </div>
      </header>

      <section className="no-pt" style={{ padding: "48px 4vw 120px" }}>
        <RealisationsGrid projects={P} categories={cats} allLabel={t.projects.all} />
      </section>

      <section style={{ background: "#0e0f0d", color: "#f3eee4", padding: "120px 4vw" }}>
        <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 56 }}>
          <div>
            <span className="kicker" style={{ color: "#50b265" }}>{aa.kicker}</span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px,4.5vw,72px)", lineHeight: 1, margin: "16px 0 0" }}>{aa.title}</h2>
          </div>
          <span style={{ fontSize: 13, color: "#8f887a", letterSpacing: "0.1em" }}>{aa.hint}</span>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 24 }}>
          {CASES.map((c, i) => (
            <Reveal key={i}><BeforeAfter before={c.before} after={c.after} labels={aa} view={views[i]} /></Reveal>
          ))}
        </div>
        <Reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 48, marginTop: 64, alignItems: "start" }}>
          <div>
            <h3 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(24px,2.6vw,38px)", lineHeight: 1.15, margin: "0 0 16px" }}>{aa.caseTitle}</h3>
            <p style={{ color: "#b8b1a3", fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: "52ch" }}>{aa.caseText}</p>
          </div>
          <div>
            <div className="kicker" style={{ color: "#50b265", marginBottom: 18 }}>{aa.videos}</div>
            <div className="vid-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {VIDEOS.map((v, i) => <video key={i} src={v} controls preload="metadata" style={{ width: "100%", aspectRatio: "16/9", background: "#000", display: "block", objectFit: "cover" }} />)}
            </div>
          </div>
        </Reveal>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #2c2e29" }}><Zones lang={lang} label={t.sp.zonesLabel} /></div>
      </section>

      <CtaBlock lang={lang} t={t} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
