import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import LeadForm from '../components/LeadForm'

const ToiturePage: NextPage = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const C = {
    fr: {
      title: 'Toiture Bruxelles — Réfection, Réparation & Étanchéité | Apollon Construction',
      desc: 'Réfection et réparation de toiture à Bruxelles. Tuiles, ardoises, zinc, toiture plate, étanchéité EPDM. Diagnostic gratuit. Prime toiture sans audit en Wallonie.',
      h1: 'Toiture à Bruxelles : réfection, réparation & étanchéité',
      intro: 'Apollon Construction prend en charge tous vos travaux de toiture à Bruxelles et en Brabant. De la réparation ponctuelle à la réfection complète, nos couvreurs interviennent sur tuiles, ardoises, zinc et toitures plates.',
      p2: 'Chaque chantier commence par un diagnostic complet de votre toiture. On vous remet un rapport détaillé et un devis transparent avant de commencer les travaux.',
      p3: 'En Wallonie, la prime toiture est accessible sans audit énergétique obligatoire — Apollon Construction vous accompagne dans les démarches pour maximiser votre remboursement.',
      points_h: 'Toiture inclinée', points_flat: 'Toiture plate',
      points: ['Inspection et diagnostic complet', 'Remplacement de tuiles ou ardoises', 'Réfection complète avec sous-toiture', 'Isolation des combles (perdus ou aménagés)', 'Zinguerie : gouttières, chéneaux, solins', 'Traitement anti-mousse et hydrofuge'],
      points2: ['Membranes EPDM, bitumineuses ou TPO', 'Isolation en panneaux PUR ou PIR', 'Relevés, évacuations et trop-pleins', 'Toiture verte extensive', 'Garantie étanchéité 10–20 ans', 'Intervention urgence 24–48h'],
      prime_h: '💰 Prime toiture Wallonie',
      prime_text: 'Pas d\'audit obligatoire pour les travaux de toiture. Prime jusqu\'à 70% TVAC selon revenus.',
      bc: 'Accueil',
    },
    nl: {
      title: 'Dak Brussel — Renovatie, Herstel & Waterdichting | Apollon Construction',
      desc: 'Dakrenovatie en herstel in Brussel. Dakpannen, leien, zink, plat dak, EPDM waterdichting. Gratis diagnose. Dakpremie zonder audit in Wallonië.',
      h1: 'Dak in Brussel: renovatie, herstel & waterdichting',
      intro: 'Apollon Construction verzorgt al uw dakwerken in Brussel en Brabant. Van gedeeltelijk herstel tot volledige dakrenovatie, onze dakdekkers werken op dakpannen, leien, zink en platte daken.',
      p2: 'Elk project begint met een volledige diagnose van uw dak. We bezorgen u een gedetailleerd rapport en een transparante offerte voor de start van de werken.',
      p3: 'In Wallonië is de dakpremie toegankelijk zonder verplichte energieaudit — Apollon Construction begeleidt u bij de procedures om uw terugbetaling te maximaliseren.',
      points_h: 'Hellend dak', points_flat: 'Plat dak',
      points: ['Volledige inspectie en diagnose', 'Vervanging van dakpannen of leien', 'Volledige renovatie met onderdak', 'Isolatie van de vliering', 'Loodgieterswerk: goten, dakgoten, windveren', 'Schimmelbehandeling en waterafstoting'],
      points2: ['EPDM, bitumineuze of TPO membranen', 'PUR of PIR isolatiepanelen', 'Opstaande randen, afvoeren en overloopen', 'Extensief groen dak', 'Waterdichtheidsgarantie 10–20 jaar', 'Spoedinterventie 24–48u'],
      prime_h: '💰 Dakpremie Wallonië',
      prime_text: 'Geen verplichte audit voor dakwerken. Premie tot 70% TVAC naargelang het inkomen.',
      bc: 'Startpagina',
    },
    en: {
      title: 'Roofing Brussels — Renovation, Repair & Waterproofing | Apollon Construction',
      desc: 'Roof renovation and repair in Brussels. Tiles, slates, zinc, flat roof, EPDM waterproofing. Free diagnosis. Roofing grant without audit in Wallonia.',
      h1: 'Roofing in Brussels: renovation, repair & waterproofing',
      intro: 'Apollon Construction handles all your roofing works in Brussels and Brabant. From partial repair to complete renovation, our roofers work on tiles, slates, zinc and flat roofs.',
      p2: 'Every project starts with a full diagnosis of your roof. We provide a detailed report and a transparent quote before starting the works.',
      p3: 'In Wallonia, the roofing grant is accessible without a mandatory energy audit — Apollon Construction guides you through the procedures to maximise your reimbursement.',
      points_h: 'Pitched roof', points_flat: 'Flat roof',
      points: ['Full inspection and diagnosis', 'Tile or slate replacement', 'Complete renovation with underlay', 'Loft insulation (lost or converted)', 'Zinc work: gutters, flashings', 'Moss treatment and waterproofing'],
      points2: ['EPDM, bituminous or TPO membranes', 'PUR or PIR insulation panels', 'Edge details, drainage and overflows', 'Extensive green roof', 'Waterproofing guarantee 10–20 years', 'Emergency intervention 24–48h'],
      prime_h: '💰 Roofing grant — Wallonia',
      prime_text: 'No mandatory audit for roofing works. Grant up to 70% incl. VAT depending on income.',
      bc: 'Home',
    },
  }
  const c = C[locale as keyof typeof C] || C.fr
  const svc = locale === 'nl' ? 'Hellend dak' : locale === 'en' ? 'Pitched roof' : 'Toiture inclinée'

  return (
    <Layout>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content={c.desc} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Service',
          name: 'Réfection et réparation de toiture', provider: { '@type': 'LocalBusiness', name: 'Apollon Construction' },
          areaServed: 'Bruxelles', description: c.desc,
        })}} />
      </Head>

      {/* HERO above the fold */}
      <section className="bg-ink relative overflow-hidden">
        <img src="/images/toiture-ardoise.jpg" alt="Toiture ardoise Bruxelles — Apollon Construction" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative px-[5%] py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-green font-medium tracking-widest uppercase mb-4">
              <Link href="/" className="text-white/50 hover:text-white">{c.bc}</Link> / {locale === 'nl' ? 'Dak' : 'Toiture'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-6">{c.h1}</h1>
            <p className="text-white/75 font-light text-lg leading-relaxed mb-6">{c.intro}</p>
            <div className="flex flex-wrap gap-3">
              {['Diagnostic gratuit ✓', 'Batibouw+ ✓', '48h ✓'].map(b => (
                <span key={b} className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full font-light">{b}</span>
              ))}
            </div>
          </div>
          <div><LeadForm service={svc} /></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-[5%] bg-white">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-muted font-light leading-relaxed mb-6">{c.p2}</p>
            <p className="text-muted font-light leading-relaxed mb-8">{c.p3}</p>
            <h3 className="font-serif text-xl font-normal text-ink mb-4">{c.points_h}</h3>
            <ul className="space-y-2.5 mb-8">
              {c.points.map(p => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted font-light">
                  <span className="text-green font-semibold flex-shrink-0">✓</span>{p}
                </li>
              ))}
            </ul>
            <h3 className="font-serif text-xl font-normal text-ink mb-4">{c.points_flat}</h3>
            <ul className="space-y-2.5">
              {c.points2.map(p => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted font-light">
                  <span className="text-green font-semibold flex-shrink-0">✓</span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-cream-3">
              <img src="/images/toiture-ardoise.jpg" alt="Toiture ardoise rénovée Apollon Construction" className="w-full h-56 object-cover" loading="lazy" loading="lazy" />
            </div>
            <div className="rounded-lg overflow-hidden border border-cream-3">
              <img src="/images/toiture-plate.jpg" alt="Toiture plate étanchéité Bruxelles" className="w-full h-48 object-cover" loading="lazy" loading="lazy" />
            </div>
            <div className="bg-green/8 border border-green/20 rounded-lg p-5">
              <p className="font-medium text-green mb-2">{c.prime_h}</p>
              <p className="text-sm text-muted font-light">{c.prime_text}</p>
              <Link href="/primes" className="inline-block mt-3 text-sm text-green font-medium hover:underline">
                {locale === 'nl' ? 'Alle premies bekijken →' : locale === 'en' ? 'View all grants →' : 'Voir toutes les primes →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[5%] bg-white">
        <h2 className="font-serif text-3xl font-normal text-ink mb-8">
          {locale==='nl'?'Veelgestelde vragen':locale==='en'?'Frequently asked questions':'Questions fréquentes'}
        </h2>
        <div className="space-y-4 max-w-2xl">
          {[
            { q: locale==='nl'?'Wat kost een dakrenovatie in Brussel?':locale==='en'?'How much does a roof renovation cost in Brussels?':'Combien coûte une réfection de toiture à Bruxelles ?',
              a: locale==='nl'?'De prijs varieert sterk: gedeeltelijk herstel vanaf 500€, volledige renovatie tussen 8.000 en 25.000€ afhankelijk van het daktype en de oppervlakte. Gratis diagnose ter plaatse.':locale==='en'?'Prices vary widely: partial repair from €500, full renovation between €8,000 and €25,000 depending on roof type and surface area. Free on-site diagnosis.':'Les prix varient : réparation partielle à partir de 500€, réfection complète entre 8.000 et 25.000€ selon le type et la surface. Diagnostic gratuit sur site.' },
            { q: locale==='nl'?'Is een energieaudit verplicht voor de dakpremie in Wallonië?':locale==='en'?'Is an energy audit required for the roofing grant in Wallonia?':'Faut-il un audit énergétique pour la prime toiture en Wallonie ?',
              a: locale==='nl'?'Nee. Depuis le 14 februari 2025 is de energieaudit niet meer verplicht voor dakwerken in Wallonië. U kunt direct een aanvraag indienen.':locale==='en'?'No. Since 14 February 2025, the energy audit is no longer required for roofing works in Wallonia. You can apply directly.':'Non. Depuis le 14 février 2025, l'audit énergétique n'est plus obligatoire pour les travaux de toiture en Wallonie. Vous pouvez déposer la demande directement.' },
            { q: locale==='nl'?'Hoe lang duurt een volledige dakrenovatie?':locale==='en'?'How long does a full roof renovation take?':'Combien de temps dure une réfection complète ?',
              a: locale==='nl'?'Tussen 3 en 10 werkdagen voor een doorsnee woning. We werken snel en netjes, met minimale hinder.':locale==='en'?'Between 3 and 10 working days for an average house. We work quickly and cleanly, with minimal disruption.':'Entre 3 et 10 jours ouvrables pour une maison moyenne. On travaille vite et proprement, avec un minimum de perturbations.' },
          ].map(({ q, a }) => (
            <details key={q} className="bg-cream-2 border border-cream-3 rounded-lg">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-ink text-sm list-none">
                {q}
                <span className="text-green font-light text-lg ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="px-5 pb-5 text-muted font-light text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 px-[5%] bg-cream-2">
        <div className="max-w-xl mx-auto">
          <LeadForm service={svc} />
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'fr', ['common'])) },
})

export default ToiturePage
