import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import LeadForm from '../components/LeadForm'

const SolutionsPage: NextPage = () => {
  useTranslation('common')
  const { locale } = useRouter()

  const ICONS = [
    // Pompe à chaleur
    <svg key="pac" viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="8" width="26" height="16" rx="2.5" /><circle cx="16" cy="16" r="4.6" /><path d="M16 11.4v9.2M11.4 16h9.2" /></svg>,
    // Panneaux solaires
    <svg key="pv" viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 24l3.5-13h13L26 24H6z" /><path d="M8 18.5h16M16 11v13M12 11l-1.2 13M20 11l1.2 13" /></svg>,
    // Climatisation
    <svg key="clim" viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="7" width="24" height="9" rx="3" /><path d="M9 21c2 0 2 3 4 3M15 21c2 0 2 3 4 3M21 21c1.6 0 1.8 2.4 3.4 2.8" /></svg>,
    // Électricité
    <svg key="elec" viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 4l-7 13h6l-1 11 8-14h-6l0-10z" /></svg>,
    // Ventilation
    <svg key="vmc" viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="16" cy="16" r="3" /><path d="M16 13c0-5 5-7 5-7s1 5-3 7M16 19c0 5 5 7 5 7s1-5-3-7M13 16c-5 0-7-5-7-5s5-1 7 3M19 16c5 0 7 5 7 5s-5 1-7-3" /></svg>,
    // Bornes de recharge
    <svg key="ev" viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="5" width="11" height="22" rx="2.5" /><path d="M12.5 11h4M14.5 14l-1.5 4h3l-1.5 4" /><path d="M20 12h2.5c1 0 1.5.6 1.5 1.6V19c0 1 .6 1.4 1.4 1.4" /></svg>,
  ]

  const C = {
    fr: {
      title: 'Pompe à chaleur, panneaux solaires & électricité à Bruxelles | Apollon Solutions',
      desc: 'Pompe à chaleur, panneaux solaires, climatisation, électricité et ventilation à Bruxelles & Brabant. Équipe certifiée RGIE et fluides frigorigènes. Devis sous 48h, primes gérées.',
      bc: 'Accueil', crumb: 'Solutions',
      h1: 'Énergie & technique : pompe à chaleur, solaire, électricité',
      intro: 'Apollon Solutions est le pôle technique d’Apollon Group. Une équipe certifiée pour vos installations énergétiques à Bruxelles et en Brabant — du dimensionnement à la mise en service, primes comprises.',
      badges: ['Certifié RGIE ✓', 'Frigoristes agréés ✓', 'Devis 48h ✓'],
      svc_eyebrow: 'Nos solutions', svc_h: 'Tout le technique, sous un seul toit',
      svc_p: 'Particuliers, syndics et architectes — du conseil à l’installation, avec attestations et suivi des primes.',
      services: [
        { t: 'Pompe à chaleur', d: 'Air/eau, air/air et hybride. Dimensionnement, remplacement de chaudière mazout ou gaz, raccordement et mise en service par des frigoristes agréés.' },
        { t: 'Panneaux solaires', d: 'Étude de production, pose en toiture, onduleur et raccordement conforme RGIE. Autoconsommation, suivi et batterie en option.' },
        { t: 'Climatisation', d: 'Split, multi-split et gainable. Installation discrète, entretien et recharge par techniciens certifiés en fluides frigorigènes.' },
        { t: 'Électricité (RGIE)', d: 'Installation neuve, mise en conformité, tableaux et rénovation. Rapport de conformité RGIE inclus, domotique et éclairage LED.' },
        { t: 'Ventilation (VMC)', d: 'Simple et double flux. Air sain, récupération de chaleur et conformité PEB sur le neuf et la rénovation lourde.' },
        { t: 'Bornes de recharge', d: 'Installation de bornes pour véhicules électriques, dimensionnement de la puissance et protection du tableau.' },
      ],
      one_eyebrow: 'Un seul interlocuteur', one_h: 'Plus besoin de jongler entre trois corps de métier',
      one_p: 'Un chauffagiste, un électricien, un installateur solaire qui se renvoient la balle : c’est là que les chantiers techniques dérapent. Apollon Solutions coordonne l’ensemble, avec une seule équipe et une seule garantie.',
      one_points: [
        { t: 'Étude intégrée', d: 'PAC, solaire et électricité dimensionnés ensemble.' },
        { t: 'Équipe propre', d: 'Nos techniciens, pas de sous-traitance cachée.' },
        { t: 'Attestations', d: 'RGIE, conformité, fluides frigorigènes — tout fourni.' },
        { t: 'Suivi primes', d: 'On monte vos dossiers d’aides de A à Z.' },
      ],
      prime_eyebrow: 'Primes & rentabilité', prime_h: 'Les primes, on s’en occupe',
      prime_p: 'Pompe à chaleur, photovoltaïque, isolation : les aides régionales évoluent vite et dépendent de votre situation. On vérifie votre éligibilité, on monte le dossier, et on vous remet une estimation nette avant que vous signiez.',
      prime_cta: 'Voir toutes les primes →',
      prime_points: [
        { t: 'On vérifie l’éligibilité', d: 'Selon votre région, vos revenus et le type d’installation.' },
        { t: 'On monte le dossier', d: 'Devis conforme, attestations, formulaires — on prépare tout.' },
        { t: 'Estimation transparente', d: 'Le montant final dépend de l’administration, mais vous savez à quoi vous attendre.' },
      ],
      proc_h: 'Du premier audit à la mise en service', step_word: 'Étape',
      steps: [
        { t: 'Audit sur place', d: 'On évalue votre installation, vos consommations et vos besoins. Gratuit.' },
        { t: 'Étude & devis 48h', d: 'Dimensionnement, matériel, estimation des primes. Devis clair, poste par poste.' },
        { t: 'Installation', d: 'Notre équipe technique réalise les travaux. Un interlocuteur unique, délais tenus.' },
        { t: 'Mise en service & primes', d: 'Contrôle, attestations RGIE, et accompagnement de vos dossiers de primes.' },
      ],
      faq_h: 'Questions fréquentes',
      faq: [
        { q: 'Puis-je remplacer ma chaudière mazout par une pompe à chaleur ?', a: 'Oui, c’est l’une des demandes les plus fréquentes depuis la fin des nouvelles installations mazout. Lors de l’audit, on vérifie que votre logement s’y prête (isolation, émetteurs) et on propose la solution adaptée, hybride si nécessaire.' },
        { q: 'Vous gérez les dossiers de primes ?', a: 'On vérifie votre éligibilité et on monte le dossier complet. Les montants dépendent de votre région et de vos revenus, et la décision revient à l’administration — mais on vous remet une estimation avant signature.' },
        { q: 'Travaillez-vous avec les syndics et les architectes ?', a: 'Oui, pour les immeubles, les parties communes (chaufferie, électricité, ventilation) et les projets de rénovation énergétique.' },
      ],
      svc: 'Énergie & technique',
      formOpts: ['Pompe à chaleur', 'Panneaux solaires', 'Climatisation', 'Électricité (RGIE)', 'Ventilation (VMC)', 'Borne de recharge', 'Autre'],
    },
    nl: {
      title: 'Warmtepomp, zonnepanelen & elektriciteit in Brussel | Apollon Solutions',
      desc: 'Warmtepomp, zonnepanelen, airco, elektriciteit en ventilatie in Brussel & Brabant. Team gecertificeerd RGIE en koelmiddelen. Offerte binnen 48u, premies geregeld.',
      bc: 'Startpagina', crumb: 'Solutions',
      h1: 'Energie & techniek: warmtepomp, zonnepanelen, elektriciteit',
      intro: 'Apollon Solutions is de technische pool van Apollon Group. Eén gecertificeerd team voor uw energie-installaties in Brussel en Brabant — van dimensionering tot indienststelling, premies inbegrepen.',
      badges: ['RGIE-gecertificeerd ✓', 'Erkende koeltechnici ✓', 'Offerte 48u ✓'],
      svc_eyebrow: 'Onze oplossingen', svc_h: 'Alle techniek, onder één dak',
      svc_p: 'Particulieren, syndici en architecten — van advies tot installatie, met attesten en premiebegeleiding.',
      services: [
        { t: 'Warmtepomp', d: 'Lucht/water, lucht/lucht en hybride. Dimensionering, vervanging van mazout- of gasketel, aansluiting en indienststelling door erkende koeltechnici.' },
        { t: 'Zonnepanelen', d: 'Productiestudie, plaatsing op dak, omvormer en aansluiting conform RGIE. Zelfverbruik, opvolging en batterij als optie.' },
        { t: 'Airconditioning', d: 'Split, multi-split en kanaaltoestel. Discrete installatie, onderhoud en herlading door gecertificeerde koeltechnici.' },
        { t: 'Elektriciteit (RGIE)', d: 'Nieuwe installatie, conformstelling, borden en renovatie. RGIE-conformiteitsverslag inbegrepen, domotica en LED.' },
        { t: 'Ventilatie (VMC)', d: 'Enkele en dubbele flux. Gezonde lucht, warmterecuperatie en EPB-conformiteit bij nieuwbouw en zware renovatie.' },
        { t: 'Laadpalen', d: 'Installatie van laadpalen voor elektrische voertuigen, vermogensdimensionering en bescherming van het bord.' },
      ],
      one_eyebrow: 'Eén aanspreekpunt', one_h: 'Geen gejongleer meer tussen drie vakmensen',
      one_p: 'Een verwarmingsinstallateur, een elektricien, een zonne-installateur die naar elkaar verwijzen: daar lopen technische werven mis. Apollon Solutions coördineert het geheel, met één team en één garantie.',
      one_points: [
        { t: 'Geïntegreerde studie', d: 'Warmtepomp, zon en elektriciteit samen gedimensioneerd.' },
        { t: 'Eigen team', d: 'Onze techniekers, geen verdoken onderaanneming.' },
        { t: 'Attesten', d: 'RGIE, conformiteit, koelmiddelen — alles geleverd.' },
        { t: 'Premieopvolging', d: 'Wij stellen uw premiedossiers van A tot Z samen.' },
      ],
      prime_eyebrow: 'Premies & rendement', prime_h: 'De premies, wij regelen ze',
      prime_p: 'Warmtepomp, zonnepanelen, isolatie: de regionale premies evolueren snel en hangen af van uw situatie. Wij checken uw recht, stellen het dossier samen en geven u een netto-raming vóór u tekent.',
      prime_cta: 'Alle premies bekijken →',
      prime_points: [
        { t: 'Wij checken het recht', d: 'Volgens uw regio, inkomen en type installatie.' },
        { t: 'Wij stellen het dossier samen', d: 'Conforme offerte, attesten, formulieren.' },
        { t: 'Transparante raming', d: 'Het eindbedrag hangt af van de administratie, maar u weet waaraan u toe bent.' },
      ],
      proc_h: 'Van eerste audit tot indienststelling', step_word: 'Stap',
      steps: [
        { t: 'Audit ter plaatse', d: 'We evalueren uw installatie, verbruik en behoeften. Gratis.' },
        { t: 'Studie & offerte 48u', d: 'Dimensionering, materiaal, premieraming. Heldere offerte, post per post.' },
        { t: 'Installatie', d: 'Ons technisch team voert de werken uit. Eén aanspreekpunt, termijnen gerespecteerd.' },
        { t: 'Indienststelling & premies', d: 'Controle, RGIE-attesten en begeleiding van uw premiedossiers.' },
      ],
      faq_h: 'Veelgestelde vragen',
      faq: [
        { q: 'Kan ik mijn mazoutketel vervangen door een warmtepomp?', a: 'Ja, dat is een van de meest gevraagde sinds het einde van nieuwe mazoutinstallaties. Bij de audit kijken we of uw woning geschikt is (isolatie, afgifte) en stellen we de juiste oplossing voor, hybride indien nodig.' },
        { q: 'Regelen jullie de premiedossiers?', a: 'We checken uw recht en stellen het volledige dossier samen. De bedragen hangen af van uw regio en inkomen, en de beslissing ligt bij de administratie — maar u krijgt een raming vóór ondertekening.' },
        { q: 'Werken jullie met syndici en architecten?', a: 'Ja, voor gebouwen, gemeenschappelijke delen (stookplaats, elektriciteit, ventilatie) en energierenovatieprojecten.' },
      ],
      svc: 'Energie & techniek',
      formOpts: ['Warmtepomp', 'Zonnepanelen', 'Airconditioning', 'Elektriciteit (AREI)', 'Ventilatie (VMC)', 'Laadpaal', 'Andere'],
    },
    en: {
      title: 'Heat pump, solar panels & electricity in Brussels | Apollon Solutions',
      desc: 'Heat pump, solar panels, air conditioning, electricity and ventilation in Brussels & Brabant. RGIE and F-gas certified team. Quote within 48h, grants handled.',
      bc: 'Home', crumb: 'Solutions',
      h1: 'Energy & technical: heat pump, solar, electricity',
      intro: 'Apollon Solutions is the technical arm of Apollon Group. One certified team for your energy installations in Brussels and Brabant — from sizing to commissioning, grants included.',
      badges: ['RGIE certified ✓', 'F-gas certified ✓', 'Quote 48h ✓'],
      svc_eyebrow: 'Our solutions', svc_h: 'All the technical work, under one roof',
      svc_p: 'Homeowners, building managers and architects — from advice to installation, with certificates and grant follow-up.',
      services: [
        { t: 'Heat pump', d: 'Air/water, air/air and hybrid. Sizing, replacement of oil or gas boiler, connection and commissioning by certified F-gas technicians.' },
        { t: 'Solar panels', d: 'Production study, roof installation, inverter and RGIE-compliant connection. Self-consumption, monitoring and optional battery.' },
        { t: 'Air conditioning', d: 'Split, multi-split and ducted. Discreet installation, maintenance and recharge by certified F-gas technicians.' },
        { t: 'Electricity (RGIE)', d: 'New installation, compliance, panels and renovation. RGIE conformity report included, home automation and LED.' },
        { t: 'Ventilation (MVHR)', d: 'Single and double flow. Clean air, heat recovery and EPB compliance on new builds and heavy renovation.' },
        { t: 'EV chargers', d: 'Installation of charging points for electric vehicles, power sizing and panel protection.' },
      ],
      one_eyebrow: 'One single contact', one_h: 'No more juggling three different trades',
      one_p: 'A heating engineer, an electrician, a solar installer passing the buck: that is where technical projects go wrong. Apollon Solutions coordinates the whole thing, with one team and one warranty.',
      one_points: [
        { t: 'Integrated study', d: 'Heat pump, solar and electricity sized together.' },
        { t: 'In-house team', d: 'Our technicians, no hidden subcontracting.' },
        { t: 'Certificates', d: 'RGIE, conformity, F-gas — all provided.' },
        { t: 'Grant follow-up', d: 'We handle your grant files from A to Z.' },
      ],
      prime_eyebrow: 'Grants & returns', prime_h: 'Grants? We handle them',
      prime_p: 'Heat pump, solar, insulation: regional grants change fast and depend on your situation. We check your eligibility, build the file, and give you a net estimate before you sign.',
      prime_cta: 'See all grants →',
      prime_points: [
        { t: 'We check eligibility', d: 'Based on your region, income and type of installation.' },
        { t: 'We build the file', d: 'Compliant quote, certificates, forms — we prepare everything.' },
        { t: 'Transparent estimate', d: 'The final amount depends on the authorities, but you know what to expect.' },
      ],
      proc_h: 'From first audit to commissioning', step_word: 'Step',
      steps: [
        { t: 'On-site audit', d: 'We assess your installation, consumption and needs. Free of charge.' },
        { t: 'Study & quote 48h', d: 'Sizing, equipment, grant estimate. A clear quote, line by line.' },
        { t: 'Installation', d: 'Our technical team carries out the work. One single contact, deadlines met.' },
        { t: 'Commissioning & grants', d: 'Inspection, RGIE certificates, and support with your grant files.' },
      ],
      faq_h: 'Frequently asked questions',
      faq: [
        { q: 'Can I replace my oil boiler with a heat pump?', a: 'Yes, it is one of the most common requests since the end of new oil installations. During the audit we check that your home is suitable (insulation, emitters) and propose the right solution, hybrid if needed.' },
        { q: 'Do you handle the grant files?', a: 'We check your eligibility and build the full file. Amounts depend on your region and income, and the decision rests with the authorities — but you get an estimate before signing.' },
        { q: 'Do you work with building managers and architects?', a: 'Yes, for buildings, common areas (boiler room, electricity, ventilation) and energy renovation projects.' },
      ],
      svc: 'Energy & technical',
      formOpts: ['Heat pump', 'Solar panels', 'Air conditioning', 'Electrical (RGIE)', 'Ventilation (MVHR)', 'EV charger', 'Other'],
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
          name: 'Pompe à chaleur, panneaux solaires et électricité', provider: { '@type': 'LocalBusiness', name: 'Apollon Solutions' },
          areaServed: 'Bruxelles', description: c.desc,
        })}} />
      </Head>

      {/* HERO */}
      <section className="bg-ink relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-green/20 blur-3xl" aria-hidden="true" />
        <div className="relative px-[5%] py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-green-light font-medium tracking-widest uppercase mb-4">
              <Link href="/" className="text-white/50 hover:text-white">{c.bc}</Link> / {c.crumb}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-6">{c.h1}</h1>
            <p className="text-white/75 font-light text-lg leading-relaxed mb-6">{c.intro}</p>
            <div className="flex flex-wrap gap-3">
              {c.badges.map(b => (
                <span key={b} className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full font-light">{b}</span>
              ))}
            </div>
          </div>
          <div><LeadForm service={c.svc} options={c.formOpts} /></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-3xl mb-12">
          <p className="text-xs text-green font-medium tracking-widest uppercase mb-3">{c.svc_eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-ink mb-4">{c.svc_h}</h2>
          <p className="text-muted font-light text-lg">{c.svc_p}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.services.map((s, i) => (
            <div key={s.t} className="border border-cream-3 rounded-lg p-6 bg-cream/30 hover:border-green/40 hover:shadow-sm transition-all">
              <div className="w-12 h-12 rounded-lg bg-green/8 text-green flex items-center justify-center mb-4">{ICONS[i]}</div>
              <h3 className="font-serif text-xl font-normal text-ink mb-2">{s.t}</h3>
              <p className="text-sm text-muted font-light leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ONE CONTACT */}
      <section className="py-16 px-[5%] bg-ink relative overflow-hidden">
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-green/15 blur-3xl" aria-hidden="true" />
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-green-light font-medium tracking-widest uppercase mb-3">{c.one_eyebrow}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-5 leading-tight">{c.one_h}</h2>
            <p className="text-white/70 font-light text-lg leading-relaxed">{c.one_p}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {c.one_points.map((p, i) => (
              <div key={p.t} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <p className="text-green-light font-medium text-sm">0{i + 1}</p>
                <p className="font-serif text-white text-lg mt-2">{p.t}</p>
                <p className="text-white/50 text-sm font-light mt-1">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIMES */}
      <section className="py-16 px-[5%] bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs text-green font-medium tracking-widest uppercase mb-3">{c.prime_eyebrow}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-ink mb-4">{c.prime_h}</h2>
            <p className="text-muted font-light text-lg leading-relaxed mb-6">{c.prime_p}</p>
            <Link href="/primes" className="inline-block bg-green text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-green-mid transition-colors">{c.prime_cta}</Link>
          </div>
          <div className="bg-green/8 border border-green/20 rounded-lg p-7">
            <ul className="space-y-4 list-none">
              {c.prime_points.map(p => (
                <li key={p.t} className="flex items-start gap-3">
                  <span className="text-green font-semibold flex-shrink-0 mt-0.5">✓</span>
                  <span><span className="block font-medium text-ink text-sm">{p.t}</span><span className="text-muted text-sm font-light">{p.d}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-[5%] bg-cream-2">
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-ink mb-10">{c.proc_h}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {c.steps.map((s, i) => (
            <div key={s.t}>
              <div className="w-10 h-1 bg-green rounded mb-4" />
              <p className="text-green font-medium text-sm mb-2">{c.step_word} 0{i + 1}</p>
              <h3 className="font-serif text-lg font-normal text-ink mb-2">{s.t}</h3>
              <p className="text-sm text-muted font-light leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-[5%] bg-white">
        <h2 className="font-serif text-3xl font-normal text-ink mb-8">{c.faq_h}</h2>
        <div className="space-y-4 max-w-2xl">
          {c.faq.map(({ q, a }) => (
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
          <LeadForm service={c.svc} options={c.formOpts} />
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'fr', ['common'])) },
})

export default SolutionsPage
