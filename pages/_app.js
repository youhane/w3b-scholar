import { GlobalStyles } from "../styles/GlobalStyles";
import { AuthContextProvider } from "../context/AuthContext";
import { useState } from "react";
import Navbar from "../components/common/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  const user = useState(null);
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
