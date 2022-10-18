import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react'
import SuccessModal from '../../components/common/SuccessModal/SuccessModal';
import AddArticle from '../../components/pages/Admin/AddArticle/AddArticle';
import { AuthContext } from '../../context/AuthContext';

function Editor() {
    const user = useContext(AuthContext);
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <>
            <Head>
                <title>W3B Scholar | Editor</title>
                <meta name="description" content="W3B Scholar - Belajar Web3" />
                <meta property='og:image' content='../public/logo.png' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {user === null && <SuccessModal text={'Kamu perlu login untuk akses halaman ini!'} redirect='/login' setDisplayModal={setDisplayModal} />}
            <AddArticle />
        </>
    )
}

export default Editor