import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { Zones, PhoneList } from "@/components/Blocks";
import { T, SERVICES, EMAIL, localizeService, LANGS, SITE_URL } from "@/lib/site-data";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

const SERIF = "'Libre Caslon Text',serif";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export function generateMetadata({ params }) {
  const t = T[params.lang].contact;
  return pageMetadata({ lang: params.lang, path: "/contact", title: t.seoTitle, description: t.seoDesc });
}

export default function ContactPage({ params }) {
  const { lang } = params;
  const t = T[lang];
  const ct = t.contact;
  const services = SERVICES.map((s, i) => localizeService(s, lang, i));
  const Lbl = ({ children }) => <div className="kicker" style={{ fontSize: 11, color: "#11642e", marginBottom: 10 }}>{children}</div>;

  return (
    <div className="pg pg-light">
      <JsonLd data={breadcrumbSchema([{ name: t.nav.home, url: `${SITE_URL}/${lang}` }, { name: t.nav.contact, url: `${SITE_URL}/${lang}/contact` }])} />
      <SiteNav lang={lang} active="contact" onDark={false} />
      <main>

      <header style={{ padding: "170px 4vw 56px", borderBottom: "1px solid #0e0f0d" }}>
        <span className="kicker" style={{ color: "#11642e" }}>{ct.kicker}</span>
        <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(72px,14vw,240px)", lineHeight: 0.85, margin: "16px 0 28px", letterSpacing: "-0.03em" }}>{ct.title}</h1>
        <p style={{ maxWidth: "54ch", fontSize: 17, lineHeight: 1.65, color: "#5a5449", margin: 0 }}>{ct.intro}</p>
      </header>

      <section className="grid-2 flush" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)" }}>
        <div className="contact-info-col" style={{ padding: "72px 4vw", borderRight: "1px solid #0e0f0d", display: "grid", alignContent: "start", gap: 36 }}>
          <div><Lbl>{ct.labels.phone}</Lbl><PhoneList lang={lang} size="clamp(26px,2.6vw,40px)" color="#0e0f0d" tagColor="#6b6457" /></div>
          <div><Lbl>{ct.labels.email}</Lbl><a href={`mailto:${EMAIL}`} style={{ fontFamily: SERIF, fontSize: "clamp(20px,2vw,28px)", lineHeight: 1.1, wordBreak: "break-all" }}>{EMAIL}</a></div>
          <div><Lbl>{ct.labels.address}</Lbl><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5a5449" }}>Apollon Group SRL<br />{t.footer.address}</p></div>
          <div><Lbl>{ct.labels.zone}</Lbl><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5a5449" }}>{t.footer.zone}</p></div>
          <div><Lbl>{ct.labels.hours}</Lbl><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5a5449" }}>{t.footer.hours}</p></div>
          <div style={{ borderTop: "1px solid #0e0f0d", paddingTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {t.stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: SERIF, fontSize: 34, lineHeight: 1 }}>{s.n}<span style={{ fontSize: "0.5em" }}>{s.u}</span></div>
                <div style={{ fontSize: 12, color: "#5a5449", marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "72px 4vw" }}>
          <ContactForm lang={lang} fm={ct.form} services={services} />
        </div>
      </section>

      <section style={{ padding: "48px 4vw 96px", borderTop: "1px solid #0e0f0d" }}>
        <Zones lang={lang} label={t.home.zonesLabel} />
      </section>

      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
