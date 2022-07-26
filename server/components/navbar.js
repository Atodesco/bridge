/*  ./components/Navbar.jsx     */
import NextLink from "next/link";
import Logo from "../img/logo.png";
import VraiLogo from "..//img/logo-original.jpg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <nav className="flex flex-wrap bg-zinc-900 px-8 p-1 ">
        <NextLink href="/">
          <a>
            <Image
              src={Logo}
              className="px-3"
              alt="Logo"
              width={190}
              height={190}
            />
          </a>
        </NextLink>
        <div className="mt-10 ml-20">
          <NextLink href="/">
            <a>
              <Image
                src={VraiLogo}
                className="mt-6"
                alt="Logo"
                width={250}
                height={120}
              />
            </a>
          </NextLink>
        </div>
        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-end items-start mb-3 flex flex-col lg:h-auto">
            <NextLink href="/news">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small  hover:bg-green-600 hover:text-white text-2xl">
                ACTUALITES
              </a>
            </NextLink>
            <NextLink href="/inscriptions">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                INSCRIPTIONS
              </a>
            </NextLink>
            <NextLink href="/calendrier">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                CALENDRIER
              </a>
            </NextLink>
            <NextLink href="/leclub">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                LE CLUB
              </a>
            </NextLink>
            {/* <NextLink href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                COMPETITIONS
              </a>
            </NextLink>

            <NextLink href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded text-white font-small items-center justify-center hover:bg-green-600 hover:text-white text-2xl">
                CONTACT
              </a>
            </NextLink> */}
          </div>
        </div>
      </nav>
    </>
  );
};
