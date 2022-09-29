<<<<<<< HEAD
import { GlobalStyles } from "../styles/GlobalStyles";
import { AuthContextProvider } from "../context/AuthContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const user = useState(null);
  return (
    <>
      <AuthContextProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
=======
import { GlobalStyles } from "../styles/GlobalStyles";
import { AuthContextProvider } from "../context/AuthContext";
import { useState } from "react";
import Footer from '../components/common/Footer/Footer'

function MyApp({ Component, pageProps }) {
  const user = useState(null);
  return (
    <>
      <AuthContextProvider>
        <Component {...pageProps} />
        <Footer/>
        <GlobalStyles />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
