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

    @media (min-width: 769px) and (max-width: 1024px) {
        padding-top: 1rem;
        font-size: .85rem;

        div{
            gap: .75rem;
        }

        img{
            width: 40%;
        }
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