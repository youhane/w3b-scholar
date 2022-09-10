import React from 'react'
import { Wrapper } from './SidebarButton.styles'

function SidebarButton({text, color, icon, onClick}) {
  return (
    <Wrapper onClick={onClick} color={color}>{icon}{text}</Wrapper>
  )
}

export default SidebarButton