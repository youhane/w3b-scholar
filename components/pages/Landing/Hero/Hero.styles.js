import styled from "styled-components";
import { COLORS } from "../../../../constants/styles";

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 3rem auto;
    overflow-x: hidden;

    @media (max-width: 1024px) {
        flex-direction: column;
        margin-top: 8rem;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    div{
        background: ${COLORS.blue};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: min-content;
        width: 100%;
        padding: 3rem 6rem;
        padding-right: .75rem;
        border-radius: 0px 13rem 13rem 0px;
    }
    
    h1{
        font-size: 3.5rem;
    }

    span{
        background: linear-gradient(91.62deg, #3C9FD7 0%, #009483 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-family: 'Syne', sans-serif;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        align-items: center;

        h1{
            font-size: 2.5rem;
            text-align: center;
        }

        div{
            border-radius: 10rem;
            padding: 1rem .5rem;
            align-items: center;
            gap: 1rem;
        }
    }

    @media (max-width: 767px) {
        align-items: center;

        h1{
            font-size: 1.5rem;
            text-align: center;
        }

        div{
            border-radius: 10rem;
            padding: 1rem .5rem;
            align-items: center;
            gap: 1rem;
        }
    }
`

export const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    img{
        height: 100%;
        transform: translateX(20%);
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: fit-content;
        margin-top: 2rem;

        img{
            width: 60%;
            transform: translateX(0);
        }
    }
    
    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: fit-content;
        margin-top: 2rem;
        width: 100vw;

        img{
            height: 15rem;
            transform: translateX(0);
        }
    }
`