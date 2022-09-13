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
