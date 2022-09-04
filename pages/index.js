import Head from 'next/head'
import Footer from '../components/common/Footer/Footer'
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
      <Footer />
    </div>
  )
}
