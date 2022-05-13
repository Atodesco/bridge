/*  ./components/Navbar.jsx     */
import Link from "next/Link";
import Logo from "../img/logo.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <nav className="flex flex-wrap bg-zinc-900 px-8 p-1 ">
        <Link href="/">
          <a>
            <Image
              src={Logo}
              className=""
              alt="Logo"
              width={190}
              height={190}
            />
          </a>
        </Link>
        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-end items-start mb-3 flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small  hover:bg-green-600 hover:text-white text-2xl">
                ACTUALITES
              </a>
            </Link>
            <Link href="/inscriptions">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                INSCRIPTIONS
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                RESULTATS
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                COMPETITIONS
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                A PROPOS
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                CONTACT
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
