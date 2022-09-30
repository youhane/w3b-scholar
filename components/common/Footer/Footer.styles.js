import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.footer`
  background: ${COLORS.darkblue};
  color: ${COLORS.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
  font-weight: 500;

  img {
    width: 3%;
    max-width: 3rem;
  }

  p {
    color: white;
  }

  @media (max-width: 768px) {
    gap: 1rem;

    img {
      width: 5%;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 7%;
    }
  }
`;
