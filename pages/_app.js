import "../styles/globals.scss";

import { Header } from "../components/Layout/Header";
import { Footer } from "../components/Layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
