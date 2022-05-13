import Head from "next/head";
import { Navbar } from "../components/navbar";

function InscriptionsPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-cover bg-no-reapeat p-8 justify-center items-center h-screen flex bg-orange-50">
        <form className="flex">
          <input
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
            id="email"
            type="email"
            aria-label="email address"
            placeholder="Enter your email address"
          />

          <div className="">
            <button
              className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
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
