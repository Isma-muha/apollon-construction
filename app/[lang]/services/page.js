import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { Steps, CtaBlock, Pic, Zones } from "@/components/Blocks";
import { T, SERVICES, localizeService, LANGS, SITE_URL } from "@/lib/site-data";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

const SERIF = "'Libre Caslon Text',serif";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  const t = T[params.lang].sp;
  return pageMetadata({ lang: params.lang, path: "/services", title: t.seoTitle, description: t.intro });
}

export default function ServicesPage({ params }) {
  const { lang } = params;
  const t = T[lang];
  const services = SERVICES.map((s, i) => ({ ...localizeService(s, lang, i), imgOrder: i % 2 ? 2 : 0 }));
  const secondaryIdx = services.findIndex((s) => s.focus === "secondary");
  const secondaryLabel = { fr: "Extérieur & énergie", nl: "Buiten & energie", en: "Exterior & energy" }[lang];

  return (
    <div className="pg pg-light">
      <JsonLd data={breadcrumbSchema([{ name: t.nav.home, url: `${SITE_URL}/${lang}` }, { name: t.nav.services, url: `${SITE_URL}/${lang}/services` }])} />
      <SiteNav lang={lang} active="services" onDark={false} />
      <main>

      <header style={{ padding: "170px 4vw 72px", borderBottom: "1px solid #0e0f0d" }}>
        <span className="kicker" style={{ color: "#11642e" }}>{t.sp.kicker}</span>
        <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(48px,8vw,140px)", lineHeight: 0.95, margin: "20px 0 32px", letterSpacing: "-0.02em", maxWidth: "14ch" }}>{t.sp.title}</h1>
        <p style={{ maxWidth: "56ch", fontSize: 18, lineHeight: 1.65, color: "#5a5449", margin: 0 }}>{t.sp.intro}</p>
      </header>

      <section className="no-pt" style={{ padding: "0 4vw" }}>
        {services.map((s, i) => (
          <div key={s.id}>
            {i === secondaryIdx && (
              <div style={{ padding: "56px 0 8px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#6b6457" }}>{secondaryLabel}</div>
            )}
            <Reveal as="a" href={`/${lang}/services/${s.id}`} className="grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)", gap: 56, alignItems: "center", padding: "64px 0", borderBottom: "1px solid #0e0f0d", color: "#0e0f0d" }}>
              <div className="hover-zoom" style={{ aspectRatio: "4/3", order: s.imgOrder, background: "#0e0f0d" }}>
                <Pic src={s.img} alt={s.h1} />
              </div>
              <div>
                <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "#11642e", marginBottom: 18 }}>{s.num} — {s.tag}</div>
                <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(36px,4.5vw,76px)", lineHeight: 0.98, margin: "0 0 22px", letterSpacing: "-0.02em" }}>{s.name}</h2>
                <p style={{ color: "#5a5449", fontSize: 16, lineHeight: 1.7, margin: "0 0 26px", maxWidth: "54ch" }}>{s.intro}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 30 }}>
                  {s.includes.slice(0, 5).map((i) => <span key={i.n} className="chip">{i.text.split(" — ")[0].split(" : ")[0]}</span>)}
                </div>
                <span style={{ fontFamily: SERIF, fontSize: 22, borderBottom: "1px solid #0e0f0d", paddingBottom: 3, color: "#11642e" }}>{t.sp.discover}</span>
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      <section style={{ background: "#0e0f0d", color: "#f3eee4", padding: "120px 4vw" }}>
        <Steps steps={t.steps} title={t.stepsTitle} dark />
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #2c2e29" }}><Zones lang={lang} label={t.sp.zonesLabel} /></div>
      </section>

      <CtaBlock lang={lang} t={t} extraStyle={{ borderTop: "1px solid #0e0f0d" }} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
