"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// Google Ads (gtag) + Consent Mode v2. Ne charge rien tant que NEXT_PUBLIC_GADS_ID n'est pas défini.
//   NEXT_PUBLIC_GADS_ID          = AW-XXXXXXXXXX           (Google Ads → Outils → Conversions → balise)
//   NEXT_PUBLIC_GADS_LABEL_FORM  = libellé de la conversion « formulaire envoyé »
//   NEXT_PUBLIC_GADS_LABEL_CALL  = libellé de la conversion « clic sur le numéro »
// Le consentement est demandé (bandeau) ; avant réponse, les balises tournent en mode « denied »
// (pings sans cookie, conversions modélisées), conformément au mode consentement v2 pour l'EEE.

const ID = process.env.NEXT_PUBLIC_GADS_ID || "";
const LABEL_FORM = process.env.NEXT_PUBLIC_GADS_LABEL_FORM || "";
const LABEL_CALL = process.env.NEXT_PUBLIC_GADS_LABEL_CALL || "";
const KEY = "ac_consent";

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

export function trackConversion(label, extra = {}) {
  if (!ID || !label || typeof window === "undefined") return;
  gtag("event", "conversion", { send_to: `${ID}/${label}`, ...extra });
}

export default function Analytics({ consent }) {
  const pathname = usePathname();
  const [choice, setChoice] = useState("pending");

  useEffect(() => {
    if (!ID) return;
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === "granted" || saved === "denied") {
      setChoice(saved);
      if (saved === "granted") gtag("consent", "update", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted" });
    } else {
      setChoice("ask");
    }
  }, []);

  useEffect(() => {
    if (!ID) return;
    if (/\/contact\/merci\/?$/.test(pathname || "")) trackConversion(LABEL_FORM);
  }, [pathname]);

  useEffect(() => {
    if (!ID) return;
    const onClick = (e) => {
      const a = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
      if (a) trackConversion(LABEL_CALL);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  function decide(v) {
    setChoice(v);
    try { localStorage.setItem(KEY, v); } catch (e) {}
    const st = v === "granted" ? "granted" : "denied";
    gtag("consent", "update", { ad_storage: st, ad_user_data: st, ad_personalization: st, analytics_storage: st });
  }

  if (!ID) return null;
  return (
    <>
      <Script id="gtag-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });
        gtag('set', 'ads_data_redaction', true);
        gtag('set', 'url_passthrough', true);
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ID}', { allow_enhanced_conversions: true });
      `}</Script>
      {choice === "ask" && consent && (
        <div role="dialog" aria-live="polite" className="consent" style={{ position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 60, margin: "0 auto", maxWidth: 560, background: "#0e0f0d", color: "#f3eee4", padding: "16px 18px", display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", boxShadow: "0 12px 40px rgba(0,0,0,.35)" }}>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, flex: "1 1 260px", color: "#b8b1a3" }}>{consent.text}</p>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" onClick={() => decide("denied")} className="btn" style={{ border: "1px solid rgba(243,238,228,.4)", background: "transparent", color: "#f3eee4", padding: "10px 16px", fontSize: 13 }}>{consent.refuse}</button>
            <button type="button" onClick={() => decide("granted")} className="btn btn-green" style={{ padding: "10px 16px", fontSize: 13 }}>{consent.accept}</button>
          </div>
        </div>
      )}
    </>
  );
}
