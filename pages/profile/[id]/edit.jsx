import Head from 'next/head';
import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import PageIndicator from '../../../components/common/PageIndicator/PageIndicator';
import { FiUpload } from 'react-icons/fi';
import Sidebar from '../../../components/common/Sidebar/Sidebar';
import styled from 'styled-components';
import EditProfile from '../../../components/pages/Profile/Edit/edit';

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
            <EditProfile user={user} />
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

