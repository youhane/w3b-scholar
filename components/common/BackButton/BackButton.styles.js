import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
  color: ${COLORS.darkGrey};
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-weight: 500;
  font-size: 16px;
  text-decoration: underline;
  margin-bottom: 1em;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  width: min-content;

  :hover {
    color: ${COLORS.darkblue};
  }
`