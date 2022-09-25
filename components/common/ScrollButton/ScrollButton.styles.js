import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
  max-width: 7em;
  background-color: ${COLORS.pink};
  border-radius: 8px;
  padding: 0.8em 1.6em;
  font-weight: 400;
  font-size: 12px;
  color: white;
  display: flex;
  gap: 0.4em;
  justify-content: center;
  align-items: center;
  user-select: none;

  position: fixed;
  bottom: 5em;
  right: 9.2em;

  @media (max-width: 1280px) {
    right: 14%;
  }

  :hover {
    background-color: ${COLORS.pinkHover};
  }
`;