import React from 'react'
import { Wrapper } from './PinkButton.styles'

function PinkButton({ text, onClick }) {
    return (
        <Wrapper onClick={onClick}>{text}</Wrapper>
    )
}

export default PinkButton