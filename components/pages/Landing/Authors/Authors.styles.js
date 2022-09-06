import styled from "styled-components";

export const Wrapper = styled.section`
    text-align: center;
    background: white;
    border-bottom-left-radius: 1rem;
    position: relative;
    padding-top: 10rem;
    box-shadow: 0px 8px 15px rgba(57, 73, 85, 0.05);

    p{
        margin-top: 3rem;
    }

    .filler{
        width: 30%;
    }

    .more{
        position: absolute;
        left: 50%;
        bottom: 1rem;
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`