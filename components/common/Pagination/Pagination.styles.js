import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const PaginationWrapper = styled.div`
  color: ${COLORS.darkGrey};
  width: 90%;
  user-select: none;
  display: flex;
  gap: 1em;
  margin: auto;
  padding: 1em;

  justify-content: space-between;
  align-items: center;

  font-weight: 400;

  button {
    all: unset;
  }

  .range {
    display: flex;
    gap: 1em;
  }

  .active {
    color: ${COLORS.pink};
  }

  .disabled {
    opacity: 0%;
    color: ${COLORS.lightGrey};
  }

  @media only screen and (max-width: 768px) {
    width: 75%;
  }
`;
