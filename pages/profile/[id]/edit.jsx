import React, { useState } from "react";
import styled from "styled-components";

import ChangePasswordModal from "../../../components/pages/EditProfile/ChangePasswordModal";
import Custom404 from "../../404";
import FormContainer from "../../../components/pages/EditProfile/FormContainer";
import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import Sidebar from "../../../components/common/Sidebar/Sidebar";
import SuccessModal from "../../../components/common/SuccessModal/SuccessModal";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export const Wrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-left: 3%;
  padding: 2rem 0;

  .form-container {
    margin-left: 11%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;

    .sidebar-container {
      display: none;
    }

    .form-container {
      margin-left: 0;
    }
  }
`;

const EditProfile = ({ user }) => {
  const [displayChangePasswordModal, setDisplayChangePasswordModal] =
    useState(false);
  const [
    displaySuccessChangePasswordModal,
    setDisplaySuccessChangePasswordModal,
  ] = useState(false);
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);

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
        <title>W3B Scholar | Edit Profile</title>
        <meta name="description" content="W3B Scholar - Belajar Web3" />
        <meta property="og:image" content="../public/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {displayChangePasswordModal && (
        <ChangePasswordModal
          user={user}
          setDisplayChangePasswordModal={setDisplayChangePasswordModal}
          setDisplaySuccessModal={setDisplaySuccessChangePasswordModal}
        />
      )}
      {displaySuccessChangePasswordModal && (
        <SuccessModal
          text={"Password berhasil dirubah"}
          setDisplayModal={setDisplaySuccessChangePasswordModal}
        />
      )}
      {displaySuccessModal && (
        <SuccessModal
          text={"Data berhasil disimpan"}
          setDisplayModal={setDisplaySuccessModal}
          redirect={"/"}
        />
      )}
      <Layout profileImg={user.profileImageURL}>
        <Wrapper>
          <Sidebar profile />
          <div className="form-container">
            <FormContainer
              user={user}
              setDisplayChangePasswordModal={setDisplayChangePasswordModal}
              setDisplaySuccessModal={setDisplaySuccessModal}
            />
          </div>
        </Wrapper>
      </Layout>
    </>
  );
};

export default EditProfile;

export async function getServerSideProps(context) {
  const userDoc = await getDoc(doc(db, "users", context.params.id));

  return {
    props: {
      user: userDoc.data(),
    },
  };
}
