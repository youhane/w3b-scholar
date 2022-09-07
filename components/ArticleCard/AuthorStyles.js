import styled from "styled-components";

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 200px;
`;

export const AuthorImage = styled.div`
  height: 47px;
  width: 49px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 120px;
`;

export const AuthorName = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #394955;
`;
