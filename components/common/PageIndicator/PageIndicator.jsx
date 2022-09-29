import React from 'react'
import { Wrapper } from './PageIndicator.styles'
import {BsChevronRight} from 'react-icons/bs'

function PageIndicator({icon, currentPage}) {
  return (
    <Wrapper>
        {icon} {currentPage} <span><BsChevronRight/></span>
    </Wrapper>
  )
}

export default PageIndicator