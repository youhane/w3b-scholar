<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Wrapper } from './SidebarButton.styles'

function SidebarButton({text, path, icon, onClick, hoverColor}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(window.location.pathname === path);
  }, [path]);

  return (
    <Wrapper onClick={onClick} isActive={isActive} hoverColor={hoverColor}>{icon}{text}</Wrapper>
  )
}

=======
import React, { useEffect, useState } from 'react'
import { Wrapper } from './SidebarButton.styles'
import {BsChevronRight} from 'react-icons/bs'

function SidebarButton({ text, path, icon, onClick, hoverColor }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(window.location.pathname === path);
  }, [path]);

  return (
    <Wrapper
      onClick={onClick}
      isActive={isActive}
      hoverColor={hoverColor}
    >
      {icon}{text}
    </Wrapper>
  )
}

>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
export default SidebarButton