import styled from "styled-components";

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 16rem;

  @media (max-width: 1280px) {
    gap: 0.5rem;
    max-width: 9rem;
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
  max-width: 5rem;
  max-height: 36px;
`;

export const AuthorName = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #394955;
  max-width: 10rem;

  @media (max-width: 1280px) {
    font-size: 14px;
    max-width: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    max-width: 4rem;
  }
`;

export const AuthorDate = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 200;
  font-size: 10px;
  width: 8rem;
`;
