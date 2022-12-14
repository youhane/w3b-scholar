import styled, { keyframes } from "styled-components";
import { COLORS } from "../../../constants/styles";
import Image from "next/image";
import {motion} from "framer-motion";

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

  position: fixed;
  width: calc(100vw - 21rem);
  top: 4rem;

  z-index: 1000;

  @media (max-width: 1024px) {
    padding: 0.75rem 2rem;
    width: calc(100vw - 19rem);

    .default {
      display: none;
    }
  }

  @media (max-width: 768px) {
    margin: 0 2.5rem;
    padding: 0.25rem 1rem;
    width: calc(100vw - 7rem);

    top: 2rem;
  }
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
  align-items: center;
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
    font-size: 1rem;
    padding: 1rem 1.5rem;

    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem 1.25rem;

    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 440px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
`;

export const ProfileImage = styled(Image)`
  border-radius: 50px;
  @media (max-width: 1024px) {
    display: none !important;
  }
`;

export const ProfileImageTrue = styled.div`
  border-radius: 50px;
  width: 55px;
  height: 55px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  @media (max-width: 1024px) {
    display: none !important;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 45px;
  height: 50px;
`;

export const LogoImageWrapper = styled.img`
  width: 54px;
  height: 60px;
  @media (max-width: 1024px) {
    width: 45px;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 30px;
    height: 35px;
  }
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
    margin: 5rem 0;
    flex-direction: column;
  }
  @media (max-width: 440px) {
    gap: 1rem;
    margin: 2rem 0;
  }
`;
export const AnchorTag = styled.a`
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${COLORS.darkGrey};
  display: block;
  @media (max-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 440px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const HamburgerIcon = styled.img`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  &::before {
    visibility: hidden;
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.darkGrey};
    z-index: 1400;
    opacity: 0.5;
    ${({ active }) => active && `visibility: visible;`}
  }

`;

export const HamburgerItemWrapper = styled(motion.nav)`
  padding: 5rem 3.5rem;
  border-radius: 16px 0px 0px 16px;
  background: ${COLORS.white};
  display: flex;
  flex-direction: column;
  width: 33vw;
  flex-basis: 400px;
  transform: translateX(0%);
  .undefault {
    display: none;
  }
  align-items: flex-start;
  height: 100%;
  z-index: 1500;
  position: fixed;
  top: 0;

  @media (max-width: 1024px) {
    width: 45vw;
    .undefault {
      display: block;
    }
  }

  @media (max-width: 440px) {
    width: 50%;
    padding: 2rem 1.5rem;
  }
`;

export const HamburgerHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 440px) {
    .closeIcon {
      width: 10px;
    }
  }
`;

export const HamburgerProfileImage = styled(Image)`
  border-radius: 50px;
  width: 55px;
  height: 55px;
  @media (max-width: 440px) {
    width: 35px !important;
    height: 35px !important;
  }
`;


export const HamburgerProfileImageTrue = styled.div`
  border-radius: 50px;
  width: 55px;
  height: 55px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  @media (max-width: 440px) {
    width: 35px !important;
    height: 35px !important;
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #c80303;

  img {
    width: 2rem;
    height: 2rem;
    padding-right: 1rem;
  }

  @media (max-width: 440px) {
    font-size: 1rem;
    img {
      width: 1rem;
      height: 1rem;
      padding-right: 0.5rem;
    }
  }
`;
