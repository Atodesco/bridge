import Head from "next/head";
import { Navbar } from "../components/navbar";
import Link from "next/Link";
import Pin from "../public/pin.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="text-2xl box-border h-20 w-128 bg-orange-50 text-left py-5 px-9 font-">
        BRIDGE CLUB DU CERCLE DU COMMERCE : SÈTE
      </div>
      <div className="container">
        <img src="/bridge-resize.png" alt="Bridge" className="image" />
        <div className="overlay">
          <div className="text">
            <span className="longtexte">
              <h1 className="text-3xl font-medium"> JOUEZ AU BRIDGE</h1>
              Plus qu'un jeu de cartes convivial, le bridge est un sport
              d'esprit hautement intellectuel. Il a toute sa place dans nos deux
              salons situés aux premiers étages du self et du Manoir. Vous
              pourrez y jouer tout à loisir dans des parties amicales et, si
              vous aimez la competition, participer à des tournois organisés
              simultanément dans toute la France.
            </span>
          </div>
          <div className="contact">
            <span>Nous contacter</span>
            <li>04 67 74 84 59</li>
            <li>bridge.cercle.du.commerce.sete@gmail.com</li>
          </div>
        </div>
      </div>

      {/* <div className="absolute hover:opacity-80 bg-white-0 text-6xl font-black text-white w-fit h-fit">
          PARAGRAPHE 2
        </div>
        <img
          src="/bridge-resize.png"
          className="transition duration-300 ease-in-out"
        />
      </div> */}

      <div class="flex items-stretch px-3 py-9">
        {/*-------------1er image---------------*/}
        <div class="px-9">
          <div className="picture">
            <img src="/tmp.jpg" />
            <div className="overlay2">
              <div className="text2">
                <span className="longtexte">
                  <h1 className="text-3xl font-medium"> INSCRIPTIONS</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*-------------2e image---------------*/}
        <div class=" px-9">
          <div className="picture">
            <img src="/tmp.jpg" />
            <div className="overlay2">
              <div className="text2">
                <span className="longtexte">
                  <h1 className="text-3xl font-medium"> RÉSULTATS</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*-------------3e image---------------*/}
        <div class=" px-9">
          <div className="picture">
            <img src="/tmp.jpg" alt="Bridge" className="image" />
            <div className="overlay2">
              <div className="text2">
                <span className="longtexte">
                  <h1 className="text-3xl font-medium"> COMPÉTITIONS</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-2xl box-border h-20 w-128 bg-orange-50 text-left py-4 px-9 font-bold text-center">
        RETROUVEZ NOUS AU : 16 QUAI DU MARECHAL DE LATTRE DE TASSIGNY - 34200
        SÈTE
      </div>

      <div className="grid grid-cols-2 gap-1 place-items-stretch bg-orange-50 w-100">
        <div className="text-xl font-small py-10">
          <h1 className="font-bold text-3xl text-black text-center py-10">
            HORAIRES D'OUVERTURE{" "}
          </h1>
          <div className="text-1xl text-center font-small">
            <li>Lundi: 8h-18h</li>
            <li>Mardi: 8h-18h</li>
            <li>Mercredi: 8h-18h</li>
            <li>Jeudi: 8h-18h</li>
            <li>Vendredi: 8h-18h</li>
            <li>Samedi: 8h-18h</li>
            <li>Dimanche: 8h-18h</li>
          </div>
        </div>
        <img src="/Map.png" className="py-9 mx-auto" />
      </div>
    </div>
  );
}
