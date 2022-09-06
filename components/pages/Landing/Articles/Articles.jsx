import { useRouter } from "next/router";
import React from "react";
import Button from "../../../common/Button/Button";
import Title from "../../../common/Title/Title";
import ArticleCardContainer from "../../../ArticleCard/ArticleCardContainer";
import { Bottom, Grid, Top, Wrapper } from "./Articles.styles";

const articleListDummy = [
  {
    id: 1,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    articleDate: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://static.wikia.nocookie.net/theultimatesidemen/images/0/09/StephenTries.jpg/revision/latest?cb=20200830100933",
    },
  },
  {
    id: 2,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    articleDate: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://static.wikia.nocookie.net/theultimatesidemen/images/0/09/StephenTries.jpg/revision/latest?cb=20200830100933",
    },
  },
  {
    id: 3,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    articleDate: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://static.wikia.nocookie.net/theultimatesidemen/images/0/09/StephenTries.jpg/revision/latest?cb=20200830100933",
    },
  },
  {
    id: 4,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    articleDate: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://static.wikia.nocookie.net/theultimatesidemen/images/0/09/StephenTries.jpg/revision/latest?cb=20200830100933",
    },
  },
];

function Articles() {
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

      <ArticleCardContainer articles={articleListDummy} />

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
