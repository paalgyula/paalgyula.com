import type { AppProps } from 'next/app'
import '../styles/globals.css'

import '../src/i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// export default appWithTranslation(MyApp)
export default MyApp
