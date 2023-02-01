import Link from 'next/link';
import Head from 'next/head';
import Input from '../components/Input/Input.comp.js';
import Radio from '../components/Radio/Radio.comp.js';
import Slider from '../components/Slider/Slider.comp.js';
import Toggle from '../components/Toggle/Toggle.comp.js';
import {MdOutlineWest} from 'react-icons/md';


function ComponentsPg() {
  return (
    <div>
      <Head>
        <title>Components Library</title>
      </Head>

      <h3 className="ma4">
        Components Library
      </h3>

      <div className="mh3">
        <section>
          <Input />
        </section>
        <section>
          <Radio />
        </section>
        <section>
          <Slider />
        </section>
        <section>
          <Toggle />
        </section>
      </div>

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

export default ComponentsPg;