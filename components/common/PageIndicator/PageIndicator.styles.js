import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
    color: ${COLORS.pink};
    width: fit-content;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin: 0 4rem;
    font-size: 1.25rem;

    span{
        background: ${COLORS.white};
        display: flex;
        border-radius: 1rem;
        padding: .5rem;
    }

    @media (min-width: 1024px){
        display: none;
    }

    @media (max-width: 320px){
        font-size: 1rem;
        margin: 0 2rem;

        span{
            padding: .25rem;
        }
    }
`