import Head from 'next/head'
import { useRouter } from 'next/router'
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://apollonconstruction.be'
export default function SEO({ title, description, noindex = false }: { title: string; description: string; noindex?: boolean }) {
  const { locale, pathname } = useRouter()
  const canonical = `${SITE}${locale && locale !== 'fr' ? `/${locale}` : ''}${pathname === '/' ? '' : pathname}`
  const schema = {
    '@context':'https://schema.org','@type':'LocalBusiness',name:'Apollon Construction',description:'Entreprise de façade, toiture et rénovation à Bruxelles',url:SITE,
    telephone:['+32486278852','+32499896086'],email:'info@apollonconstruction.be',vatID:'BE1025.392.245',
    address:{'@type':'PostalAddress',addressLocality:'Bruxelles',addressRegion:'Bruxelles-Capitale',addressCountry:'BE'},
    areaServed:['Bruxelles','Ixelles','Uccle','Etterbeek','Auderghem','Saint-Gilles','Anderlecht','Schaerbeek'],
    sameAs:['https://www.instagram.com/apollon.construction','https://www.facebook.com/profile.php?id=61570944591480'],
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="fr" href={`${SITE}/`} />
      <link rel="alternate" hrefLang="nl" href={`${SITE}/nl`} />
      <link rel="alternate" hrefLang="en" href={`${SITE}/en`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE}/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Apollon Construction" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  )
}
