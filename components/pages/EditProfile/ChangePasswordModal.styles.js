import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const OuterWrapper = styled.div`
  background: ${COLORS.modalOverlay};
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
`;

export const Wrapper = styled.div`
  background: ${COLORS.white};
  border-radius: 1rem;
  padding: 0.75rem 5rem 3rem 5rem;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* gap: 0.5rem; */
    /* margin-bottom: 1rem; */

    input {
      width: 23.25rem;
    }

    p {
      font-weight: 300;
    }
  }

  button {
    border: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  background: ${COLORS.pink};
  color: ${COLORS.white};
  border-radius: 0.5rem;
  padding: 0.75rem 10rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 1rem;

  :hover {
    background: ${COLORS.pinkHover};
  }

  @media (max-width: 320px) {
    padding: 0.75rem 7rem;
  }
`;
