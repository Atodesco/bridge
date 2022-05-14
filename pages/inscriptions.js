import Head from "next/head";
import { Navbar } from "../components/navbar";

import Logo from "../img/logo.png";
import VraiLogo from "..//img/logo-original.jpg";
import Image from "next/image";

async function SendMail(event) {
  console.log(event);
  console.log(event.nativeEvent.srcElement);
  event.preventDefault();
  let data = {
    nom1: event.target.Nom1.value,
    nom2: event.target.Nom2.value,
    date: event.target.Date.value,
    email: event.target.email.value,
    numero: event.target.numero.value,
    autres: event.target.Autres.value,
  };
  fetch("/api/email", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function InscriptionsPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-red-900">
        <div className="text-3xl font-medium box-sizing h-20 bg-orange-50 text-center py-5">
          FORMULAIRE D&aposINSCRIPTION À UN TOURNOI
        </div>
        <div className="bg-cover bg-no-reapeat justify-center items-center flex bg-orange-50">
          <form
            className="grid grid-cols1 gap-6  box-border w-80 text-white"
            onSubmit={SendMail}
          >
            <input
              required
              className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
              id="Nom1"
              type="Nom1"
              aria-label="Nom1"
              placeholder="Nom et Prenom du premier joueur"
            />

            <input
              className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
              id="Nom2"
              type="Nom2"
              aria-label="Nom2"
              placeholder="Nom et Prenom du deuxieme joueur"
            />
            <div className="text-1xl text-black italic">
              Si vous n&aposavez pas de binome et que vous en cherchez un
              laissez le champ vide et indiquez le nous dans les message
              complementaires
            </div>
            <input
              required
              className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
              id="Date"
              type="string"
              aria-label="Date"
              placeholder="Date du Tournoi  (jj/mm/aaaa)"
            />
            <input
              required
              className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
              id="email"
              type="email"
              aria-label="email address"
              placeholder="Email addresse"
            />
            <input
              required
              className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
              id="numero"
              type="numero de telephone"
              aria-label="numero de telephone"
              placeholder="Numero de telephone"
            />
            <input
              className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
              id="Autres"
              type="longtext"
              aria-label="Autres"
              placeholder="Message complementaires"
            />

            <div className="mx-auto py-1">
              <button
                className="bg-green-600 hover:bg-blue-700 duration-300 text-white shadow p-6 rounded-lg"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="grid grid-cols-3 gap-1 place-items-stretch  bg-zinc-900">
        <div className="ml-6 my-12">
          <span className="text-2xl text-white font-small">
            BRIDGE CLUB DU CERCLE DU COMMERCE 2022
          </span>
        </div>
        <div className="relative left-20 w-60 ml-10 py-10">
          <Image
            src={VraiLogo}
            className=""
            alt="Logo"
            width={250}
            height={120}
          />
        </div>

        <div className="relative left-60 w-60">
          <Image src={Logo} className="" alt="Logo" width={190} height={190} />
        </div>
      </footer>
    </div>
  );
}

export default InscriptionsPage;
