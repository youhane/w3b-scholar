import Router from "next/router";
import React from "react";
import {
  CloseButton,
  ConfirmButton,
  OuterWrapper,
  Wrapper,
} from "./SuccesModal.styles";

function SuccessModal({ setDisplayModal, text, redirect }) {
  return (
    <OuterWrapper>
      <Wrapper>
        <CloseButton onClick={() => setDisplayModal(false)}>X</CloseButton>
        <div>
          <img src="/static/assets/success.svg" alt="success" />
          <p>{text}</p>
        </div>
        <ConfirmButton onClick={() => {
          if (redirect) {
            Router.push(redirect);
          }
          return setDisplayModal(false)
        }}>Ok</ConfirmButton>
      </Wrapper>
    </OuterWrapper>
  );
}

export default SuccessModal;
