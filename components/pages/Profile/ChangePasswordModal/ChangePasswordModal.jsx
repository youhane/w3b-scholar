import React from 'react'
import { CloseButton, OuterWrapper, Wrapper } from './ChangePasswordModal.styles'

function ChangePasswordModal({setChangePasswordModal}) {
  return (
    <OuterWrapper>
      <Wrapper>
        <CloseButton onClick={() => setChangePasswordModal(false)}>X</CloseButton>
        ChangePasswordModal
      </Wrapper>
    </OuterWrapper>
  )
}

export default ChangePasswordModal