import Image from "next/image";
import React, { useContext } from "react";
import anon from "../../../public/static/assets/anon.png";
import {
  SignInButton,
  ProfileImage,
  Wrapper,
  AnchorWrapper,
  AnchorTag,
  LogoWrapper,
} from "./Navbar.styles";
import { AuthContext } from "../../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = () => {
  const user = useContext(AuthContext);

  return (
    <Wrapper>
      <LogoWrapper>
        <Link href="/">
          <Image
            src="/static/assets/w3bLogoLight.png"
            alt="W3B Logo"
            width="54px"
            height="60px"
            layout="fixed"
          />
        </Link>
      </LogoWrapper>
      <AnchorWrapper>
        <Link href="/articles">
          <AnchorTag>Artikel</AnchorTag>
        </Link>
        <AnchorTag>Penulis</AnchorTag>
      </AnchorWrapper>
      {user === null ? (
        <Link href="/register">
          <SignInButton>Sign Up</SignInButton>
        </Link>
      ) : (
        <></>
      )}
      {user != null ? (
        user.photoURL != null ? (
          <ProfileImage
            src={user.photoURL}
            alt="image-alt-text"
            width={55}
            height={55}
          />
        ) : (
          <ProfileImage src={anon} alt="anonymus" />
        )
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

function Navbar() {
  const location = useRouter();
  const navbarDisabledPages = ["/login", "/register"];

  if (!navbarDisabledPages.includes(location.pathname)) {
    return NavItem();
  } else {
    return;
  }
}

export default Navbar;
