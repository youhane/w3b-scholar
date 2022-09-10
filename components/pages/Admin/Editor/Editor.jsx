import React, { useState } from 'react'
import { InputComponent, InputPicture, InputPictureButton, SubmitArticle, Top, Wrapper } from './Editor.styles'
import { BiUpload } from 'react-icons/bi'
import { db } from '../../../../firebase/firebase';
import dynamic from 'next/dynamic'
import { formats, modules } from '../../../../constants/quill.config';
import 'react-quill/dist/quill.snow.css';
import { addDoc, collection } from 'firebase/firestore';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function Editor() {
    const [articleContent, setArticleContent] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [articleThumbnail, setArticleThumbnail] = useState("");

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
        <Wrapper>
            <Top>
                <InputComponent>
                    <label htmlFor="title">Judul</label>
                    <input
                        type="text"
                        name='title'
                        id='title'
                        value={articleTitle}
                        onChange={(e) => setArticleTitle(e.target.value)}
                        placeholder='Masukkan judul artikel'
                        required
                    />
                </InputComponent>
                <InputPictureButton>
                    <label htmlFor="gambar">Upload Gambar <BiUpload /></label>
                    <input
                        type="file"
                        name='gambar'
                        id='gambar'
                        value={articleThumbnail}
                        onChange={(e) => setArticleThumbnail(e.target.files[0])}
                    />
                </InputPictureButton>
            </Top>
            <InputComponent>
                <label htmlFor="content">Konten</label>
                <ReactQuill
                className='quill'
                    value={articleContent}
                    modules={modules}
                    formats={formats}
                    onChange={updateText}
                />
            </InputComponent>
            <SubmitArticle onClick={submitArticle}>Simpan</SubmitArticle>
        </Wrapper>
    )
}

export default Editor