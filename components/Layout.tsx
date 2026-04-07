import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Topbar from './Topbar'
import Navbar from './Navbar'
import { InstagramIcon, FacebookIcon, LinkedInIcon } from './Icons'
export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation('common')
  return (
    <>
      <a href="#main" className="skip-link">{t('nav.skip')}</a>
      <Topbar />
      <Navbar />
      <main id="main" tabIndex={-1} className="pt-[calc(43px+58px)]">{children}</main>
      <footer className="bg-ink text-white pt-10 pb-6 px-[5%] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">
          <div>
            <img src="/logo.svg" alt="Apollon Construction" style={{ height:'52px', width:'auto', marginBottom:'1rem', filter:'brightness(0) invert(1)', display:'block' }} />
            <a href="mailto:info@apollonconstruction.be" className="block text-white/50 text-sm font-light hover:text-white/80 mb-2">info@apollonconstruction.be</a>
            <a href="tel:+32486278852" className="block text-white font-bold text-base hover:text-white/80">0486 27 88 52 <span className="text-white/40 text-xs font-normal">(FR)</span></a>
            <a href="tel:+32499896086" className="block text-white font-bold text-base hover:text-white/80">0499 89 60 86 <span className="text-white/40 text-xs font-normal">(NL)</span></a>
            <div className="flex gap-2 mt-3">
              <a href="https://www.instagram.com/apollon.construction" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20"><InstagramIcon className="w-4 h-4 text-white/60" /></a>
              <a href="https://www.facebook.com/profile.php?id=61570944591480" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20"><FacebookIcon className="w-4 h-4 text-white/60" /></a>
              <a href="https://www.linkedin.com/company/apollon-construction" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20"><LinkedInIcon className="w-4 h-4 text-white/60" /></a>
            </div>
          </div>
          <div>
            <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-3">Navigation</p>
            <ul className="space-y-1.5 list-none">
              <li><Link href="/#services" className="text-white/40 text-sm font-light hover:text-white/80">{t('nav.services')}</Link></li>
              <li><Link href="/facade-toiture" className="text-white/40 text-sm font-light hover:text-white/80">{t('nav.facade')}</Link></li>
              <li><Link href="/primes" className="text-white/40 text-sm font-light hover:text-white/80">{t('nav.primes')}</Link></li>
              <li><Link href="/contact" className="text-white/40 text-sm font-light hover:text-white/80">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-3">{t('lang.switcher_label')}</p>
            <ul className="space-y-1.5 list-none">
              <li><Link href="/" locale="fr" className="text-white/40 text-sm font-light hover:text-white/80">FR — Français</Link></li>
              <li><Link href="/" locale="nl" className="text-white/40 text-sm font-light hover:text-white/80">NL — Nederlands</Link></li>
              <li><Link href="/" locale="en" className="text-white/40 text-sm font-light hover:text-white/80">EN — English</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white/60 text-xs font-medium tracking-widest uppercase mb-3">Info</p>
            <ul className="space-y-1.5 list-none">
              <li><a href="mailto:info@apollonconstruction.be" className="text-white/40 text-sm font-light hover:text-white/80">{t('footer.legal')}</a></li>
              <li><a href="mailto:info@apollonconstruction.be" className="text-white/40 text-sm font-light hover:text-white/80">{t('footer.rgpd')}</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <p className="text-white/30 text-xs font-light">{t('footer.copy')}</p>
          <p className="text-white/30 text-xs font-light">{t('footer.vat')}</p>
        </div>
      </footer>
    </>
  )
}
