import { collection, getDocs, query } from "firebase/firestore";
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
  {
    /* TODO: Add User from Context to Layout */
  }

  const [allArticles, setAllArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  const pathName = router.pathname;
  const profileImage =
    "https://yt3.ggpht.com/a/AATXAJzMD-8Ca6a2Ux1qMZsI-z1jA146SbKc4wNQPQ=s900-c-k-c0xffffffff-no-rj-mo";

  useEffect(() => {
    setAllArticles(props.documents);
  }, []);

  useEffect(() => {
    setArticles(allArticles);
  }, [allArticles]);

  const handleSearch = async (query) => {
    console.log("QUERY " + query);
    if (query !== "") {
      const trimmedQuery = query.toLowerCase().trim();
      // FIXME: searchQuery mesti enter 2x baru keganti, jadi sementara langsung pakai trimmedQuery aja, karena searchQuery masih ngebug.
      await setSearchQuery(trimmedQuery);
      // console.log("SEARCHQUERY " + searchQuery);
      console.log("TRIMMEDQUERY " + trimmedQuery);

      const searchedArticles = allArticles.filter((article) =>
        article.title.toLowerCase().includes(trimmedQuery)
      );

      console.log(searchedArticles);

      if (searchedArticles.length === 0 || !searchedArticles) {
        setArticles([]);
      } else {
        setArticles(searchedArticles);
      }
    } else {
      setArticles(allArticles);
    }
  };

  return (
    <div>
      <Layout pathName={pathName} profileImg={profileImage}>
        <Searchbar onSearch={handleSearch} />

        {articles.length === 0 ? (
          <h2 style={{ "text-align": "center", color: `${COLORS.darkGrey}` }}>
            No matching article for {searchQuery}!
          </h2>
        ) : (
          <ArticleCardContainer articles={articles} />
        )}
      </Layout>
    </div>
  );
}

export default Articles;

export async function getStaticProps() {
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
          docs[i].author = usersDocs[j];
        }
      }
      if (!docs[i].author) {
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
