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
