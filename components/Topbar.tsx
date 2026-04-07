import { useTranslation } from 'next-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { InstagramIcon, FacebookIcon } from './Icons'
export default function Topbar() {
  const { t } = useTranslation('common')
  return (
    <div className="bg-green text-white py-2 px-[5%] flex justify-between items-center flex-wrap gap-2 relative z-50">
      <div className="flex gap-5 items-center flex-wrap">
        <a href="tel:+32486278852" className="text-white font-bold text-sm md:text-base hover:text-white/80 transition-colors flex items-center gap-1.5">
          📞 <span>0486 27 88 52</span><span className="text-white/60 text-xs font-normal">(FR)</span>
        </a>
        <a href="tel:+32499896086" className="text-white font-bold text-sm md:text-base hover:text-white/80 transition-colors flex items-center gap-1.5">
          📞 <span>0499 89 60 86</span><span className="text-white/60 text-xs font-normal">(NL)</span>
        </a>
        <a href="mailto:info@apollonconstruction.be" className="text-white/80 hover:text-white transition-colors text-sm hidden lg:block">
          ✉ info@apollonconstruction.be
        </a>
      </div>
      <div className="flex gap-2 items-center">
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
