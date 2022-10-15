import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../../../common/Button/Button";
import Title from "../../../common/Title/Title";
import ArticleCardContainer from "../../../common/ArticleCard/ArticleCardContainer";
import { Bottom, Top, Wrapper } from "./Articles.styles";

function Articles({documents}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Top>
        <Title text={"Artikel"} />
        <p>
          Baca juga artikel-artikel pilihan berikut yang akan menambah wawasanmu
          tentang Web3!{" "}
        </p>
      </Top>
      <img src="/static/assets/articleSectionImage.png" alt="Article Image" />
      <ArticleCardContainer data={documents} />
      <Bottom>
        <Button
          text={"Lihat Lainnya"}
          onClick={() => router.push("/articles")}
        />
      </Bottom>
    </Wrapper>
  );
}

export default Articles;
