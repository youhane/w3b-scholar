import React from "react";
import {
  CloseButton,
  ConfirmButton,
  OuterWrapper,
  Wrapper,
} from "./ConfirmationModal.styles";

function ConfirmationModal({ setDisplayModal, text, action }) {
  return (
    <OuterWrapper>
      <Wrapper>
        <CloseButton onClick={() => setDisplayModal(false)}>X</CloseButton>
        <div>
          <img src="/static/assets/question.svg" alt="success" />
          <p>{text}</p>
        </div>
        <ConfirmButton onClick={() => (action(), setDisplayModal(false))}>
          Ok
        </ConfirmButton>
      </Wrapper>
    </OuterWrapper>
  );
}

export default ConfirmationModal;
