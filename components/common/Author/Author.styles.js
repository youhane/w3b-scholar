<<<<<<< HEAD
import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
    background: ${COLORS.lightGrey};
    width: fit-content;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 3rem;

    img{
        width: 20%;
    }

    @media (max-width: 768px) {
        padding: .5rem 1rem;
        gap: .5rem;

        img{
            width: 25%;
        }
    }
`

export const Info = styled.div`
    h2{
        font-size: 1.25rem;
    }

    h3{
        font-size: 1rem;
        font-weight: 400;
    }

    @media (max-width: 768px) {
        width: 6.5rem;
        h2{
            font-size: .75rem;
        }

        h3{
            font-size: .5rem;
        }
    }
=======
import styled from "styled-components";
import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
    background: ${COLORS.lightGrey};
    width: fit-content;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 3rem;

    img{
        width: 20%;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: .75rem 1.25rem;
        gap: 1rem;

        img{
            width: 25%;
        }
    }

    @media (max-width: 767px) {
        padding: .5rem 1rem;
        gap: .5rem;

        img{
            width: 25%;
        }
    }
`

export const Info = styled.div`
    h2{
        font-size: 1.25rem;
    }

    h3{
        font-size: 1rem;
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
>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
`