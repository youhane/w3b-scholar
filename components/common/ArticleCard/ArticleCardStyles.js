<<<<<<< HEAD
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 24rem;
  display: grid;
  grid-template-rows: 9rem 4.5rem 4.5rem;
  grid-template-areas: "image" "title" "other";
  box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
  background: #ffffff;
  border-radius: 0.8rem;

  color: #394955;

  @media (max-width: 1280px) {
    width: 20rem;
    grid-template-rows: 7.5rem 3.75rem 3.75rem;
  }

  @media (max-width: 768px) {
    width: 16rem;
    grid-template-rows: 6rem 3rem 3rem;
    box-shadow: 0px 4px 7px rgba(57, 73, 85, 0.05);
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  background-size: cover;
`;

export const CardTitleWrapper = styled.div`
  grid-area: title;
  margin: 1.2rem;
  @media (max-width: 768px) {
    margin: 0.6rem;
  }
`;

export const CardTitle = styled.h1`
  font-family: "Rubik";
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 300;

  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 16px;
  }
`;

export const CardOtherWrapper = styled.div`
  grid-area: other;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem;
  @media (max-width: 768px) {
    margin: 0.6rem;
  }
`;

export const CardDate = styled.p`
  font-family: "Rubik";
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 16px;
    text-align: right;
  }
`;
export const ArticleAlert = styled.div`
  position: absolute;
  z-index: 100;
  top: 2rem;
  right: 0rem;
  transition: 0.2s ease-in-out;
`;

export const LinkButton = styled.div`
  background-color: #da75af;
  width: 16px;
  height: 16px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  border-radius: 8px;
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 1;
  &: hover {
    background-color: #c75a8f;
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
    padding: 8px;
    border-radius: 4px;
    right: 4px;
    top: 4px;
  }
`;
=======
import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const CardWrapper = styled.div`
  width: 24rem;
  display: grid;
  grid-template-rows: 9rem 4.5rem 4.5rem;
  grid-template-areas: "image" "title" "other";
  box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
  background: #ffffff;
  border-radius: 0.8rem;

  color: #394955;

  @media (max-width: 1280px) {
    width: 20rem;
    grid-template-rows: 7.5rem 3.75rem 3.75rem;
  }

  @media (max-width: 768px) {
    width: 16rem;
    grid-template-rows: 6rem 3rem 3rem;
    box-shadow: 0px 4px 7px rgba(57, 73, 85, 0.05);
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  background-size: cover;
`;

export const CardTitleWrapper = styled.div`
  grid-area: title;
  margin: 1.2rem;
  max-width: 20rem;

  @media (max-width: 1200px) {
    margin: 0.6rem;
    max-width: 18rem;
  }
  @media (max-width: 768px) {
    margin: 0.6rem;
    max-width: 14rem;
  }
`;

export const CardTitle = styled.h1`
  font-family: "Rubik";
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 300;
  overflow: hidden;

  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 16px;
  }
`;

export const CardOtherWrapper = styled.div`
  grid-area: other;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem;
  @media (max-width: 768px) {
    margin: 0.6rem;
  }
`;

export const CardDate = styled.p`
  font-family: "Rubik";
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 16px;
    text-align: right;
  }
`;
export const ArticleAlert = styled.div`
  position: absolute;
  z-index: 100;
  top: 2rem;
  right: 0rem;
  transition: 0.2s ease-in-out;
`;

export const LinkButton = styled.div`
  background-color: #da75af;
  width: 16px;
  height: 16px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  border-radius: 8px;
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 1;

  :hover {
    background-color: #c75a8f;
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
    padding: 8px;
    border-radius: 4px;
    right: 4px;
    top: 4px;
  }
`;
>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
