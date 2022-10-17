import styled from "styled-components";

import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
  input {
    margin-top: 0.5rem;
    border: 0.1rem solid ${COLORS.borderBlue};
    border-radius: 0.5rem;
    height: 1.5rem;
    padding-left: 0.35rem;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .error-message {
    display: none;
    color: ${COLORS.errorRed};
    font-size: 0.6rem;
  }
`