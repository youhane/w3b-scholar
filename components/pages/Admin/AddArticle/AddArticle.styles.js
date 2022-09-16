import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    gap: 5rem;
    margin: 3rem 0;

    @media (max-width: 768px){
        flex-direction: column;
    }
`