import React, { useContext, useState } from 'react'
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

function Editor() {
    const [articleContent, setArticleContent] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [articleThumbnail, setArticleThumbnail] = useState(null);
    const [articleURL, setArticleURL] = useState("");

    const articleColumn = collection(db, 'articles')
    const user = useContext(AuthContext);

    const submitArticle = () => {
        if(articleThumbnail === null) {
            return alert("Please choose an image");
        }

        const imageRef = ref(storage, `articles/${articleThumbnail.name}${articleTitle}`);

        uploadBytes(imageRef, articleThumbnail).then((snapshot) => {
            alert("Image uploaded successfully")
            getDownloadURL(snapshot.ref).then((url) => {
                setArticleURL(url)
            })
        })

        if (articleContent === "" || articleTitle === "") {
            return alert("Please fill in all the fields");
        }

        addDoc(articleColumn, {
            title: articleTitle,
            content: articleContent,
            imageURL: articleURL,
            userId: user.uid,
            createdAt: new Date().getTime(),
        })

        setArticleTitle("")
        setArticleContent("")
        setArticleThumbnail(null)
        setArticleURL("")
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
                                        onChange={(e) => setArticleThumbnail(e.target.files[0])}
                                    />
                                </>
                            )
                    }

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