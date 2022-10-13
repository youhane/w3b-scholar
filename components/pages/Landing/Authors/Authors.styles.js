import styled from "styled-components";

export const Wrapper = styled.section`
    text-align: center;
    background: white;
    border-bottom-left-radius: 1rem;
    position: relative;
    padding-top: 10rem;
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);

    .center{
        position: absolute;
        top: 55%;
        left: 35%;
    }

    .more{
        position: absolute;
        left: 50%;
        bottom: 4%;
    }

    .bottom{
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding-top: 3rem;

        .center{
            position: static;
            font-size: 1rem;
        }

        .more{
            position: static;
            font-size: 1rem;
        }

        .bottom{
            display: block;
            width: 50%;
            margin: 0 auto;
        }
    }

    @media (max-width: 767px) {
        padding: 0 1rem;
        padding-top: 3rem;

        .center{
            position: static;
            font-size: .75rem;
        }

        .more{
            position: static;
            font-size: .75rem;
        }

        .bottom{
            display: block;
            width: 70%;
            margin: 0 auto;
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
    align-items: center;
    justify-content: space-evenly;

    .filler{
        height: 80%;
        transform: translateY(15%);
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        gap: 2rem;
        margin: 1rem;
        grid-template-columns: auto auto;

        .filler{
            display: none;
        }
    }

    @media (max-width: 767px) {
        grid-template-columns: auto;
        margin: 1rem 0;

        .filler{
            display: none;
        }
    }
`