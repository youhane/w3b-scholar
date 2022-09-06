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
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl: "https://cdn.personalitylist.com/avatars/184324.png",
    },
  },
  {
    id: 2,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl: "https://cdn.personalitylist.com/avatars/184324.png",
    },
  },
  {
    id: 3,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl: "https://cdn.personalitylist.com/avatars/184324.png",
    },
  },
  {
    id: 4,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl: "https://cdn.personalitylist.com/avatars/184324.png",
    },
  },
  {
    id: 5,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl: "https://cdn.personalitylist.com/avatars/184324.png",
    },
  },
  {
    id: 6,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl: "https://cdn.personalitylist.com/avatars/184324.png",
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
      {/* TODO: img Authornya ngga mo muncul di ArticleCardnya tapi pas kutes disini bisa :_)
      https://codesandbox.io/s/w3b-card-3wrst7?file=/src/components/UI/Author.jsx */}
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
