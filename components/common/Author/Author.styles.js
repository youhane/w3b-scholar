import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
    background: ${COLORS.lightGrey};
    width: fit-content;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 3rem;
`

export const Info = styled.div`
    h2{
        font-size: 1.25rem;
    }

    h3{
        font-size: 1rem;
        font-weight: 400;
    }
`