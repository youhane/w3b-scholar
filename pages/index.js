import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>W3B Scholar</title>
        <meta name="description" content="W3B Scholar" />
        <meta property='og:image' content='../public/logo.png' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
    </div>
  )
}
