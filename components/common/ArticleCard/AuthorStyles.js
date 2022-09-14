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

  @media (max-width: 1280px) {
    height: 32px;
    width: 32px;
  }

  @media (max-width: 768px) {
    height: 24px;
    width: 24px;
  }
`;

export const AuthorName = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #394955;
  max-width: 10rem;

  @media (max-width: 1280px) {
    font-size: 14px;
    line-height: 20px;
    max-width: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 16px;
    max-width: 4rem;
  }
`;
