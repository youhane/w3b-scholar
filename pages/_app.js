import { GlobalStyles } from "../styles/GlobalStyles";
import { AuthContextProvider } from "../context/AuthContext";
import { useState } from "react";
import dynamic from "next/dynamic";
// import Navbar from "../components/common/Navbar/Navbar";
import Footer from '../components/common/Footer/Footer'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

const Navbar = dynamic(() => import("../components/common/Navbar/Navbar"), { ssr: false })

function MyApp({ Component, pageProps }) {
  const user = useState(null);
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyles />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
