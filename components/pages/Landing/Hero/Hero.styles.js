import styled from "styled-components";
import { COLORS } from "../../../../constants/styles";

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
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
    }
`

export const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    img{
        height: 85%;
    }
`