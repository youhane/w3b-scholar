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
        <AuthorDate>{props.date}</AuthorDate>
      </TextWrapper>
    </AuthorWrapper>
  );
};

export default Author;
