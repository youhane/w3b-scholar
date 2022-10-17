import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";

import EditProfilePic from "./EditProfilePic";
import InputBox from "../../common/InputBox/InputBox";
import SidebarButton from "../../common/Sidebar/Button/SidebarButton";
import {
  ChangePasswordButton,
  InputBoxWrapper,
  SaveButton,
  Wrapper,
} from "./FormContainer.styles";
import { doc, setDoc } from "firebase/firestore";
import { COLORS } from "../../../constants/styles";
import { db } from "../../../firebase/firebase";

const FormContainer = ({
  user,
  setDisplayChangePasswordModal,
  setDisplaySuccessModal,
}) => {
  const [name, setName] = useState(user.name);
  console.log(user.name);
  const [position, setPosition] = useState(user.position);
  const [company, setCompany] = useState(user.company);
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [profileImageURL, setProfileImageURL] = useState(user.profileImageURL);
  const [displayDeleteAccountModal, setDisplayDeleteAccountModal] =
    useState(false);

  const handleSubmit = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneNoRegex = /^08\d+$/;

    const validateInputs = () => {
      const err = {};

      if (name === "" || name.length < 2) {
        err.name = true;
      }

      if (email === "" || !email.match(emailRegex)) {
        err.email = true;
      }

      if (
        phoneNo === "" ||
        phoneNo.length < 10 ||
        phoneNo.length > 13 ||
        !phoneNo.match(phoneNoRegex)
      ) {
        err.phoneNo = true;
      }

      return err;
    };

    const displayErrorMessage = (err) => {
      let border, errorMessage;

      if (err.name) {
        border = document.getElementById("nama_lengkap");
        errorMessage = document.querySelector("#nama_lengkap + .error-message");

        border.style.borderColor = `${COLORS.errorRed}`;
        errorMessage.style.display = "inline";
      }

      if (err.position) {
        border = document.getElementById("pekerjaan");
        errorMessage = document.querySelector("#pekerjaan + .error-message");

        border.style.borderColor = `${COLORS.errorRed}`;
        errorMessage.style.display = "inline";
      }

      if (err.company) {
        border = document.getElementById("perusahaan");
        errorMessage = document.querySelector("#perusahaan + .error-message");

        border.style.borderColor = `${COLORS.errorRed}`;
        errorMessage.style.display = "inline";
      }

      if (err.email) {
        border = document.getElementById("email");
        errorMessage = document.querySelector("#email + .error-message");

        border.style.borderColor = `${COLORS.errorRed}`;
        errorMessage.style.display = "inline";
      }

      if (err.phoneNo) {
        border = document.getElementById("no._telepon");
        errorMessage = document.querySelector(
          "#no\\._telepon + .error-message"
        );

        border.style.borderColor = `${COLORS.errorRed}`;
        errorMessage.style.display = "inline";
      }
    };

    const err = validateInputs();

    if (Object.keys(err).length !== 0) {
      displayErrorMessage(err);
    } else {
      const userRef = doc(db, "users", user.uid);

      setDoc(userRef, {
        name: name,
        company: company,
        position: position,
        profileImageURL: profileImageURL,
        uid: user.uid,
      })
        .then(setDisplaySuccessModal(true))
        .catch((error) => alert(error.message));
    }
  };

  return (
    <Wrapper>
      <form action="">
        <EditProfilePic
          profileImageURL={profileImageURL}
          setProfileImageURL={setProfileImageURL}
        />

        <InputBox
          type={"text"}
          label={"Nama Lengkap"}
          errorMessage={"Minimal 2 karakter"}
          state={name}
          setState={setName}
        />

        <div className="career">
          <InputBoxWrapper>
            <InputBox
              type={"text"}
              label={"Pekerjaan"}
              errorMessage={"Wajib diisi"}
              state={position}
              setState={setPosition}
            />
          </InputBoxWrapper>
          <InputBox
            type={"text"}
            label={"Perusahaan"}
            errorMessage={"Wajib diisi"}
            state={company}
            setState={setCompany}
          />
        </div>

        <InputBox
          type={"email"}
          label={"Email"}
          errorMessage={"Masukkan alamat email yang valid"}
          state={email}
          setState={setEmail}
        />
        <InputBox
          type={"text"}
          label={"No. Telepon"}
          errorMessage={"Masukkan nomor telepon yang valid"}
          state={phoneNo}
          setState={setPhoneNo}
        />

        <div className="change-password">
          <label htmlFor="">Password</label>
          <div className="change-password-btn">
            <ChangePasswordButton
              type="button"
              onClick={() => {
                setDisplayChangePasswordModal(true);
              }}
            >
              Change Password
            </ChangePasswordButton>
          </div>
        </div>

        <SaveButton type="button" onClick={handleSubmit}>
          Simpan
        </SaveButton>

        <div className="account-btn">
          <SidebarButton
            icon={<IoIosCloseCircleOutline />}
            text={"Delete Account"}
          />
          <SidebarButton
            icon={<FiLogOut />}
            text={"Logout"}
            hoverColor={"red"}
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default FormContainer;
