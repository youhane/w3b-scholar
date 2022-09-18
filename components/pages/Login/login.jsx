import React, { useState } from "react";
import Router from "next/router";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import Link from "next/link";
import {
  ContentWrapper,
  FormWrapper,
  LogoWrapper,
  Title,
  Wrapper,
  LeftFormWrapper,
  StyledButton,
  FileLabelWrapper,
  SignUpWrapper,
  ImgWrapper,
  ErrorMsg,
} from "./login.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    setErrorMsg(null);
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          if (res) {
            Router.push("/");
          }
        })
        .catch((err) => {
          if (err.message == "Firebase: Error (auth/user-not-found).") {
            setErrorMsg("Akun tidak ditemukan, coba lagi");
          } else if (err.message == "Firebase: Error (auth/invalid-email).") {
            setErrorMsg("Email salah, coba lagi");
          } else if (err.message == null) {
            alert(`SUCCESFULLY LOGGED IN - ${email}`);
            resetinput();
          }

          alert(err.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const resetinput = () => {
    setEmail("");
    setPassword("");
  };

  const registerWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider).catch((err) => alert(err.message));
      alert("SUCCESSFULLY REGISTERED");
      Router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Wrapper>
      <Link href="/">
        <LogoWrapper>
          <img src="/static/assets/w3bLogoLight.png" alt="W3B Logo" />
        </LogoWrapper>
      </Link>

      <Title>Login</Title>
      <ContentWrapper>
        <LeftFormWrapper>
          <ImgWrapper>
            <img src="/static/assets/loginImage.svg" alt="Login" />
          </ImgWrapper>
        </LeftFormWrapper>
        <FormWrapper
          id="FormWrapper"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          errorMsg={errorMsg}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="on"
          />

          <ErrorMsg>{errorMsg}</ErrorMsg>

          <StyledButton onClick={login}>Login</StyledButton>
          <SignUpWrapper>
            <div>atau</div>
            <FileLabelWrapper onClick={registerWithGoogle}>
              <img src="/static/assets/googleIcon.png" alt="Google" />
              Masuk dengan Google
            </FileLabelWrapper>
          </SignUpWrapper>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;
