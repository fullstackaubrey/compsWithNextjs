import Link from 'next/link';
import Head from 'next/head';
import Input from '../components/Input/Input.comp.js';
import Radio from '../components/Radio/Radio.comp.js';
import Slider from '../components/Slider/Slider.comp.js';
import Toggle from '../components/Toggle/Toggle.comp.js';
import { MdOutlineWest } from 'react-icons/md';


function ComponentsPg() {
  return (
    <div>
      <Head>
        <title>Components Library</title>
      </Head>
      <header>
        Components Library
      </header>
      <section>
        <Input />
        <Radio />
        <Slider />
        <Toggle />
      </section>
      <Link href="/">
        <MdOutlineWest />
        Return Home
      </Link>
    </div>
  )
}

export default ComponentsPg;