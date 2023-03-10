import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/homePage.module.css';
import { MdOutlineEast } from 'react-icons/md';

export default function HomePage() {
  const name = "Aubrey"; //allow users to change name in settings
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="practice ticket" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.usernav}>
          <Link href="/signin">Sign In</Link>
          <Link href="/register">Register</Link>
        </nav>
        <section className={styles.section}>
          <header className={styles.header}>
            <h2>Hello, {name}</h2>
            <Image className={styles.homeimg} src="/homeimg.jpg" alt="tree branch with flowers" width="200" height="250" />
            <p>Welcome to the homepage!</p>
          </header>
        </section>
        <nav className={styles.navroute}>
          <Link href="/">Home<MdOutlineEast className={styles.arrow} /></Link>
          <Link href="/components">Components Library<MdOutlineEast className={styles.arrow} /></Link>
          <Link href="/settings">Settings<MdOutlineEast className={styles.arrow} /></Link>
        </nav>
      </main>
    </div>
  )
}
