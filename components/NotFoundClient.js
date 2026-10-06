"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SERIF = "'Libre Caslon Text',serif";

// Next.js ne passe pas `params` à un not-found.js : la langue se lit donc dans l'URL.
// Le serveur nous donne les trois variantes déjà traduites (quelques chaînes, pas tout site-data).
export default function NotFoundClient({ variants, fallback = "fr" }) {
  const pathname = usePathname() || "";
  const seg = pathname.split("/")[1];
  const v = variants.find((x) => x.lang === seg) || variants.find((x) => x.lang === fallback) || variants[0];
  const { lang, nf, nav, services, phones, footer } = v;

  return (
    <div className="pg pg-light">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, padding: "20px 4vw", borderBottom: "1px solid #0e0f0d", flexWrap: "wrap" }}>
        <Link href={`/${lang}`} className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 12, color: "#0e0f0d" }}>
          <img src="/logo/mark.svg" alt="" width="40" height="35" />
          <span className="wordmark"><span className="w1">Apollon</span><span className="w2">Construction</span></span>
        </Link>
        <Link href={`/${lang}/contact`} className="btn btn-green">{nav.cta}</Link>
      </header>

      <main>
        <section style={{ padding: "clamp(72px,12vw,140px) 4vw 64px", borderBottom: "1px solid #0e0f0d" }}>
          <span className="kicker" style={{ color: "#11642e" }}>{nf.kicker}</span>
          <div aria-hidden="true" style={{ fontFamily: SERIF, fontSize: "clamp(90px,18vw,240px)", lineHeight: 0.85, color: "transparent", WebkitTextStroke: "1px #11642e", margin: "12px 0 8px" }}>{nf.code}</div>
          <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(36px,6vw,88px)", lineHeight: 1, margin: "0 0 22px", letterSpacing: "-0.02em", maxWidth: "16ch" }}>{nf.title}</h1>
          <p style={{ maxWidth: "52ch", fontSize: 17, lineHeight: 1.65, color: "#5a5449", margin: "0 0 32px" }}>{nf.text}</p>
          <Link href={`/${lang}`} className="btn btn-dark">{nf.home}</Link>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 48, padding: "64px 4vw 80px" }}>
          <div>
            <div className="kicker" style={{ color: "#11642e", marginBottom: 20 }}>{nf.servicesLabel}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/${lang}/services/${s.id}`} style={{ fontFamily: SERIF, fontSize: 19, color: "#0e0f0d" }}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="kicker" style={{ color: "#11642e", marginBottom: 20 }}>{nf.pagesLabel}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
              {[
                [`/${lang}`, nav.home],
                [`/${lang}/services`, nav.services],
                [`/${lang}/realisations`, nav.projects],
                [`/${lang}/primes`, nav.primes],
                [`/${lang}/contact`, nav.contact],
                [`/${lang}/mentions-legales`, footer.legal],
                [`/${lang}/confidentialite`, footer.rgpd]
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} style={{ fontFamily: SERIF, fontSize: 19, color: "#0e0f0d" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="kicker" style={{ color: "#11642e", marginBottom: 20 }}>{nf.helpLabel}</div>
            <div style={{ display: "grid", gap: 14 }}>
              {phones.map((p) => (
                <a key={p.href} href={p.href} style={{ fontFamily: SERIF, fontSize: "clamp(22px,2.2vw,30px)", color: "#0e0f0d", lineHeight: 1.2 }}>
                  {p.num}
                  <span style={{ display: "block", fontFamily: "'Archivo',sans-serif", fontSize: 12, color: "#6b6457", marginTop: 4 }}>{p.langs}</span>
                </a>
              ))}
              <a href={`mailto:${footer.email}`} style={{ fontSize: 15, color: "#11642e" }}>{footer.email}</a>
              <p style={{ margin: 0, fontSize: 13, color: "#6b6457", lineHeight: 1.6 }}>{footer.hours}</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ background: "#0e0f0d", color: "#8f887a", padding: "28px 4vw", fontSize: 12, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <span>{footer.rights} · {footer.vat}</span>
        <span>{footer.address}</span>
      </footer>
    </div>
  );
}
