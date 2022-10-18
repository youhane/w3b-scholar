import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";

import { COLORS } from "../../../constants/styles";
import InputBox from "../../common/InputBox/InputBox";
import {
  CloseButton,
  ConfirmButton,
  OuterWrapper,
  Wrapper,
} from "./ChangePasswordModal.styles";

const ChangePasswordModal = ({ user, setDisplayChangePasswordModal }) => {
  const [email, setEmail] = useState("");

  const resetPassword = () => {
    const auth = getAuth;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Please check your email inbox.");
      })
      .catch((error) => {
        alert(error.code + " " + error.message);
      });

    setDisplayChangePasswordModal(false);
  };

  return (
    <>
      <OuterWrapper>
        <Wrapper>
          <CloseButton onClick={() => setDisplayChangePasswordModal(false)}>
            X
          </CloseButton>
          <div>
            <h1>Change Password</h1>
            <p>
              Enter your email address and we will send you a link to reset your
              password.
            </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="reset-button" onClick={resetPassword}>
            Send Reset Link
          </button>
        </Wrapper>
      </OuterWrapper>
    </>
  );
};

export default ChangePasswordModal;
