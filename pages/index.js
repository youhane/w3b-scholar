import { collection, getDocs } from 'firebase/firestore'
import Head from 'next/head'
import About from '../components/pages/Landing/About/About'
import Articles from '../components/pages/Landing/Articles/Articles'
import Authors from '../components/pages/Landing/Authors/Authors'
import Community from '../components/pages/Landing/Community/Community'
import Hero from '../components/pages/Landing/Hero/Hero'
import { db } from '../firebase/firebase'

const articleListDummy = [
  {
    id: 1,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Gianlucazino Zambrotta",
      imgUrl:
        "https://pbs.twimg.com/profile_images/977547763092217857/mWJXTPj__400x400.jpg",
    },
  },
  {
    id: 2,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
    },
  },
  {
    id: 3,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
    },
  },
  {
    id: 4,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
    },
  },
  {
    id: 5,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
    },
  },
  {
    id: 6,
    title: "8 Jenis DAO Paling Penting yang Perlu Anda Ketahui",
    cardImg:
      "https://d33wubrfki0l68.cloudfront.net/4b98f4a3c3259ea04adb9027358692a5a955f267/05acd/static/28214bb68eb5445dcb063a72535bc90c/f51a3/hero.png",
    date: "April 06, 2002",
    author: {
      name: "Stephen Tries",
      imgUrl:
        "https://www.chelseafcbrasil.com/wp-content/uploads/2021/08/1-Kepa-Arrizabalaga.png",
    },
  },
];

const DUMMY_AUTHORS = [
  {
      image: '/static/profile/dericCheng.png',
      name: 'Deric Cheng',
      title: 'Dev Education at Web3U'
  },
  {
      image: '/static/profile/dericCheng.png',
      name: 'Deric Cheng',
      title: 'Dev Education at Web3U'
  },
  {
      image: '/static/profile/dericCheng.png',
      name: 'Deric Cheng',
      title: 'Dev Education at Web3U'
  },
  {
      image: '/static/profile/dericCheng.png',
      name: 'Deric Cheng',
      title: 'Dev Education at Web3U'
  },
  {
      image: '/static/profile/dericCheng.png',
      name: 'Deric Cheng',
      title: 'Dev Education at Web3U'
  },
  {
      image: '/static/profile/dericCheng.png',
      name: 'Deric Cheng',
      title: 'Dev Education at Web3U'
  }
]

export default function Home({documents={articleListDummy}, authors={DUMMY_AUTHORS}}) {
  return (
    <div>
      <Head>
        <title>W3B Scholar</title>
        <meta name="description" content="W3B Scholar - Belajar Web3" />
        <meta property='og:image' content='../public/logo.png' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Articles documents={documents} />
      <Authors authors={authors} />
      <Community/>
    </div>
  )
}


export async function getServerSideProps() {
  const articlesReference = collection(db, "articles");
  const res = await getDocs(articlesReference);

  const docs = res?.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  const getAuthorDetail = async (docs) => {
    const usersReference = collection(db, "users");
    const res = await getDocs(usersReference);

    const usersDocs = res?.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });

    for (let i = 0; i < docs?.length; i++) {
      for (let j = 0; j < usersDocs?.length; j++) {
        const authorId = docs[i]?.userId;
        if (authorId === usersDocs[j]?.uid) {
          docs[i].author = usersDocs[j];
        }
      }
      if (!docs[i]?.author) {
        docs[i].author = {
          name: "Anonymous",
          profileImageURL:
            "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
        };
      }
    }
    return docs.slice(0, 6);
  };

  const authorsReference = collection(db, "users");
  const resAuthors = await getDocs(authorsReference);
  const authors = resAuthors?.docs.map((doc) => {
    console.log(doc.data().company)
    return {
      company: doc.data().company,
      name: doc.data().name,
      position: doc.data().position,
      profileImageURL: doc.data().profileImageURL,
      uid: doc.data().uid,
    };
  });

  console.log(authors)

  const completeArticles = await getAuthorDetail(docs);

  return {
    props: {
      documents: completeArticles.map((doc) => ({
        id: doc?.id,
        title: doc?.title,
        date: doc?.createdAt,
        cardImg: doc?.imageURL,
        author: { name: doc?.author.name, imgUrl: doc?.author.profileImageURL },
      })),
      authors: authors,
    },
  };
}
