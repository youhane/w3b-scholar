import styled from "styled-components";

import { COLORS } from "../../../constants/styles";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;

    input{
        display: none;
    }

    label{
        img{
            border-radius: 50%;
            max-width: 7rem;
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