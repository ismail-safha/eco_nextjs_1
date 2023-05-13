import Header from "../components/Header";
import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";

import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
