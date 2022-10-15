import Router from "next/router";
import React from "react";
import {
  CloseButton,
  ConfirmButton,
  OuterWrapper,
  Wrapper,
} from "./SuccesModal.styles";

function SuccessModal({ setDisplayModal, text, redirect, success = true }) {
  return (
    <OuterWrapper>
      <Wrapper>
        <CloseButton onClick={() => setDisplayModal(false)}>X</CloseButton>
        <div>
          {
            success ?
              (<img src="/static/assets/success.svg" alt="success" />)
              :
              (<img src="/static/assets/fail.png" alt="fail" />)
          }
          <p>{text}</p>
        </div>
        {
          success ?
            (
              <ConfirmButton onClick={() => {
                if (redirect) {
                  Router.push(redirect);
                }
                return setDisplayModal(false)
              }}>Ok</ConfirmButton>
            ) :
            (
              <ConfirmButton onClick={() => {
                return setDisplayModal(false)
              }}>Ok</ConfirmButton>
            )
        }
      </Wrapper>
    </OuterWrapper>
  );
}

export default SuccessModal;
