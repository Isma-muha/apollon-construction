"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LANGS = ["fr", "nl", "en"];

export default function SiteNavClient({ lang, active, onDark, t, services, PHONES }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cls = ["nav", onDark || scrolled || menuOpen ? "light" : "", scrolled && !menuOpen ? "scrolled" : "", menuOpen ? "open" : ""].join(" ");

  function switchLang(l) {
    const parts = (pathname || "/").split("/");
    parts[1] = l;
    router.push(parts.join("/") || "/");
    setMobileOpen(false);
  }

  const links = [
    { key: "home", href: `/${lang}`, label: t.home },
    { key: "services", href: `/${lang}/services`, label: t.services, drop: true },
    { key: "projects", href: `/${lang}/realisations`, label: t.projects },
    { key: "primes", href: `/${lang}/primes`, label: t.primes },
    { key: "contact", href: `/${lang}/contact`, label: t.contact }
  ];
  const langBtns = LANGS.map((l) => (
    <button key={l} className={`lang ${l === lang ? "on" : ""}`} data-lang={l} onClick={() => switchLang(l)} aria-label={l}>
      {l.toUpperCase()}
    </button>
  ));

  return (
    <div className="nav-wrap">
      <div className={cls} data-ondark={onDark ? 1 : 0} onMouseLeave={() => setMenuOpen(false)}>
        <div className="nav-bar">
          <Link href={`/${lang}`} className="nav-logo" data-close onMouseEnter={() => setMenuOpen(false)}>
            <img className="mark mark-green" src="/logo/mark.svg" alt="" width="46" height="40" />
            <img className="mark mark-white" src="/logo/mark-white.svg" alt="" width="46" height="40" />
            <span className="wordmark">
              <span className="w1">Apollon</span>
              <span className="w2">Construction</span>
            </span>
          </Link>
          <nav className="nav-links nav-desktop-only" aria-label="Navigation">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className={l.key === active ? "active" : ""}
                {...(l.drop ? { "data-open": "" } : { "data-close": "" })}
                onMouseEnter={() => setMenuOpen(!!l.drop)}
              >
                {l.label}
                {l.drop && <span className="chev">▼</span>}
              </Link>
            ))}
          </nav>
          <div className="nav-right nav-desktop-only" data-close onMouseEnter={() => setMenuOpen(false)}>
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>{langBtns}</div>
            <div className="nav-phones">
              {PHONES.map((p) => (
                <a key={p.href} href={p.href} className="nav-phone">{p.num}<span className="phone-tag">{p.tag}</span></a>
              ))}
            </div>
            <Link href={`/${lang}/contact`} className="btn-outline">
              {t.cta}
            </Link>
          </div>
          <button className="nav-burger" aria-label="Menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="nav-drop nav-desktop-only">
          <div>
            <div className="kicker" style={{ fontSize: 11, color: "#50b265", marginBottom: 16 }}>{t.services}</div>
            <p style={{ fontFamily: "'Libre Caslon Text',serif", fontSize: 24, lineHeight: 1.3, margin: "0 0 24px", maxWidth: "22ch" }}>{t.menuNote}</p>
            <Link href={`/${lang}/services`} className="link-editorial" style={{ fontSize: 18 }}>
              {t.allServices}
            </Link>
          </div>
          <div className="nav-drop-list">
            {services.map((s) => (
              <Link key={s.id} href={`/${lang}/services/${s.id}`}>
                <span style={{ fontSize: 11, color: "#1c863f", letterSpacing: "0.1em" }}>{s.num}</span>
                <span style={{ display: "grid", gap: 3 }}>
                  <span style={{ fontFamily: "'Libre Caslon Text',serif", fontSize: 20, lineHeight: 1.1 }}>{s.name}</span>
                  <span style={{ fontSize: 12, color: "#8f887a" }}>{s.tag}</span>
                </span>
                <span style={{ fontSize: 14 }}>→</span>
              </Link>
            ))}
          </div>
        </div>

        <div className={`nav-mobile ${mobileOpen ? "show" : ""}`}>
          <div style={{ display: "grid", gap: 4 }}>
            {links.map((l) => (
              <Link key={l.key} href={l.href} className={`m-link ${l.key === active ? "active" : ""}`} onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 24, display: "grid", gap: 10 }}>
            <div className="kicker" style={{ fontSize: 11, color: "#50b265" }}>{t.services}</div>
            {services.map((s) => (
              <Link key={s.id} href={`/${lang}/services/${s.id}`} className="m-srv" onClick={() => setMobileOpen(false)}>
                {s.num} — {s.name}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 10 }}>{langBtns}</div>
          <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
            {PHONES.map((p) => (
              <a key={p.href} href={p.href} className="btn btn-ivoire phone-btn">{p.num}<span className="phone-tag">{p.tag}</span></a>
            ))}
            <Link href={`/${lang}/contact`} className="btn btn-green" onClick={() => setMobileOpen(false)}>
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
