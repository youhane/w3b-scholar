import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  width: 450px;
  grid-template-rows: 160px 80px 80px;
  grid-template-areas: "image" "title" "other";
  box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
  background: #ffffff;
  /* text-align: center; */
  border-radius: 16px;

  color: #394955;
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-size: cover;
`;

export const CardTitleWrapper = styled.div`
  grid-area: title;
  margin: 1.5rem;
`;

export const CardTitle = styled.h1`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;

export const CardOtherWrapper = styled.div`
  grid-area: other;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem;
`;

export const CardDate = styled.p`
  font-family: "Rubik";
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;
