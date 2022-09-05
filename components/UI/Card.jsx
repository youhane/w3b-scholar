import React from "react";
import Author from "./Author";

import {
  CardWrapper,
  CardImage,
  CardTitleWrapper,
  CardOtherWrapper,
  CardTitle,
  CardDate,
} from "./CardStyles";

const Card = (props) => {
  return (
    <CardWrapper>
      <CardImage background={props.cardImg} />
      <CardTitleWrapper>
        <CardTitle>{props.title}</CardTitle>
      </CardTitleWrapper>
      <CardOtherWrapper>
        <Author name={props.author.name} imgUrl={props.author.imgUrl} />
        <CardDate>{props.articleDate}</CardDate>
      </CardOtherWrapper>
    </CardWrapper>
  );
};

export default Card;
