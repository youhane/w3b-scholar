import React from "react";
import { Wrapper } from "./AuthorCard.styles";

const AuthorCard = (props) => {
  const { name, position, company, profileImageURL } = props;

  return (
    <Wrapper>
      <img src={profileImageURL} alt="Author Profile Pic" />
      <div className="author-info">
        <h3>{name}</h3>
        <p>
          {position} at {company}
        </p>
      </div>
    </Wrapper>
  );
};

export default AuthorCard;
