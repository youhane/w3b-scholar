import React from "react";
import Author from "./Author";
import Tilt from "react-parallax-tilt";

import {
  CardWrapper,
  CardImage,
  CardTitleWrapper,
  CardOtherWrapper,
  CardTitle,
  CardDate,
} from "./ArticleCardStyles";

const Card = (props) => {
  return (
    <Tilt>
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
    </Tilt>
  );
};

export default Card;
