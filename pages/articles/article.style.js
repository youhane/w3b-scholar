import styled from "styled-components";
import { COLORS } from "../../constants/styles";

// export const Wrapper = styled.div`
//   display: grid;
//   grid-template-rows: auto auto;
// `;

export const ArticleContent = styled.div`
  height: 200vh;
`;

export const ArticleWrapper = styled.div`
  margin: auto;
  width: 95%;

  h1 {
    margin-bottom: 0.2em;
    background: linear-gradient(91.62deg, #3c9fd7 0%, #009483 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  strong {
    margin-bottom: 0.2em;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    line-height: 28px;
  }

  @media (max-width: 1280px) {
    width: 80%;
    height: 2.75em;
  }
`;

export const AuthorWrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  padding: 1em 0;
  justify-content: space-between;
  alignt-items: center;
`;

export const LinkButton = styled.div`
  max-width: 7em;
  max-height: 2em;
  background-color: ${COLORS.pink};
  border-radius: 8px;
  padding: 0.8em 1.6em;
  font-weight: 400;
  font-size: 12px;
  color: white;
  user-select: none;
  display: flex;
  gap: 0.4em;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${COLORS.pinkHover};
  }
`;

export const ScrollButton = styled.div`
  max-width: 7em;
  background-color: ${COLORS.pink};
  border-radius: 8px;
  padding: 0.8em 1.6em;
  font-weight: 400;
  font-size: 12px;
  color: white;
  display: flex;
  gap: 0.4em;
  justify-content: center;
  align-items: center;
  user-select: none;

  position: absolute;
  bottom: 5em;
  right: 9.2em;

  @media (max-width: 1280px) {
    right: 14%;
  }

  :hover {
    background-color: ${COLORS.pinkHover};
  }
`;

export const BackButton = styled.div`
  color: ${COLORS.darkGrey};
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-weight: 500;
  font-size: 16px;
  text-decoration: underline;
  margin-bottom: 1em;
  user-select: none;

  :hover {
    color: ${COLORS.darkblue};
  }
`;

export const ArticleAlert = styled.div`
  position: absolute;
  z-index: 100;
  right: 14%;
  margin-top: -2.5em;
  transition: 0.2s ease-in-out;
`;
