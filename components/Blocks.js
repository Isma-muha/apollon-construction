import Link from "next/link";
import Reveal from "@/components/Reveal";
import Ph from "@/components/Ph";
import { ZONES_L, REVIEWS, REVIEWS_URL, PHONES, phonesFor, T } from "@/lib/site-data";

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
          <PhoneButtons lang={lang} dark={false} />
        </div>
      </div>
    </section>
  );
}

export function Pic({ src, alt, tone, style }) {
  return src ? <img src={src} alt={alt || ""} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...(style || {}) }} /> : <Ph label={alt} tone={tone} />;
}

export const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2z" /></svg>
);

// Bloc « Ou appelez-nous » : numéro en serif cliquable, icône WhatsApp, langues en toutes lettres + horaires.
// Seuls les numéros qui répondent dans la langue du site sont affichés (le 0471 n'apparaît pas en NL).
export function PhoneButtons({ lang = "fr", dark = true, label = true, compact = false }) {
  const n = T[lang].nav;
  const color = dark ? "#f3eee4" : "#0e0f0d";
  const muted = dark ? "rgba(243,238,228,.65)" : "#6b6457";
  const line = dark ? "rgba(243,238,228,.2)" : "rgba(14,15,13,.2)";
  return (
    <div className={`phone-block ${compact ? "phone-block--compact" : ""}`} style={{ borderLeft: compact ? "none" : `1px solid ${line}` }}>
      {label && !compact && <div style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: muted, fontWeight: 600, fontFamily: "Archivo, sans-serif" }}>{n.orCall}</div>}
      {phonesFor(lang).map((p) => (
        <div key={p.href} className="phone-item">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a href={p.href} className="phone-num-serif" style={{ color }}>{p.num}</a>
            {p.wa && (
              <a href={p.wa} className="wa-dot" title="WhatsApp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" style={{ color: muted, borderColor: line }}>{WA_ICON}</a>
            )}
          </div>
          <div className="phone-meta" style={{ color: muted }}>
            <span className="live-dot" />
            <span>{p.langs}</span><span style={{ opacity: 0.4 }}>|</span><span>{n.hoursShort}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PhoneList({ lang = "fr", size = "clamp(28px,3vw,44px)", color, tagColor = "#8f887a", gap = 14 }) {
  return (
    <div style={{ display: "grid", gap }}>
      {phonesFor(lang).map((p) => (
        <div key={p.href}>
          <a href={p.href} style={{ display: "block", color, lineHeight: 1.05, fontFamily: "'Libre Caslon Text',serif", fontSize: size }}>{p.num}</a>
          <div style={{ marginTop: 6, fontSize: 12, color: tagColor, fontFamily: "Archivo, sans-serif", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span>{p.langs}</span>
            {p.wa && <a href={p.wa} target="_blank" rel="noopener noreferrer" style={{ color: tagColor, display: "inline-flex", alignItems: "center", gap: 5 }}>{WA_ICON} WhatsApp</a>}
          </div>
        </div>
      ))}
    </div>
  );
}

// Barre fixe mobile : Appeler · WhatsApp · Devis (toutes les pages).
export function MobileBar({ lang }) {
  const n = T[lang].nav;
  const first = phonesFor(lang)[0] || PHONES[0];
  return (
    <div className="mobile-bar">
      <a href={first.href} className="mb-call">{n.call}</a>
      <a href={PHONES[0].wa} className="mb-wa" target="_blank" rel="noopener noreferrer">{n.whatsapp}</a>
      <Link href={`/${lang}/contact`} className="mb-quote">{n.ctaShort}</Link>
    </div>
  );
}
