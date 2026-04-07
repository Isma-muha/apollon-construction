import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
const FULL: Record<string,string> = { fr:'Français', nl:'Nederlands', en:'English' }
export default function LanguageSwitcher({ compact = true }: { compact?: boolean }) {
  const router = useRouter()
  const { locale, pathname, query } = router
  const { t } = useTranslation('common')
  const switchLocale = (l: string) => router.push({ pathname, query }, undefined, { locale: l, scroll: false })
  return (
    <fieldset style={{ border:'none', padding:0, margin:0 }}>
      <legend className="sr-only">{t('lang.switcher_label')}</legend>
      <div className="flex gap-1 items-center bg-black/15 p-0.5 rounded">
        {['fr','nl','en'].map(l => (
          <label key={l} className="cursor-pointer">
            <input type="radio" name="language" value={l} checked={locale===l} onChange={()=>switchLocale(l)} className="sr-only" aria-label={FULL[l]} />
            <span className={['block px-2 py-0.5 rounded text-xs transition-all select-none', locale===l ? 'bg-white text-green font-semibold' : 'text-white/80 hover:text-white'].join(' ')} aria-hidden="true">
              {compact ? l.toUpperCase() : FULL[l]}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
