import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { Steps, Zones, Reviews, Partners, ServiceRows, Pic } from "@/components/Blocks";
import { T, SERVICES, PROJECTS, PHONE, PHONE_HREF, localizeService, localizeProject, LANGS } from "@/lib/site-data";
import { pageMetadata, orgSchema } from "@/lib/seo";

const SERIF = "'Libre Caslon Text',serif";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  const t = T[params.lang].home;
  return pageMetadata({ lang: params.lang, path: "", title: t.seoTitle, description: t.seoDesc });
}

export default function Accueil({ params }) {
  const { lang } = params;
  const t = T[lang];
  const h = t.home;
  const services = SERVICES.map((s, i) => localizeService(s, lang, i));
  const P = PROJECTS.map((p, i) => localizeProject(p, lang, i));
  const featured = P[0];
  const worksA = [P[1], P[4], P[3]].map((p, k) => ({ ...p, num: String(k + 2).padStart(2, "0") }));
  const worksB = [P[5], P[7]].map((p, k) => ({ ...p, num: String(k + 5).padStart(2, "0") }));
  const sep = "   ◆   ";
  const marquee = services.map((s) => s.name).join(sep) + sep;

  return (
    <div className="pg pg-dark">
      <JsonLd data={orgSchema()} />
      <SiteNav lang={lang} active="home" onDark />
      <main>

      {/* Hero */}
      <header className="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "120px 4vw 0", boxSizing: "border-box" }}>
        <picture>
          <source media="(max-width: 720px)" srcSet="/images/chantier-sdb-1-m.jpg" />
          <img src="/images/chantier-sdb-1.jpg" alt={featured.title} width="1600" height="1200" fetchPriority="high" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </picture>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(14,15,13,.78) 0%,rgba(14,15,13,.42) 45%,rgba(14,15,13,.9) 100%),linear-gradient(90deg,rgba(14,15,13,.55) 0%,rgba(14,15,13,0) 45%,rgba(14,15,13,.5) 100%)" }} />
        <div className="hero-top" style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40 }}>
          <div className="hero-lead" style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 640 }}>
            <span style={{ fontSize: 13, letterSpacing: "0.32em", textTransform: "uppercase", color: "#a8dbb4", fontWeight: 600 }}>{h.kicker}</span>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(20px,2vw,30px)", lineHeight: 1.3, margin: 0, maxWidth: "30ch" }}>{h.lead}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
              <Link href={`/${lang}/contact`} className="btn btn-green">{t.nav.cta}</Link>
              <a href={PHONE_HREF} className="btn" style={{ border: "1px solid rgba(243,238,228,.5)", background: "transparent", color: "#f3eee4" }}>{PHONE}</a>
            </div>
          </div>
          <div className="nav-desktop-only hero-trust" style={{ textAlign: "right", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", lineHeight: 2.2, color: "#fff", flexShrink: 0 }}>
            {t.trust.map((b, i) => <div key={i}>{b.label}</div>)}
          </div>
        </div>
        <h1 className="hero-h1" style={{ position: "relative", zIndex: 2, margin: "36px 0 -0.14em", fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(56px,min(11vw,14.5vh),196px)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#fff", mixBlendMode: "difference" }}>
          {h.h1a}<br />{h.h1b}
        </h1>
      </header>

      {/* Chiffres + manifeste */}
      <section style={{ background: "#f3eee4", color: "#0e0f0d", padding: "clamp(110px,15vw,240px) 4vw 80px" }}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)", gap: 56, alignItems: "end" }}>
          <Reveal style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 24px" }}>
            {t.stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(48px,5vw,84px)", lineHeight: 1 }}>{s.n}<span style={{ fontSize: "0.45em" }}>{s.u}</span></div>
                <div style={{ fontSize: 13, color: "#5a5449", marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </Reveal>
          <Reveal as="p" style={{ fontFamily: SERIF, fontSize: "clamp(26px,3vw,46px)", lineHeight: 1.25, margin: 0 }}>
            {h.m1}<em style={{ color: "#11642e", fontStyle: "italic" }}>{h.m2}</em>
          </Reveal>
        </div>
        <Reveal style={{ marginTop: 64, paddingTop: 28, borderTop: "1px solid rgba(14,15,13,.2)" }}>
          <Partners label={h.partnersLabel} />
        </Reveal>
      </section>

      {/* Bandeau défilant */}
      <div style={{ background: "#11642e", color: "#fff", overflow: "hidden", padding: "18px 0", borderTop: "1px solid #0e0f0d", borderBottom: "1px solid #0e0f0d" }} aria-hidden="true">
        <div style={{ display: "flex", width: "max-content", animation: "marquee 40s linear infinite" }}>
          <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 26, whiteSpace: "nowrap" }}>{marquee}</div>
          <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 26, whiteSpace: "nowrap" }}>{marquee}</div>
        </div>
      </div>

      {/* Services 01 */}
      <section style={{ padding: "120px 4vw" }}>
        <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
          <div style={{ fontFamily: SERIF, fontSize: "clamp(90px,14vw,220px)", lineHeight: 0.8, color: "transparent", WebkitTextStroke: "1px #50b265" }}>01</div>
          <h2 style={{ maxWidth: "40ch", fontSize: 16, lineHeight: 1.6, color: "#b8b1a3", paddingBottom: 12, margin: 0, fontWeight: 400 }}>{h.servicesIntro}</h2>
        </Reveal>
        <ServiceRows list={services} lang={lang} big />
        <div style={{ paddingTop: 36, display: "flex", justifyContent: "flex-end" }}>
          <Link href={`/${lang}/services`} className="link-editorial" style={{ fontSize: "clamp(20px,2vw,28px)", color: "#f3eee4" }}>{t.nav.allServices}</Link>
        </div>
      </section>

      {/* Réalisations 02 */}
      <section className="bleed" style={{ background: "#f3eee4", color: "#0e0f0d", padding: "120px 0 40px" }}>
        <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", padding: "0 4vw", marginBottom: 56 }}>
          <div style={{ fontFamily: SERIF, fontSize: "clamp(90px,14vw,220px)", lineHeight: 0.8, color: "transparent", WebkitTextStroke: "1px #11642e" }}>02</div>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px,4vw,64px)", margin: 0, lineHeight: 1, paddingBottom: 8 }}>{h.worksTitle}</h2>
        </Reveal>
        <Reveal as="figure" className="hover-zoom featured tile" style={{ margin: 0, position: "relative", overflow: "hidden", height: "min(88vh,900px)" }}>
          <Pic src={featured.img} alt={featured.title} />
          <div style={{ position: "absolute", inset: "auto 0 0 0", background: "linear-gradient(180deg,rgba(14,15,13,0) 0%,rgba(14,15,13,.82) 100%)", padding: "120px 4vw 44px", display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, color: "#f3eee4" }}>
            <figcaption style={{ fontFamily: SERIF, fontSize: "clamp(28px,4vw,64px)", lineHeight: 1 }}>
              {featured.title}<br /><em style={{ color: "#50b265", fontSize: "0.6em", fontStyle: "italic" }}>{featured.catName} · {featured.place}</em>
            </figcaption>
            <span style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>01 / 06</span>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 2, marginTop: 2 }}>
          {worksA.map((p, i) => <WorkTile key={i} p={p} aspect="4/5" />)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 2, marginTop: 2 }}>
          {worksB.map((p, i) => <WorkTile key={i} p={p} aspect="16/10" />)}
        </div>
        <div style={{ padding: "40px 4vw 0", display: "flex", justifyContent: "flex-end" }}>
          <Link href={`/${lang}/realisations`} className="link-editorial" style={{ fontSize: "clamp(22px,2.4vw,34px)", color: "#0e0f0d" }}>{h.worksLink}</Link>
        </div>
      </section>

      {/* Engagement 03 */}
      <section style={{ position: "relative", padding: "140px 4vw", overflow: "hidden" }}>
        <Reveal style={{ fontFamily: SERIF, fontSize: "clamp(90px,14vw,220px)", lineHeight: 0.8, color: "transparent", WebkitTextStroke: "1px #50b265", marginBottom: 40 }}>03</Reveal>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: 56, alignItems: "start", marginBottom: 80 }}>
          <Reveal as="h2" style={{ fontFamily: SERIF, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(34px,5vw,80px)", lineHeight: 1.05, margin: 0, maxWidth: "18ch", letterSpacing: "-0.01em" }}>{h.quote}</Reveal>
          <Reveal>
            <span className="kicker" style={{ color: "#50b265" }}>{h.aboutKicker}</span>
            <h3 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(22px,2vw,30px)", lineHeight: 1.15, margin: "14px 0 14px" }}>{h.aboutTitle}</h3>
            <p style={{ margin: "0 0 20px", color: "#b8b1a3", fontSize: 15, lineHeight: 1.7 }}>{h.aboutText}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {h.aboutPoints.map(([k, v]) => (
                <li key={k} style={{ fontSize: 14, lineHeight: 1.6, color: "#b8b1a3" }}><strong style={{ color: "#f3eee4", fontWeight: 600 }}>{k}</strong> — {v}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Steps steps={t.steps} title={t.stepsTitle} dark />
      </section>

      {/* Double bloc */}
      <section className="flush" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))" }}>
        <Reveal className="dbl" style={{ background: "#f3eee4", color: "#0e0f0d", padding: "100px 4vw", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 48 }}>
          <div>
            <span className="kicker" style={{ color: "#11642e" }}>{h.archKicker}</span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px,3.8vw,60px)", lineHeight: 1.02, margin: "20px 0 24px" }}>{h.archTitle}</h2>
            <p style={{ color: "#5a5449", lineHeight: 1.7, fontSize: 16, margin: 0, maxWidth: "46ch" }}>{h.archText}</p>
          </div>
          <Link href={`/${lang}/contact`} className="link-editorial" style={{ fontSize: 26, color: "#0e0f0d", alignSelf: "flex-start" }}>{h.archLink}</Link>
        </Reveal>
        <Reveal className="dbl" style={{ background: "#11642e", color: "#fff", padding: "100px 4vw", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 48 }}>
          <div>
            <span className="kicker" style={{ color: "#c8ead0" }}>{h.tvaKicker}</span>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(110px,15vw,240px)", lineHeight: 0.85, margin: "20px 0 16px", letterSpacing: "-0.03em" }}>{h.tvaBig}<span style={{ fontSize: "0.5em" }}>%</span></div>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(22px,2.4vw,34px)", lineHeight: 1.2, margin: 0, maxWidth: "24ch" }}>{h.tvaText}</p>
          </div>
          <Link href={`/${lang}/primes`} className="link-editorial" style={{ fontSize: 26, color: "#fff", alignSelf: "flex-start" }}>{h.tvaLink}</Link>
        </Reveal>
      </section>

      {/* Avis */}
      <section style={{ padding: "120px 4vw" }}>
        <Reviews lang={lang} t={h} />
      </section>

      {/* Zones */}
      <section style={{ padding: "0 4vw 100px" }}>
        <Reveal><Zones lang={lang} label={h.zonesLabel} /></Reveal>
      </section>

      {/* Contact CTA */}
      <section style={{ background: "#f3eee4", color: "#0e0f0d", padding: "120px 4vw" }}>
        <Reveal style={{ display: "grid", gap: 48 }}>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(80px,15vw,260px)", lineHeight: 0.85, margin: 0, letterSpacing: "-0.03em" }}>{t.cta.title}</h2>
          <div style={{ display: "grid", maxWidth: 860, marginLeft: "auto", width: "100%" }}>
            <a href={PHONE_HREF} style={{ fontFamily: SERIF, fontSize: "clamp(28px,3.4vw,52px)", borderBottom: "1px solid #0e0f0d", padding: "22px 0", display: "flex", justifyContent: "space-between", gap: 16, color: "#0e0f0d" }}><span>{PHONE}</span><span>→</span></a>
            <a href="mailto:info@apollonconstruction.be" style={{ fontFamily: SERIF, fontSize: "clamp(20px,2.2vw,34px)", borderBottom: "1px solid #0e0f0d", padding: "22px 0", display: "flex", justifyContent: "space-between", gap: 16, color: "#0e0f0d" }}><span>info@apollonconstruction.be</span><span>→</span></a>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap", marginTop: 28 }}>
              <p style={{ margin: 0, color: "#5a5449", fontSize: 15, lineHeight: 1.7, maxWidth: "46ch" }}>{t.cta.sub}</p>
              <Link href={`/${lang}/contact`} className="btn btn-dark">{t.nav.cta}</Link>
            </div>
          </div>
        </Reveal>
      </section>

      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}

function WorkTile({ p, aspect }) {
  return (
    <Reveal as="figure" className="hover-zoom tile" style={{ margin: 0, position: "relative", overflow: "hidden", aspectRatio: aspect }}>
      <Pic src={p.img} alt={`${p.title} — ${p.place}`} />
      <div style={{ position: "absolute", inset: "auto 0 0 0", background: "linear-gradient(180deg,rgba(14,15,13,0),rgba(14,15,13,.8))", padding: "80px 32px 28px", color: "#f3eee4", display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16 }}>
        <figcaption style={{ fontFamily: SERIF, fontSize: "clamp(22px,2.2vw,32px)", lineHeight: 1.05 }}>{p.title}<br /><span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a8dbb4" }}>{p.catName}</span></figcaption>
        <span style={{ fontSize: 12, letterSpacing: "0.2em" }}>{p.num}</span>
      </div>
    </Reveal>
  );
}
