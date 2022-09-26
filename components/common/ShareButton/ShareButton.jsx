import React from "react";
import { LinkButton } from "./ShareButton.styles";
import { RiShareBoxLine } from 'react-icons/ri'

function ShareButton({ shareLink }) {
  return (
    <LinkButton onClick={() => shareLink()}><RiShareBoxLine /> Share</LinkButton>
  )
}

export default ShareButton;
