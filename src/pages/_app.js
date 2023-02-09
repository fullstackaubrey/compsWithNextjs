import styles from '../styles/globals.css'
import Link from 'next/link';
import { MdOutlineEast } from 'react-icons/md';
import { Urbanist } from '@next/font/google'

const urbanist = Urbanist({ weight: ["700"], subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={urbanist.className}>
      <Component {...pageProps} />
    </main>
  )
}
