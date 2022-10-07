import { GlobalStyles } from "../styles/GlobalStyles";
import { AuthContextProvider } from "../context/AuthContext";
import { useState } from "react";
import dynamic from "next/dynamic";
// import Navbar from "../components/common/Navbar/Navbar";
import Footer from '../components/common/Footer/Footer'

const  Navbar = dynamic(() => import("../components/common/Navbar/Navbar"), { ssr: false })

function MyApp({ Component, pageProps }) {
  const user = useState(null);
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
        <GlobalStyles />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
