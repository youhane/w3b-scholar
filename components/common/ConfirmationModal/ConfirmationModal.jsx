import React from "react";
import {
  CloseButton,
  ConfirmButton,
  DeclineButton,
  MultipleChoice,
  OuterWrapper,
  Wrapper,
} from "./ConfirmationModal.styles";

function ConfirmationModal({ setDisplayModal, text, action, multipleChoice = false }) {
  return (
    <OuterWrapper>
      <Wrapper>
        <CloseButton onClick={() => setDisplayModal(false)}>X</CloseButton>
        <div>
            <img src="/static/assets/question.svg" alt="success" />
          <p>{text}</p>
        </div>
        {
          multipleChoice ? (
            <MultipleChoice>
              <DeclineButton onClick={() => setDisplayModal(false)}>
                No
              </DeclineButton>
              <ConfirmButton onClick={() => {
                action()
                setDisplayModal(false)
              }}>
                Yes
              </ConfirmButton>
            </MultipleChoice>
          ) : (
            <ConfirmButton onClick={() => (action(), setDisplayModal(false))}>
              Ok
            </ConfirmButton>
          )
        }
      </Wrapper>
    </OuterWrapper>
  );
}

export default ConfirmationModal;
