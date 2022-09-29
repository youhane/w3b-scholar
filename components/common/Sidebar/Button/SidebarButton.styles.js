import styled from "styled-components";
import { COLORS } from "../../../../constants/styles";

export const Wrapper = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    border: none;
    background: transparent;
    margin: .75rem 0;
    font-size: 1.25rem;
    font-weight: 300;
    cursor: pointer;
    color: ${props => props.isActive && COLORS.pink};
    width: max-content;

    :hover{
        color: ${props => props.hoverColor ? props.hoverColor : COLORS.borderBlue};
    }
`