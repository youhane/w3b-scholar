import React, { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { CardContainer } from "./ArticleCardContainerStyles";

// props --> array of Articles

const ArticleCardContainer = (props) => {
  return (
    <CardContainer>
      {props.articles.map((article) => {
        return (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            cardImg={article.cardImg}
            articleDate={article.date}
            author={{
              name: article.author.name,
              imgUrl: article.author.imgUrl,
            }}
          />
        );
      })}
    </CardContainer>
  );
};

export default ArticleCardContainer;
