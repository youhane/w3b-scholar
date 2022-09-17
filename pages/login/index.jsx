import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext } from "react";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";
import Image from "next/image";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(AuthContext); // this is the context for user metadata, for more: https://firebase.google.com/docs/reference/js/firebase.User

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).catch((err) =>
        alert(err.message)
      );
      alert(`SUCCESFULLY LOGGED IN - ${email}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Welcome:</h2>

      {user === null ? (
        <h3>Not logged in</h3>
      ) : (
        <>
          {/* <Image
            src={user.photoURL}
            width={100}
            height={100}
            alt="image-alt-text"
          /> */}
          <h3>Logged in as {user.displayName}</h3>
        </>
      )}
      {user != null ? (
        user.photoURL != null ? (
          <>
            <Image
              src={user.photoURL}
              width={100}
              height={100}
              alt="image-alt-text"
            />
          </>
        ) : (
          <>no img</>
        )
      ) : (
        <>no user</>
      )}
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
