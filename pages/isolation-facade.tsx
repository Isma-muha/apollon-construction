import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import LeadForm from '../components/LeadForm'

const IsolationFacadePage: NextPage = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const C = {
    fr: {
      title: 'Isolation Façade Bruxelles — ITE & Ravalement | Apollon Construction',
      desc: 'Isolation thermique extérieure (ITE) et ravalement de façade à Bruxelles. Panneaux EPS/laine de roche, enduit de finition. Devis gratuit sous 48h. Primes jusqu\'à 75€/m².',
      h1: 'Isolation de façade & ravalement à Bruxelles',
      intro: 'L\'isolation thermique par l\'extérieur (ITE) est la solution la plus efficace pour rénover votre bâtiment sans perdre de surface habitable. Apollon Construction intervient sur tous types de façades à Bruxelles et en Brabant.',
      p2: 'Nos équipes posent des panneaux isolants (EPS, laine de roche ou liège) directement sur votre façade existante, puis appliquent un enduit de finition ou un bardage. Résultat : zéro pont thermique, aucune perte de surface intérieure.',
      p3: 'Vous bénéficiez de primes régionales : jusqu\'à 75€/m² en Wallonie et en Flandre. Apollon Construction vous aide dans les démarches administratives.',
      points: ['Diagnostic gratuit sur site', 'Panneaux EPS, laine de roche ou liège certifiés', 'Enduit de finition ou bardage bois/composite', 'Suppression totale des ponts thermiques', 'Primes jusqu\'à 75€/m²', 'Garantie décennale'],
      prime_h: '💰 Primes disponibles',
      prime_wal: 'Wallonie : jusqu\'à 75€/m² (Prime Habitation 2025)',
      prime_fla: 'Flandre : MijnVerbouwPremie jusqu\'à 35%',
      prime_bru: 'Bruxelles : RENOLUTION (factures 2024)',
      bc: 'Accueil',
    },
    nl: {
      title: 'Gevelisolatie Brussel — BUI & Bepleistering | Apollon Construction',
      desc: 'Buitenmuurisolatie (BUI) en gevelbepleistering in Brussel. EPS/steenwol panelen, afwerkingsbepleistering. Gratis offerte binnen 48u. Premies tot 75€/m².',
      h1: 'Gevelisolatie & bepleistering in Brussel',
      intro: 'Buitenmuurisolatie (BUI) is de meest efficiënte oplossing om uw gebouw te renoveren zonder binnenoppervlak te verliezen. Apollon Construction werkt op alle types gevels in Brussel en Brabant.',
      p2: 'Onze teams plaatsen isolatiepanelen (EPS, steenwol of kurk) op uw bestaande gevel, daarna een afwerkingsbepleistering of gevelbekleding. Resultaat: geen koudebruggen, geen verlies van binnenruimte.',
      p3: 'U profiteert van regionale premies: tot 75€/m² in Wallonië en Vlaanderen. Apollon Construction helpt u bij de administratieve procedures.',
      points: ['Gratis diagnose ter plaatse', 'Gecertificeerde EPS, steenwol of kurk panelen', 'Afwerkingsbepleistering of hout/composiet bekleding', 'Volledige eliminatie van koudebruggen', 'Premies tot 75€/m²', 'Tienjarige garantie'],
      prime_h: '💰 Beschikbare premies',
      prime_wal: 'Wallonië: tot 75€/m² (Prime Habitation 2025)',
      prime_fla: 'Vlaanderen: MijnVerbouwPremie tot 35%',
      prime_bru: 'Brussel: RENOLUTION (facturen 2024)',
      bc: 'Startpagina',
    },
    en: {
      title: 'Facade Insulation Brussels — EWI & Rendering | Apollon Construction',
      desc: 'External wall insulation (EWI) and facade rendering in Brussels. EPS/rock wool panels, finish render. Free quote within 48h. Grants up to €75/m².',
      h1: 'Facade insulation & rendering in Brussels',
      intro: 'External wall insulation (EWI) is the most effective solution to renovate your building without losing interior floor space. Apollon Construction works on all types of facades in Brussels and Brabant.',
      p2: 'Our teams fix insulation panels (EPS, rock wool or cork) directly to your existing facade, then apply a finish render or cladding. Result: zero thermal bridges, no loss of interior space.',
      p3: 'You benefit from regional grants: up to €75/m² in Wallonia and Flanders. Apollon Construction helps you with the administrative procedures.',
      points: ['Free on-site diagnosis', 'Certified EPS, rock wool or cork panels', 'Finish render or timber/composite cladding', 'Complete elimination of thermal bridges', 'Grants up to €75/m²', 'Decennial guarantee'],
      prime_h: '💰 Available grants',
      prime_wal: 'Wallonia: up to €75/m² (Prime Habitation 2025)',
      prime_fla: 'Flanders: MijnVerbouwPremie up to 35%',
      prime_bru: 'Brussels: RENOLUTION (2024 invoices)',
      bc: 'Home',
    },
  }
  const c = C[locale as keyof typeof C] || C.fr

  return (
    <Layout>
      <Head>
        <title>{c.title}</title>
        <meta name="description" content={c.desc} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Service',
          name: 'Isolation thermique extérieure (ITE)', provider: { '@type': 'LocalBusiness', name: 'Apollon Construction' },
          areaServed: 'Bruxelles', description: c.desc,
        })}} />
      </Head>

      {/* HERO — above the fold CTA */}
      <section className="bg-ink relative overflow-hidden">
        <img src="/images/ite-chantier.jpg" alt="Isolation façade Bruxelles — Apollon Construction" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative px-[5%] py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-green font-medium tracking-widest uppercase mb-4">
              <Link href="/" className="text-white/50 hover:text-white">{c.bc}</Link> / ITE
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-6">{c.h1}</h1>
            <p className="text-white/75 font-light text-lg leading-relaxed mb-6">{c.intro}</p>
            <div className="flex flex-wrap gap-3">
              {['RGIE ✓', 'Batibouw+ ✓', 'Devis 48h ✓'].map(b => (
                <span key={b} className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full font-light">{b}</span>
              ))}
            </div>
          </div>
          {/* CTA above the fold */}
          <div>
            <LeadForm service={locale === 'nl' ? 'Buitenmuurisolatie (BUI)' : locale === 'en' ? 'External thermal insulation (EWI)' : 'Isolation thermique extérieure (ITE)'} />
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-16 px-[5%] bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-muted font-light leading-relaxed mb-5">{c.p2}</p>
            <p className="text-muted font-light leading-relaxed mb-8">{c.p3}</p>
            <ul className="space-y-3">
              {c.points.map(p => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted font-light">
                  <span className="text-green font-semibold flex-shrink-0 mt-0.5">✓</span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-cream-3 bg-cream-3">
              <img src="/images/chantier-facade-1.jpg" alt="Isolation façade chantier Apollon Construction Bruxelles" className=" loading="lazy"w-full h-64 object-cover" />
            </div>
            {/* PRIMES */}
            <div className="bg-green/8 border border-green/20 rounded-lg p-5">
              <p className="font-medium text-green mb-3">{c.prime_h}</p>
              {[c.prime_wal, c.prime_fla, c.prime_bru].map(p => (
                <p key={p} className="text-sm text-muted font-light mb-1.5">→ {p}</p>
              ))}
              <Link href="/primes" className="inline-block mt-3 text-sm text-green font-medium hover:underline">
                {locale === 'nl' ? 'Alle premies bekijken →' : locale === 'en' ? 'View all grants →' : 'Voir toutes les primes →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="py-12 px-[5%] bg-cream-2">
        <div className="grid grid-cols-3 gap-4">
          {[
            { src: '/images/ite-chantier.jpg', alt: 'Pose panneaux isolants façade Bruxelles' },
            { src: '/images/isolation-exterieur.jpg', alt: 'Isolation extérieure en cours Apollon Construction' },
            { src: '/images/chantier-facade-2.jpg', alt: 'Ravalement façade immeuble Bruxelles' },
          ].map(({ src, alt }) => (
            <div key={src} className="rounded-lg overflow-hidden border border-cream-3 bg-cream-3 h-48">
              <img src={src} alt={alt} className=" loading="lazy"w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — améliore le Quality Score Google Ads */}
      <section className="py-16 px-[5%] bg-cream-2">
        <h2 className="font-serif text-3xl font-normal text-ink mb-8">
          {locale==='nl'?'Veelgestelde vragen':locale==='en'?'Frequently asked questions':'Questions fréquentes'}
        </h2>
        <div className="space-y-4 max-w-2xl">
          {[
            { q: locale==='nl'?'Wat kost buitenmuurisolatie in Brussel?':locale==='en'?'How much does external wall insulation cost in Brussels?':'Combien coûte une isolation de façade à Bruxelles ?',
              a: locale==='nl'?'De prijs varieert tussen 80 en 150€/m² afhankelijk van het isolatietype (EPS, steenwol) en de afwerking. Vraag een gratis offerte aan voor een exacte schatting.':locale==='en'?'The price ranges from €80 to €150/m² depending on the insulation type (EPS, rock wool) and finish. Request a free quote for an exact estimate.':'Le prix varie entre 80 et 150€/m² selon le type d'isolation (EPS, laine de roche) et la finition. Demandez un devis gratuit pour une estimation précise.' },
            { q: locale==='nl'?'Hoelang duurt de uitvoering?':locale==='en'?'How long does the work take?':'Combien de temps durent les travaux ?',
              a: locale==='nl'?'Voor een gemiddelde woning duurt BUI 5 tot 10 werkdagen. We werken snel en houden uw dagelijks leven zo weinig mogelijk in de war.':locale==='en'?'For an average house, EWI takes 5 to 10 working days. We work efficiently and minimise disruption to your daily life.':'Pour une maison moyenne, une ITE prend 5 à 10 jours ouvrables. On travaille efficacement en minimisant les perturbations.' },
            { q: locale==='nl'?'Welke premies zijn beschikbaar voor gevelisolatie?':locale==='en'?'What grants are available for facade insulation?':'Quelles sont les primes disponibles pour l'isolation de façade ?',
              a: locale==='nl'?'In Wallonië tot 75€/m² via Prime Habitation. In Vlaanderen MijnVerbouwPremie tot 35%. Brussel: RENOLUTION opgeschort voor 2025-2026. Wij begeleiden u bij de aanvraag.':locale==='en'?'In Wallonia up to €75/m² via Prime Habitation. In Flanders MijnVerbouwPremie up to 35%. Brussels: RENOLUTION suspended for 2025-2026. We guide you through the application.':'En Wallonie jusqu'à 75€/m² via Prime Habitation. En Flandre MijnVerbouwPremie jusqu'à 35%. Bruxelles : RENOLUTION suspendue 2025-2026. On vous accompagne dans la démarche.' },
          ].map(({ q, a }) => (
            <details key={q} className="bg-white border border-cream-3 rounded-lg group">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-ink text-sm list-none">
                {q}
                <span className="text-green font-light text-lg ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="px-5 pb-5 text-muted font-light text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FORM BAS DE PAGE */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-xl mx-auto">
          <LeadForm service={locale === 'nl' ? 'Buitenmuurisolatie (BUI)' : locale === 'en' ? 'External thermal insulation (EWI)' : 'Isolation thermique extérieure (ITE)'} />
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'fr', ['common'])) },
})

export default IsolationFacadePage
