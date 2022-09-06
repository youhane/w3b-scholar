import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;

    img{
        position: absolute;
        top: 0;
        width: 25%;
        z-index: -10;
    }
`

export const Top = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p{
        width: 25%;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
`

export const Bottom = styled.div`
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #FFFFFF 69.58%);
    display: flex;
    align-items: center;
    justify-content: center;
`