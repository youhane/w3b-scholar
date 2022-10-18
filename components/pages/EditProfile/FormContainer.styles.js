import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
    background: ${COLORS.white};
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
    border-radius: 1rem;
    padding: 5rem;
    width: 50%;
    margin: 0 auto;

    button{
        width: 100%;
    }

    .error-message{
        color: ${COLORS.errorRed};
        font-size: .75rem;
    }

    @media (max-width: 768px){
        width: auto;
        margin: 2rem 3rem;
    }

    @media (min-width: 320px) and (max-width: 767px){
        padding: 2rem 1rem;
        margin: 1rem;
    }
`;

export const ChangePasswordButton = styled.button`
  background: ${COLORS.white};
  border: 0.1rem solid ${COLORS.pink};
  border-radius: 0.4rem;
  color: ${COLORS.pink};
  font-size: 0.8rem;
  padding: 0.5rem 2rem;
  cursor: pointer;

  :hover {
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 7.75rem;
  }
`;

export const SaveButton = styled.button`
  background: ${COLORS.pink};
  border: none;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  color: ${COLORS.white};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: 100%;

  :hover {
    background: #c75a8f;
  }
`;

export const InputBoxWrapper = styled.div`
`;
