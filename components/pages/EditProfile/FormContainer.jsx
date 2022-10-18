import React, { useState } from "react";
import EditProfilePic from "./EditProfilePic";
import InputBox from "../../common/InputBox/InputBox";
import {
  SaveButton,
  Wrapper,
} from "./FormContainer.styles";
import { db } from "../../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { COLORS } from "../../../constants/styles";
import { ChangePassword } from "../Profile/Edit/edit.styles";

const FormContainer = ({
  user,
  setDisplayChangePasswordModal,
  setDisplaySuccessModal,
}) => {
  const [name, setName] = useState(user.name);
  const [position, setPosition] = useState(user.position);
  const [company, setCompany] = useState(user.company);
  const [profileImageURL, setProfileImageURL] = useState(user.profileImageURL);

  const handleSubmit = () => {
    const validateInputs = () => {
      const err = {};

      if (name === "" || name.length < 2) {
        err.name = true;
      }

      if (position === "") {
        err.position = true;
      }

      if (company === "") {
        err.company = true;
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
          isProfilePage={true}
        />
        <InputBox
          type={"text"}
          label={"Pekerjaan"}
          errorMessage={"Wajib diisi"}
          state={position}
          setState={setPosition}
          isProfilePage={true}
        />
        <InputBox
          type={"text"}
          label={"Perusahaan"}
          errorMessage={"Wajib diisi"}
          state={company}
          setState={setCompany}
          isProfilePage={true}
        />

        <ChangePassword>
          <label htmlFor="changePass">Password</label>
          <button name='changePass' id='changePass' onClick={() => setDisplayChangePasswordModal(true)}>Change Password</button>
        </ChangePassword>

        <SaveButton type="button" onClick={handleSubmit}>
          Simpan
        </SaveButton>
    </Wrapper>
  );
};

export default FormContainer;
