import SiteNavClient from "@/components/SiteNavClient";
import { T, SERVICES, PHONES, localizeService } from "@/lib/site-data";

// Enveloppe serveur : ne passe au client que les libellés nécessaires (pas tout site-data).
export default function SiteNav({ lang, active, onDark }) {
  const services = SERVICES.map((s, i) => {
    const l = localizeService(s, lang, i);
    return { id: l.id, num: l.num, name: l.name, tag: l.tag };
  });
  return <SiteNavClient lang={lang} active={active} onDark={!!onDark} t={T[lang].nav} services={services} PHONES={PHONES} />;
}
