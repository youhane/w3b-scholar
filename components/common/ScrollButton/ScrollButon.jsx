import React from 'react'
import { BsArrowUp } from 'react-icons/bs'
import { Wrapper } from './ScrollButton.styles'

function ScrollButon() {
  return (
    <Wrapper onClick={() => window.scrollTo(0, 0)}>
        <BsArrowUp/> Back to Top
    </Wrapper>
  )
}

export default ScrollButon