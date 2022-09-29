<<<<<<< HEAD
import React from 'react'
import { Wrapper } from './Button.styles'

function Button({ icon, text, color, onClick }) {
    return (
        <Wrapper color={color} onClick={onClick}><span>{icon}</span>{text}</Wrapper>
    )
}

export default Button
=======
import React from "react";
import { Wrapper } from "./Button.styles";

function Button({ icon, text, color, onClick }) {
  return (
    <Wrapper color={color} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {text}
    </Wrapper>
  );
}

export default Button;
>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
