import { collection, getDocs, query } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../../firebase/firebase";
import ArticleCardContainer from "../../components/common/ArticleCard/ArticleCardContainer";
import Layout from "../../components/layout/Layout";
import Searchbar from "../../components/common/Searchbar/Searchbar";
import { COLORS } from "../../constants/styles";
import Pagination from "../../components/common/Pagination/Pagination";
import ArticleCard from "../../components/common/ArticleCard/ArticleCard";
import Head from "next/head";
import styled from "styled-components";

const StyledText = styled.div`
  margin: auto;
  text-align: center;
  padding: 4em;
  color: ${COLORS.darkGrey};
`;

function Articles({ documents }) {
  {
    /* TODO: Add User from Context to Layout */
  }

  const [allArticles, setAllArticles] = useState(documents);
  const [filteredArticles, setFilteredArticles] = useState(documents);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setAllArticles(documents);
  }, []);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const router = useRouter();
  const pathName = router.pathname;
  const profileImage =
    "https://yt3.ggpht.com/a/AATXAJzMD-8Ca6a2Ux1qMZsI-z1jA146SbKc4wNQPQ=s900-c-k-c0xffffffff-no-rj-mo";

  const handleSearch = async (query) => {
    if (query !== "") {
      const searchedArticles = allArticles.filter((article) => {
        return article.title.toLowerCase().includes(query.toLowerCase());
      });

      if (searchedArticles.length === 0 || !searchedArticles) {
        setFilteredArticles([]);
      } else {
        setFilteredArticles(searchedArticles);
      }
    } else {
      setFilteredArticles(allArticles);
    }
  };

  return (
    <>
      <Head>
        <title>W3B Scholar | Articles</title>
        <meta name="description" content="W3B Scholar - Belajar Web3" />
        <meta property="og:image" content="../public/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout pathName={pathName} profileImg={profileImage}>
        <Searchbar
          onSearch={handleSearch}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />

        {filteredArticles.length > 0 ? (
          <Pagination
            data={filteredArticles}
            RenderComponent={ArticleCardContainer}
            buttonConst={3}
            contentPerPage={6}
            siblingCount={1}
          />
        ) : (
          <StyledText>
            <h2>No matching articles</h2>
          </StyledText>
        )}

        {/* <Searchbar onSearch={handleSearch} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />

        {filteredArticles.length === 0 ?
          (
            <h2 style={{ "text-align": "center", color: `${COLORS.darkGrey}` }}>
              No matching article for {searchQuery}!
            </h2>
          ) :
          (
            <ArticleCardContainer articles={filteredArticles} />
          )
        } */}
      </Layout>
    </>
  );
}

export default Articles;

export async function getStaticProps() {
  const articlesReference = collection(db, "articles");
  const res = await getDocs(articlesReference);

  const docs = res?.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  const getAuthorDetail = async (docs) => {
    const usersReference = collection(db, "users");
    const res = await getDocs(usersReference);

    const usersDocs = res?.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });

    for (let i = 0; i < docs?.length; i++) {
      for (let j = 0; j < usersDocs?.length; j++) {
        const authorId = docs[i]?.userId;
        if (authorId === usersDocs[j]?.uid) {
          docs[i].author = usersDocs[j];
        }
      }
      if (!docs[i]?.author) {
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
        id: doc?.id,
        title: doc?.title,
        date: doc?.createdAt,
        cardImg: doc?.imageURL,
        author: { name: doc?.author.name, imgUrl: doc?.author.profileImageURL },
      })),
    },
  };
}
