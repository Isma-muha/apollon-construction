import Link from "next/link";
import { T, SERVICES, PHONE, PHONE_HREF, EMAIL, SOCIAL, localizeService } from "@/lib/site-data";

export default function SiteFooter({ lang }) {
  const t = T[lang];
  const services = SERVICES.map((s, i) => localizeService(s, lang, i));
  const K = ({ children }) => <div className="kicker" style={{ fontSize: 11, color: "#50b265", marginBottom: 18 }}>{children}</div>;

  return (
    <footer style={{ fontFamily: "'Archivo',sans-serif", background: "#0e0f0d", color: "#f3eee4", borderTop: "1px solid #2c2e29", padding: "72px 4vw 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "48px 40px" }}>
        <div>
          <img src="/logo/ac-blanc.png" alt="Apollon Construction" className="foot-logo" width="164" height="120" style={{ height: 120, width: "auto", display: "block" }} />
          <p style={{ color: "#b8b1a3", fontSize: 14, lineHeight: 1.7, margin: "22px 0 0", maxWidth: "30ch" }}>{t.home.kicker}</p>
          <p style={{ color: "#8f887a", fontSize: 13, lineHeight: 1.7, margin: "14px 0 0" }}>
            {t.footer.address}
            <br />
            {t.footer.zone}
            <br />
            {t.footer.hours}
          </p>
        </div>
        <div>
          <K>{t.nav.services}</K>
          <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
            {services.map((s) => (
              <Link key={s.id} href={`/${lang}/services/${s.id}`} style={{ color: "#f3eee4" }}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <K>Apollon</K>
          <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
            <Link href={`/${lang}`} style={{ color: "#f3eee4" }}>{t.nav.home}</Link>
            <Link href={`/${lang}/realisations`} style={{ color: "#f3eee4" }}>{t.nav.projects}</Link>
            <Link href={`/${lang}/primes`} style={{ color: "#f3eee4" }}>{t.nav.primes}</Link>
            <Link href={`/${lang}/contact`} style={{ color: "#f3eee4" }}>{t.nav.contact}</Link>
            <a href={`mailto:${EMAIL}`} style={{ color: "#8f887a" }}>{t.footer.legal}</a>
            <a href={`mailto:${EMAIL}`} style={{ color: "#8f887a" }}>{t.footer.rgpd}</a>
          </div>
        </div>
        <div>
          <K>{t.nav.contact}</K>
          <div style={{ display: "grid", gap: 10 }}>
            <a href={PHONE_HREF} style={{ fontFamily: "'Libre Caslon Text',serif", fontSize: 24, color: "#f3eee4" }}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`} style={{ fontSize: 14, color: "#f3eee4" }}>{EMAIL}</a>
            <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#8f887a", marginTop: 10 }}>
              <a href={SOCIAL.instagram} style={{ color: "#8f887a" }} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={SOCIAL.facebook} style={{ color: "#8f887a" }} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={SOCIAL.linkedin} style={{ color: "#8f887a" }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 56, borderTop: "1px solid #2c2e29", paddingTop: 20, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 12, color: "#8f887a" }}>
        <span>{t.footer.rights} · {t.footer.vat}</span>
        <span>★★★★★ 5.0 Google · TrustUp Pro · Batibouw+</span>
      </div>
    </footer>
  );
}
