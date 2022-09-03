import { doc, getDoc } from 'firebase/firestore';
import React from 'react'
import { db } from '../../firebase/firebase';

function Article({article}) {
  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  )
}

export default Article

export async function getServerSideProps(context) {
  const article = await getDoc(doc(db, "articles", context.params.id));

  return {
    props: {
      article: article.data()
    }
  }
}