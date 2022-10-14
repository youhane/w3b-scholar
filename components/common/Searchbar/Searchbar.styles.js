import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Container = styled.div`
  max-width: 50rem;
  background-color: ${COLORS.white};
  margin: auto;
  margin-bottom: 2em;
  padding: .5rem 1rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 11rem;

  @media (max-width: 1280px) {
    width: 80%;
    height: 2.75em;
  }

  @media (max-width: 768px) {
    margin-top: 7.5rem;
  }
`;

export const SearchInput = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 0.7em;
  color: #394955;
  opacity: 50%;
  opacity: ${(props) => (props.focusing ? "100%" : "50%")};
  
  svg {
    width: 1em;
    height: 1em;
  }

  input {
    width: 100%;
    border-style: hidden;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  font-size: 12px;
  background-color: ${COLORS.pink};
  color: ${COLORS.white};
  padding: 0.7em 1.4em;
  border-radius: 8px;
  border: none;
  :hover {
    background-color: ${COLORS.pinkHover};
  }
`;