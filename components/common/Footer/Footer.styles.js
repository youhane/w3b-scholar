import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.footer`
    background: ${COLORS.darkblue};
    color: ${COLORS.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 0;
    font-weight: 500;

    img{
        width: 2%;
    }

    p{
        color: white;
    }
`