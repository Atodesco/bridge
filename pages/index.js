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
      <div className="text-2xl box-border h-20 w-128 bg-amber-100 text-center py-3 underline border">
            Bridge club du cercle du commerce - Sète 16 quai du maréchal de Lattre de Tassigny - 34200 SETE
         </div>
    </div>
  );
}