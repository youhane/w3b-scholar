import React from 'react'
import { CloseButton, ConfirmButton, OuterWrapper, Wrapper } from './SuccesModal.styles'

function SuccessModal({text}) {
  return (
    <OuterWrapper>
        <Wrapper>
            <CloseButton>X</CloseButton>
            <div>
                <img src="/static/assets/success.svg" alt="success" />
                <p>{text}</p>
            </div>
            <ConfirmButton>Ok</ConfirmButton>
        </Wrapper>
    </OuterWrapper>
  )
}

export default SuccessModal