import styled from "styled-components";

export const Wrapper = styled.div`
  .author-list {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 3rem;
    grid-column-gap: 1rem;
    justify-items: center;
    padding: 2rem 0.1rem;
  }

  @media (max-width: 1024px) {
    .author-list {
      width: 80%;
      grid-template-columns: auto auto;
      grid-row-gap: 1.5rem;
      grid-column-gap: 0rem;
    }

    .author-list-container {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 920px) {
    .author-list {
      width: 90%;
    }
  }

  @media (max-width: 767px) {
    .author-list {
      width: 100%;
    }
  }
`;

export const AuthorWrapper = styled.div`
  background-color: white !important;
  color: #394955;
`;
