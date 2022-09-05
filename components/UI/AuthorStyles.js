import styled from "styled-components";

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: auto;
`;

export const AuthorImage = styled.img`
  height: 47px;
  width: 49px;
  border-radius: 139px;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;

export const AuthorName = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #394955;
`;
