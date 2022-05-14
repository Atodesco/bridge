import { Fragment } from "react";
import Link from "next/Link";
import { Navbar } from "../components/navbar";
import Image from "next/image";
import Logo from "../img/logo.png";
import VraiLogo from "..//img/logo-original.jpg";

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
          {/* ----------IMAGE ACTU------------- */}
          <div className="border-b-4 border-zinc-500">
            <img src="/actu1.jpg" className="mx-auto my-8"></img>
          </div>
          {/* -------------DESCRIPTION ACTU--------- */}
          <div className="col-span-2 border-b-4 border-zinc-500">
            <h1 className="text-xl font-bold text-left text-slate-500 mt-7 mb-5 col-span-2">
              CHARLOTTE VIENT DE NOUS QUITTER ...
            </h1>
            <p className="row-span-2 col-span-2 text-justify">
              Depuis plus de 30 ans Charlotte a toujours été la première a
              acceuillir les nouveaux et a su s&aposoccuper des anciens en nous
              préparant des &quotapéros&quot inoubliables. C&aposest un pilier
              du club qui vient de nous quitter mais qui restera pour toujours
              dans nos coeurs.
            </p>
          </div>
          <div>{/* --------5eme col vide pour margin--------- */}</div>
        </div>
      </div>
      {/* ----------------2 actu reverse-----------------  */}
      <div className="mb-5 px-2">
        <div className="grid grid-cols-5">
          <div>{/* --------1er col vide pour margin--------- */}</div>
          {/* -------------DESCRIPTION ACTU--------- */}
          <div className="col-span-2 border-b-4 border-zinc-500">
            <h1 className="text-xl font-bold text-left text-slate-500 mt-7 mb-5 col-span-2">
              TOURNOI DE SOLIDARITÉ AVEC LES UKRAINIENS
            </h1>
            <p className="row-span-2 col-span-2 text-justify">
              Le club a organisé le vendredi 8 avril un tournoi de solidarité
              avec les Ukrainiens. La totalité des recettes, 580 euros a été
              envoyée à la fondation de France. Nous remercions tous les membres
              qui ont participé à cette action
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
        <div className="grid grid-cols-5">
          <div>{/* --------1er col vide pour margin--------- */}</div>
          {/* ----------IMAGE ACTU------------- */}
          <div className="border-b-4 border-zinc-500">
            <img src="/actu3.jpg" className="mx-auto my-8"></img>
          </div>
          {/* -------------DESCRIPTION ACTU--------- */}
          <div className="col-span-2 border-b-4 border-zinc-500">
            <h1 className="text-xl font-bold text-justify text-slate-500 mt-7 mb-5 col-span-2 ml-5">
              SOIRÉE DINER DANSANT AU VINTAGE - VENDREDI 17 JUIN 2022 QUAI DES
              MOULINS
            </h1>

            <p className="row-span-2 col-span-2 text-left ml-5 font-bold">
              Participation: Membres 20€ / Invités 40€
            </p>
          </div>
          <div>{/* --------5eme col vide pour margin--------- */}</div>
        </div>
      </div>

      {/* ----------------4 actu reverse-----------------  */}
      <div className="mb-5 px-2">
        <div className="grid grid-cols-5">
          <div>{/* --------1er col vide pour margin--------- */}</div>
          {/* -------------DESCRIPTION ACTU--------- */}
          <div className="col-span-2 border-b-4 border-zinc-500">
            <h1 className="text-xl font-bold text-left text-slate-500 mt-7 mb-5 col-span-2 mr-5">
              SIMULTANÉ D&aposENTRAIDE AUX CLUBS DU COMITÉ LR
            </h1>
            <p className="row-span-2 col-span-2 text-justify mr-5">
              Un classement individuel, catégoriel, est prévu sur les 5
              meilleurs séances, basé sur les points PE hors bonus.
            </p>
            <p className="row-span-2 col-span-2 text-left mr-5 font-bold">
              DONATION EN PE et PP IMPORTANTE
            </p>
            <p className="row-span-2 col-span-2 text-justify mr-5">
              Le règlement sera disponible début février
            </p>
          </div>
          {/* ----------IMAGE ACTU------------- */}
          <div className="border-b-4 border-zinc-500">
            <img src="/actu4.png" className="mx-auto my-8"></img>
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
