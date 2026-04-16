import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'
import '../styles/globals.css'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PLDGJCSW'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      {/* Google Ads */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18095607023" strategy="afterInteractive" />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18095607023');
        `}
      </Script>
      {/* GTM noscript */}
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>
      <Component {...pageProps} />
      <Toaster position="bottom-center" toastOptions={{ duration: 5000, style: { background: '#1C1A14', color: '#fff', borderRadius: '6px' } }} />
    </>
  )
}

export default appWithTranslation(App)
