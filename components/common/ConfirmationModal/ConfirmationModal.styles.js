import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const OuterWrapper = styled.div`
    background: ${COLORS.modalOverlay};
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    position: fixed;
    top: 0;
`

export const Wrapper = styled.div`
    background: ${COLORS.white};
    border-radius: 1rem;
    padding: 3rem 5rem;
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;

        img{
            width: 30%;
        }

        p{
            font-weight: 300;
            font-size: 1.2rem;
            margin: 1rem 0;
        }
    }

    button{
        border: none;
    }

    @media (max-width: 768px){
        padding: 2rem 1rem;
        width: 75%;

        p{
            text-align: center;
        }
    }
`

export const CloseButton = styled.button`
    background: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1rem;
    cursor: pointer;
`

export const ConfirmButton = styled.button`
    width: 100%;
    background: ${COLORS.pink};
    border: 5px solid ${COLORS.pink} !important;
    color: ${COLORS.white};
    border-radius: .5rem;
    padding: .75rem 10rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    
    :hover{
        border: 5px solid ${COLORS.pinkHover} !important;
        background: ${COLORS.pinkHover};
    }

    @media (max-width: 320px){
        padding: .5rem 2rem;
        margin: 0 .5rem;
    }
`

export const DeclineButton = styled.button`
    width: 100%;
    border: 5px solid ${COLORS.pink} !important;
    background: transparent;
    color: ${COLORS.pink};
    border-radius: .5rem;
    padding: .75rem 10rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;

    :hover{
        background: ${COLORS.pink};
        color: ${COLORS.white};
    }

    @media (max-width: 320px){
        padding: .5rem 2rem;
        margin: 0 .5rem;
    }
`

export const MultipleChoice = styled.div`
    display: flex;
    flex-direction: row !important;

    @media (max-width: 768px){
        flex-direction: row !important;
    }
`