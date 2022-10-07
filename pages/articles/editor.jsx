import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import AddArticle from '../../components/pages/Admin/AddArticle/AddArticle';
import { AuthContext } from '../../context/AuthContext';

function Editor() {
    const user = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if(user === null){
            router.push('/')
        }
    }, [router, user]);

    return (
        <>
            <Head>
                <title>W3B Scholar | Editor</title>
                <meta name="description" content="W3B Scholar - Belajar Web3" />
                <meta property='og:image' content='../public/logo.png' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AddArticle />
        </>
    )
}

export default Editor