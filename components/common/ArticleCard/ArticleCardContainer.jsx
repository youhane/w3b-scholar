import React from "react";
import ArticleCard from "./ArticleCard";
import { CardContainer } from "./ArticleCardContainerStyles";

const ArticleCardContainer = ({ articles }) => {
  return (
    <CardContainer>
      {articles?.length === 0 ?
        (<h1>No Articles Found</h1>) :
        (
          articles?.map((article) => {
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
          })
        )
      }

    </CardContainer>
  );
};

export default ArticleCardContainer;
