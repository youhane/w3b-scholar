import React, { useContext, useEffect, useState } from 'react'
import { InputComponent, InputPicture, InputPictureButton, SubmitArticle, Top, Wrapper } from './Editor.styles'
import { BiUpload } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import { db, storage } from '../../../../firebase/firebase';
import dynamic from 'next/dynamic'
import { formats, modules } from '../../../../constants/quill.config';
import 'react-quill/dist/quill.snow.css';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { AuthContext } from '../../../../context/AuthContext';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function Editor({ setDisplayModal }) {
    const [articleContent, setArticleContent] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [articleThumbnail, setArticleThumbnail] = useState(null);
    const [titleFilled, setTitleFilled] = useState(true);
    const [contentFilled, setContentFilled] = useState(true);
    const [imageFilled, setImageFilled] = useState(true);

    const articleColumn = collection(db, 'articles')
    const user = useContext(AuthContext);

    const submitArticle = () => {
        checkForm()
        if (articleContent !== '' && articleTitle !== '' && articleThumbnail !== null) {
            const imageRef = ref(storage, `articles/${articleThumbnail.name}${articleTitle}`);

            uploadBytes(imageRef, articleThumbnail).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    addDoc(articleColumn, {
                        title: articleTitle,
                        content: articleContent,
                        imageURL: url,
                        userId: user.uid,
                        createdAt: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
                    })
                })
                setDisplayModal(true)
                setArticleTitle("")
                setArticleContent("")
                setArticleThumbnail(null)
            })
        } else return
    }

    const updateText = (value) => {
        setArticleContent(value)
        setContentFilled(true)
    }

    const checkForm = () => {
        if (articleTitle === "") {
            setTitleFilled(false)
        } else {
            setTitleFilled(true)
        }

        if (articleContent === "" || articleContent.length  === 11) {
            setContentFilled(false)
        } else {
            setContentFilled(true)
        }

        if (articleThumbnail !== null) {
            setImageFilled(true)
        } else {
            setImageFilled(false)
        }
    }

    return (
        <Wrapper>
            <Top>
                <InputComponent isFilled={titleFilled}>
                    <label htmlFor="title">Judul</label>
                    <input
                        type="text"
                        name='title'
                        id='title'
                        value={articleTitle}
                        onChange={(e) => {setArticleTitle(e.target.value); setTitleFilled(true)}}
                        placeholder='Masukkan judul artikel'
                        required
                    />
                    {!titleFilled && <p className='error-message'>Judul tidak boleh kosong. Silakan diisi</p>}
                </InputComponent>
                <InputPictureButton isFilled={imageFilled}>
                    {
                        articleThumbnail ? (
                            <label onClick={() => setArticleThumbnail(null)}>
                                {articleThumbnail?.name.substring(0, 30)} ... <IoClose />
                            </label>
                        ) :
                            (
                                <>
                                    <label htmlFor="gambar">Upload Gambar <BiUpload /></label>
                                    <input
                                        type="file"
                                        name='gambar'
                                        id='gambar'
                                        onChange={(e) => {setArticleThumbnail(e.target.files[0]); setImageFilled(true)}}
                                    />
                                </>
                            )
                    }
                    {!imageFilled && <p className='error-message'>Belum upload gambar. Maksimal 10 MB</p>}
                </InputPictureButton>
            </Top>
            <InputComponent isFilled={contentFilled}>
                <label htmlFor="content">Konten</label>
                <ReactQuill
                    className='quill'
                    value={articleContent}
                    modules={modules}
                    formats={formats}
                    onChange={updateText}
                />
                {!contentFilled && <p className='error-message'>Konten tidak boleh kosong. Silakan diisi</p>}
            </InputComponent>
            <SubmitArticle onClick={submitArticle}>Simpan</SubmitArticle>
        </Wrapper>
    )
}

export default Editor