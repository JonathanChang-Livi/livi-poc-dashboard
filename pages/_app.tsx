import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@module-federation/nextjs-mf/src/include-defaults';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
