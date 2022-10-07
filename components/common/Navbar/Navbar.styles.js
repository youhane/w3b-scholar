import styled from "styled-components";
import { COLORS } from "../../../constants/styles";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;

  background: ${COLORS.white};
  box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
  border-radius: 1rem;

  margin: 0 7.5rem;

  position: sticky;
  top: 4rem;

  z-index: 100;
`;

export const SignInButton = styled.button`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: ${(props) => (props.color ? props.color : COLORS.white)};
  border: 0.15rem;
  border-style: solid;
  border-color: ${COLORS.darkGrey};
  border-radius: 0.5rem;
  display: flex;
  padding: 0.6rem 1rem;
  white-space: nowrap;

  cursor: pointer;

  :hover {
    background: ${COLORS.lightGrey};
  }

  span {
    font-size: 1.2rem;
    display: flex;
  }
  @media (max-width: 1024px) {
        display: none
    }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.75rem 1.25rem;

    span {
      font-size: 1rem;
    }
  }
`;

export const ProfileImage = styled(Image)`
  border-radius: 50px;
  @media (max-width: 1024px) {
        display: none !important
    }
`;

export const LogoWrapper = styled.div`
  width: 54px;
  height: 60px;

`;

export const AnchorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 80px;
  cursor: pointer;
  @media (max-width: 1024px) {
        display: none
    }
`;
export const AnchorTag = styled.a`
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${COLORS.darkGrey};
  @media (max-width: 1024px) {
        display: none
    }
`;

export const HamburgerIcon = styled.img`
  border-radius: 50px;
  width: 55px;
  height: 55px;

`;

export const HamburgerWrapper = styled.div`
    background: ${COLORS.modalOverlay};
    display: flex;
    width: 75vw;
    justify-self: center;
    align-content: center;
    height: 100vh;
    z-index: 150;
    position: fixed; 
    top: 0;
`

export const HamburgerHeaderMenu = styled.div`
`

