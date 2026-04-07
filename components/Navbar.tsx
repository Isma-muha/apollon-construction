import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { MenuIcon, CloseIcon } from './Icons'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('common')
  const links = [
    { href: '/#services', label: t('nav.services') },
    { href: '/facade-toiture', label: t('nav.facade') },
    { href: '/primes', label: t('nav.primes') },
  ]
  return (
    <nav className="fixed top-[43px] left-0 right-0 z-40 px-[5%] py-2 flex items-center justify-between bg-white/97 backdrop-blur-md border-b border-cream-3 shadow-sm" role="navigation" aria-label="Navigation principale">
      <Link href="/" aria-label="Apollon Construction — Accueil">
        <img src="/logo.svg" alt="Apollon Construction" style={{ height:'54px', width:'auto', display:'block' }} />
      </Link>
      <ul className="hidden md:flex gap-6 items-center list-none" role="list">
        {links.map(l => <li key={l.href}><Link href={l.href} className="text-ink-2 text-sm hover:text-green transition-colors font-medium">{l.label}</Link></li>)}
        <li><Link href="/contact" className="bg-green text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-green-mid transition-colors">{t('nav.cta')}</Link></li>
      </ul>
      <button className="md:hidden p-2 rounded" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fermer' : 'Menu'}>
        {open ? <CloseIcon className="w-6 h-6 text-ink" /> : <MenuIcon className="w-6 h-6 text-ink" />}
      </button>
      <div id="mobile-menu" aria-hidden={!open} className={['fixed top-[calc(43px+58px)] left-0 right-0 z-30 bg-white border-b border-cream-3 flex flex-col gap-4 px-[5%] transition-all duration-300', open ? 'py-6 opacity-100 pointer-events-auto' : 'py-0 opacity-0 pointer-events-none h-0 overflow-hidden'].join(' ')}>
        {links.map(l => <Link key={l.href} href={l.href} className="text-ink-2 text-base py-2 border-b border-cream-3 font-medium" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{l.label}</Link>)}
        <Link href="/contact" className="bg-green text-white text-center py-3 rounded font-medium mt-2" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{t('nav.cta')}</Link>
      </div>
    </nav>
  )
}
