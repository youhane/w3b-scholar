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
} from "./login.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).catch((err) =>
        alert(err.message)
      );
      //   alert(`SUCCESFULLY LOGGED IN - ${email}`);
      //   resetinput();
      //   Router.push("/");
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
        <FormWrapper id="FormWrapper">
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
          />

          <SignUpWrapper>
            <StyledButton onClick={login}>Login</StyledButton>
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
