import { useRouter } from "next/router";
import React from "react";
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

const Card = (props) => {
  const router = useRouter();
  const [showAlert, setShowAlert] = React.useState(false);
  const articleURL = `..../articles/${props.id}`;

  const handleLinkButtonClick = () => {
    navigator.clipboard.writeText(articleURL);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    console.log("CLICKING BUTTON");
  };

  const handleCardClick = () => {
    console.log("CLICKING CARD");
  };

  return (
    <Tilt>
      {showAlert && (
        <ArticleAlert>
          <Alert message={"URL Copied!"} out={!showAlert} />
        </ArticleAlert>
      )}

      <LinkButton onClick={handleLinkButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-box-arrow-up-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
          />
          <path
            fillRule="evenodd"
            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
          />
        </svg>
      </LinkButton>

      <CardWrapper onClick={() => router.push(`/articles/${props.id}`)}>
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
