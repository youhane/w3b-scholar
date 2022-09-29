import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  gap: 4rem;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    gap: 2rem;
  }
`;
