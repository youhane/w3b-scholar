import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const LinkButton = styled.div`
  max-width: 7em;
  max-height: 2em;
  background-color: ${COLORS.pink};
  border-radius: 8px;
  padding: 0.8em 1.6em;
  font-weight: 400;
  font-size: 12px;
  color: white;
  user-select: none;
  display: flex;
  gap: 0.4em;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${COLORS.pinkHover};
  }
`;