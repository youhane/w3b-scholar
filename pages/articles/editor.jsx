import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { formats, modules } from '../../constants/quill.config';
import 'react-quill/dist/quill.snow.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function Editor() {
    const [articleContent, setArticleContent] = useState("");
    const [articleTitle, setArticleTitle] = useState("");

    const articleColumn = collection(db, 'articles')

    const submitArticle = () => {
        if (articleContent === "" || articleTitle === "") {
            return alert("Please fill in all the fields");
        }
        addDoc(articleColumn, {
            title: articleTitle,
            content: articleContent
        })
        setArticleTitle("")
        setArticleContent("")
    }

    const updateText = (value) => {
        setArticleContent(value)
    }

    return (
        <div>
            <input type="text" value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} placeholder='Enter a title' required />
            <ReactQuill value={articleContent} modules={modules} formats={formats} onChange={updateText} />
            <button onClick={submitArticle}>Submit Article</button>
        </div>
    )
}

export default Editor