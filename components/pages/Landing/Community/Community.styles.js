import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 30%;
        transform: translateY(10%);
        z-index: -10;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        padding: 2rem;
        font-size: .85rem;

        div{
            gap: 0;
        }

        img{
            width: 40%;
        }
    }
`