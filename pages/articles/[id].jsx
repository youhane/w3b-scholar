import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { auth, db } from "../../firebase/firebase";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import ArticleAuthor from "../../components/common/ArticleAuthor/Author";
import Footer from "../../components/common/Footer/Footer";
import Alert from "../../components/common/Alert/Alert";
import {
  ArticleWrapper,
  AuthorWrapper,
  LinkButton,
  ArticleContent,
  ScrollButton,
  ArticleAlert,
  BackButton,
} from "./article.style";

const HOST_URL = "https://w3b-scholar.vercel.app";

function Article({ article, author }) {
  const router = useRouter();

  {
    /* TODO: Add User from Context to Layout */
  }
  const { asPath } = useRouter();

  const articleURL = `${HOST_URL}${asPath}`;
  const [showAlert, setShowAlert] = React.useState(false);

  const handleLinkButtonClick = () => {
    navigator.clipboard.writeText(articleURL);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Layout>
        <ArticleWrapper>
          <BackButton
            onClick={() => {
              router.back();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            Back
          </BackButton>
          <ScrollButton onClick={handleScrollUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
            Back to Top
          </ScrollButton>

          <h1>{article.title}</h1>
          <AuthorWrapper>
            <ArticleAlert>
              {showAlert && <Alert message="URL Copied!" />}
            </ArticleAlert>
            <ArticleAuthor
              imgUrl={author.profileImageURL}
              name={author.name}
              date={article.createdAt}
              linkTo={`${HOST_URL}/penulis/${author.uid}`}
            />
            <LinkButton onClick={handleLinkButtonClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
              Share
            </LinkButton>
          </AuthorWrapper>
          <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }}>
            {/* <div dangerouslySetInnerHTML={{ __html: article.content }}></div> */}
          </ArticleContent>
        </ArticleWrapper>
      </Layout>
      {/* FIXME: Footer g mau ke bawah! yg bagian  
      dangerlysetinnerhtml someehow heigtntya g ke register gitu...*/}
      {/* <Footer /> */}
    </>
  );
}

export default Article;

export async function getServerSideProps(context) {
  console.log(context.params.id);
  const article = await getDoc(doc(db, "articles", context.params.id));
  const articleData = article.data();
  const author = await getDoc(doc(db, "users", articleData.userId));

  return {
    props: {
      article: article.data(),
      author: author.data(),
    },
  };
}
