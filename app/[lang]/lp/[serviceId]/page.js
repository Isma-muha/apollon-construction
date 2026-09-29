import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { Faq, Pic, PhoneButtons } from "@/components/Blocks";
import { T, SERVICES, REVIEWS, REVIEWS_URL, localizeService, LANGS } from "@/lib/site-data";
import { serviceSchema } from "@/lib/seo";

const SERIF = "'Libre Caslon Text',serif";

// Pages d'atterrissage Google Ads : une par service, sans menu, formulaire court visible tout de
// suite, barre d'appel fixe sur mobile. Non indexées (le SEO passe par /services/…).
export function generateStaticParams() {
  return LANGS.flatMap((lang) => SERVICES.map((s) => ({ lang, serviceId: s.id })));
}
export function generateMetadata({ params }) {
  const s = SERVICES.find((x) => x.id === params.serviceId);
  if (!s) return {};
  return { title: s.seoTitle[params.lang], description: s.seoDesc[params.lang], robots: { index: false, follow: false } };
}

export default function LandingPage({ params }) {
  const { lang, serviceId } = params;
  const t = T[lang];
  const lp = t.lp;
  const list = SERVICES.map((s, i) => localizeService(s, lang, i));
  const s = list.find((x) => x.id === serviceId);
  if (!s) notFound();
  const photos = [{ img: s.img }, ...s.gallery].filter((g) => g.img).slice(0, 3);

  return (
    <div className="pg pg-light lp">
      <JsonLd data={serviceSchema(s, lang)} />

      <header className="lp-nav" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 4vw", borderBottom: "1px solid #0e0f0d" }}>
        <Link href={`/${lang}`} className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 12, color: "#0e0f0d" }}>
          <img src="/logo/mark.svg" alt="" width="40" height="35" />
          <span className="wordmark"><span className="w1">Apollon</span><span className="w2">Construction</span></span>
        </Link>
        <div className="lp-nav-phones"><PhoneButtons lang={lang} dark={false} compact /></div>
      </header>

      <main>
        <section className="lp-hero" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(320px,440px)", gap: 56, padding: "56px 4vw 72px", alignItems: "start" }}>
          <div>
            <span className="kicker" style={{ color: "#11642e" }}>{lp.kicker}</span>
            <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(38px,5vw,76px)", lineHeight: 1.02, margin: "16px 0 20px", letterSpacing: "-0.02em", maxWidth: "16ch" }}>{s.h1}</h1>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(18px,1.6vw,24px)", lineHeight: 1.4, margin: "0 0 24px", color: "#3a362f", maxWidth: "40ch" }}>{s.intro}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {s.badges.map((b) => <span key={b} className="chip-light">{b}</span>)}
            </div>
            <div className="lp-trust" style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px", fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5a5449" }}>
              {t.trust.map((b, i) => <span key={i}>{b.label}</span>)}
            </div>
            <div className="lp-photo" style={{ marginTop: 36, aspectRatio: "16/10", background: "#141512", overflow: "hidden" }}>
              <Pic src={s.img} alt={s.h1} tone="dark" />
            </div>
          </div>
          <div id="form" className="lp-form" style={{ background: "#ffffff", border: "1px solid #0e0f0d", padding: "28px 26px 24px", position: "sticky", top: 16 }}>
            <div style={{ fontFamily: SERIF, fontSize: 26, lineHeight: 1.1 }}>{lp.formTitle}</div>
            <div style={{ fontSize: 13, color: "#6b6457", margin: "6px 0 22px" }}>{lp.formSub}</div>
            <ContactForm lang={lang} fm={t.contact.form} services={list} defaultService={s.id} compact />
            <div style={{ marginTop: 18 }}><PhoneButtons lang={lang} dark={false} /></div>
          </div>
        </section>

        <section style={{ background: "#0e0f0d", color: "#f3eee4", padding: "72px 4vw" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 28, borderBottom: "1px solid #2c2e29", paddingBottom: 48, marginBottom: 56 }}>
            {t.stats.map((st, i) => (
              <div key={i}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(40px,4vw,64px)", lineHeight: 1, color: "#50b265" }}>{st.n}<span style={{ fontSize: "0.5em" }}>{st.u}</span></div>
                <div style={{ marginTop: 8, color: "#b8b1a3", fontSize: 14, lineHeight: 1.5 }}>{st.l}</div>
              </div>
            ))}
          </div>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(28px,3.4vw,52px)", lineHeight: 1.05, margin: "0 0 36px", maxWidth: "20ch" }}>{lp.whyTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 32 }}>
            {lp.why.map((w, i) => (
              <div key={i} style={{ borderTop: "1px solid #2c2e29", paddingTop: 18 }}>
                <div style={{ fontSize: 12, color: "#1c863f", letterSpacing: "0.1em", marginBottom: 10 }}>0{i + 1}</div>
                <h3 style={{ fontSize: 19, fontWeight: 600, margin: "0 0 8px" }}>{w.t}</h3>
                <p style={{ margin: 0, color: "#b8b1a3", fontSize: 15, lineHeight: 1.65 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "72px 4vw" }}>
          <div className="kicker" style={{ color: "#11642e", marginBottom: 8 }}>{s.includesTitle}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "0 40px" }}>
            {s.includes.map((i) => (
              <div key={i.n} style={{ display: "grid", gridTemplateColumns: "40px minmax(0,1fr)", gap: 12, padding: "16px 0", borderTop: "1px solid #0e0f0d", alignItems: "baseline" }}>
                <span style={{ fontSize: 12, color: "#11642e", letterSpacing: "0.1em" }}>{i.n}</span>
                <span style={{ fontFamily: SERIF, fontSize: "clamp(17px,1.5vw,21px)", lineHeight: 1.3 }}>{i.text}</span>
              </div>
            ))}
          </div>
        </section>

        {photos.length > 1 && (
          <section className="flush lp-photos" style={{ display: "grid", gridTemplateColumns: `repeat(${photos.length},1fr)`, gap: 2 }}>
            {photos.map((g, i) => (
              <figure key={i} style={{ margin: 0, aspectRatio: "4/3", background: "#141512", overflow: "hidden" }}>
                <Pic src={g.img} alt={`${s.name} — ${lp.photosTitle}`} />
              </figure>
            ))}
          </section>
        )}

        <section style={{ padding: "72px 4vw", background: "#ffffff" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
            {REVIEWS.map((r) => (
              <div key={r.name} className="review" style={{ border: "1px solid #e6e1d6" }}>
                <div className="stars">★★★★★</div>
                <p>« {r.text[lang]} »</p>
                <div className="who">{r.name} · {r.when[lang]}</div>
              </div>
            ))}
          </div>
          <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="link-editorial" style={{ display: "inline-block", marginTop: 20, color: "#11642e" }}>{t.home.reviewLink}</a>
        </section>

        <section style={{ padding: "72px 4vw" }}>
          <Faq items={s.faq.slice(0, 4)} title={lp.faqTitle} />
        </section>

        <section style={{ background: "#11642e", color: "#f3eee4", padding: "72px 4vw", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(34px,4.5vw,72px)", lineHeight: 1, margin: 0, letterSpacing: "-0.02em" }}>{lp.finalTitle}</h2>
            <p style={{ margin: "16px 0 0", color: "#c8ead0", fontSize: 16, lineHeight: 1.65, maxWidth: "46ch" }}>{lp.finalSub}</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-start" }}>
            <a href="#form" className="btn" style={{ background: "#f3eee4", color: "#0e0f0d" }}>{lp.backToForm}</a>
            <PhoneButtons lang={lang} />
          </div>
        </section>
      </main>

      <footer style={{ padding: "28px 4vw 96px", fontSize: 12, color: "#6b6457", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>{t.footer.rights} · {t.footer.vat}</span>
        <span>{t.footer.address}</span>
      </footer>

    </div>
  );
}
