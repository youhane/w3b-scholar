import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../../../common/Button/Button";
import Title from "../../../common/Title/Title";
import ArticleCardContainer from "../../../common/ArticleCard/ArticleCardContainer";
import { Bottom, Grid, Top, Wrapper } from "./Articles.styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";

const articleListDummy = [
  {
    id: 1,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Gianlucazino Zambrotta",
      imgUrl:
        "https://pbs.twimg.com/profile_images/977547763092217857/mWJXTPj__400x400.jpg",
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
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
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
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
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
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
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
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
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
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
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
          Baca juga artikel-artikel pilihan berikut yang akan menambah wawasanmu tentang Web3!{" "}
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