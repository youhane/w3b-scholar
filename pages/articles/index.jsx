import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase/firebase";

import ArticleCardContainer from "../../components/common/ArticleCard/ArticleCardContainer";
import Layout from "../../components/layout/Layout";
import Searchbar from "../../components/common/Searchbar/Searchbar";
import { COLORS } from "../../constants/styles";

const ARTICLES_DUMMY = [
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

function Articles(props) {
  const articlesReference = collection(db, "articles");
  const imageListRef = ref(storage, "articles/");
  const [articles, setArticles] = useState([]);
  const [imageList, setImageList] = useState([]);

  const router = useRouter();
  const pathName = router.pathname;
  const profileImage =
    "https://yt3.ggpht.com/a/AATXAJzMD-8Ca6a2Ux1qMZsI-z1jA146SbKc4wNQPQ=s900-c-k-c0xffffffff-no-rj-mo";

  // TODO: Fetch data from Backend, dalam bentuk menyerupai ARRTICLES_DUMMY

  // useEffect(() => {
  //   listAll(imageListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prevState) => [...prevState, url]);
  //       });
  //     });
  //   });
  // }, [imageListRef]);

  // useEffect(() => {
  //   // getDocs(articlesReference).then((res) => {
  //   //   const data = res.docs.map((doc) => ({
  //   //     id: doc.id,
  //   //     ...doc.data(),
  //   //   }));
  //   //   console.log(data);
  //   //   // setArticles(data);
  //   // });
  // }, []);

  // DUMMY:
  useEffect(() => {
    // setArticles(ARTICLES_DUMMY);
    console.log(props.documents);
    setArticles(props.documents);
    // setArticles([]);
  }, []);

  const handleSearch = (query) => {
    // TODO: Query Search to BackEnd
    // fetch new data from db
    // setArticles() based on the query
    //
  };

  return (
    <div>
      <Layout pathName={pathName} profileImg={profileImage}>
        <Searchbar onSearch={handleSearch} />

        {articles.length === 0 ? (
          <h2 style={{ "text-align": "center", color: `${COLORS.darkGrey}` }}>
            No matching article!
          </h2>
        ) : (
          <ArticleCardContainer articles={articles} />
        )}
      </Layout>

      {/* {articles.map((article) => (
        <a key={article.id} href={`/articles/${article.id}`}>
          <h2>{article.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </a>
      ))} */}
    </div>
  );
}

export default Articles;

export async function getStaticProps() {
  const articlesReference = await collection(db, "articles");
  const res = await getDocs(articlesReference);
  const docs = await res.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(docs);

  // Fetch the articles alongside the User's Data (especially Name + Profile Pic)

  return {
    props: {
      documents: docs.map((doc) => ({
        id: doc.id,
        title: doc.title,
        date: doc.createdAt,
        cardImg: doc.imageURL,
        author: { name: "John Doe", imgUrl: doc.imageURL },
      })),
    },
  };
}
