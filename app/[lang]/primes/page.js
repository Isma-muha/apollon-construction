import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { Steps, PhoneButtons } from "@/components/Blocks";
import { T, PRIMES, LANGS, SITE_URL } from "@/lib/site-data";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

const SERIF = "'Libre Caslon Text',serif";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  const p = PRIMES[params.lang];
  return pageMetadata({ lang: params.lang, path: "/primes", title: p.seoTitle, description: p.seoDesc });
}

export default function PrimesPage({ params }) {
  const { lang } = params;
  const t = T[lang];
  const p = PRIMES[lang];

  return (
    <div className="pg pg-dark">
      <JsonLd data={breadcrumbSchema([{ name: t.nav.home, url: `${SITE_URL}/${lang}` }, { name: t.nav.primes, url: `${SITE_URL}/${lang}/primes` }])} />
      <SiteNav lang={lang} active="primes" onDark />
      <main>

      <header className="primes-head" style={{ position: "relative", padding: "190px 4vw 100px", overflow: "hidden", background: "linear-gradient(135deg,#171814 0%,#0e0f0d 60%)" }}>
        <div className="grid-2" style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 48, alignItems: "end" }}>
          <div>
            <span className="kicker" style={{ color: "#a8dbb4", fontWeight: 600 }}>{p.kicker}</span>
            <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(40px,5.6vw,92px)", lineHeight: 1, margin: "20px 0 32px", letterSpacing: "-0.02em", maxWidth: "18ch" }}>{p.title}</h1>
            <p style={{ maxWidth: "58ch", fontSize: 17, lineHeight: 1.7, color: "#b8b1a3", margin: "0 0 36px" }}>{p.intro}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={`/${lang}/contact`} className="btn btn-green">{p.button}</Link>
              <PhoneButtons lang={lang} />
            </div>
          </div>
          <div style={{ fontFamily: SERIF, fontSize: "clamp(120px,18vw,300px)", lineHeight: 0.8, letterSpacing: "-0.04em", color: "transparent", WebkitTextStroke: "1px #50b265" }}>6<span style={{ fontSize: "0.45em" }}>%</span></div>
        </div>
      </header>

      {/* TVA */}
      <section style={{ background: "#11642e", color: "#fff", padding: "90px 4vw" }}>
        <Reveal className="grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: 48, alignItems: "start" }}>
          <div>
            <span className="kicker" style={{ color: "#c8ead0" }}>{p.tva.kicker}</span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px,4vw,64px)", lineHeight: 1, margin: "16px 0 0" }}>{p.tva.title}</h2>
          </div>
          <div>
            <p style={{ margin: "0 0 14px", fontSize: 17, lineHeight: 1.7, maxWidth: "60ch" }}>{p.tva.text}</p>
            <p style={{ margin: 0, fontSize: 13, color: "#c8ead0", lineHeight: 1.6 }}>{p.tva.note}</p>
          </div>
        </Reveal>
      </section>

      {/* Regions */}
      <section style={{ background: "#f3eee4", color: "#0e0f0d", padding: "110px 4vw" }}>
        <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px,4vw,64px)", lineHeight: 1, margin: 0 }}>{p.regionsTitle}</h2>
          <span style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b6457" }}>{p.update.replace(/^✓ /, "")}</span>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {p.regions.map((r, i) => (
            <Reveal key={i} className="region">
              <span className="kicker" style={{ fontSize: 11, color: "#11642e" }}>{r.prog}</span>
              <span className={`status ${r.active ? "on" : "off"}`}>{r.status}</span>
              <div style={{ fontFamily: SERIF, fontSize: "clamp(34px,3.4vw,52px)", lineHeight: 1 }}>{r.amount}</div>
              <p style={{ margin: 0, color: "#5a5449", fontSize: 14, lineHeight: 1.7 }}>{r.desc}</p>
            </Reveal>
          ))}
        </div>

        <div style={{ display: "grid", gap: 72, marginTop: 88 }}>
          {p.details.map((d, i) => (
            <Reveal key={i} className="grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)", gap: 48, alignItems: "start", borderTop: "1px solid #0e0f0d", paddingTop: 40 }}>
              <div>
                <h3 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(26px,2.8vw,40px)", lineHeight: 1.05, margin: "0 0 18px" }}>{d.h}</h3>
                {d.p.map((x, k) => <p key={k} style={{ margin: "0 0 12px", color: "#5a5449", fontSize: 15, lineHeight: 1.7 }}>{x}</p>)}
                {d.alert && <div className={`alert ${i === 1 ? "red" : ""}`} style={{ marginTop: 16 }}>{d.alert}</div>}
                {d.ok && <div className="alert ok" style={{ marginTop: 10 }}>{d.ok}</div>}
                <p style={{ margin: "16px 0 0", fontSize: 13, color: "#11642e" }}>{d.link}</p>
              </div>
              <div>
                {d.rows && (
                  <table className="ptable">
                    <thead><tr>{d.th.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>
                      {d.rows.map((row, k) => (
                        <tr key={k}>{row.map((cell, j) => <td key={j} className={j > 0 ? "val" : ""}>{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {d.note && <p style={{ margin: "12px 0 0", fontSize: 12, color: "#6b6457", fontStyle: "italic" }}>{d.note}</p>}
                {d.steps && (
                  <div style={{ display: "grid", gap: 18 }}>
                    {d.steps.map(([strong, txt], k) => (
                      <div key={k} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 12, alignItems: "baseline" }}>
                        <span style={{ fontFamily: SERIF, fontSize: 28, color: "#11642e", lineHeight: 1 }}>{k + 1}</span>
                        <div><strong style={{ fontWeight: 600, display: "block" }}>{strong}</strong><span style={{ fontSize: 14, color: "#5a5449" }}>{txt}</span></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" style={{ margin: "48px 0 0", fontSize: 13, color: "#6b6457", maxWidth: "72ch", lineHeight: 1.7 }}>{p.note}</Reveal>
      </section>

      <section style={{ padding: "120px 4vw" }}>
        <Steps steps={p.steps} title={p.stepsTitle} dark />
      </section>

      <section className="grid-2" style={{ background: "#11642e", color: "#fff", padding: "100px 4vw", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 40, alignItems: "center" }}>
        <Reveal>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(34px,4.4vw,72px)", lineHeight: 1, margin: "0 0 18px", letterSpacing: "-0.01em" }}>{p.ctaTitle}</h2>
          <p style={{ margin: 0, color: "#c8ead0", fontSize: 16, lineHeight: 1.7, maxWidth: "46ch" }}>{p.ctaSub}</p>
        </Reveal>
        <Reveal style={{ display: "flex", justifyContent: "flex-end", gap: 12, flexWrap: "wrap" }}>
          <Link href={`/${lang}/contact`} className="btn btn-dark">{t.nav.cta} →</Link>
          <PhoneButtons lang={lang} />
        </Reveal>
      </section>

      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
