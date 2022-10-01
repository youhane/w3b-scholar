import Router from "next/router";
import React from "react";
import {
  CloseButton,
  ConfirmButton,
  OuterWrapper,
  Wrapper,
} from "./SuccesModalRedirect.styles";

function SuccessModalRedirect({ setDisplayModal, text }) {
  return (
    <OuterWrapper>
      <Wrapper>
        <CloseButton onClick={() => setDisplayModal(false)}>X</CloseButton>
        <div>
          <img src="/static/assets/success.svg" alt="success" />
          <p>{text}</p>
        </div>
        <ConfirmButton
          onClick={() => {
            Router.push("/");
            return setDisplayModal(false);
          }}
        >
          Ok
        </ConfirmButton>
      </Wrapper>
    </OuterWrapper>
  );
}

export default SuccessModalRedirect;
