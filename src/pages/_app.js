import Footer from '@/componentes/Footer'
import Nav from '@/componentes/Nav'
import '@/styles/globals.css'

import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </SWRConfig>
  )
}
