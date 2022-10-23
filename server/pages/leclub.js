import { Navbar } from "../components/navbar";
import Image from "next/image";
import VraiLogo from "../img/logo-original.jpg";
import Logo from "../img/logo.png";

function leclubPage() {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <div className="my-5 text-center">
        <h className="text-4xl font-bold text-justify text-slate-500 mt-7 mb-5 ml-5">
          CLUB DU BRIDGE DU CERCLE DU COMMERCE
        </h>
        <div className="grid grid-cols-5">
          <div></div>
          <div className="col-span-3">
            <img src="club1.jpg" className="mx-auto my-8 "></img>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div></div>
          <p className="col-span-3 text-left ml-5 text-justify mt-5 text-xl">
            Le club est une des plus vieilles institutions sétoises (voir
            l&apos;historique). Situé sur les quais en centre ville de Sète le
            club est propriétaire de ses locaux. Au total 170 m2 qui comprennent
            2 salles de jeux et une salle regroupant le secrétariat et un espace
            détente. En 2020, le club comptait 150 licenciés mais la crise
            sanitaire du Covid a malheureusement fait chuter les effectifs à une
            centaine de licenciés. Le conseil d&apos;administration est renouvelé
            tous les 3 ans et comprend 10 membres. Le président actuel Alain
            Todesco a pris ses fonctions depuis 2014. Une vingtaine de joueurs
            sont classés en première série. Une dizaine de membres
            « sympathisants » vienne renforcer les effectifs. Les tournois se
            déroulent les lundi, mercredi et vendredi après-midi à 14h30. Le
            nombre de tables varie entre 8 à 13 tables (15 à 20 tables avant le
            covid). Le club anime une école de bridge autour de moniteurs
            diplômés (débutant, deuxième année et perfectionnement). Des
            animations club ponctuelles sont organisées telles le tournoi des
            joutes, le tournoi de pâques, le tournoi de Noël, le tournoi de
            « fin d&apos;année». Le premier week-end de juillet le club organise
            le Festival régional de la Saint Pierre qui regroupe 200
            participants venant principalement du Languedoc-Roussillon.
            Bienvenue dans notre club.
          </p>
        </div>
        <div className="my-10 grid grid-cols-5">
          <div></div>
          <div className="col-span-3">
            <div className="">
              Cliquez pour télécharger les historiques
              <div className="my-5">
                <a
                  href="pdf1.pdf"
                  className="text-blue-600/100 text-2xl"
                  target="_blank"
                >
                  Ici
                </a>
              </div>
              <div className="my-5">
                <a
                  href="pdf2.pdf"
                  className="text-blue-600/100 text-2xl"
                  target="_blank"
                >
                  Et là
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5">
          <div></div>
          <div className="col-span-3">
            <img src="club2.jpg" className="mx-auto my-8 "></img>
          </div>
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

export default leclubPage;
