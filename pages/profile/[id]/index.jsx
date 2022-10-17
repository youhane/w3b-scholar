import React from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import Layout from "../../../components/layout/Layout";
import styled from "styled-components";
import Head from "next/head";
import BackButton from "../../../components/common/BackButton/BackButton";
import { COLORS } from "../../../constants/styles";
import ArticleCardContainer from "../../../components/common/ArticleCard/ArticleCardContainer";
import Custom404 from "../../404";

export const Container = styled.div`
  margin: auto;
  width: 92%;
  min-height: 80vh;
  margin-top: 11rem;
  @media (max-width: 768px) {
    width: 85%;
    margin-top: 7rem;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em 0;

  img {
    width: 5em;
    height: 5em;
    border-radius: 120px;
  }
`;

export const UserImage = styled.div`
  height: 5em;
  width: 5em;
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 120px;

  @media (max-width: 768px) {
    height: 4em;
    width: 4em;
  }
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${COLORS.darkGrey};

  h5 {
    font-size: 1.2em;
  }
  p {
    font-size: 0.9em;
    @media (max-width: 768px) {
      font-size: 0.75em;
    }
  }
`;

export const ArticleWrapper = styled.div`
  margin-top: 3em;
`;

function Profile({ user, documents }) {
  if (!user) {
    return (
      <>
        <Head>
          <title>Page not found!</title>
          <meta name="description" content="W3B Scholar - Belajar Web3" />
          <meta property="og:image" content="../public/logo.png" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Custom404 />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>W3B Scholar | {user.name}</title>
        <meta name="description" content="W3B Scholar - Belajar Web3" />
        <meta property="og:image" content="../public/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <BackButton href="/authors" />
          <UserWrapper>
            <UserImage src={user.profileImageURL} alt="Author's Picture" />
            <UserText>
              <h5>{user.name}</h5>
              {user.position && (
                <p>
                  {user.position} {user.company ? ` at ${user.company}` : ""}
                </p>
              )}
              <p>Total artikel: {documents ? documents.length : 0}</p>
            </UserText>
          </UserWrapper>
          <ArticleWrapper>
            <ArticleCardContainer data={documents} />
          </ArticleWrapper>
        </Container>
      </Layout>
    </>
  );
}

export default Profile;

export async function getServerSideProps(context) {
  const user = await getDoc(doc(db, "users", context.params.id));

  const q = query(
    collection(db, "articles"),
    where("userId", "==", context.params.id)
  );

  const querySnapshot = await getDocs(q);

  const articles = querySnapshot?.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return {
    props: {
      user: user.data() ? user.data() : null,
      documents: articles.map((doc) => ({
        id: doc?.id,
        title: doc?.title,
        date: doc?.createdAt,
        cardImg: doc?.imageURL,
        author: {
          name: user.data()?.name,
          imgUrl: user.data()?.profileImageURL,
        },
      })),
    },
  };
}
