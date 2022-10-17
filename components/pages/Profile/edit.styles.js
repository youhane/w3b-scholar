import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
    background: ${COLORS.white};
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
    border-radius: 1rem;
    padding: 2rem 5rem;
    width: 100%;

    .error-message{
        color: ${COLORS.errorRed};
        font-size: .75rem;
    }

    @media (max-width: 768px){
        width: auto;
        margin: 0 3rem;
    }

    @media (min-width: 320px) and (max-width: 767px){
        padding: 2rem 1rem;
        margin: 0 1rem;
    }
`