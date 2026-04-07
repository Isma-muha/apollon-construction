import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
function App({ Component, pageProps }: AppProps) {
  return (<><Component {...pageProps} /><Toaster position="bottom-center" toastOptions={{ duration: 5000, style: { background: '#1C1A14', color: '#fff', borderRadius: '6px' } }} /></>)
}
export default appWithTranslation(App)
