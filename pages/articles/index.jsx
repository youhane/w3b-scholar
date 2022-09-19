import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../../firebase/firebase";

import ArticleCardContainer from "../../components/common/ArticleCard/ArticleCardContainer";
import Layout from "../../components/layout/Layout";
import Searchbar from "../../components/common/Searchbar/Searchbar";
import { COLORS } from "../../constants/styles";

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

  useEffect(() => {
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
  // Fetch the articles alongside the User's Data (especially Name + Profile Pic)

  const articlesReference = await collection(db, "articles");
  const res = await getDocs(articlesReference);

  const docs = await res.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  // Fetch username and passwords
  const getAuthorDetail = async (docs) => {
    const usersReference = await collection(db, "users");
    const res = await getDocs(usersReference);
    const usersDocs = await res.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });

    for (let i = 0; i < docs.length; i++) {
      for (let j = 0; j < usersDocs.length; j++) {
        const authorId = docs[i].userId;
        if (authorId === usersDocs[j].uid) {
          console.log("EUREKA!");
          docs[i].author = usersDocs[j];
        }
      }
      if (!docs[i].author.name) {
        docs[i].author = {
          name: "Anonymous",
          profileImageURL:
            "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
        };
      }
    }

    return docs;
  };

  const completeArticles = await getAuthorDetail(docs);
  console.log(completeArticles);

  return {
    props: {
      documents: completeArticles.map((doc) => ({
        id: doc.id,
        title: doc.title,
        date: doc.createdAt,
        cardImg: doc.imageURL,
        author: { name: doc.author.name, imgUrl: doc.author.profileImageURL },
      })),
    },
  };
}
