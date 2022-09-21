import styled from "styled-components";
import { COLORS } from "../../../../constants/styles";

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: ${COLORS.white};
    padding: 5rem;
    margin-bottom: 10rem;
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);
    box-shadow: 0px -8px 20px 0px #3949550D;
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    img{
        width: 15%;
    }

    div{
        width: 50%;
    }

    h1{
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        flex-direction: column;
        padding: 4rem 2rem;

        div{
            width: 80%;
            text-align: center;
        }

        div p{
            font-size: 1rem;
        }

        h1{
            font-size: 2.5rem;
            margin: 1.5rem 0;
        }

        img{
            width: 20%;
        }
    }

    @media (max-width: 767px) {
        flex-direction: column;
        padding: 2rem;

        div{
            width: 100%;
            text-align: center;
        }

        div p{
            font-size: .75rem;
        }

        h1{
            font-size: 1.75rem;
            margin: .75rem 0;
        }

        img{
            width: 25%;
        }
    }
`