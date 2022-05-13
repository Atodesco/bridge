import Head from "next/head";
import { Navbar } from "../components/navbar";

const submitContact = async (event) => {
  event.preventDefault();
  alert(`So your name is ${event.target.name.value}?`);
};

function InscriptionsPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="text-3xl font-medium box-sizing h-20 bg-orange-50 text-center py-5">
        FORMULAIRE D'INSCRIPTION À UN TOURNOI
      </div>
      <div className="bg-cover bg-no-reapeat justify-center items-center h-95 flex bg-orange-50">
        <form
          className="grid grid-cols1 gap-6  box-border w-80 text-white"
          onSubmit="{submitContact}"
        >
          <input
            className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
            id="Nom"
            type="Nom"
            aria-label="Nom"
            placeholder="Entrez votre Nom"
          />
          <input
            className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
            id="Prenom"
            type="Prenom"
            aria-label="Prenom"
            placeholder="Entrez votre Prenom"
          />
          <input
            className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
            id="Date"
            type="string"
            aria-label="Date"
            placeholder="Entrez la Date du Tournoi  (jj/mm/aaaa)"
          />
          <input
            className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
            id="email"
            type="email"
            aria-label="email address"
            placeholder="Entrez votre email addresse"
          />
          <input
            className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
            id="numero de telephone"
            type="numero de telephone"
            aria-label="numero de telephone"
            placeholder="Entrez votre numero de telephone"
          />
          <input
            className="bg-zinc-900 shadow-inner rounded-lg p-4 hover:bg-zinc-800"
            id="Autres"
            type="Autres"
            aria-label="Autres"
            placeholder="Message complementaires"
          />

          <div className="mx-auto py-9">
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
  );
}

export default InscriptionsPage;
