import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.button`
    background: ${COLORS.pink};
    border: none;
    border-radius: .25rem;
    padding: 1rem 2rem;
    color: ${COLORS.white};
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 0;
    cursor: pointer;

    :hover{
        background: #C75A8F;
    }
`