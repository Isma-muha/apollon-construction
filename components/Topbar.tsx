import { useTranslation } from 'next-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { InstagramIcon, FacebookIcon } from './Icons'
export default function Topbar() {
  const { t } = useTranslation('common')
  return (
    <div className="bg-green text-white py-1.5 px-[5%] flex justify-between items-center gap-3 relative z-50">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-0 min-w-0">
        <a href="tel:+32499896086" className="text-white text-[13px] md:text-base font-medium md:font-semibold hover:text-white/80 transition-colors flex items-center gap-1.5 whitespace-nowrap leading-tight">
          📞 <span>0499 89 60 86</span>
        </a>
        <a href="mailto:info@apollonconstruction.be" className="text-white/80 hover:text-white transition-colors text-sm hidden lg:block">
          ✉ info@apollonconstruction.be
        </a>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <LanguageSwitcher compact />
        <a href="https://www.instagram.com/apollon.construction" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 bg-white/15 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
          <InstagramIcon className="w-4 h-4 text-white" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61570944591480" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 bg-white/15 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
          <FacebookIcon className="w-4 h-4 text-white" />
        </a>
      </div>
    </div>
  )
}
