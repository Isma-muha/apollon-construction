import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ZONES = ['Bruxelles-Ville','Ixelles','Uccle','Etterbeek','Auderghem','Woluwe-Saint-Lambert','Woluwe-Saint-Pierre','Forest','Molenbeek','Saint-Gilles','Anderlecht','Schaerbeek','Laeken','Jette','Dilbeek','Brabant Wallon','Brabant Flamand']

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
  const trustup_desc = locale==='nl'?'Gecertificeerd aannemer op TrustUp, het Belgische referentieplatform om betrouwbare aannemers te vinden. Onze geverifieerde klantbeoordelingen getuigen van onze kwaliteit.':locale==='en'?'Verified contractor on TrustUp: financial solidity, tax and social situation checked by the platform.':'Entrepreneur vérifié sur TrustUp : solidité financière, situation fiscale et sociale contrôlées par la plateforme.'
  const official = locale==='nl'?'✓ Officiële partner 2025':locale==='en'?'✓ Official partner 2025':'✓ Partenaire officiel'
  const verified = locale==='nl'?'✓ Geverifieerd bedrijf':locale==='en'?'✓ Verified company':'✓ Entreprise vérifiée'

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
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[{ num:'48h', label:locale==='nl'?'Offerte termijn':locale==='en'?'Quote turnaround':'Délai de devis' },{ num:'0€', label:locale==='nl'?'Offerte & verplaatsing':locale==='en'?'Quote & visit':'Devis & déplacement' },{ num:'100%', label:locale==='nl'?'Eigen team — geen onderaanneming':locale==='en'?'Own team — no hidden subcontracting':'Équipe propre — pas de sous-traitance cachée' }].map(({ num, label }) => (
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


      {/* NOTRE MÉTHODE */}
      <section className="py-20 px-[5%] bg-cream-2">
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{locale==='nl'?'Onze methode':locale==='en'?'Our method':'Notre méthode'}<span className="w-6 h-px bg-clay" aria-hidden="true" /></p>
          <h2 className="font-serif text-4xl font-normal text-ink">{locale==='nl'?'Van eerste contact tot oplevering':locale==='en'?'From first call to project handover':'Du premier appel à la réception des travaux'}</h2>
        </div>
        <ul className="grid md:grid-cols-4 gap-6" role="list">
          {[
            { num:'01', icon:'📞', title:locale==='nl'?'Gratis bezoek':locale==='en'?'Free site visit':'Visite gratuite', desc:locale==='nl'?'We komen ter plaatse om de werf te evalueren, de maten te nemen en uw behoeften te begrijpen.':locale==='en'?'We visit your site to assess the works, take measurements and understand your needs.':'On se déplace chez vous pour évaluer le chantier, prendre les mesures et comprendre vos besoins.' },
            { num:'02', icon:'📋', title:locale==='nl'?'Gedetailleerde offerte binnen 48u':locale==='en'?'Detailed quote within 48h':'Devis détaillé sous 48h', desc:locale==='nl'?'Een duidelijke offerte, post per post, zonder verborgen kosten. U weet precies wat u betaalt.':locale==='en'?'A clear quote, line by line, no hidden costs. You know exactly what you pay.':'Un devis clair, poste par poste, sans frais cachés. Vous savez exactement ce que vous payez.' },
            { num:'03', icon:'🔨', title:locale==='nl'?'Verzorgde uitvoering':locale==='en'?'Quality execution':'Exécution soignée', desc:locale==='nl'?'Ons eigen team voert de werken uit. Eén aanspreekpunt houdt u op de hoogte bij elke stap.':locale==='en'?'Our own team carries out the works. One contact keeps you informed at every step.':'Notre équipe propre réalise les travaux. Un interlocuteur unique vous tient informé à chaque étape.' },
            { num:'04', icon:'✅', title:locale==='nl'?'Oplevering & garantie':locale==='en'?'Handover & guarantee':'Réception & garantie', desc:locale==='nl'?'Gezamenlijke eindkeuring. Werf opgeruimd, tienjarige garantie, reactieve after-sales service.':locale==='en'?'Final inspection together. Site cleaned, decennial guarantee, responsive after-sales service.':'Inspection finale ensemble. Chantier nettoyé, garantie décennale, service après-vente réactif.' },
          ].map(({ num, icon, title, desc }) => (
            <li key={num} className="bg-white rounded-lg p-8 border border-cream-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
              <div className="w-11 h-11 rounded-lg bg-green/10 flex items-center justify-center text-xl mb-4" aria-hidden="true">{icon}</div>
              <span className="text-[11px] text-clay tracking-widest font-medium uppercase block mb-2">{num}</span>
              <h3 className="font-serif text-lg font-normal text-ink mb-2">{title}</h3>
              <p className="text-muted text-sm font-light leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-20 px-[5%] bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" aria-hidden="true" />{locale==='nl'?'Waarom wij':locale==='en'?'Why us':'Pourquoi nous'}</p>
            <h2 className="font-serif text-4xl font-normal text-ink mb-5">{locale==='nl'?'Een jong bedrijf, ervaren professionals':locale==='en'?'A young company, experienced professionals':'Une jeune entreprise, des professionnels expérimentés'}</h2>
            <p className="text-muted font-light leading-relaxed mb-8">{locale==='nl'?'Apollon Construction is een recent bedrijf, opgericht door professionals met meer dan 5 jaar ervaring in renovatie in Brussel. We creëerden Apollon om dingen anders te doen: schone werven, transparante opvolging en eerlijke prijzen.':locale==='en'?'Apollon Construction is a recent company, founded by professionals with over 5 years of renovation experience in Brussels. We created Apollon to do things differently: clean sites, transparent follow-up and fair prices.':'Apollon Construction est une entreprise récente, fondée par des professionnels avec plus de 5 ans d\'expérience dans la rénovation à Bruxelles. On a créé Apollon pour faire les choses différemment : des chantiers propres, un suivi transparent et des prix justes.'}</p>
            <ul className="space-y-4 list-none">
              {[
                { title:locale==='nl'?'Tweetalig team FR/NL':locale==='en'?'Bilingual team FR/NL':'Équipe bilingue FR/NL', desc:locale==='nl'?'Twee vaste contactpersonen om u in uw taal te bedienen.':locale==='en'?'Two dedicated contacts to serve you in your language.':'Deux interlocuteurs dédiés pour vous servir dans votre langue.' },
                { title:locale==='nl'?'Reactiviteit':locale==='en'?'Reactivity':'Réactivité', desc:locale==='nl'?'Antwoord dezelfde dag, offerte binnen 48u.':locale==='en'?'Same-day response, quote within 48h.':'Réponse le jour même, devis sous 48h.' },
                { title:locale==='nl'?'Totale transparantie':locale==='en'?'Total transparency':'Transparence totale', desc:locale==='nl'?'Gedetailleerde offerte post per post. Geen verrassingen op de eindrekening.':locale==='en'?'Detailed quote line by line. No surprises on the final invoice.':'Devis détaillé poste par poste. Pas de surprise à la facture finale.' },
                { title:locale==='nl'?'Verzekering & conformiteit':locale==='en'?'Insurance & compliance':'Assurance & conformité', desc:locale==='nl'?'BA beroepsaansprakelijkheid, AREI conformiteit, markttoelating in orde.':locale==='en'?'Professional liability, RGIE compliance, market access in order.':'RC professionnelle, conformité RGIE, accès au marché en règle.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="text-green font-semibold flex-shrink-0 mt-1">✓</span>
                  <div><strong className="font-medium text-ink text-sm">{title}</strong><span className="text-muted font-light text-sm"> — {desc}</span></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink rounded-xl p-10 text-white">
            <h3 className="font-serif text-2xl font-normal text-white mb-5">{locale==='nl'?'"We beloven niet de grootste te zijn. We beloven de meest serieuze te zijn."':locale==='en'?'"We don\'t promise to be the biggest. We promise to be the most serious."':'"On ne promet pas d\'être les plus gros. On promet d\'être les plus sérieux."'}</h3>
            <p className="text-white/65 font-light leading-relaxed mb-8">{locale==='nl'?'Elke werf telt. We behandelen de uwe alsof het de onze was — want onze reputatie hangt er van af.':locale==='en'?'Every project counts. We treat yours as if it were ours — because our reputation depends on it.':'Chaque chantier compte. On traite le vôtre comme si c\'était le nôtre — parce que notre réputation en dépend.'}</p>
            <a href="/contact" className="inline-block bg-green text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-green-mid transition-colors">{locale==='nl'?'Gratis offerte aanvragen':locale==='en'?'Request a free quote':'Demander un devis gratuit'}</a>
          </div>
        </div>
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


      {/* AVIS GOOGLE */}
      <section className="py-16 px-[5%] bg-cream-2">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium text-clay tracking-widest uppercase mb-3"><span className="w-6 h-px bg-clay" />
              {locale==='nl'?'Google beoordelingen':locale==='en'?'Google reviews':'Avis Google'}
            </p>
            <h2 className="font-serif text-4xl font-normal text-ink">{locale==='nl'?'Wat onze klanten zeggen':locale==='en'?'What our clients say':'Ce que disent nos clients'}</h2>
          </div>
          <a href="https://share.google/aO4CXjZ8n3OlEY00c" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-cream-3 rounded-xl px-5 py-3 hover:border-green transition-colors">
            <div>
              <p className="text-sm font-semibold text-ink">5.0 ★★★★★</p>
              <p className="text-xs text-muted font-light">{locale==='nl'?'6 Google beoordelingen':locale==='en'?'6 Google reviews':'6 avis Google'}</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </a>
        </div>
        <ul className="grid md:grid-cols-3 gap-5" role="list">
          {[
            { name:'Mahmood Hussein', date:locale==='nl'?'4 maanden geleden':locale==='en'?'4 months ago':'il y a 4 mois', text:locale==='nl'?'Uitstekende service van Apollon Construction. Verzorgd werk, punctueel en zeer professioneel. Naleving van de termijnen en onberispelijk resultaat. Ik beveel sterk aan, dank aan Andi voor zijn communicatie!':locale==='en'?'Excellent service from Apollon Construction. Careful work, punctual and very professional team from start to finish. Deadlines respected and impeccable result. Highly recommend, thanks to Andi for his communication!':'Excellent service de la part d'Apollon Construction. Travail soigné, équipe ponctuelle et très professionnelle du début à la fin. Respect des délais et résultat impeccable. Je recommande vivement, Merci Andi pour sa communication!', badge:'Local Guide' },
            { name:'E.', date:locale==='nl'?'een jaar geleden':locale==='en'?'1 year ago':'il y a un an', text:locale==='nl'?'Top service! Snel en efficiënt. Ik had een elektrisch probleem en ze kwamen binnen 24u en losten alles op. Ik beveel sterk aan!':locale==='en'?'Top service! Fast and efficient. I had an electrical issue and they intervened in under 24h and sorted everything. Highly recommend!':'Top service ! Rapide et efficace. J'ai eu une panne électrique chez moi et il est intervenu en moins de 24h et a tout réglé. Je recommande fortement !', badge:'Local Guide' },
            { name:'Leona Muhaxheri', date:locale==='nl'?'5 maanden geleden':locale==='en'?'5 months ago':'il y a 5 mois', text:locale==='nl'?'Zeer tevreden over hun werk en hun professionalisme. Dank u voor uw werk.':locale==='en'?'Very satisfied with their work and their professionalism. Thank you for your work.':'Très satisfaite de leurs travaux et de leurs professionnalisme. Merci pour votre travail.', badge:'' },
          ].map(({ name, date, text, badge }) => (
            <li key={name} className="bg-white rounded-xl p-7 border border-cream-3 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green/15 flex items-center justify-center font-serif text-green font-medium text-sm flex-shrink-0">
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-ink text-sm">{name}</p>
                    <p className="text-xs text-muted font-light">{date}{badge ? ` · ${badge}` : ''}</p>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="flex-shrink-0 mt-1">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-muted font-light text-sm leading-relaxed flex-1">"{text}"</p>
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <a href="https://share.google/aO4CXjZ8n3OlEY00c" target="_blank" rel="noopener noreferrer"
            className="inline-block border border-cream-3 text-muted text-sm px-6 py-3 rounded-lg hover:border-green hover:text-green transition-colors font-medium">
            {locale==='nl'?'Alle beoordelingen bekijken →':locale==='en'?'View all reviews →':'Voir tous les avis →'}
          </a>
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
                { icon:'📍', label:locale==='nl'?'Zetel':locale==='en'?'Headquarters':'Siège', value:'Dilbeek' },
              { icon:'🗺️', label:'Google Maps', value:'Voir notre localisation', href:'https://share.google/aO4CXjZ8n3OlEY00c' },
              { icon:'🗺️', label:t('contact.zone_label'), value:locale==='nl'?'Brussel 19 gemeenten, Brabant wallon & flamand':locale==='en'?'Brussels 19 municipalities, Walloon & Flemish Brabant':'Bruxelles 19 communes, Brabant wallon & flamand' },
                { icon:'📞', label:locale==='nl'?'Telefoon (FR)':locale==='en'?'Phone (FR)':'Téléphone (FR)', value:'0486 27 88 52', href:'tel:+32486278852' },
                { icon:'📞', label:locale==='nl'?'Telefoon (NL)':locale==='en'?'Phone (NL)':'Téléphone (NL)', value:'0499 89 60 86', href:'tel:+32499896086' },
                { icon:'✉', label:'Email', value:'info@apollonconstruction.be', href:'mailto:info@apollonconstruction.be' },
                { icon:'⏰', label:t('contact.hours_label'), value:t('contact.hours_value') },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white border border-cream-3 rounded-lg flex items-center justify-center text-sm flex-shrink-0" aria-hidden="true">{icon}</div>
                  <div className="text-sm"><strong className="block font-medium text-ink mb-0.5">{label}</strong>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-green hover:underline font-light">{value}</a> : <span className="text-muted font-light">{value}</span>}</div>
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
