import React from 'react'
import { Info, Wrapper } from './Author.styles'

function Author({image, name, title}) {
  return (
    <Wrapper>
        <img src={image} alt="Author" />
        <Info>
            <h2>{name}</h2>
            <h3>{title}</h3>
        </Info>
    </Wrapper>
  )
}

export default Author