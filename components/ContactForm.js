"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Envoi via /api/contact (SMTP Hostinger, voir lib/mail.js). Après succès : page /[lang]/contact/merci
// (URL utilisable comme conversion Google Ads).
export default function ContactForm({ fm, services, defaultService, lang = "fr", compact = false, dark = false }) {
  const router = useRouter();
  const [state, setState] = useState("idle");
  const [service, setService] = useState(defaultService || (services[0] && services[0].id) || "");
  const [ads, setAds] = useState({});

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const s = q.get("service");
      if (s && services.some((x) => x.id === s)) setService(s);
      const keep = {};
      for (const k of ["gclid", "utm_source", "utm_campaign"]) {
        const v = q.get(k) || sessionStorage.getItem("ac_" + k);
        if (v) { keep[k] = v; sessionStorage.setItem("ac_" + k, v); }
      }
      setAds(keep);
    } catch (e) {}
  }, [services]);

  async function submit(e) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    payload.lang = lang;
    payload.page = window.location.pathname;
    payload.referrer = document.referrer;
    Object.assign(payload, ads);
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        setState("sent");
        router.push(`/${lang}/contact/merci`);
        return;
      }
      setState("error");
    } catch (err) {
      setState("error");
    }
  }
  const sent = state === "sent";

  return (
    <div>
      {!compact && (
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "'Libre Caslon Text',serif", fontSize: "clamp(24px,2.4vw,32px)", lineHeight: 1.1 }}>{fm.title}</div>
          <div style={{ fontSize: 13, color: "#6b6457", marginTop: 6 }}>{fm.sub}</div>
        </div>
      )}
      <form
        id="cform"
        hidden={sent}
        onSubmit={submit}
        style={{ display: "grid", gap: compact ? 18 : 26 }}
      >
        {compact ? (
          <>
            <label className="fld"><span>{fm.name} *</span><input name="name" required autoComplete="name" /></label>
            <label className="fld"><span>{fm.phone} *</span><input name="phone" type="tel" required autoComplete="tel" inputMode="tel" /></label>
            <label className="fld"><span>{fm.email}</span><input name="email" type="email" autoComplete="email" inputMode="email" /></label>
            <input type="hidden" name="service" value={service} />
            <input type="hidden" name="profile" value={fm.profiles[0]} />
            <label className="fld"><span>{fm.message}</span><textarea name="message" rows={3} placeholder={fm.messagePh} /></label>
          </>
        ) : (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 26 }}>
              <label className="fld"><span>{fm.name} *</span><input name="name" required autoComplete="name" /></label>
              <label className="fld"><span>{fm.phone} *</span><input name="phone" type="tel" required autoComplete="tel" /></label>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 26 }}>
              <label className="fld"><span>{fm.email}</span><input name="email" type="email" autoComplete="email" /></label>
              <label className="fld">
                <span>{fm.profile}</span>
                <select name="profile" defaultValue={fm.profiles[0]}>
                  {fm.profiles.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </label>
            </div>
            <label className="fld">
              <span>{fm.service}</span>
              <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
                {services.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </label>
            <label className="fld"><span>{fm.message}</span><textarea name="message" rows={5} placeholder={fm.messagePh} /></label>
            <p style={{ margin: 0, fontSize: 13, color: "#6b6457", lineHeight: 1.6, maxWidth: "60ch" }}>{fm.photos}</p>
          </>
        )}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }} />
        {state === "error" && <p role="alert" style={{ margin: 0, padding: "12px 16px", background: "#fbe9e7", color: "#8a2a1f", fontSize: 14, lineHeight: 1.5, border: "1px solid #e9b8b0" }}>{fm.error}</p>}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: compact ? 14 : 24, flexWrap: "wrap", paddingTop: 4, flexDirection: compact ? "column-reverse" : "row", alignItems: compact ? "stretch" : "center" }}>
          <span style={{ fontSize: 12, color: "#6b6457", maxWidth: compact ? "none" : "40ch", lineHeight: 1.6 }}>{fm.rgpd}</span>
          <button type="submit" className={`btn ${compact ? "btn-green" : "btn-dark"}`} disabled={state === "sending"} style={{ ...(state === "sending" ? { opacity: 0.6, cursor: "wait" } : {}), ...(compact ? { width: "100%", textAlign: "center", padding: "18px 24px", fontSize: 16 } : {}) }}>{state === "sending" ? fm.sending : `${fm.send} →`}</button>
        </div>
      </form>
      <div id="csent" className="csent" hidden={!sent}>
        <div style={{ color: "#11642e", fontSize: 40 }}>✓</div>
        <h2 style={{ fontFamily: "'Libre Caslon Text',serif", fontWeight: 400, fontSize: "clamp(34px,4vw,60px)", lineHeight: 1, margin: 0 }}>{fm.sentTitle}</h2>
        <p style={{ margin: 0, color: "#5a5449", fontSize: 17, lineHeight: 1.6, maxWidth: "44ch" }}>{fm.sentText}</p>
      </div>
    </div>
  );
}
