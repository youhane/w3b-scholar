import React from "react";
import { CardContainer } from "../ArticleCard/ArticleCardContainerStyles";
import Author from "./Author";

const AuthorCardContainer = ({ authors }) => {
  return (
    <CardContainer>
      {authors?.length === 0 ? (
        <h1>No Authors Found</h1>
      ) : (
        authors?.map((author) => {
          return (
            <Author
              key={author.uid}
              uid={author.uid}
              name={author.name}
              profileImageURL={author.profileImageURL}
              position={author.position}
              company={author.company}
            />
          );
        })
      )}
    </CardContainer>
  );
};

export default AuthorCardContainer;
