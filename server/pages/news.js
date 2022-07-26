import { Fragment } from "react";
import { Navbar } from "../components/navbar";
import Image from "next/image";
import Logo from "../img/logo.png";
import VraiLogo from "../img/logo-original.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function NewsPage() {
  return (
    <div>
      <Navbar />
      <div className="text-2xl box-border h-20 w-128 bg-green-600 text-left text-white font-medium py-5 px-9">
        ACTUALITÉS
      </div>
      {/* ----------------1 actu----------------- */}
      <div className="mb-5 px-2">
        <div className="grid grid-cols-5">
          <div>{/* --------1er col vide pour margin--------- */}</div>
          {/* ----------DESCR ACTU------------- */}
          <div className="border-b-4 border-zinc-500">
            <h1 className="text-xl font-bold text-left text-slate-500 mt-7 mb-5 col-span-2">
              LE CLUB RESTE OUVERT TOUT L&apos;ETE
            </h1>
            <p className="row-span-2 col-span-2 text-justify">
              Lundi, mercredi et vendredi a 14h30.
            </p>
          </div>
          {/* -------------au dessus cest la 3e colonne avec la bottom bordure zinc--------- */}
          {/* -------------ImG ACTU--------- */}
          <div className="col-span-2 border-b-4 border-zinc-500">
            <img src="/actu1.jpg" className="mx-auto my-8"></img>
          </div>
          <div></div>
        </div>
      </div>
      {/* ----------------2 actu reverse-----------------  */}
      <div className="mb-5 px-2">
        <div className="grid grid-cols-5">
          <div>{/* --------1er col vide pour margin--------- */}</div>
          {/* -------------DESCRIPTION ACTU--------- */}
          <div className="col-span-2 border-b-4 border-zinc-500">
            <h1 className="text-xl font-bold text-left text-slate-500 mt-7 mb-5 col-span-2">
              FESTIVAL DE LA SAINT PIERRE
            </h1>
            <p className="row-span-2 col-span-2 text-justify mr-5">
              Le festival de Bridge de la saint pierre s&apos;est déroulé les
              samedi et dimanche 3 juillet à la salle Brassens. Au total plus de
              200 personnes venant de toute la région Languedoc Roussillon et
              au-delà sont venues en découdre. C&apos;est une paire &apos;venus
              d&apos;alsace&apos; Mr et Me FREY qui a remporté le tournoi Mixte
              devant une paire venue d&apos;Avignon Mr et Me Renassia. La
              première paire sétoise s&apos;est classée 4°. Félicitations à Me
              Malaret et son partenaire Mr Blancard. Le grand tournoi Open a été
              remporté par une paire venant de Guadeloupe et de Montpellier Mr
              Pelletier Jean claude et Jean Louis Vives devançant une paire
              narbonnaise Me Claudette Caussignac et Mr Philippe Neuman. Les
              premiers Sétois n&apos;ont pas démérité en se classant 11, 12 et
              13. Devant le succès de cette manifestation et l&apos;excellente
              ambiance les participants ont promis de revenir l&apos;année
              prochaine.
            </p>
          </div>
          {/* ----------IMAGE ACTU------------- */}
          <div className="border-b-4 border-zinc-500">
            <img src="/actu2.jpg" className="mx-auto my-8"></img>
          </div>

          <div>{/* --------5eme col vide pour margin--------- */}</div>
        </div>
      </div>

      {/* ----------------3 actu----------------- */}
      <div className="mb-5 px-2">
        <div className="grid grid-cols-5 ">
          <div>{/* --------1er col vide pour margin--------- */}</div>
          {/* ----------IMAGE ACTU------------- */}
          <div className="col-span-2 border-b-4 border-zinc-500">
            <Carousel>
              <div>
                <img src="actu3.jpg" />
              </div>
              <div>
                <img src="actu4.jpg" />
              </div>
              <div>
                <img src="actu5.jpg" />
              </div>
              <div>
                <img src="actu6.jpg" />
              </div>
            </Carousel>
          </div>
          {/* -------------DESCRIPTION ACTU--------- */}
          <div className="col-span-1 border-b-4 border-zinc-500">
            <h1 className="text-xl font-bold text-justify text-slate-500 mt-7 mb-5 col-span-2 ml-5">
              LE TOURNOI DE FIN D&apos;ANNEE A EU LIEU LE VENDREDI 24 JUIN
            </h1>

            <p className="row-span-2 col-span-2 text-left ml-5">
              Les membres du club se sont retrouvés a l&apos;issue du tournoi au
              restaurant le «VINTAGE» pour un dîner dansant. Superbe ambiance !
            </p>
          </div>
          <div>{/* --------5eme col vide pour margin--------- */}</div>
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

      {/* -----last div---- */}
    </div>
  );
}

export default NewsPage;
