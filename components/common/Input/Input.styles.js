import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
    color: ${COLORS.darkGrey};
    margin-bottom: 1.5rem;

    input{
        border: 3px solid ${COLORS.borderBlue};
        border-radius: .75rem;
        padding: .75rem;
    }
`