import React from "react";
import { FiEdit2 } from "react-icons/fi";

import { IconWrapper, Wrapper } from "./EditProfilePic.styles";

const EditProfilePic = ({ profileImageURL, setProfileImageURL }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImageURL(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Wrapper>
      <input
        type="file"
        name="profileImage"
        id="profileImage"
        defaultValue={profileImageURL}
        onChange={handleImageChange}
      />
      <label htmlFor="profileImage">
        <img src={profileImageURL} alt="profile" />
        <IconWrapper>
          <FiEdit2 />
        </IconWrapper>
      </label>
    </Wrapper>
  );
};

export default EditProfilePic;
