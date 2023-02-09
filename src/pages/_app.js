import '@/styles/globals.css'
import { Urbanist } from '@next/font/google'
const urbanist = Urbanist({ weight: ["700"], subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={urbanist.className}>
      <Component {...pageProps} />
    </main>
  )
}
