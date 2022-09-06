import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.button`
    background: ${props => props.color ? props.color : COLORS.pink};
    border: none;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: 1rem 2rem;
    color: ${COLORS.white};
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 0;
    cursor: pointer;

    :hover{
        background: #C75A8F;
    }

    span{
        font-size: 1.2rem;
        display: flex;
    }
`