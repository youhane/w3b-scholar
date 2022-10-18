/*
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
*/

import Custom404 from "../../404";
import FormContainer from "../../../components/pages/EditProfile/FormContainer";
import Layout from "../../../components/layout/Layout";
import SuccessModal from "../../../components/common/SuccessModal/SuccessModal";
import Head from 'next/head';
import React, { useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import PageIndicator from '../../../components/common/PageIndicator/PageIndicator';
import { FiUpload } from 'react-icons/fi';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
import styled from 'styled-components';
import EditProfile from '../../../components/pages/Profile/Edit/edit';
import ChangePasswordModal from '../../../components/pages/Profile/ChangePasswordModal/ChangePasswordModal';

const Wrapper = styled.section`
    display: flex;
    margin-top: 12rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        margin-top: 8rem;
        flex-direction: column;
    }
`

function Edit({ user }) {
    const [changePasswordModal, setChangePasswordModal] = useState(false);

    return (
        <Wrapper>
            <Head>
                <title>W3B Scholar | Edit Profile</title>
                <meta name="description" content="W3B Scholar - Belajar Web3" />
                <meta property="og:image" content="../public/logo.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageIndicator
                icon={<FiUpload />}
                currentPage={'Edit Profile'}
            />
            <Sidebar profile={true} />
            <EditProfile user={user} setChangePasswordModal={setChangePasswordModal} />
            {changePasswordModal && <ChangePasswordModal setChangePasswordModal={setChangePasswordModal} />}
        </Wrapper>
    )
}

export default Edit

export async function getServerSideProps(context) {
    const userDoc = await getDoc(doc(db, "users", context.params.id));

    return {
        props: {
            user: userDoc.data(),
        },
    };
}