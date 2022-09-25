import React from 'react'
import { GrShare } from 'react-icons/gr'
import { LinkButton } from './ShareButton.styles'

function ShareButton({shareLink}) {
  return (
    <LinkButton onClick={() => shareLink()}><GrShare/> Share</LinkButton>
  )
}

export default ShareButton