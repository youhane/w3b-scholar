import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${props => props.color};
    width: fit-content;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 3rem;
    max-width: 15rem;
    min-width: 15rem;
    max-height: 15rem;
    cursor: pointer;

    :hover{
        background: #D3E4E1;
    }

    img{
        max-width: 10rem;
        max-height: 5rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: .75rem 1.25rem;
        gap: 1rem;
        min-height: 4rem;
        min-width: 10rem;
        max-width: 15rem;

        img{
            width: 25%;
        }
    }

    @media (max-width: 767px) {
        padding: .5rem 1rem;
        gap: .5rem;
        min-height: 3rem;
        max-height: 5rem;
        min-width: 0rem;
        max-width: 10rem;

        img{
            width: 25%;
        }
    }
`

export const Info = styled.div`
    h2{
        font-size: 1rem;
    }

    h3{
        margin-top: .25rem;
        font-size: .75rem;
        font-weight: 400;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 9rem;
        h2{
            font-size: 1rem;
        }

        h3{
            font-size: .75rem;
        }
    }

    @media (max-width: 767px) {
        width: 6.5rem;
        h2{
            font-size: .75rem;
        }

        h3{
            font-size: .5rem;
        }
    }
`