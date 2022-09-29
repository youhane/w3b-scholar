<<<<<<< HEAD
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
=======
import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  gap: 4rem;
  justify-content: center;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1280px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    gap: 2rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: auto;
  }
`;
>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
