import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Ph from "@/components/Ph";
import JsonLd from "@/components/JsonLd";
import { Steps, ServiceRows, CaseStudy, Faq, Zones, Pic, PhoneButtons } from "@/components/Blocks";
import { T, SERVICES, localizeService, LANGS, SITE_URL } from "@/lib/site-data";
import { pageMetadata, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

const SERIF = "'Libre Caslon Text',serif";

export function generateStaticParams() {
  return LANGS.flatMap((lang) => SERVICES.map((s) => ({ lang, serviceId: s.id })));
}
export function generateMetadata({ params }) {
  const s = SERVICES.find((x) => x.id === params.serviceId);
  if (!s) return {};
  return pageMetadata({ lang: params.lang, path: `/services/${s.id}`, title: s.seoTitle[params.lang], description: s.seoDesc[params.lang], image: s.img.startsWith("/") ? s.img : undefined });
}

export default function ServiceDetail({ params }) {
  const { lang, serviceId } = params;
  const t = T[lang];
  const list = SERVICES.map((s, i) => localizeService(s, lang, i));
  const s = list.find((x) => x.id === serviceId);
  if (!s) notFound();
  const others = s.related.map((id) => list.find((x) => x.id === id)).filter(Boolean);
  const count = String(list.length).padStart(2, "0");
  const process = s.process || t.steps;
  const processTitle = s.process ? { fr: "Comment ça se passe.", nl: "Hoe verloopt het.", en: "How it works." }[lang] : t.stepsTitle;

  return (
    <div className="pg pg-dark">
      <JsonLd data={[serviceSchema(s, lang), faqSchema(s.faq), breadcrumbSchema([{ name: t.nav.home, url: `${SITE_URL}/${lang}` }, { name: t.nav.services, url: `${SITE_URL}/${lang}/services` }, { name: s.name, url: `${SITE_URL}/${lang}/services/${s.id}` }])]} />
      <SiteNav lang={lang} active="services" onDark />
      <main>

      <header className="hero-srv" style={{ position: "relative", minHeight: "88vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "150px 4vw 56px", boxSizing: "border-box" }}>
        {s.img ? <img src={s.img} alt={s.h1} fetchPriority="high" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> : <Ph label={s.name} style={{ position: "absolute", inset: 0 }} />}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(14,15,13,.7) 0%,rgba(14,15,13,.25) 40%,rgba(14,15,13,.94) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="kicker" style={{ color: "#a8dbb4", fontWeight: 600 }}>{t.sp.detailKicker} {s.num} / {count} — {s.name}</span>
          <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(40px,min(6.4vw,11vh),104px)", lineHeight: 0.98, margin: "16px 0 20px", letterSpacing: "-0.02em", maxWidth: "18ch" }}>{s.h1}</h1>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(20px,2.2vw,32px)", color: "#50b265", margin: 0 }}>{s.tag}</p>
        </div>
      </header>

      {/* Intro + badges + includes */}
      <section className="grid-2" style={{ padding: "110px 4vw", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 64, alignItems: "start" }}>
        <Reveal>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(24px,2.6vw,38px)", lineHeight: 1.28, margin: 0 }}>{s.intro}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 }}>
            {s.badges.map((b) => <span key={b} className="chip-dark">{b}</span>)}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
            <Link href={`/${lang}/contact?service=${s.id}`} className="btn btn-green">{t.sp.quoteBtn}</Link>
            <PhoneButtons lang={lang} />
          </div>
          {s.primes && (
            <div style={{ marginTop: 40, border: "1px solid #11642e", padding: "22px 26px", display: "flex", gap: 20, alignItems: "center" }}>
              <span style={{ fontFamily: SERIF, fontSize: 40, lineHeight: 1, color: "#50b265" }}>€</span>
              <div>
                <p style={{ margin: "0 0 6px", color: "#b8b1a3", fontSize: 14, lineHeight: 1.6 }}>{t.sp.primesNote}</p>
                <Link href={`/${lang}/primes`} style={{ color: "#50b265", fontWeight: 600, fontSize: 14 }}>{t.sp.primesLink}</Link>
              </div>
            </div>
          )}
        </Reveal>
        <Reveal>
          <div className="kicker" style={{ color: "#50b265", marginBottom: 8 }}>{s.includesTitle}</div>
          {s.includes.map((i) => (
            <div key={i.n} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr)", gap: 16, padding: "18px 0", borderTop: "1px solid #2c2e29", alignItems: "baseline" }}>
              <span style={{ fontSize: 12, color: "#1c863f", letterSpacing: "0.1em" }}>{i.n}</span>
              <span style={{ fontFamily: SERIF, fontSize: "clamp(18px,1.6vw,22px)", lineHeight: 1.3 }}>{i.text}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Body sections */}
      <section style={{ background: "#f3eee4", color: "#0e0f0d", padding: "110px 4vw" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 56 }}>
          {s.body.map((b, i) => (
            <Reveal key={i}>
              <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(28px,3vw,44px)", lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-0.01em" }}>{b.h2}</h2>
              {b.p.map((p, k) => <p key={k} style={{ margin: "0 0 16px", color: "#5a5449", fontSize: 16, lineHeight: 1.75, maxWidth: "60ch" }}>{p}</p>)}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Case study */}
      {s.caseStudy && (
        <section style={{ padding: "110px 4vw" }}>
          <CaseStudy cs={s.caseStudy} kicker={t.sp.caseKicker} dark />
        </section>
      )}

      {/* Gallery */}
      {s.gallery.length > 0 && (
        <section className="flush" style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(${s.gallery.length > 2 ? 300 : 320}px,1fr))`, gap: 2 }}>
          {s.gallery.map((g, i) => (
            <Reveal key={i} as="figure" className="hover-zoom" style={{ margin: 0, overflow: "hidden", aspectRatio: "4/3", background: "#141512" }}>
              <Pic src={g.img} alt={`${s.name} — ${t.sp.galleryTitle}`} />
            </Reveal>
          ))}
        </section>
      )}

      {/* Process */}
      <section style={{ background: "#f3eee4", color: "#0e0f0d", padding: "120px 4vw" }}>
        <Steps steps={process} title={processTitle} />
      </section>

      {/* FAQ */}
      <section style={{ padding: "120px 4vw" }}>
        <Faq items={s.faq} title={t.sp.faqTitle} />
        <div style={{ marginTop: 56, paddingTop: 28, borderTop: "1px solid #2c2e29" }}><Zones lang={lang} label={t.sp.zonesLabel} /></div>
      </section>

      {/* CTA */}
      <section style={{ background: "#11642e", color: "#fff", padding: "100px 4vw" }}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: 40, alignItems: "center" }}>
          <Reveal>
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(34px,4.4vw,72px)", lineHeight: 1, margin: "0 0 18px", letterSpacing: "-0.01em" }}>{s.ctaTitle}</h2>
            <p style={{ margin: 0, color: "#c8ead0", fontSize: 16, lineHeight: 1.7, maxWidth: "50ch" }}>{s.ctaText}</p>
          </Reveal>
          <Reveal style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <Link href={`/${lang}/contact?service=${s.id}`} className="btn btn-dark">{t.nav.cta} →</Link>
            <PhoneButtons lang={lang} />
          </Reveal>
        </div>
      </section>

      {/* Others */}
      <section style={{ padding: "120px 4vw" }}>
        <div className="kicker" style={{ color: "#50b265", marginBottom: 24 }}>{t.sp.otherTitle}</div>
        <ServiceRows list={others} lang={lang} />
        <div style={{ paddingTop: 36, display: "flex", justifyContent: "flex-end" }}>
          <Link href={`/${lang}/services`} className="link-editorial" style={{ fontSize: "clamp(20px,2vw,28px)", color: "#f3eee4" }}>{t.nav.allServices}</Link>
        </div>
      </section>

      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
