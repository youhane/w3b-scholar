import styled from "styled-components";

export const Wrapper = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    border: none;
    background: transparent;
    margin: .75rem 0;
    font-size: 1.25rem;
    font-weight: 300;
    cursor: pointer;
    color: ${props => props.color && COLORS.pink};
    width: max-content;
`