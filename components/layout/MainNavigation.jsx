import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Wrapper, Profile, StyledLink } from "./MainNavigation.styles";
import { COLORS } from "../../constants/styles";

const MainNavigation = (props) => {
  const router = useRouter();
  const route = router.route;

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              color: isHovering
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              color: isHovering
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
