import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Wrapper, Profile, StyledLink } from "./MainNavigation.styles";
import { COLORS } from "../../constants/styles";

const MainNavigation = (props) => {
  const router = useRouter();
  const route = router.route;

  const [isHoveringArtikel, setIsHoveringArtikel] = useState(false);
  const [isHoveringPenulis, setIsHoveringPenulis] = useState(false);

  const handleMouseEnterArtikel = () => {
    setIsHoveringArtikel(true);
  };

  const handleMouseLeaveArtikel = () => {
    setIsHoveringArtikel(false);
  };

  const handleMouseEnterPenulis = () => {
    setIsHoveringPenulis(true);
  };

  const handleMouseLeavePenulis = () => {
    setIsHoveringPenulis(false);
  };
  return (
    <Wrapper>
      <img
        src="/static/assets/w3bLogoLight.png"
        alt="W3B Logo"
        onClick={() => {
          router.push("/");
        }}
      />
      <nav>
        <Link href="/articles">
          <a
            onMouseEnter={handleMouseEnterArtikel}
            onMouseLeave={handleMouseLeaveArtikel}
            style={{
              color: isHoveringArtikel
                ? `${COLORS.pinkHover}`
                : route === "/articles"
                ? `${COLORS.pink}`
                : `${COLORS.darkGrey}`,
            }}
          >
            Artikel
          </a>
        </Link>
        <Link href="/authors">
          <a
            onMouseEnter={handleMouseEnterPenulis}
            onMouseLeave={handleMouseLeavePenulis}
            style={{
              color: isHoveringPenulis
                ? `${COLORS.pinkHover}`
                : route === "/authors"
                ? `${COLORS.pink}`
                : `${COLORS.darkGrey}`,
            }}
          >
            Penulis
          </a>
        </Link>
      </nav>
      <Profile
        onClick={() => {
          router.push("/profile");
        }}
      >
        <img
          src={
            props.profileImg
              ? props.profileImg
              : "/static/assets/w3bLogoDark.png"
          }
          alt="Profile Pic"
        />
      </Profile>
    </Wrapper>
  );
};

export default MainNavigation;
