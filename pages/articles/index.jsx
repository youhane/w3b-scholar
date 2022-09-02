import { getDocs } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { db, storage } from '../../firebase/firebase';

function Articles() {
    const articlesReference = collection(db, 'articles')
    const imageListRef = ref(storage, 'articles/')
    const [articles, setArticles] = useState([]);
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prevState) => [...prevState, url]);
                })
            })
        })
    }, [imageListRef]);

    useEffect(() => {
        getDocs(articlesReference).then((res) => {
            const data = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setArticles(data);
        })
    }, [articlesReference]);

    return (
        <div>Articles</div>
    )
}

export default Articles