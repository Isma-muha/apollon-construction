import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const schema = z.object({
  nom: z.string().min(2),
  email: z.string().email(),
  tel: z.string().optional(),
  societe: z.string().optional(),
  profil: z.string().min(1),
  service: z.string().optional(),
  message: z.string().min(10),
  _honeypot: z.string().max(0),
})

type FormData = z.infer<typeof schema>

const ContactPage: NextPage = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    const { _honeypot, ...payload } = data
    try {
      const res = await fetch('https://formspree.io/f/mvzvdenn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) { toast.success(t('contact.success')); reset(); setSent(true) }
      else throw new Error()
    } catch { toast.error(t('contact.error')) }
    finally { setIsSubmitting(false) }
  }

  const inp = (e: boolean) => ['w-full bg-cream border rounded px-3.5 py-3 text-ink text-sm font-light outline-none transition-colors placeholder:text-muted/50', e ? 'border-red-500' : 'border-cream-3 focus:border-green'].join(' ')
  const lbl = 'block text-xs font-medium text-muted tracking-wider uppercase mb-1.5'

  return (
    <Layout>
      <SEO title={t('meta.contact_title')} description={t('meta.contact_desc')} />
      <div className="bg-cream-2 px-[5%] pt-12 pb-10 border-b border-cream-3">
        <p className="text-sm text-muted mb-3"><Link href="/" className="text-green hover:underline">Accueil</Link> / Contact</p>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-ink mb-3">{t('contact.h2')}</h1>
        <p className="text-muted font-light text-lg max-w-xl">{t('contact.desc')}</p>
      </div>
      <section className="py-16 px-[5%]">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-normal text-ink mb-6">Nos coordonnées</h2>
            <address className="not-italic space-y-4 mb-8">
              {[{icon:'📍',label:t('contact.zone_label'),value:t('contact.zone_value')},{icon:'📞',label:'Téléphone (FR)',value:'0486 27 88 52',href:'tel:+32486278852'},{icon:'📞',label:'Telefoon (NL)',value:'0499 89 60 86',href:'tel:+32499896086'},{icon:'✉',label:'Email',value:'info@apollonconstruction.be',href:'mailto:info@apollonconstruction.be'},{icon:'⏰',label:t('contact.hours_label'),value:t('contact.hours_value')}].map(({icon,label,value,href})=>(
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-cream border border-cream-3 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5" aria-hidden="true">{icon}</div>
                  <div className="text-sm"><strong className="block font-medium text-ink mb-0.5">{label}</strong>{href?<a href={href} className="text-green hover:underline font-light">{value}</a>:<span className="text-muted font-light">{value}</span>}</div>
                </div>
              ))}
            </address>
            <a href="mailto:info@apollonconstruction.be" className="inline-block bg-green text-white px-6 py-3 rounded text-sm font-medium hover:bg-green-mid transition-colors">{t('contact.email_btn')}</a>
          </div>
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl border border-cream-3 p-8 md:p-10">
              <h3 className="font-serif text-2xl font-normal text-ink mb-1">{t('contact.form_h3')}</h3>
              <p className="text-muted text-sm font-light mb-6">{t('contact.form_sub')}</p>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <p className="font-serif text-xl text-ink mb-2">Message envoyé !</p>
                  <p className="text-muted font-light text-sm">Nous vous répondons dans les 24 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 overflow-hidden"><input type="text" tabIndex={-1} autoComplete="off" {...register('_honeypot')} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="nom" className={lbl}>{t('contact.field_name')} *</label>
                      <input id="nom" type="text" autoComplete="name" placeholder={t('contact.ph_name')} className={inp(!!errors.nom)} {...register('nom')} />
                      {errors.nom && <p role="alert" className="text-red-600 text-xs mt-1">Champ requis</p>}
                    </div>
                    <div>
                      <label htmlFor="societe" className={lbl}>{t('contact.field_company')}</label>
                      <input id="societe" type="text" placeholder={t('contact.ph_company')} className={inp(false)} {...register('societe')} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className={lbl}>{t('contact.field_email')} *</label>
                      <input id="email" type="email" autoComplete="email" placeholder={t('contact.ph_email')} className={inp(!!errors.email)} {...register('email')} />
                      {errors.email && <p role="alert" className="text-red-600 text-xs mt-1">Email invalide</p>}
                    </div>
                    <div>
                      <label htmlFor="tel" className={lbl}>{t('contact.field_phone')}</label>
                      <input id="tel" type="tel" autoComplete="tel" placeholder={t('contact.ph_phone')} className={inp(false)} {...register('tel')} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="profil" className={lbl}>{t('contact.field_profile')} *</label>
                    <select id="profil" className={inp(!!errors.profil)} {...register('profil')} defaultValue="">
                      <option value="" disabled>{t('contact.ph_profile')}</option>
                      <option value="architecte">{t('contact.opt_arch')}</option>
                      <option value="ingenieur">{t('contact.opt_eng')}</option>
                      <option value="agent">{t('contact.opt_agent')}</option>
                      <option value="promoteur">{t('contact.opt_dev')}</option>
                      <option value="particulier">{t('contact.opt_priv')}</option>
                      <option value="autre">{t('contact.opt_other')}</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="service" className={lbl}>{t('contact.field_works')}</label>
                    <select id="service" className={inp(false)} {...register('service')} defaultValue="">
                      <option value="" disabled>{t('contact.ph_works')}</option>
                      <option value="facade">{t('contact.w_fac')}</option>
                      <option value="toiture">{t('contact.w_roof')}</option>
                      <option value="renovation">{t('contact.w_reno')}</option>
                      <option value="electricite">{t('contact.w_elec')}</option>
                      <option value="multiple">{t('contact.w_multi')}</option>
                      <option value="autre">{t('contact.opt_other')}</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className={lbl}>{t('contact.field_message')} *</label>
                    <textarea id="message" rows={5} placeholder={t('contact.ph_message')} className={`${inp(!!errors.message)} resize-y min-h-[120px]`} {...register('message')} />
                    {errors.message && <p role="alert" className="text-red-600 text-xs mt-1">Minimum 10 caractères</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className={['w-full py-3.5 rounded text-white text-sm font-medium transition-all min-h-[48px]', isSubmitting ? 'bg-green/60 cursor-not-allowed' : 'bg-green hover:bg-green-mid'].join(' ')}>
                    {isSubmitting ? 'Envoi en cours...' : t('contact.btn_send')}
                  </button>
                  <p className="text-muted text-xs font-light text-center mt-3">🔒 {t('contact.rgpd')}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="py-0 px-0 bg-cream-2">
        <div className="grid md:grid-cols-2">
          {/* Map embed */}
          <div className="h-80 md:h-96 relative overflow-hidden">
            <iframe
              title="Apollon Construction — Carte"
              src="https://maps.google.com/maps?q=Bd+du+Jubil%C3%A9+134+1080+Molenbeek-Saint-Jean+Bruxelles&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Info bloc */}
          <div className="bg-ink text-white p-10 flex flex-col justify-center">
            <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-4">
              {locale==='nl'?'Onze locatie':locale==='en'?'Our location':'Notre localisation'}
            </p>
            <h3 className="font-serif text-2xl font-normal text-white mb-2">Apollon Construction</h3>
            <p className="text-white/65 font-light mb-1">Dilbeek</p>
            <p className="text-white/65 font-light mb-6">Bruxelles</p>
            <a
              href="https://share.google/aO4CXjZ8n3OlEY00c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-5 py-3 rounded hover:bg-white/20 transition-colors w-fit"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {locale==='nl'?'Bekijken op Google Maps':locale==='en'?'View on Google Maps':'Voir sur Google Maps'}
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'fr', ['common'])) },
})

export default ContactPage
