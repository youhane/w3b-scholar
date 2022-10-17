import styled from "styled-components";

import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
  position: relative;

  img {
    display: block;
    border-radius: 100%;
    width: 5rem;
    margin-left: auto;
    margin-right: auto;
  }

  input {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.pink};
  border-radius: 100%;
  color: ${COLORS.white};
  height: 1.5rem;
  width: 1.5rem;
  left: 12rem;
  bottom: 0;
`