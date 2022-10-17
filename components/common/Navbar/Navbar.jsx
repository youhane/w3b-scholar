import { auth } from "../../../firebase/firebase";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import React, { useContext, useEffect, useState } from "react";
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
  HamburgerItemWrapper,
  HamburgerProfileImage,
  LogoImageWrapper,
  LogoutButton,
} from "./Navbar.styles";
import { AuthContext } from "../../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import useWindowSize from "../../../customHook/useWindowSize";

const NavItem = () => {
  const user = useContext(AuthContext);
  const router = useRouter();
  const { height, width } = useWindowSize();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const variants = {
    open: { x: 0 },
    closed: { x: 1000 },
  };

  const handleHamburgerClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleLogout = () => {
    setHamburgerOpen(false)
    auth.signOut();
    router.push("/");
  };

  useEffect(() => {
    width > 1024 && setHamburgerOpen(false);
  }, [width]);

  return (
    <>
      {displayModal && (
        <ConfirmationModal
          setDisplayModal={setDisplayModal}
          text={"Are you sure you want to logout?"}
          action={handleLogout}
          multipleChoice={true}
        />
      )}
      <HamburgerWrapper active={hamburgerOpen}>
        <HamburgerItemWrapper
          initial={"closed"}
          animate={hamburgerOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0 }}
        >
          <HamburgerHeaderMenu>
            <Link href="/">
              <LogoImageWrapper
                src="/static/assets/w3bLogoLight.png"
                alt="W3B Logo"
                onClick={() => setHamburgerOpen(false)}
              />
            </Link>

            {user != null ? (
              user.photoURL != null ? (
                <a href={`/profile/${user.uid}/edit`}>
                  <HamburgerProfileImage
                    src={user.photoURL}
                    alt="image-alt-text"
                    width={width < 440 ? 35 : 55}
                    height={width < 440 ? 35 : 55}
                    onClick={() => setHamburgerOpen(false)}
                  />
                </a>
              ) : (
                <HamburgerProfileImage
                  src="/static/assets/anon.png"
                  alt="anonymus"
                  width={width < 440 ? 35 : 55}
                  height={width < 440 ? 35 : 55}
                />
              )
            ) : (
              <Link href="/sign-up">
                <SignInButton>Sign Up</SignInButton>
              </Link>
            )}
            <img
              className="closeIcon"
              src="/static/assets/hamburgerX.svg"
              alt="close icon"
              onClick={handleHamburgerClick}
            />
          </HamburgerHeaderMenu>
          <AnchorWrapper className="undefault">
            <Link href="/articles">
              <AnchorTag onClick={() => setHamburgerOpen(false)}>Artikel</AnchorTag>
            </Link>
            <Link href="/authors">
              <AnchorTag onClick={() => setHamburgerOpen(false)}>Penulis</AnchorTag>
            </Link>
            {user != null && (
              <Link href="/articles/editor">
                <AnchorTag onClick={() => setHamburgerOpen(false)}>Editor</AnchorTag>
              </Link>
            )}
          </AnchorWrapper>

          {auth.currentUser && (
            <LogoutButton onClick={() => setDisplayModal(true)}>
              <img src="/static/assets/logout.svg" alt="logout" />
              Logout
            </LogoutButton>
          )}
        </HamburgerItemWrapper>
      </HamburgerWrapper>
      <Wrapper>
        <LogoWrapper>
          <Link href="/">
            <LogoImageWrapper
              src="/static/assets/w3bLogoLight.png"
              alt="W3B Logo"
            />
          </Link>
        </LogoWrapper>
        <AnchorWrapper className="default">
          <Link href="/articles">
            <AnchorTag>Artikel</AnchorTag>
          </Link>
          <Link href="/authors">
            <AnchorTag>Penulis</AnchorTag>
          </Link>
          {user != null && (
              <Link href="/articles/editor">
                <AnchorTag>Editor</AnchorTag>
              </Link>
            )}
        </AnchorWrapper>

        {user != null ? (
          user.photoURL != null ? (
            <a href={`/profile/${user.uid}/edit`}>
              <ProfileImage
                src={user.photoURL}
                alt="image-alt-text"
                width={55}
                height={55}
                onClick={() => setHamburgerOpen(false)}
              />
            </a>
          ) : (
            <ProfileImage
              src={anon}
              alt="anonymus"
              onClick={handleHamburgerClick}
            />
          )
        ) : (
          <Link href="/sign-up">
            <SignInButton className="default">Sign Up</SignInButton>
          </Link>
        )}

        {width > 1024 ? (
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
  const navbarDisabledPages = ["/login", "/sign-up"]; //add pages that don't need navbar here

  if (!navbarDisabledPages.includes(location.pathname)) {
    return NavItem();
  } else {
    return;
  }
}

export default Navbar;
