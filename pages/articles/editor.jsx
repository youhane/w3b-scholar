import Head from 'next/head';
import React from 'react'
import AddArticle from '../../components/pages/Admin/AddArticle/AddArticle';

function Editor() {
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