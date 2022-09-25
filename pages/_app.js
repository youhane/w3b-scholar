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
