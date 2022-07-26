import "../styles/globals.css";
import Navbar from "../components/navbar.js";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bridge Sete</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
