import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { T, LEGAL, LEGAL_UPDATED, EMAIL, SITE_URL } from "@/lib/site-data";
import { breadcrumbSchema } from "@/lib/seo";

const SERIF = "'Libre Caslon Text',serif";

const DATE_LOCALE = { fr: "fr-BE", nl: "nl-BE", en: "en-GB" };

// Gabarit commun aux mentions légales et à la politique de confidentialité.
// Les deux se terminent par des liens réels : une page d'information ne doit pas être un cul-de-sac.
export default function LegalPage({ lang, doc }) {
  const t = T[lang];
  const L = LEGAL[lang][doc];
  const other = doc === "mentions" ? LEGAL[lang].privacy : LEGAL[lang].mentions;
  const updated = new Date(LEGAL_UPDATED).toLocaleDateString(DATE_LOCALE[lang] || "fr-BE", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="pg pg-light">
      <JsonLd
        data={breadcrumbSchema([
          { name: t.nav.home, url: `${SITE_URL}/${lang}` },
          { name: L.title, url: `${SITE_URL}/${lang}/${L.slug}` }
        ])}
      />
      <SiteNav lang={lang} active="" onDark={false} />
      <main>
        <header style={{ padding: "170px 4vw 56px", borderBottom: "1px solid #0e0f0d" }}>
          <span className="kicker" style={{ color: "#11642e" }}>{L.kicker}</span>
          <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(42px,7vw,110px)", lineHeight: 0.95, margin: "18px 0 26px", letterSpacing: "-0.02em", maxWidth: "16ch" }}>{L.title}</h1>
          <p style={{ maxWidth: "56ch", fontSize: 17, lineHeight: 1.65, color: "#5a5449", margin: 0 }}>{L.intro}</p>
          <p style={{ marginTop: 22, fontSize: 13, color: "#6b6457" }}>{L.updatedLabel} : <time dateTime={LEGAL_UPDATED}>{updated}</time></p>
        </header>

        <section style={{ padding: "72px 4vw 96px" }}>
          <div style={{ maxWidth: "72ch" }}>
            {L.sections.map((s, i) => (
              <Reveal key={i} style={{ paddingBottom: 44, marginBottom: 44, borderBottom: i === L.sections.length - 1 ? "none" : "1px solid rgba(14,15,13,.15)" }}>
                <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(26px,2.8vw,40px)", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.01em" }}>{s.h2}</h2>
                {s.p.map((p, k) => (
                  <p key={k} style={{ margin: "0 0 14px", color: "#3a362f", fontSize: 16, lineHeight: 1.8 }}>{p}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </section>

        {/* Sortie de page : on ne laisse jamais l'internaute au bout d'un couloir. */}
        <section style={{ background: "#0e0f0d", color: "#f3eee4", padding: "72px 4vw", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 40 }}>
          <div>
            <div className="kicker" style={{ color: "#50b265", marginBottom: 16 }}>{other.title}</div>
            <Link href={`/${lang}/${other.slug}`} className="link-editorial" style={{ fontSize: "clamp(20px,2vw,28px)", color: "#f3eee4" }}>{other.title} →</Link>
          </div>
          <div>
            <div className="kicker" style={{ color: "#50b265", marginBottom: 16 }}>{t.nav.contact}</div>
            <div style={{ display: "grid", gap: 10, fontSize: 15 }}>
              <a href={`mailto:${EMAIL}`} style={{ color: "#f3eee4" }}>{EMAIL}</a>
              <Link href={`/${lang}/contact`} style={{ color: "#f3eee4" }}>{t.nav.cta} →</Link>
              <Link href={`/${lang}/services`} style={{ color: "#b8b1a3" }}>{t.nav.allServices}</Link>
              <Link href={`/${lang}`} style={{ color: "#b8b1a3" }}>{t.nav.home}</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
