import React from "react";
import { COLORS } from "../../../constants/styles";
import { CardContainer } from "./AuthorCardContainerStyles";
import Author from "./Author";

const AuthorCardContainer = ({ data }) => {
  return (
    <CardContainer>
      {data?.length === 0 ? (
        <h1>No Authors Found</h1>
      ) : (
        data?.map((author) => {
          return (
            <Author
              key={author.uid}
              uid={author.uid}
              name={author.name}
              profileImageURL={author.profileImageURL}
              position={author.position}
              company={author.company}
              color={COLORS.white}
            />
          );
        })
      )}
    </CardContainer>
  );
};

export default AuthorCardContainer;
