import React from "react";

import { AuthorWrapper, AuthorImage, AuthorName } from "./AuthorStyles";

const Author = (props) => {
  return (
    <AuthorWrapper>
      <AuthorImage src={props.imgUrl} alt="Author's Picture" />
      <AuthorName>{props.name}</AuthorName>
    </AuthorWrapper>
  );
};

export default Author;
