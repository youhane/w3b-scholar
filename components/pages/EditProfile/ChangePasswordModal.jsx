import React, { useState } from "react";

import { COLORS } from "../../../constants/styles";
import InputBox from "../../common/InputBox/InputBox";
import {
  CloseButton,
  ConfirmButton,
  OuterWrapper,
  Wrapper,
} from "./ChangePasswordModal.styles";

const ChangePasswordModal = ({
  user,
  setState,
  setDisplayChangePasswordModal,
  setDisplaySuccessModal,
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const displayErrorMessage = () => {
    const border = document.getElementById("confirm_password");
    const errorMessage = document.querySelector(
      "#confirm_password + .error-message"
    );

    border.style.borderColor = `${COLORS.errorRed}`;
    errorMessage.style.display = "inline";
  };

  const handleClick = () => {
    if (newPassword === confirmPassword && newPassword !== "") {
      user.password = newPassword;
      setDisplayChangePasswordModal(false);
      setDisplaySuccessModal(true);
    } else {
      displayErrorMessage();
    }
  };

  return (
    <>
      <OuterWrapper>
        <Wrapper>
          <CloseButton onClick={() => setDisplayChangePasswordModal(false)}>
            X
          </CloseButton>
          <div>
            <InputBox
              type={"password"}
              label={"New Password"}
              state={newPassword}
              setState={setNewPassword}
            />
            <InputBox
              type={"password"}
              label={"Confirm Password"}
              state={confirmPassword}
              setState={setConfirmPassword}
              errorMessage={"Password tidak sama. Coba lagi"}
            />
          </div>
          <ConfirmButton onClick={handleClick}>Simpan</ConfirmButton>
        </Wrapper>
      </OuterWrapper>
    </>
  );
};

export default ChangePasswordModal;
