import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { auth, db } from "../../firebase/firebase";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import ArticleAuthor from "../../components/common/ArticleAuthor/Author";
import Footer from "../../components/common/Footer/Footer";
import Alert from "../../components/common/Alert/Alert";
import styled from "styled-components";
import { COLORS } from "../../constants/styles";
import { BsChevronLeft, BsArrowUp } from "react-icons/bs";
import { GrShare } from "react-icons/gr";
import ScrollButon from "../../components/common/ScrollButton/ScrollButon";
import BackButton from "../../components/common/BackButton/BackButton";
import ShareButton from "../../components/common/ShareButton/ShareButton";
import Head from "next/head";

export const ArticleContent = styled.div`
  height: max-content;
  margin: 1rem 0;
`;

export const ArticleWrapper = styled.div`
  margin: auto;
  width: 95%;

  h1 {
    margin-bottom: 0.2em;
    background: linear-gradient(91.62deg, #3c9fd7 0%, #009483 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  strong {
    margin-bottom: 0.2em;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    line-height: 28px;
  }

  @media (max-width: 1280px) {
    width: 80%;
  }
`;

export const AuthorWrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  padding: 1em 0;
  justify-content: space-between;
  align-items: center;
`;

export const ArticleAlert = styled.div`
  position: absolute;
  z-index: 100;
  right: 7%;
  margin-top: -4.5em;
  transition: 0.2s ease-in-out;

  @media (max-width: 1280px) {
    right: 13.5%;
  }
`;

const HOST_URL = "https://w3b-scholar.vercel.app";

function Article({ article, author }) {
  {
    /* TODO: Add User from Context to Layout */
  }

  const [showAlert, setShowAlert] = React.useState(false);

  const handleLinkButtonClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>W3B Scholar | {article.title}</title>
        <meta name="description" content="W3B Scholar - Belajar Web3" />
        <meta property="og:image" content="../public/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ArticleWrapper>
          <BackButton />
          <ScrollButon />
          <h1>{article.title}</h1>
          <AuthorWrapper>
            <ArticleAlert>
              {showAlert && <Alert message="URL Copied!" />}
            </ArticleAlert>
            <ArticleAuthor
              imgUrl={
                author?.profileImageURL ||
                "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              }
              name={author?.name || "Anonymous"}
              date={article?.createdAt}
              linkTo={`${HOST_URL}/penulis/${author.uid}`}
            />
            <ShareButton shareLink={handleLinkButtonClick} />
          </AuthorWrapper>
          <ArticleContent
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </ArticleWrapper>
      </Layout>
    </>
  );
}

export default Article;

export async function getServerSideProps(context) {
  const article = await getDoc(doc(db, "articles", context.params.id));
  const articleData = article.data();
  const author = await getDoc(doc(db, "users", articleData.userId));

  return {
    props: {
      article: article.data(),
      author:
        author.data() !== undefined
          ? author.data()
          : {
              name: "Anonymous",
              profileImageURL:
                "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
              uid: "anonymous",
            },
    },
  };
}
