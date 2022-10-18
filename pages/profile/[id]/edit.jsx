import FormContainer from "../../../components/pages/EditProfile/FormContainer";
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
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);

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
      {/* <EditProfile user={user} setChangePasswordModal={setChangePasswordModal} /> */}
      <FormContainer
        user={user}
        setDisplayChangePasswordModal={setChangePasswordModal}
        setDisplaySuccessModal={setDisplaySuccessModal}
      />
      {displaySuccessModal && (
        <SuccessModal
          text={"Data berhasil disimpan"}
          setDisplayModal={setDisplaySuccessModal}
        />
      )}
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