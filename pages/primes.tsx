import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const PrimesPage: NextPage = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const L = {
    fr: {
      title: 'Primes Rénovation 2025-2026 — Bruxelles, Wallonie, Flandre',
      desc: "Guide complet des primes de rénovation en Belgique. Wallonie: Prime Habitation. Bruxelles: RENOLUTION suspendue. Flandre: MijnVerbouwPremie.",
      update: '✓ Mis à jour — avril 2026 · Valable jusqu\'au 30 septembre 2026',
      ov_h: 'Situation par région', bc: 'Accueil',
      regions: [
        { flag:'🟡', title:'Wallonie', status:'✓ Primes actives', badge:'bg-green/10 text-green border-green/20', amount:"Jusqu'à 70%", desc:"Prime Habitation depuis le 14 fév. 2025. Audit non obligatoire pour la toiture. Valable jusqu'au 30 sept. 2026." },
        { flag:'🔴', title:'Bruxelles', status:'⚠ Suspendues 2025-2026', badge:'bg-red-50 text-red-700 border-red-200', amount:'Suspendu', desc:"Primes RENOLUTION suspendues pour factures 2025-2026. Dossiers 2024 approuvés : paiement en cours (56M€ débloqués). Transition vers prêts à taux zéro dès 2027." },
        { flag:'🟢', title:'Flandre', status:'✓ Primes actives', badge:'bg-green/10 text-green border-green/20', amount:"Jusqu'à 35%", desc:"MijnVerbouwPremie actif. Max 4.025€ pour la toiture. Prime PEB jusqu'au 30 juin 2026." },
      ],
      wal: {
        h: 'Wallonie — Prime Habitation',
        p1: 'Depuis le 14 février 2025, la Wallonie a simplifié son système avec la Prime Habitation unique.',
        p2: "Pour les travaux de toiture : l'audit énergétique n'est plus obligatoire.",
        alert: '⚠ Montants réduits d\'environ 60% vs l\'ancien système. R5 (revenus très élevés) : non éligible.',
        ok: '✓ Deadline : 30 septembre 2026',
        th: ['Catégorie','Plafond'],
        rows: [['R1 — Revenus très modestes','70% TVAC'],['R2 — Revenus modestes','70% TVAC'],['R3 — Revenus moyens','50% TVAC'],['R4 — Revenus élevés','50% TVAC'],['R5 — Revenus très élevés','Non éligible']],
        link: '🔗 Site officiel : wallonie.be — Prime Habitation 2025',
      },
      bru: {
        h: 'Bruxelles — RENOLUTION',
        alert: '🔴 Primes RENOLUTION suspendues pour les factures 2025. Attendez la décision du nouveau gouvernement.',
        p2: 'Pour les factures datées de 2024 dont le dossier a été approuvé, les paiements sont en cours. Aucune nouvelle demande n\'est possible pour les factures 2025 ou 2026.',
        th: ['Travaux','Cat. I','Cat. II','Cat. III'],
        rows: [['Isolation toiture','75 €/m²','55 €/m²','35 €/m²'],['Isolation façade (ITE)','30 €/m²','25 €/m²','20 €/m²'],['Bonus biosourcé','+10 €/m²','+10 €/m²','+10 €/m²']],
        note: 'Montants valables uniquement pour factures datées de 2024.',
        link: '🔗 Suivez l\'évolution : renolution.brussels · homegrade.brussels',
      },
      fla: {
        h: 'Flandre — MijnVerbouwPremie',
        p1: 'Toutes les demandes via Mijn Verbouwloket. Depuis le 1er janvier 2025, les montants ont été réduits.',
        p2: 'Maximum 35% des coûts, plafond 4.025 € pour la toiture.',
        alert: '⚠ À partir du 1er juillet 2026, les primes pour revenus élevés sont supprimées.',
        steps: [['Connectez-vous sur Mijn Verbouwloket','Toutes les démarches en ligne.'],['Faites réaliser les travaux par un entrepreneur agréé','Apollon Construction est enregistré.'],['Introduisez la demande dans les 2 ans','Cat. 1 et 2 : avant le 28 février 2026.']],
        link: '🔗 Site officiel : mijnverbouwloket.be',
      },
      cta: { h:'On vous aide à obtenir vos primes', p:"Apollon Construction vous accompagne dans les démarches et s'assure que vos travaux répondent aux critères d'éligibilité." },
    },
    nl: {
      title: 'Renovatiepremies 2025-2026 — Brussel, Wallonië, Vlaanderen',
      desc: "Complete gids van de renovatiepremies in België. Wallonië: Prime Habitation. Brussel: RENOLUTION opgeschort. Vlaanderen: MijnVerbouwPremie.",
      update: '✓ Bijgewerkt — april 2026 · Geldig tot 30 september 2026',
      ov_h: 'Situatie per gewest', bc: 'Startpagina',
      regions: [
        { flag:'🟡', title:'Wallonië', status:'✓ Premies actief', badge:'bg-green/10 text-green border-green/20', amount:'Tot 70%', desc:'Prime Habitation depuis le 14 fév. 2025. Geen audit vereist voor dakwerken. Geldig tot 30 sept. 2026.' },
        { flag:'🔴', title:'Brussel', status:'⚠ Opgeschort 2025-2026', badge:'bg-red-50 text-red-700 border-red-200', amount:'Opgeschort', desc:'RENOLUTION premies opgeschort voor facturen 2025-2026. Goedgekeurde dossiers 2024: betalingen in uitvoering (56M€ vrijgemaakt). Overgang naar renteloze leningen vanaf 2027.' },
        { flag:'🟢', title:'Vlaanderen', status:'✓ Premies actief', badge:'bg-green/10 text-green border-green/20', amount:'Tot 35%', desc:'MijnVerbouwPremie actief. Max 4.025€ voor het dak. EPC-premie tot 30 juni 2026.' },
      ],
      wal: {
        h: 'Wallonië — Prime Habitation',
        p1: 'Depuis le 14 februari 2025 heeft Wallonië zijn systeem vereenvoudigd met de unieke Prime Habitation.',
        p2: 'Voor dakwerken: de energieaudit is niet meer verplicht.',
        alert: '⚠ Basisbedragen gemiddeld 60% verlaagd. R5 (zeer hoge inkomens): niet in aanmerking.',
        ok: '✓ Deadline: 30 september 2026',
        th: ['Categorie','Plafond'],
        rows: [['R1 — Zeer bescheiden inkomens','70% TVAC'],['R2 — Bescheiden inkomens','70% TVAC'],['R3 — Gemiddelde inkomens','50% TVAC'],['R4 — Hoge inkomens','50% TVAC'],['R5 — Zeer hoge inkomens','Niet in aanmerking']],
        link: '🔗 Officiële site: wallonie.be — Prime Habitation 2025',
      },
      bru: {
        h: 'Brussel — RENOLUTION',
        alert: '🔴 RENOLUTION premies opgeschort voor facturen van 2025. Wacht op de beslissing van de nieuwe Brusselse regering.',
        p2: 'Voor facturen van 2024 waarvan het dossier is goedgekeurd, zijn de betalingen in uitvoering. Geen nieuwe aanvraag mogelijk voor facturen 2025 of 2026.',
        th: ['Type werken','Cat. I','Cat. II','Cat. III'],
        rows: [['Dakisolatie','75 €/m²','55 €/m²','35 €/m²'],['Gevelisolatie (BUI)','30 €/m²','25 €/m²','20 €/m²'],['Biobased bonus','+10 €/m²','+10 €/m²','+10 €/m²']],
        note: 'Bedragen alleen geldig voor facturen gedateerd in 2024.',
        link: '🔗 Volg de evolutie: renolution.brussels · homegrade.brussels',
      },
      fla: {
        h: 'Vlaanderen — MijnVerbouwPremie',
        p1: 'Alle aanvragen verlopen via Mijn Verbouwloket. Depuis le 1 januari 2025 zijn de bedragen verlaagd.',
        p2: 'Maximaal 35% van de kosten, plafond 4.025 € voor het dak.',
        alert: '⚠ Vanaf 1 juli 2026 worden de premies voor hoge inkomens geschrapt.',
        steps: [['Log in op Mijn Verbouwloket','Alle procedures online.'],['Laat de werken uitvoeren door een erkende aannemer','Apollon Construction is geregistreerd.'],['Dien de aanvraag in binnen 2 jaar','Cat. 1 en 2: vóór 28 februari 2026.']],
        link: '🔗 Officiële site: mijnverbouwloket.be',
      },
      cta: { h:'Wij helpen u uw premies te verkrijgen', p:'Apollon Construction begeleidt u bij de administratieve procedures en zorgt dat uw werken voldoen aan de premievoorwaarden.' },
    },
    en: {
      title: 'Renovation Grants 2025-2026 — Brussels, Wallonia, Flanders',
      desc: "Complete guide to renovation grants in Belgium. Wallonia: Prime Habitation. Brussels: RENOLUTION suspended. Flanders: MijnVerbouwPremie.",
      update: '✓ Updated — April 2026 · Valid until 30 September 2026',
      ov_h: 'Situation by region', bc: 'Home',
      regions: [
        { flag:'🟡', title:'Wallonia', status:'✓ Grants active', badge:'bg-green/10 text-green border-green/20', amount:'Up to 70%', desc:'Prime Habitation since 14 Feb. 2025. No audit required for roofing. Valid until 30 Sept. 2026.' },
        { flag:'🔴', title:'Brussels', status:'⚠ Suspended 2025-2026', badge:'bg-red-50 text-red-700 border-red-200', amount:'Suspended', desc:'RENOLUTION grants suspended for 2025-2026 invoices. Approved 2024 files: payments in progress (€56M released). Transition to interest-free loans from 2027.' },
        { flag:'🟢', title:'Flanders', status:'✓ Grants active', badge:'bg-green/10 text-green border-green/20', amount:'Up to 35%', desc:'MijnVerbouwPremie active. Max €4,025 for roofing. EPC grant until 30 June 2026.' },
      ],
      wal: {
        h: 'Wallonia — Prime Habitation',
        p1: 'Since 14 February 2025, Wallonia simplified its system with a single grant: the Prime Habitation.',
        p2: 'For roofing works: no energy audit required.',
        alert: '⚠ Base amounts reduced by about 60% vs. the old system. R5 (very high incomes): not eligible.',
        ok: '✓ Deadline: 30 September 2026',
        th: ['Category','Cap'],
        rows: [['R1 — Very modest income','70% incl. VAT'],['R2 — Modest income','70% incl. VAT'],['R3 — Average income','50% incl. VAT'],['R4 — High income','50% incl. VAT'],['R5 — Very high income','Not eligible']],
        link: '🔗 Official site: wallonie.be — Prime Habitation 2025',
      },
      bru: {
        h: 'Brussels — RENOLUTION',
        alert: '🔴 RENOLUTION grants suspended for 2025 invoices. Wait for the new Brussels government\'s decision.',
        p2: 'For invoices dated 2024 with an approved file, payments are in progress. No new applications are possible for 2025 or 2026 invoices.',
        th: ['Works','Cat. I','Cat. II','Cat. III'],
        rows: [['Roof insulation','€75/m²','€55/m²','€35/m²'],['Facade insulation (EWI)','€30/m²','€25/m²','€20/m²'],['Bio-based bonus','+€10/m²','+€10/m²','+€10/m²']],
        note: 'Amounts valid only for invoices dated 2024.',
        link: '🔗 Follow updates: renolution.brussels · homegrade.brussels',
      },
      fla: {
        h: 'Flanders — MijnVerbouwPremie',
        p1: 'All applications go through Mijn Verbouwloket. Since 1 January 2025, amounts have been reduced.',
        p2: 'Maximum 35% of costs, cap €4,025 for roofing.',
        alert: '⚠ From 1 July 2026, grants for high-income households are removed.',
        steps: [['Log in to Mijn Verbouwloket','All procedures online.'],['Have works done by a registered contractor','Apollon Construction is registered.'],['Submit application within 2 years','Cat. 1 and 2: before 28 February 2026.']],
        link: '🔗 Official site: mijnverbouwloket.be',
      },
      cta: { h:'We help you obtain your grants', p:'Apollon Construction guides you through the administrative process and ensures your works meet grant eligibility criteria.' },
    },
  }

  const l = L[locale as keyof typeof L] || L.fr

  return (
    <Layout>
      <SEO title={l.title} description={l.desc} />

      <div className="bg-cream-2 px-[5%] pt-12 pb-10 border-b border-cream-3">
        <p className="text-sm text-muted mb-3"><Link href="/" className="text-green hover:underline">{l.bc}</Link> / {t('nav.primes')}</p>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-ink mb-4">{t('nav.primes')}</h1>
        <p className="text-muted font-light text-lg max-w-xl mb-4">{l.desc}</p>
        <div className="inline-flex items-center gap-2 bg-green/10 border border-green/25 rounded-full px-4 py-1.5 text-xs font-medium text-green">{l.update}</div>
      </div>

      <section className="py-16 px-[5%] bg-white">
        <h2 className="font-serif text-3xl font-normal text-ink mb-10">{l.ov_h}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {l.regions.map(({ flag, title, status, badge, amount, desc }) => (
            <div key={title} className={`border rounded-xl p-8 ${badge}`}>
              <div className="text-2xl mb-3">{flag}</div>
              <h3 className="font-serif text-xl font-normal text-ink mb-2">{title}</h3>
              <div className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full mb-4 border ${badge}`}>{status}</div>
              <div className="font-serif text-3xl text-ink mb-2">{amount}</div>
              <p className="text-muted text-sm font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-[5%] bg-cream-2" style={{ borderTop:'3px solid #C4A24A' }}>
        <h2 className="font-serif text-3xl font-normal text-ink mb-6">{l.wal.h}</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-muted font-light leading-relaxed mb-4">{l.wal.p1}</p>
            <p className="text-muted font-light leading-relaxed mb-4">{l.wal.p2}</p>
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded text-sm text-yellow-800 font-light mb-4">{l.wal.alert}</div>
            <div className="p-4 bg-green/8 border-l-4 border-green rounded text-sm text-green font-light">{l.wal.ok}</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead><tr className="bg-cream-3">{l.wal.th.map(h => <th key={h} className="p-3 text-left text-xs font-medium text-muted uppercase">{h}</th>)}</tr></thead>
              <tbody>{l.wal.rows.map(([cat, p]) => <tr key={cat} className="border-b border-cream-3"><td className="p-3 text-sm font-light text-muted">{cat}</td><td className={`p-3 text-sm font-medium ${p.includes('Non') || p.includes('niet') || p.includes('Not') ? 'text-red-500' : 'text-green'}`}>{p}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <p className="text-sm text-green font-light">{l.wal.link}</p>
      </section>

      <section className="py-16 px-[5%] bg-white" style={{ borderTop:'3px solid #C44A4A' }}>
        <h2 className="font-serif text-3xl font-normal text-ink mb-6">{l.bru.h}</h2>
        <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded text-sm text-red-800 font-light mb-6">{l.bru.alert}</div>
        <p className="text-muted font-light leading-relaxed mb-6">{l.bru.p2}</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead><tr className="bg-cream-3">{l.bru.th.map(h => <th key={h} className="p-3 text-left text-xs font-medium text-muted uppercase">{h}</th>)}</tr></thead>
            <tbody>{l.bru.rows.map(([title, ...vals]) => <tr key={title} className="border-b border-cream-3"><td className="p-3 text-sm font-light text-muted">{title}</td>{vals.map((v,i) => <td key={i} className="p-3 text-sm font-medium text-ink">{v}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p className="text-xs text-muted font-light italic mb-4">{l.bru.note}</p>
        <p className="text-sm text-green font-light">{l.bru.link}</p>
      </section>

      <section className="py-16 px-[5%] bg-cream-2" style={{ borderTop:'3px solid #4A8C5C' }}>
        <h2 className="font-serif text-3xl font-normal text-ink mb-6">{l.fla.h}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-muted font-light leading-relaxed mb-4">{l.fla.p1}</p>
            <p className="text-muted font-light leading-relaxed mb-4">{l.fla.p2}</p>
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded text-sm text-yellow-800 font-light">{l.fla.alert}</div>
          </div>
          <div>
            {l.fla.steps.map(([strong, p], i) => (
              <div key={i} className="flex gap-3 mb-4">
                <div className="w-7 h-7 bg-green text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">{i+1}</div>
                <div><strong className="block text-sm font-medium text-ink">{strong}</strong><p className="text-xs text-muted font-light">{p}</p></div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm text-green font-light">{l.fla.link}</p>
      </section>

      <section className="py-16 px-[5%] bg-green text-center">
        <h2 className="font-serif text-3xl font-normal text-white mb-3">{l.cta.h}</h2>
        <p className="text-white/80 font-light max-w-md mx-auto mb-8">{l.cta.p}</p>
        <Link href="/contact" className="inline-block bg-white text-green px-8 py-3.5 rounded text-sm font-medium hover:bg-cream transition-colors">{t('nav.cta')}</Link>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'fr', ['common'])) },
})

export default PrimesPage
