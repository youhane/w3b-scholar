import styled from "styled-components";
import { COLORS } from "../../../../constants/styles";

export const Wrapper = styled.div`
    background: ${COLORS.white};
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
    border-radius: 1rem;
    padding: 2rem 5rem;
    width: 50%;
    margin: 0 auto;

    button{
        width: 100%;
    }

    .error-message{
        color: ${COLORS.errorRed};
        font-size: .75rem;
    }

    @media (max-width: 768px){
        width: auto;
        margin: 0 3rem;
    }

    @media (min-width: 320px) and (max-width: 767px){
        padding: 2rem 1rem;
        margin: 0 1rem;
    }
`

export const ChangeProfilePicture = styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    input{
        display: none;
    }

    label{
        img{
            border-radius: 50%;
        }

        span{
            background: ${COLORS.pink};
            color: ${COLORS.white};
            border-radius: 50%;
            padding: .45rem;
            padding-bottom: 0.25rem;
            position: absolute;
            right: 43%;
            bottom: 0;

            @media (max-width: 768px){
                right: 40%;
            }

            @media (max-width: 320px){
                right: 30%;
            }
        }
    }
`

export const ChangePassword = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    width: 35%;

    button{
        border: 3px solid ${COLORS.pink};
        color: ${COLORS.pink};
        border-radius: .75rem;
        padding: .75rem;
        background: transparent;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 768px){
        width: auto;
    }
`