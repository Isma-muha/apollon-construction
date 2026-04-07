import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const FacadePage: NextPage = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const [tab, setTab] = useState('fac')

  const T = {
    fr: {
      hero_p: "Le ravalement de façade protège votre bâtiment des intempéries et peut intégrer une isolation thermique pour booster les performances énergétiques.",
      losses_tag: "Où part la chaleur ?", losses_h2: "Répartition des pertes thermiques",
      how_h2: "Comment fonctionne une toiture bien isolée ?", how_p: "Plusieurs couches qui travaillent ensemble pour une protection maximale.",
      works_tag: "Nos interventions", works_h2: "Quel type de travaux pour votre projet ?",
      real_tag: "Nos réalisations", real_h2: "Photos de chantiers réels",
      cta_h2: "Prêt à rénover votre façade ou votre toiture ?", cta_p: "Notre équipe visite votre chantier et vous remet un devis détaillé sous 48h — gratuitement et sans engagement.",
      tabs: [
        { id:'fac', label:'Façade & Ravalement', img:'/images/chantier-facade-1.jpg', img2:'/images/facade-before-after.jpg', desc:"Le ravalement de façade protège votre bâtiment des intempéries et peut intégrer une isolation thermique pour booster les performances énergétiques. Nettoyage haute pression, réparation des fissures, application d'enduits de protection.", items:["Nettoyage haute pression et démoussage","Réparation des fissures et des joints","Application d'enduits de protection","Peinture façade respirante et hydrofuge","Bardage bois, composite ou aluminium","Intégration d'isolation thermique (ITE)"], badge:"💰 Éligible aux primes — jusqu'à 70% remboursé" },
        { id:'roof', label:'Toiture inclinée', img:'/images/toiture-ardoise.jpg', img2:'/images/chantier-ardoise-1.jpg', desc:"Tuiles, ardoises, zinc — Apollon Construction réalise le diagnostic complet et vous conseille sur la meilleure intervention pour votre toiture inclinée.", items:["Inspection et diagnostic de la charpente","Remplacement de tuiles ou ardoises cassées","Réfection complète avec sous-toiture","Isolation des combles perdus ou aménagés","Réparation et remplacement de zinguerie","Traitement anti-mousse et hydrofuge"], badge:"💰 Prime toiture sans audit obligatoire en Wallonie" },
        { id:'flat', label:'Toiture plate', img:'/images/toiture-plate.jpg', img2:'/images/schema-toiture.jpg', desc:"Les toitures plates sont particulièrement sensibles aux infiltrations. Apollon Construction maîtrise toutes les techniques d'étanchéité modernes pour garantir une toiture durable.", items:["Membranes EPDM, bitumineuses ou TPO","Isolation en panneaux PUR ou PIR","Réalisation des relevés et évacuations d'eau","Toiture verte extensive","Garantie d'étanchéité 10 à 20 ans","Intervention d'urgence en cas de fuite"], badge:"💰 Éligible isolation toiture — R ≥ 4 m²K/W" },
        { id:'ite', label:"Isolation ext. (ITE)", img:'/images/ite-chantier.jpg', img2:'/images/schema-isolation.jpg', desc:"L'ITE est la solution la plus efficace pour rénover l'enveloppe d'un bâtiment sans perdre de surface intérieure. Panneaux isolants fixés sur la façade existante, puis enduit de finition.", items:["Pose de panneaux isolants sur la façade","EPS, laine de roche ou liège","Enduit de finition ou bardage de parement","Suppression des ponts thermiques","Compatible avec tous styles architecturaux","Aucune perte de surface habitable"], badge:"💰 Prime façade ITE jusqu'à 75 €/m²" },
      ],
      losses: [
        { pct:'25–30%', title:'Toiture & combles', desc:"La chaleur monte et s'échappe par le toit si non isolé.", green:false },
        { pct:'20–25%', title:'Murs & façades', desc:"Les murs non isolés transmettent le froid directement.", green:false },
        { pct:'10–15%', title:'Fenêtres & portes', desc:"Le simple vitrage laisse passer le froid.", green:false },
        { pct:'7–10%', title:'Planchers & caves', desc:"Les sols non isolés laissent le froid remonter.", green:false },
        { pct:'~20%', title:'Ventilation & ponts', desc:"Les fuites d'air sont souvent sous-estimées.", green:false },
        { pct:'50%', title:'Économies possibles', desc:"Une rénovation complète peut réduire la facture de 30 à 50%.", green:true },
      ],
      layers: [{ n:'01', icon:'🏠', h:'Couverture', p:'Tuiles, ardoises, EPDM ou zinc.' },{ n:'02', icon:'💧', h:'Sous-toiture', p:"Membrane respirante contre l'humidité." },{ n:'03', icon:'🌡️', h:'Isolant thermique', p:'Laine de verre, PUR, PIR. 20–30 cm.' },{ n:'04', icon:'🛡️', h:'Pare-vapeur', p:"Évite la migration vers l'isolant." }],
      real_photos: [
        { src:'/images/chantier-ardoise-1.jpg', label:'Toiture ardoise' },
        { src:'/images/chantier-ardoise-2.jpg', label:'Pose ardoise' },
        { src:'/images/chantier-facade-1.jpg', label:'Façade isolation' },
        { src:'/images/ite-chantier.jpg', label:'ITE en cours' },
      ],
    },
    nl: {
      hero_p: "Gevelbepleistering beschermt uw gebouw tegen weersinvloeden en kan thermische isolatie integreren om de energieprestaties te verbeteren.",
      losses_tag: "Waar gaat de warmte?", losses_h2: "Verdeling van warmteverliezen",
      how_h2: "Hoe werkt een goed geïsoleerd dak?", how_p: "Meerdere lagen die samenwerken voor maximale bescherming.",
      works_tag: "Onze interventies", works_h2: "Welk type werken voor uw project?",
      real_tag: "Onze realisaties", real_h2: "Foto's van echte werven",
      cta_h2: "Klaar om uw gevel of dak te renoveren?", cta_p: "Ons team bezoekt uw werf en bezorgt u een gedetailleerde offerte binnen 48u — gratis en vrijblijvend.",
      tabs: [
        { id:'fac', label:'Gevel & Bepleistering', img:'/images/chantier-facade-1.jpg', img2:'/images/facade-before-after.jpg', desc:"Gevelwerk beschermt uw gebouw tegen weersinvloeden en kan thermische isolatie integreren om de energieprestaties te verbeteren. Hogedrukreiniging, herstel van scheuren, beschermende bepleistering.", items:["Hogedrukreiniging en ontmossing","Herstel van scheuren en voegen","Aanbrengen van beschermende bepleistering","Ademend en waterafstotend schilderwerk","Bekleding in hout, composiet of aluminium","Integratie van thermische isolatie (BUI)"], badge:"💰 In aanmerking voor premies — tot 70% terugbetaald" },
        { id:'roof', label:'Hellend dak', img:'/images/toiture-ardoise.jpg', img2:'/images/chantier-ardoise-1.jpg', desc:"Dakpannen, leien, zink — Apollon Construction voert een volledige diagnose uit en adviseert de beste ingreep voor uw hellend dak.", items:["Volledige inspectie van de dakstructuur","Vervanging van gebroken dakpannen of leien","Volledige renovatie met onderdak","Isolatie van de vliering","Herstel van loodgieterswerk","Schimmelbehandeling en waterafstoting"], badge:"💰 Dakpremie zonder verplichte audit in Wallonië" },
        { id:'flat', label:'Plat dak', img:'/images/toiture-plate.jpg', img2:'/images/schema-toiture.jpg', desc:"Platte daken zijn gevoelig voor waterinsijpeling. Apollon Construction beheerst alle moderne waterdichtingstechnieken voor een duurzaam dak.", items:["EPDM, bitumineuze of TPO membranen","Isolatie met PUR of PIR panelen","Aanleg van opstaande randen en waterafvoer","Extensief groen dak","Waterdichtheidsgarantie 10 tot 20 jaar","Spoedinterventie bij lekkage"], badge:"💰 Dakisolatie in aanmerking — R ≥ 4 m²K/W" },
        { id:'ite', label:"Buitenisolatie (BUI)", img:'/images/ite-chantier.jpg', img2:'/images/schema-isolation.jpg', desc:"BUI is de meest efficiënte oplossing om de schil van een gebouw te renoveren zonder binnenoppervlak te verliezen. Isolatiepanelen op de bestaande gevel, daarna afwerkingsbepleistering.", items:["Plaatsing van isolatiepanelen op de gevel","EPS, steenwol of kurk","Afwerkingsbepleistering of gevelbekleding","Eliminatie van koudebruggen","Compatibel met alle architectuurstijlen","Geen verlies van binnenoppervlak"], badge:"💰 Gevelpremie BUI tot 75 €/m²" },
      ],
      losses: [
        { pct:'25–30%', title:'Dak & zolder', desc:"Warmte stijgt op en ontsnapt via het dak als het niet geïsoleerd is.", green:false },
        { pct:'20–25%', title:'Muren & gevels', desc:"Niet-geïsoleerde muren laten de kou direct naar binnen.", green:false },
        { pct:'10–15%', title:'Ramen & deuren', desc:"Enkelvoudig glas laat kou binnendringen.", green:false },
        { pct:'7–10%', title:'Vloeren & kelders', desc:"Niet-geïsoleerde vloeren laten kou van onderen opstijgen.", green:false },
        { pct:'~20%', title:'Ventilatie & koudebruggen', desc:"Luchtlekken worden vaak onderschat.", green:false },
        { pct:'50%', title:'Mogelijke besparing', desc:"Een complete renovatie kan de factuur met 30 à 50% verminderen.", green:true },
      ],
      layers: [{ n:'01', icon:'🏠', h:'Dakbedekking', p:'Dakpannen, leien, EPDM of zink.' },{ n:'02', icon:'💧', h:'Onderdak', p:'Dampopen membraan tegen vocht.' },{ n:'03', icon:'🌡️', h:'Thermische isolatie', p:'Glaswol, PUR, PIR. 20-30 cm.' },{ n:'04', icon:'🛡️', h:'Dampscherm', p:'Voorkomt vochtmigratie naar isolatie.' }],
      real_photos: [
        { src:'/images/chantier-ardoise-1.jpg', label:'Leien dak' },
        { src:'/images/chantier-ardoise-2.jpg', label:'Plaatsing leien' },
        { src:'/images/chantier-facade-1.jpg', label:'Gevelisolatie' },
        { src:'/images/ite-chantier.jpg', label:'BUI in uitvoering' },
      ],
    },
    en: {
      hero_p: "Facade rendering protects your building from the elements and can integrate thermal insulation to boost energy performance.",
      losses_tag: "Where does heat go?", losses_h2: "Thermal heat loss distribution",
      how_h2: "How does a well-insulated roof work?", how_p: "Several layers working together for maximum protection.",
      works_tag: "Our works", works_h2: "What type of works for your project?",
      real_tag: "Our projects", real_h2: "Real construction site photos",
      cta_h2: "Ready to renovate your facade or roof?", cta_p: "Our team visits your site and provides a detailed quote within 48h — free and without commitment.",
      tabs: [
        { id:'fac', label:'Facade & Rendering', img:'/images/chantier-facade-1.jpg', img2:'/images/facade-before-after.jpg', desc:"Facade rendering protects your building from the elements and can integrate thermal insulation to boost energy performance. High-pressure cleaning, crack repair, application of protective render.", items:["High-pressure cleaning and moss removal","Crack and joint repair","Application of protective render","Breathable water-repellent paint","Timber, composite or aluminium cladding","Integration of external insulation (EWI)"], badge:"💰 Eligible for grants — up to 70% reimbursed" },
        { id:'roof', label:'Pitched roof', img:'/images/toiture-ardoise.jpg', img2:'/images/chantier-ardoise-1.jpg', desc:"Tiles, slates, zinc — Apollon Construction carries out a full diagnosis and advises on the best intervention for your pitched roof.", items:["Full inspection of the roof structure","Replacement of broken tiles or slates","Complete renovation with underlay","Loft insulation","Zinc work repair","Moss treatment and waterproofing"], badge:"💰 Roofing grant without mandatory audit in Wallonia" },
        { id:'flat', label:'Flat roof', img:'/images/toiture-plate.jpg', img2:'/images/schema-toiture.jpg', desc:"Flat roofs are sensitive to water infiltration. Apollon Construction masters all modern waterproofing techniques for a durable roof.", items:["EPDM, bituminous or TPO membranes","PUR or PIR panel insulation","Edge details and drainage works","Extensive green roof","10 to 20-year waterproofing guarantee","Emergency intervention for leaks"], badge:"💰 Eligible roof insulation — R ≥ 4 m²K/W" },
        { id:'ite', label:"External insulation (EWI)", img:'/images/ite-chantier.jpg', img2:'/images/schema-isolation.jpg', desc:"EWI is the most effective solution to renovate a building envelope without losing interior surface area. Insulation panels fixed to the existing facade, then finish render.", items:["Insulation panels fixed to the existing facade","EPS, rock wool or cork","Finish render or cladding","Elimination of thermal bridges","Compatible with all architectural styles","No loss of interior living space"], badge:"💰 EWI facade grant up to €75/m²" },
      ],
      losses: [
        { pct:'25–30%', title:'Roof & loft', desc:"Heat rises and escapes through an uninsulated roof.", green:false },
        { pct:'20–25%', title:'Walls & facades', desc:"Uninsulated walls transmit cold directly inside.", green:false },
        { pct:'10–15%', title:'Windows & doors', desc:"Single glazing lets cold penetrate.", green:false },
        { pct:'7–10%', title:'Floors & basements', desc:"Uninsulated floors let cold rise from below.", green:false },
        { pct:'~20%', title:'Ventilation & bridges', desc:"Air leaks are often underestimated.", green:false },
        { pct:'50%', title:'Possible savings', desc:"A complete renovation can cut the energy bill by 30 to 50%.", green:true },
      ],
      layers: [{ n:'01', icon:'🏠', h:'Roofing', p:'Tiles, slates, EPDM or zinc.' },{ n:'02', icon:'💧', h:'Underlay', p:'Breathable membrane against moisture.' },{ n:'03', icon:'🌡️', h:'Thermal insulation', p:'Glass wool, PUR, PIR. 20–30 cm.' },{ n:'04', icon:'🛡️', h:'Vapour barrier', p:'Prevents vapour migration to insulation.' }],
      real_photos: [
        { src:'/images/chantier-ardoise-1.jpg', label:'Slate roofing' },
        { src:'/images/chantier-ardoise-2.jpg', label:'Slate laying' },
        { src:'/images/chantier-facade-1.jpg', label:'Facade insulation' },
        { src:'/images/ite-chantier.jpg', label:'EWI in progress' },
      ],
    },
  }

  const L = T[locale as keyof typeof T] || T.fr
  const activeTab = L.tabs.find(t => t.id === tab) || L.tabs[0]

  return (
    <Layout>
      <SEO title={t('meta.facade_title')} description={t('meta.facade_desc')} />

      <div className="relative bg-ink overflow-hidden">
        <img src="/images/chantier-facade-2.jpg" alt={t('meta.facade_title')} className="absolute inset-0 w-full h-full object-cover opacity-30" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
        <div className="relative px-[5%] pt-16 pb-12">
          <p className="text-sm text-white/60 mb-3"><Link href="/" className="text-green hover:underline">{locale==='nl'?'Startpagina':locale==='en'?'Home':'Accueil'}</Link> / {t('nav.facade')}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-white mb-4">{t('nav.facade')}</h1>
          <p className="text-white/70 font-light text-lg max-w-xl">{L.hero_p}</p>
        </div>
      </div>

      <section className="py-16 px-[5%] bg-cream-2">
        <p className="flex items-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{L.losses_tag}</p>
        <h2 className="font-serif text-3xl font-normal text-ink mb-10">{L.losses_h2}</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list">
          {L.losses.map(({ pct, title, desc, green }) => (
            <li key={title} className={`rounded-lg p-6 text-center ${green ? 'bg-green/8 border border-green/25' : 'bg-cream border border-cream-3'}`}>
              <div className={`font-serif text-4xl font-normal mb-2 ${green ? 'text-green' : 'text-clay'}`}>{pct}</div>
              <strong className={`block text-sm font-medium mb-1 ${green ? 'text-green' : 'text-ink'}`}>{title}</strong>
              <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-16 px-[5%] bg-green">
        <h2 className="font-serif text-3xl font-normal text-white mb-3">{L.how_h2}</h2>
        <p className="text-white/75 font-light mb-10">{L.how_p}</p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ul className="grid grid-cols-2 gap-5" role="list">
            {L.layers.map(({ n, icon, h, p }) => (
              <li key={n} className="bg-white/10 border border-white/20 rounded-lg p-5 text-center">
                <div className="font-serif text-2xl text-white/25 mb-1">{n}</div>
                <div className="text-2xl mb-2" aria-hidden="true">{icon}</div>
                <h3 className="font-serif text-base text-white mb-1">{h}</h3>
                <p className="text-white/65 text-xs font-light leading-relaxed">{p}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-lg overflow-hidden border border-white/20">
            <img src="/images/schema-toiture.jpg" alt="Schéma couches isolantes toiture" className="w-full h-64 object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] bg-white">
        <p className="flex items-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{L.works_tag}</p>
        <h2 className="font-serif text-3xl font-normal text-ink mb-8">{L.works_h2}</h2>
        <div role="tablist" className="flex gap-2 flex-wrap mb-8">
          {L.tabs.map(({ id, label }) => (
            <button key={id} role="tab" aria-selected={tab===id} onClick={() => setTab(id)}
              className={['px-5 py-2 rounded-full text-sm transition-all border', tab===id ? 'bg-green text-white border-green' : 'bg-cream-2 text-ink-2 border-cream-3 hover:border-green'].join(' ')}>
              {label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-cream-3 bg-cream-3">
              <img src={activeTab.img} alt={activeTab.label} className="w-full h-64 object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
            </div>
            <div className="rounded-lg overflow-hidden border border-cream-3 bg-cream-3">
              <img src={activeTab.img2} alt={activeTab.label + ' schéma'} className="w-full h-48 object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-normal text-ink mb-4">{activeTab.label}</h3>
            <p className="text-muted font-light leading-relaxed mb-5">{activeTab.desc}</p>
            <ul className="space-y-2 mb-5 list-none">
              {activeTab.items.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted font-light">
                  <span className="text-green font-medium flex-shrink-0 mt-0.5">✓</span>{item}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 bg-green/8 border border-green/20 rounded px-3.5 py-2 text-sm text-green font-medium">{activeTab.badge}</div>
          </div>
        </div>
      </section>

      <section className="py-16 px-[5%] bg-cream-2">
        <p className="flex items-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{L.real_tag}</p>
        <h2 className="font-serif text-3xl font-normal text-ink mb-8">{L.real_h2} — Apollon Construction</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {L.real_photos.map(({ src, label }) => (
            <div key={src} className="rounded-lg overflow-hidden border border-cream-3 group bg-cream-3">
              <div className="relative h-48 overflow-hidden">
                <img src={src} alt={label + ' — Apollon Construction Bruxelles'} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-3">
                  <p className="text-white text-xs font-medium">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-[5%] bg-ink text-center">
        <h2 className="font-serif text-3xl font-normal text-white mb-3">{L.cta_h2}</h2>
        <p className="text-white/65 font-light max-w-md mx-auto mb-8">{L.cta_p}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-green-mid transition-colors">{t('nav.cta')}</Link>
          <Link href="/primes" className="border border-white/30 text-white px-8 py-3.5 rounded text-sm font-normal hover:border-white/70 transition-colors">{t('nav.primes')} →</Link>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'fr', ['common'])) },
})

export default FacadePage
