import Image from "next/image";
import React, { useContext, useState } from "react";
import anon from "../../../public/static/assets/anon.png";
import {
  SignInButton,
  ProfileImage,
  Wrapper,
  AnchorWrapper,
  AnchorTag,
  LogoWrapper,
  HamburgerIcon,
  HamburgerWrapper,
  HamburgerHeaderMenu,
} from "./Navbar.styles";
import { AuthContext } from "../../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import useWindowSize from "../../../customHook/useWindowSize";

const NavItem = () => {
  const user = useContext(AuthContext);
  const { height, width } = useWindowSize();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <HamburgerWrapper>
        <HamburgerHeaderMenu>
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
            <Link href="/register">
              <SignInButton>Sign Up</SignInButton>
            </Link>
          )}
        </HamburgerHeaderMenu>
      </HamburgerWrapper>
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
          <Link href="/register">
            <SignInButton>Sign Up</SignInButton>
          </Link>
        )}

        {width >= 1024 ? (
          <></>
        ) : (
          <HamburgerIcon
            src={"/static/assets/hamburger-icon.svg"}
            onClick={handleHamburgerClick}
          />
        )}
      </Wrapper>
    </>
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
