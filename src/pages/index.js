import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/homePage.module.css';

export default function HomePage() {
  const name = "Darcy"; //allow users to change name in settings
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
            <h1>Hello, {name}</h1>
            <h4>Welcome to the homepage!</h4>
          </header>
        </section>
        <nav className={styles.navroute}>
          <Link href="/components">Components Library</Link>
          <Link href="/settings">User Settings</Link>
        </nav>
      </main>
    </div>
  )
}
