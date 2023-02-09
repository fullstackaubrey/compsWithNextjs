import Link from 'next/link';
import Head from 'next/head';
import { MdOutlineWest } from 'react-icons/md';

function SettingsPg() {
  return (
    <div>
      <Head>
        <title>User Settings</title>
      </Head>

      <header>
        Change My Settings
      </header>
      <section>
        Lorem
      </section>

      <Link href="/">
        <MdOutlineWest />
        Return Home
      </Link>
    </div>
  )
}

export default SettingsPg;