import styled from "styled-components";

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1280px) {
    gap: 0.5rem;
  }
`;

export const AuthorImage = styled.div`
  height: 48px;
  width: 48px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 120px;
  transition: 0.3s ease-out;

  @media (max-width: 1280px) {
    height: 40px;
    width: 40px;
  }

  :hover {
    scale: 1.2;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #394955;

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;

export const AuthorDate = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  margin: 0 !important;

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
