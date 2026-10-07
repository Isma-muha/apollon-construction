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
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = T[lang].projects;
  return pageMetadata({ lang, path: "/realisations", title: t.seoTitle, description: t.seoDesc, image: "/uploads/apres1.jpg" });
}

export default async function RealisationsPage({ params }) {
  const { lang } = await params;
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
        <Reveal style={{ marginTop: 28, maxWidth: "70ch" }}>
          <div style={{ fontSize: 13, letterSpacing: "0.08em", color: "#8f887a" }}>{aa.caseTitle}</div>
          <p style={{ color: "#b8b1a3", fontSize: 14, lineHeight: 1.65, margin: "6px 0 0" }}>{aa.caseText}</p>
        </Reveal>
        <div style={{ marginTop: 96, paddingTop: 56, borderTop: "1px solid #2c2e29" }}>
          <Reveal>
            <div className="kicker" style={{ color: "#50b265", marginBottom: 12 }}>{aa.videos}</div>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(22px,2.4vw,34px)", lineHeight: 1.2, margin: "0 0 40px", maxWidth: "36ch" }}>{aa.videosText}</p>
          </Reveal>
          <div className="vid-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40, alignItems: "start" }}>
            {VIDEOS.map((v, i) => (
              <Reveal key={i} className="vid-card" style={{ display: "grid", gridTemplateColumns: "minmax(200px,300px) minmax(0,1fr)", gap: 24, alignItems: "end" }}>
                <video src={v.src} poster={v.poster} controls preload="none" playsInline muted style={{ width: "100%", aspectRatio: "9/16", background: "#000", display: "block", objectFit: "cover" }} />
                <div>
                  <span className="chip-dark">{v.label[lang]}</span>
                  <h3 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(22px,2.2vw,30px)", lineHeight: 1.15, margin: "14px 0 12px" }}>{v.title[lang]}</h3>
                  <p style={{ color: "#b8b1a3", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{v.text[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #2c2e29" }}><Zones lang={lang} label={t.sp.zonesLabel} /></div>
      </section>

      <CtaBlock lang={lang} t={t} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
