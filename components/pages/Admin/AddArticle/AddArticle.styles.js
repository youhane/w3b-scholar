import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    gap: 5rem;
    margin: 13rem 0;
    margin-bottom: 3rem;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 1rem;
        margin-top: 7.5rem;
    }
`