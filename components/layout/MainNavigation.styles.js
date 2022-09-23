import styled from "styled-components";
import { COLORS } from "../../constants/styles";

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  height: 3.5em;
  background-color: ${COLORS.white};
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;

  img {
    height: 2em;
    width: auto;
  }

  nav {
    display: flex;
    gap: 2em;

    a {
      font-family: "Syne";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
    }
  }

  @media (max-width: 1280px) {
    width: 77%;
    padding: 0 2%;

    nav {
      a {
        font-size: 14px;
      }
    }
  }
`;

export const Navs = styled.div`
  display: flex;
  gap: 2em;

  :hover {
    color: ${COLORS.pinkHover};
  }
`;

export const Profile = styled.div`
  img {
    border-radius: 16px;
  }
`;
