import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  gap: 4rem;
  justify-content: center;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  h1 {
    color: ${COLORS.darkGrey};
  }

  @media (max-width: 1280px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    gap: 2rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: auto;
  }
`;
