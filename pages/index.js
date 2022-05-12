import Head from 'next/head';
import { Navbar } from '../components/navbar';
import Link from 'next/Link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <h1 className="text-6xl underline">
            random shit
         </h1>
    </div>
  );
}