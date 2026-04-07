import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ZONES = ['Bruxelles','Brabant Flamand','Brabant Wallon','Hal-Vilvorde','Louvain / Leuven','Wavre','Nivelles',"Braine-l'Alleud",'Waterloo','Ixelles','Uccle','Etterbeek','Auderghem','Forest','Saint-Gilles','Anderlecht','Schaerbeek','Molenbeek']

const Home: NextPage = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const services = [
    { icon: '🏗️', num: '01', title: t('services.facade_title'), desc: t('services.facade_desc') },
    { icon: '🏠', num: '02', title: t('services.roof_title'), desc: t('services.roof_desc') },
    { icon: '🔨', num: '03', title: t('services.reno_title'), desc: t('services.reno_desc') },
    { icon: '⚡', num: '04', title: t('services.elec_title'), desc: t('services.elec_desc') },
    { icon: '✨', num: '05', title: t('services.finish_title'), desc: t('services.finish_desc') },
    { icon: '📋', num: '06', title: t('services.coord_title'), desc: t('services.coord_desc') },
  ]

  const portfolio = [
    { src: '/images/chantier-facade-1.jpg', tag: locale==='nl'?'Gevel':locale==='en'?'Facade':'Façade', title: locale==='nl'?'Thermische isolatie en gevelbepleistering':locale==='en'?'Thermal insulation and facade rendering':'Isolation thermique et ravalement façade', span: 'col-span-2' },
    { src: '/images/chantier-ardoise-1.jpg', tag: locale==='nl'?'Dak':locale==='en'?'Roofing':'Toiture', title: locale==='nl'?'Volledige dakrenovatie in leien':locale==='en'?'Full slate roof renovation':'Réfection toiture ardoises naturelles', span: '' },
    { src: '/images/chantier-ardoise-2.jpg', tag: locale==='nl'?'Dak':locale==='en'?'Roofing':'Toiture', title: locale==='nl'?'Plaatsing leien in uitvoering':locale==='en'?'Slate laying in progress':'Chantier pose ardoises en cours', span: '' },
    { src: '/images/chantier-facade-2.jpg', tag: locale==='nl'?'Gevel':locale==='en'?'Facade':'Façade', title: locale==='nl'?'Gevelbepleistering appartementsgebouw':locale==='en'?'Apartment building facade rendering':'Ravalement et enduit façade immeuble', span: '' },
    { src: '/images/ite-chantier.jpg', tag: locale==='nl'?'BUI':locale==='en'?'EWI':'ITE', title: locale==='nl'?'Volledige buitenmuurisolatie':locale==='en'?'Complete external wall insulation':'Isolation par l\'extérieur complète', span: 'col-span-2' },
  ]

  const partners_title = locale==='nl'?'Onze certificeringen':locale==='en'?'Our certifications':'Nos certifications'
  const partners_sub = locale==='nl'?'Erkend en gecertificeerd':locale==='en'?'Recognised and certified':'Reconnus et certifiés'
  const batibouw_desc = locale==='nl'?'Apollon Construction is officieel partner van Batibouw+, de referentiebeurs voor bouw en renovatie in België. Een keurmerk van kwaliteit in de sector.':locale==='en'?'Apollon Construction is an official Batibouw+ partner, Belgium\'s reference trade fair for construction and renovation. A recognised mark of quality in the sector.':'Apollon Construction est partenaire officiel Batibouw+, le salon de référence de la construction et rénovation en Belgique. Gage de qualité reconnu dans le secteur.'
  const trustup_desc = locale==='nl'?'Gecertificeerd aannemer op TrustUp, het Belgische referentieplatform om betrouwbare aannemers te vinden. Onze geverifieerde klantbeoordelingen getuigen van onze kwaliteit.':locale==='en'?'Certified contractor on TrustUp, Belgium\'s reference platform for finding trusted contractors. Our verified customer reviews demonstrate the quality of our work.':'Entrepreneur certifié sur TrustUp, la plateforme belge de référence pour trouver des entrepreneurs de confiance. Nos avis clients vérifiés témoignent de la qualité de nos interventions.'
  const official = locale==='nl'?'✓ Officiële partner 2025':locale==='en'?'✓ Official partner 2025':'✓ Partenaire officiel 2025'
  const verified = locale==='nl'?'✓ Geverifieerde klantbeoordelingen':locale==='en'?'✓ Verified customer reviews':'✓ Avis clients vérifiés'

  return (
    <Layout>
      <SEO title={t('meta.home_title')} description={t('meta.home_desc')} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img src="/images/facade-before-after.jpg" alt={t('meta.home_title')} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-transparent" />
        <div className="relative z-10 px-[5%] max-w-xl py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium text-white mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green" aria-hidden="true" />{t('hero.tag')}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-normal leading-tight text-white mb-6">
            {t('hero.h1_line1')}<br />
            &amp; <em className="text-green not-italic">{t('hero.h1_line2').replace('& ','').replace('& ','')}</em><br />
            {t('hero.h1_line3')}
          </h1>
          <p className="text-white/75 font-light text-lg leading-relaxed max-w-md mb-10">{t('hero.desc')}</p>
          <div className="flex gap-3 flex-wrap mb-10">
            <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-green-mid transition-colors">{t('hero.btn_primary')}</Link>
            <Link href="#services" className="border border-white/30 text-white px-8 py-3.5 rounded text-sm font-normal hover:border-white/70 transition-colors">{t('hero.btn_secondary')}</Link>
          </div>
          <div className="flex gap-6 flex-wrap">
            {[t('hero.badge_rgie'), t('hero.badge_rc'), t('hero.badge_48h')].map(b => (
              <div key={b} className="flex items-center gap-2 text-sm text-white/80 font-light">
                <span className="w-2 h-2 rounded-full bg-green" aria-hidden="true" />{b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-green py-12 px-[5%]">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{ num:'150+', label:t('stats.projects') },{ num:'5+', label:t('stats.experience') },{ num:'48h', label:t('stats.quote') },{ num:'4.8★', label:t('stats.rating') }].map(({ num, label }) => (
            <div key={label} className="text-center">
              <dt className="font-serif text-4xl font-normal text-white leading-tight mb-1">{num}</dt>
              <dd className="text-xs text-white/70 tracking-wide font-light">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* PARTENAIRES BADGES */}
      <section className="bg-cream py-6 px-[5%] border-b border-cream-3">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <p className="text-xs font-medium text-muted tracking-widest uppercase">{locale==='nl'?'Partners & certificeringen':locale==='en'?'Partners & certifications':'Partenaires & certifications'}</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <img src="/batibouw.svg" alt="Batibouw+ Partenaire officiel" style={{ height:'40px', width:'auto' }} />
            <img src="/trustup.svg" alt="TrustUp Entrepreneur certifié" style={{ height:'40px', width:'auto' }} />
            <div className="flex items-center gap-2 bg-white border border-cream-3 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-lg">⚡</span>
              <div><p className="text-xs font-bold text-ink">RGIE</p><p className="text-[10px] text-muted font-light">{locale==='nl'?'Gecertificeerd':locale==='en'?'Certified':'Certifié'}</p></div>
            </div>
            <div className="flex items-center gap-2 bg-white border border-cream-3 rounded-lg px-4 py-2 shadow-sm">
              <span className="text-lg">🛡️</span>
              <div><p className="text-xs font-bold text-ink">{locale==='nl'?'BA Verzekering':locale==='en'?'Professional liability':'RC Pro'}</p><p className="text-[10px] text-muted font-light">{locale==='nl'?'Verzekerd':locale==='en'?'Insured':'Assuré'}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-[5%] bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{t('services.tag')}</p>
            <h2 className="font-serif text-4xl font-normal text-ink">{t('services.h2')}</h2>
          </div>
          <p className="text-muted font-light leading-relaxed">{t('services.intro')}</p>
        </div>
        <ul className="grid md:grid-cols-3 gap-6" role="list">
          {services.map(({ icon, num, title, desc }) => (
            <li key={num} className="bg-cream rounded-lg p-9 border border-cream-3 hover:border-green-light hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-11 h-11 rounded-lg bg-cream-2 border border-cream-3 flex items-center justify-center text-xl mb-5" aria-hidden="true">{icon}</div>
              <span className="text-[11px] text-clay tracking-widest font-medium uppercase block mb-3">{num}</span>
              <h3 className="font-serif text-xl font-normal text-ink mb-3">{title}</h3>
              <p className="text-muted text-sm font-light leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20 px-[5%] bg-cream-2">
        <p className="flex items-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{t('portfolio.tag')}</p>
        <h2 className="font-serif text-4xl font-normal text-ink mb-10">{t('portfolio.h2')}</h2>
        <ul className="grid grid-cols-3 gap-4" role="list">
          {portfolio.map(({ src, tag, title, span }) => (
            <li key={src} className={`relative rounded-lg overflow-hidden group ${span}`}>
              <div className="relative h-56 overflow-hidden bg-cream-3">
                <img src={src} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="block text-[10px] tracking-widest uppercase text-white/65 mb-1">{tag}</span>
                  <p className="font-serif text-sm text-white">{title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* PAGE CARDS */}
      <section className="bg-white py-12 px-[5%]">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { href:'/facade-toiture', icon:'🏗️', title:t('pages_nav.facade_title'), desc:t('pages_nav.facade_desc') },
            { href:'/primes', icon:'💰', title:t('pages_nav.primes_title'), desc:t('pages_nav.primes_desc') },
          ].map(({ href, icon, title, desc }) => (
            <Link key={href} href={href} className="flex items-center gap-5 bg-cream border border-cream-3 rounded-xl p-7 hover:border-green hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-14 h-14 rounded-lg bg-green/10 flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">{icon}</div>
              <div className="flex-1"><h3 className="font-serif text-xl font-normal text-ink mb-1">{title}</h3><p className="text-muted text-sm font-light leading-relaxed">{desc}</p></div>
              <span className="text-green text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BATIBOUW + TRUSTUP SECTION */}
      <section className="py-16 px-[5%] bg-cream-2">
        <div className="text-center mb-10">
          <p className="flex items-center justify-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{partners_title}<span className="w-6 h-px bg-clay" aria-hidden="true" /></p>
          <h2 className="font-serif text-3xl font-normal text-ink">{partners_sub}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white border-2 border-green/20 rounded-xl p-8 text-center">
            <img src="/batibouw.svg" alt="Batibouw+" style={{ height:'48px', width:'auto', margin:'0 auto 1rem' }} />
            <h3 className="font-serif text-xl font-normal text-ink mb-3">{locale==='nl'?'Officiële partner Batibouw+':locale==='en'?'Official Batibouw+ partner':'Partenaire Batibouw+'}</h3>
            <p className="text-muted text-sm font-light leading-relaxed">{batibouw_desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs text-green font-medium">{official}</div>
          </div>
          <div className="bg-white border-2 border-yellow-400/30 rounded-xl p-8 text-center">
            <img src="/trustup.svg" alt="TrustUp Pro" style={{ height:'48px', width:'auto', margin:'0 auto 1rem' }} />
            <h3 className="font-serif text-xl font-normal text-ink mb-3">{locale==='nl'?'Gecertificeerd TrustUp Pro':locale==='en'?'TrustUp Pro certified':'Certifié TrustUp Pro'}</h3>
            <p className="text-muted text-sm font-light leading-relaxed">{trustup_desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs text-green font-medium">{verified}</div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="bg-white py-8 px-[5%]">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="text-sm font-medium text-ink-2 whitespace-nowrap">{t('zones.label')}</span>
          <ul className="flex flex-wrap gap-2 list-none" role="list">
            {ZONES.map(z => <li key={z}><span className="inline-block bg-cream-2 border border-cream-3 rounded-full px-3.5 py-1 text-xs text-muted font-light">{z}</span></li>)}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-[5%] bg-cream-2">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{t('contact.tag')}</p>
            <h2 className="font-serif text-4xl font-normal text-ink mb-6">{t('contact.h2')}</h2>
            <p className="text-muted font-light leading-relaxed mb-8">{t('contact.desc')}</p>
            <address className="not-italic space-y-4 mb-8">
              {[
                { icon:'📍', label:t('contact.zone_label'), value:t('contact.zone_value') },
                { icon:'📞', label:locale==='nl'?'Telefoon (FR)':locale==='en'?'Phone (FR)':'Téléphone (FR)', value:'0486 27 88 52', href:'tel:+32486278852' },
                { icon:'📞', label:locale==='nl'?'Telefoon (NL)':locale==='en'?'Phone (NL)':'Téléphone (NL)', value:'0499 89 60 86', href:'tel:+32499896086' },
                { icon:'✉', label:'Email', value:'info@apollonconstruction.be', href:'mailto:info@apollonconstruction.be' },
                { icon:'⏰', label:t('contact.hours_label'), value:t('contact.hours_value') },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white border border-cream-3 rounded-lg flex items-center justify-center text-sm flex-shrink-0" aria-hidden="true">{icon}</div>
                  <div className="text-sm"><strong className="block font-medium text-ink mb-0.5">{label}</strong>{href ? <a href={href} className="text-green hover:underline font-light">{value}</a> : <span className="text-muted font-light">{value}</span>}</div>
                </div>
              ))}
            </address>
            <Link href="/contact" className="inline-block bg-green text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-green-mid transition-colors">{t('contact.email_btn')}</Link>
          </div>
          <div className="bg-ink rounded-xl p-10 text-white text-center">
            <p className="font-serif text-3xl font-normal mb-4">{t('hero.badge_48h')}</p>
            <p className="text-white/65 font-light mb-8">{t('contact.desc')}</p>
            <Link href="/contact" className="block bg-green text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-green-mid transition-colors">{t('nav.cta')} →</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'fr', ['common'])) },
})

export default Home
