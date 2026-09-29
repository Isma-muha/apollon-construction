import Link from "next/link";
import Reveal from "@/components/Reveal";
import Ph from "@/components/Ph";
import { ZONES_L, REVIEWS, REVIEWS_URL, PHONES } from "@/lib/site-data";

const SERIF = "'Libre Caslon Text',serif";

export function Steps({ steps, title, dark }) {
  const num = dark ? "#50b265" : "#11642e", txt = dark ? "#b8b1a3" : "#5a5449", line = dark ? "#2c2e29" : "#0e0f0d";
  return (
    <>
      <Reveal as="h2" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px,4vw,64px)", lineHeight: 1.05, margin: "0 0 64px", maxWidth: "22ch" }}>{title}</Reveal>
      <div className="steps" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 40, borderTop: `1px solid ${line}`, paddingTop: 40 }}>
        {steps.map((s, i) => (
          <Reveal key={i}>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(56px,6vw,96px)", lineHeight: 1, color: num, marginBottom: 16 }}>{s.n || i + 1}</div>
            <h3 style={{ fontSize: 19, fontWeight: 600, margin: "0 0 10px" }}>{s.t || s.title}</h3>
            <p style={{ margin: 0, color: txt, fontSize: 15, lineHeight: 1.65 }}>{s.d || s.desc}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export function Zones({ label, lang = "fr" }) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "baseline", flexWrap: "wrap" }}>
      <span style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", whiteSpace: "nowrap", opacity: 0.8 }}>{label}</span>
      <div className="zones">{(ZONES_L[lang] || ZONES_L.fr).map((z) => <span key={z}>{z}</span>)}</div>
    </div>
  );
}

export function Reviews({ lang, t }) {
  return (
    <>
      <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
        <div>
          <span className="kicker" style={{ color: "#50b265" }}>{t.reviewsKicker}</span>
          <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px,4vw,64px)", lineHeight: 1, margin: "16px 0 0" }}>{t.reviewsTitle}</h2>
        </div>
        <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="link-editorial" style={{ fontSize: 18, color: "#50b265" }}>{t.reviewLink}</a>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
        {REVIEWS.map((r) => (
          <Reveal key={r.name} className="review">
            <div className="stars">★★★★★</div>
            <p>« {r.text[lang]} »</p>
            <div className="who">{r.name} · {r.when[lang]}{r.badge ? ` · ${r.badge}` : ""}</div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export function Partners({ label, dark }) {
  return (
    <div className="partners">
      <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.7 }}>{label}</span>
      <img src="/logo/batibouw.webp" className="bb" width="68" height="64" loading="lazy" alt="Partenaire Batibouw+" style={dark ? { filter: "brightness(0) invert(1)", opacity: 0.85 } : undefined} />
      <img src="/logo/trustup.webp" width="187" height="44" loading="lazy" alt="Entreprise vérifiée TrustUp Pro" style={dark ? { filter: "brightness(0) invert(1)", opacity: 0.85 } : undefined} />
      <span className="badge">RGIE</span>
      <span className="badge">RC Pro</span>
      <span className="badge">★ 5.0 Google</span>
    </div>
  );
}

export function ServiceRows({ list, lang, big }) {
  return (
    <div style={{ borderBottom: "1px solid #2c2e29" }}>
      {list.map((e) => (
        <Reveal
          key={e.id}
          as="a"
          href={`/${lang}/services/${e.id}`}
          className="row-hover srv-row"
          style={{ display: "grid", gridTemplateColumns: "72px minmax(0,1.2fr) minmax(0,1fr) 40px", gap: 32, alignItems: "baseline", padding: big ? "30px 0" : "24px 0", borderTop: "1px solid #2c2e29", color: "#f3eee4" }}
        >
          <span style={{ fontSize: 13, color: "#1c863f", letterSpacing: "0.1em" }}>{e.num}</span>
          <h3 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: big ? "clamp(30px,3.6vw,58px)" : "clamp(26px,3vw,44px)", lineHeight: 1, margin: 0, letterSpacing: "-0.01em" }}>{e.name}</h3>
          <p style={{ margin: 0, color: "#b8b1a3", fontSize: 15, lineHeight: 1.65, maxWidth: "48ch" }}>{e.tag}</p>
          <span className="arrow" style={{ fontSize: 22, textAlign: "right" }}>→</span>
        </Reveal>
      ))}
    </div>
  );
}

export function CaseStudy({ cs, kicker, dark }) {
  if (!cs) return null;
  return (
    <div>
      <Reveal>
        <span className="kicker" style={{ color: dark ? "#50b265" : "#11642e" }}>{cs.kicker || kicker}</span>
        <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(30px,3.6vw,56px)", lineHeight: 1.05, margin: "16px 0 18px", maxWidth: "20ch" }}>{cs.h2}</h2>
        <p style={{ margin: "0 0 40px", color: dark ? "#b8b1a3" : "#5a5449", fontSize: 16, lineHeight: 1.7, maxWidth: "60ch" }}>{cs.p}</p>
      </Reveal>
      <div className="case-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
        {cs.images.map((im, i) => (
          <Reveal key={i} as="figure" style={{ margin: 0 }}>
            <div className="hover-zoom" style={{ aspectRatio: "1/1", background: "#141512" }}>
              <img src={im.src} alt={im.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <figcaption style={{ padding: "10px 2px 0", fontSize: 12, letterSpacing: "0.08em", color: dark ? "#8f887a" : "#6b6457" }}>{im.caption}</figcaption>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Faq({ items, title }) {
  return (
    <div>
      <Reveal as="h2" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(32px,4vw,64px)", lineHeight: 1.05, margin: "0 0 40px", maxWidth: "20ch" }}>{title}</Reveal>
      <div className="faq">
        {items.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function CtaBlock({ lang, t, title, sub, extraStyle, className = "" }) {
  return (
    <section className={`grid-2 ${className}`} style={{ padding: "120px 4vw", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 48, alignItems: "end", ...(extraStyle || {}) }}>
      <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(56px,10vw,170px)", lineHeight: 0.9, margin: 0, letterSpacing: "-0.03em" }}>{title || t.cta.title}</h2>
      <div style={{ display: "grid", gap: 20, justifyItems: "start" }}>
        <p style={{ margin: 0, color: "#5a5449", fontSize: 16, lineHeight: 1.7, maxWidth: "46ch" }}>{sub || t.cta.sub}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href={`/${lang}/contact`} className="btn btn-dark">{t.nav.cta}</Link>
          <PhoneButtons dark={false} />
        </div>
      </div>
    </section>
  );
}

export function Pic({ src, alt, tone, style }) {
  return src ? <img src={src} alt={alt || ""} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...(style || {}) }} /> : <Ph label={alt} tone={tone} />;
}

// Les deux numéros, avec leur étiquette de langues (codes FR/NL/EN, identiques dans les 3 versions du site).
// Bloc empilé : le numéro en avant, l'étiquette discrète à droite.
export function PhoneButtons({ className, style, dark = true }) {
  const color = (style && style.color) || (dark ? "#f3eee4" : "#0e0f0d");
  const tag = dark ? "rgba(243,238,228,.55)" : "#8f887a";
  const line = dark ? "rgba(243,238,228,.35)" : "rgba(14,15,13,.35)";
  return (
    <div className="phone-block" style={{ borderLeft: `1px solid ${line}` }}>
      {PHONES.map((p) => (
        <a key={p.href} href={p.href} className="phone-line" style={{ color }}>
          <span className="phone-num">{p.num}</span>
          <span className="phone-tag" style={{ color: tag }}>{p.tag}</span>
        </a>
      ))}
    </div>
  );
}

export function PhoneList({ size = "clamp(28px,3vw,44px)", color, tagColor = "#8f887a", gap = 14 }) {
  return (
    <div style={{ display: "grid", gap }}>
      {PHONES.map((p) => (
        <a key={p.href} href={p.href} style={{ display: "block", color, lineHeight: 1.05 }}>
          <span style={{ fontFamily: "'Libre Caslon Text',serif", fontSize: size }}>{p.num}</span>
          <span style={{ display: "inline-block", marginLeft: 14, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: tagColor, fontFamily: "Archivo, sans-serif", verticalAlign: "middle" }}>{p.tag}</span>
        </a>
      ))}
    </div>
  );
}
