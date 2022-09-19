import styled from "styled-components";
import { COLORS } from '../../../../constants/styles'

export const Wrapper = styled.div`
    background: ${COLORS.white};
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
    border-radius: 1rem;
    padding: 2rem 5rem;
    width: 100%;

    .error-message{
        color: ${COLORS.errorRed};
        font-size: .75rem;
    }

    @media (max-width: 768px){
        width: auto;
        margin: 0 3rem;
    }

    @media (max-width: 320px){
        margin: 0 1rem;
        padding: 2rem 1rem;
    }
`

export const SubmitArticle = styled.button`
    background: ${COLORS.pink};
    border: none;
    color: ${COLORS.white};
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 2rem;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    :hover{
        background: ${COLORS.pinkHover};
    }
`

export const InputPictureButton = styled.div`
    input{
        display: none;
    }

    label{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        background: ${COLORS.white};
        padding: .5rem;
        border: 3px solid ${props => props.isFilled ? COLORS.borderBlue : COLORS.errorRed};
        border-radius: .75rem;
        width: max-content;
        cursor: pointer;

        :hover{
            background: ${COLORS.lightGrey};
        }
    }

    @media (max-width: 320px){
        /* display: none; */
    }
`

export const InputComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    input{
        border: 3px solid ${props => props.isFilled ? COLORS.borderBlue : COLORS.errorRed};
        border-radius: .75rem;
        width: 90%;
        padding: .65rem;

        :focus{
            outline: none;
        }
    }

    label{
        margin: .5rem 0;
    }

    .quill{
        height: 50vh;
        max-width: 150vh;
        border: 3px solid ${props => props.isFilled ? COLORS.borderBlue : COLORS.errorRed};
        border-radius: .75rem;

        .ql-container {
            height: 44vh;

            @media (max-width: 768px){
                height: 40vh;
            }
                
            @media (max-width: 320px){
                height: 32vh;
            }

            .ql-editor{
                height: 44vh;
                
                @media (max-width: 768px){
                    height: 40vh;
                }
                
                @media (max-width: 320px){
                    height: 32vh;
                }
            }
        }
    }

    .quill *{
        border: none;
    }
`

export const Top = styled.div`
    width: 85%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media (max-width: 768px){
        gap: 1rem;
    }
`