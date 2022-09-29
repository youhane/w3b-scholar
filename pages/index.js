<<<<<<< HEAD
import Head from 'next/head'
import Footer from '../components/common/Footer/Footer'
import About from '../components/pages/Landing/About/About'
import Articles from '../components/pages/Landing/Articles/Articles'
import Authors from '../components/pages/Landing/Authors/Authors'
import Community from '../components/pages/Landing/Community/Community'
import Hero from '../components/pages/Landing/Hero/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>W3B Scholar</title>
        <meta name="description" content="W3B Scholar" />
        <meta property='og:image' content='../public/logo.png' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Articles />
      <Authors />
      <Community/>
      <Footer />
    </div>
  )
}
=======
import Head from 'next/head'
import Footer from '../components/common/Footer/Footer'
import About from '../components/pages/Landing/About/About'
import Articles from '../components/pages/Landing/Articles/Articles'
import Authors from '../components/pages/Landing/Authors/Authors'
import Community from '../components/pages/Landing/Community/Community'
import Hero from '../components/pages/Landing/Hero/Hero'

export default function Home() {
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
      <Articles />
      <Authors />
      <Community/>
    </div>
  )
}
>>>>>>> 0f2417bebe60f0fe0c267bbd4c04e7e0edfd5c5b
