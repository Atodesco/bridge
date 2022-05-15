import Head from "next/head";
import { Navbar } from "../components/navbar";
import Link from "next/Link";
import Image from "next/image";
import Logo from "../img/logo.png";
import VraiLogo from "../img/logo-original.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <div className="text-2xl box-border h-20 w-128 bg-green-600 text-left text-white font-medium py-5 px-9">
        BRIDGE CLUB DU CERCLE DU COMMERCE : SÈTE
      </div>
      <div className="container">
        <img src="/Portdesete.jpg" alt="Bridge" className="image" />
        <div className="overlay">
          <div className="text">
            <span className="longtexte">
              <h1 className="text-3xl font-medium"> JOUEZ AU BRIDGE</h1>
              Plus qu&apos;un jeu de cartes convivial, le bridge est un sport
              d&apos;esprit hautement intellectuel. Il a toute sa place dans nos
              deux salons situés aux premiers étages du self et du Manoir. Vous
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

      <div className="grid grid-cols-3 gap-2 px-3 py-9 w-100">
        {/*-------------1er image---------------*/}
        <div className="px-9">
          <div className="picture">
            <Link href="/inscriptions">
              <a>
                <img src="/band1.png" />
              </a>
            </Link>
            <Link href="/inscriptions">
              <a>
                <div className="overlay2">
                  <div className="text2">
                    <span className="longtexte">
                      <h1 className="text-3xl font-medium"> INSCRIPTIONS</h1>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        {/*-------------2e image---------------*/}
        <div className=" px-9">
          <div className="picture">
            <Link href="/inscriptions">
              <a>
                <img src="/band2.png" />
              </a>
            </Link>{" "}
            <Link href="/inscriptions">
              <a>
                <div className="overlay2">
                  <div className="text2">
                    <span className="longtexte">
                      <h1 className="text-3xl font-medium"> RÉSULTATS</h1>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        {/*-------------3e image---------------*/}
        <div className=" px-9">
          <div className="picture">
            <Link href="/inscriptions">
              <a>
                <img src="/band3.png" className="object-cover h-100 w-100" />
              </a>
            </Link>{" "}
            <Link href="/inscriptions">
              <a>
                <div className="overlay2">
                  <div className="text2">
                    <span className="longtexte">
                      <h1 className="text-3xl font-medium"> COMPÉTITIONS</h1>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-2xl box-border h-20 w-128 bg-green-600 text-left py-4 px-9 font-bold text-center">
        RETROUVEZ NOUS AU : 16 QUAI DU MARECHAL DE LATTRE DE TASSIGNY - 34200
        SÈTE
      </div>

      <div className="grid grid-cols-2 gap-1 place-items-stretch bg-green-600 w-100">
        <div className="text-xl font-small py-10">
          <h1 className="font-bold text-3xl text-black text-center py-10">
            HORAIRES D&apos;OUVERTURE{" "}
          </h1>
          <div className="text-1xl text-center font-small">
            <li>Lundi: 14h30</li>
            <li>Mercredi: 14h30</li>
            <li>Vendredi: 14h30</li>
          </div>
        </div>
        <img src="/Map.png" className="py-9 mx-auto" />
      </div>

      <div className="text-2xl box-sizing w-100 px-9 py-5 font-bold text-center">
        SPONSORS
        <div className="grid grid-cols-4 gap-2 border-2 border-black py-2">
          <div className="px-9">
            <img src="/FFB.jpeg" alt="sponsors" className="mx-auto" />
          </div>
          <div className="px-9">
            <img src="/FFB.jpeg" alt="sponsors" className="mx-auto" />
          </div>
          <div className="px-9">
            <img src="/FFB.jpeg" alt="sponsors" className="mx-auto" />
          </div>
          <div className="px-9">
            <img src="/FFB.jpeg" alt="sponsors" className="mx-auto" />
          </div>
        </div>
      </div>

      <div className="text-2xl box-sizing w-100 px-9 py-5 font-bold text-center">
        EXPOSITION EN COURS
        <div className="grid grid-cols-4 gap-2 border-2 border-black py-2">
          <div className="px-9">
            <img src="/FFB.jpeg" alt="sponsors" className="mx-auto" />
          </div>
          <div className="px-9">
            <img src="/FFB.jpeg" alt="sponsors" className="mx-auto" />
          </div>
          <div className="px-9">
            <img src="/FFB.jpeg" alt="sponsors" className="mx-auto" />
          </div>
          <div className="px-9">
            <img src="/FFB.jpeg" alt="sponsors" className="mx-auto" />
          </div>
        </div>
      </div>
      {/* -----------------white point shlag-------------------- */}
      <div className="bg-white box-sizing h-20 w-100 text-white">.</div>
      {/* -----------------white point shlag-------------------- */}
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
