import Link from 'next/link';
import Head from 'next/head';
import {MdOutlineWest} from 'react-icons/md';

function SettingsPg() {
  return (
    <div>
      <Head>
        <title>User Settings</title>
      </Head>

      <h3 className="ma4">
        Change My Settings
      </h3>

      <div className="flex">
        <h4 className="ma4">
          <Link href="/">
            <MdOutlineWest className="mh1" />
              Back to Homepage
          </Link>
        </h4>
      </div>
    </div>
  )
}

export default SettingsPg;