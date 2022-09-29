<<<<<<< HEAD
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
=======
import React from "react";
import { useRouter } from "next/router";
import {
  AuthorWrapper,
  AuthorImage,
  AuthorName,
  AuthorDate,
  TextWrapper,
} from "./AuthorStyles";

const Author = (props) => {
  const router = useRouter();

  const handleClick = () => {
    if (props.linkTo) {
      router.push(props.linkTo);
    }
  };

  return (
    <AuthorWrapper>
      <AuthorImage
        src={props.imgUrl}
        alt="Author's Picture"
        onClick={handleClick}
      />
      <TextWrapper>
        <AuthorName>{props.name}</AuthorName>
        {props.date && <AuthorDate>{props.date}</AuthorDate>}
      </TextWrapper>
    </AuthorWrapper>
  );
};

export default Author;
>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
