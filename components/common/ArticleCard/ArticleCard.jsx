import { useRouter } from "next/router";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Author from "./Author";
import Alert from "../Alert/Alert";
import {
  CardWrapper,
  CardImage,
  CardTitleWrapper,
  CardOtherWrapper,
  CardTitle,
  CardDate,
  LinkButton,
  ArticleAlert,
} from "./ArticleCardStyles";
import {RiShareBoxLine} from 'react-icons/ri'

const Card = ({id, cardImg, title, articleDate, author}) => {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const HOST_URL = "https://w3b-scholar.vercel.app/";
  const articleURL = `${HOST_URL}/articles/${id}`;

  const handleLinkButtonClick = () => {
    navigator.clipboard.writeText(articleURL);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <Tilt>
      {showAlert && (
        <ArticleAlert>
          <Alert message={"URL Copied!"} out={!showAlert} />
        </ArticleAlert>
      )}

      <LinkButton onClick={handleLinkButtonClick}>
        <RiShareBoxLine />
      </LinkButton>

      <CardWrapper onClick={() => router.push(`/articles/${id}`)}>
        <CardImage background={cardImg} />
        <CardTitleWrapper>
          <CardTitle>{title}</CardTitle>
        </CardTitleWrapper>
        <CardOtherWrapper>
          <Author name={author.name} imgUrl={author.imgUrl} />
          <CardDate>{articleDate}</CardDate>
        </CardOtherWrapper>
      </CardWrapper>
    </Tilt>
  );
};

export default Card;
