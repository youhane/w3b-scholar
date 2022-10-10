import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.white};
  color: ${COLORS.darkGrey};
  border-radius: 12px;
  height: 70%;
  width: 60%;
  padding: 0.75rem 1.25rem;

  img {
    width: 20%;
    border-radius: 100%;
    border-width: 10px solid black;
  }

  p {
    font-size: 0.7rem;
  }

  .author-info {
    margin-left: 1.5rem;
  }

  @media (max-width: 1024px) {
    width: 65%;

    h3 {
      font-size: 1.1rem;
    }

    .author-info {
      margin-left: 1.25rem;
    }
  }

  @media (max-width: 767px) {
    width: 70%;

    h3 {
      font-size: 1rem;
    }

    img {
      width: 18%;
    }
  }

  @media (max-width: 640px) {
    padding: 0.7rem 1rem;

    h3 {
      font-size: 0.85rem;
    }

    img {
      width: 20%;
    }
    
    p {
      font-size: 0.65rem;
    }

    .author-info {
      margin-left: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.7rem;
    width: 80%;

    h3 {
      font-size: 0.7rem;
    }

    img {
      width: 22%;
    }

    p {
      font-size: 0.6rem;
    }
  }
`;
