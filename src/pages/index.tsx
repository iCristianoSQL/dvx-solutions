import Head from 'next/head'
import type { NextPage } from 'next'

import { Card, ToastAlert } from '../components'
import withLayout from '../hocs/Layout/layout'

const Home: NextPage = () => {
  return (
    <>
      <ToastAlert />
      <Head>
        <title>DVX-Solutions</title>
        <meta name="description" content="Mars photo carousel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
    </>
  )
}

export default withLayout(Home)
