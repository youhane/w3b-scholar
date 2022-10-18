import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext([{}, () => {}]);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider };
