import { useState } from 'react'
import { useRouter } from 'next/router'

interface LeadFormProps {
  service?: string
}

export default function LeadForm({ service = '' }: LeadFormProps) {
  const { locale } = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const L = {
    fr: { h: 'Devis gratuit sous 48h', sub: 'Sans engagement — Réponse garantie',
      fname: 'Nom', fphone: 'Téléphone *', femail: 'Email *', fservice: 'Type de travaux',
      fmsg: 'Message (optionnel)', btn: 'Demander un devis gratuit →',
      rgpd: 'Données protégées (RGPD)',
      success: '✓ Message envoyé ! Nous vous répondons sous 24h.',
      opts: ['Isolation thermique extérieure (ITE)', 'Toiture inclinée', 'Toiture plate / Étanchéité', 'Façade & Ravalement', 'Rénovation intérieure', 'Électricité RGIE', 'Autre'] },
    nl: { h: 'Gratis offerte binnen 48u', sub: 'Vrijblijvend — Gegarandeerd antwoord',
      fname: 'Naam', fphone: 'Telefoon *', femail: 'E-mail *', fservice: 'Type werken',
      fmsg: 'Bericht (optioneel)', btn: 'Gratis offerte aanvragen →',
      rgpd: 'Gegevens beschermd (AVG)',
      success: '✓ Bericht verzonden! We antwoorden u binnen 24u.',
      opts: ['Buitenmuurisolatie (BUI)', 'Hellend dak', 'Plat dak / Waterdichting', 'Gevel & Bepleistering', 'Binnenrenovatie', 'Elektriciteit AREI', 'Andere'] },
    en: { h: 'Free quote within 48h', sub: 'No commitment — Guaranteed response',
      fname: 'Name', fphone: 'Phone *', femail: 'Email *', fservice: 'Type of works',
      fmsg: 'Message (optional)', btn: 'Request a free quote →',
      rgpd: 'Data protected (GDPR)',
      success: '✓ Message sent! We\'ll respond within 24h.',
      opts: ['External thermal insulation (EWI)', 'Pitched roof', 'Flat roof / Waterproofing', 'Facade & Rendering', 'Interior renovation', 'Electrical RGIE', 'Other'] },
  }
  const t = L[locale as keyof typeof L] || L.fr

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('https://formspree.io/f/mvzvdenn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSent(true)
        form.reset()
        // GTM tracking
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({ event: 'form_submit', service: data.service || service })
        }
      }
    } catch {}
    setIsSubmitting(false)
  }

  const inp = 'w-full bg-white border border-cream-3 rounded px-3.5 py-3 text-ink text-sm font-light outline-none focus:border-green transition-colors'
  const lbl = 'block text-xs font-medium text-muted tracking-wider uppercase mb-1.5'

  if (sent) return (
    <div className="bg-green/10 border border-green/25 rounded-xl p-8 text-center">
      <p className="font-serif text-2xl text-green mb-2">{t.success}</p>
    </div>
  )

  return (
    <div className="bg-cream-2 rounded-xl border border-cream-3 p-8">
      <h3 className="font-serif text-2xl font-normal text-ink mb-1">{t.h}</h3>
      <p className="text-muted text-sm font-light mb-3">{t.sub}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {['★★★★★ 5.0 Google', '✓ Batibouw+', '✓ RC Pro assurée'].map(b => (
          <span key={b} className="bg-green/10 border border-green/20 text-green text-xs px-2.5 py-1 rounded-full font-medium">{b}</span>
        ))}
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div><label className={lbl}>{t.fname}</label><input type="text" name="nom" placeholder="Jean Dupont" className={inp} /></div>
          <div><label className={lbl}>{t.fphone}</label><input type="tel" name="telephone" placeholder="+32 ..." required className={inp} /></div>
        </div>
        <div className="mb-4"><label className={lbl}>{t.femail}</label><input type="email" name="email" placeholder="email@exemple.be" required className={inp} /></div>
        <div className="mb-4">
          <label className={lbl}>{t.fservice}</label>
          <select name="service" defaultValue={service} className={inp}>
            {t.opts.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="mb-6"><label className={lbl}>{t.fmsg}</label><textarea name="message" rows={3} className={`${inp} resize-none`} /></div>
        <button type="submit" disabled={isSubmitting}
          className={`w-full py-3.5 rounded text-white text-sm font-medium transition-all min-h-[48px] ${isSubmitting ? 'bg-green/60' : 'bg-green hover:bg-green-mid'}`}>
          {isSubmitting ? '...' : t.btn}
        </button>
        <p className="text-muted text-xs font-light text-center mt-3">🔒 {t.rgpd}</p>
      </form>
    </div>
  )
}
