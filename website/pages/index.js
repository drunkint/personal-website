import Intro from '../components/intro'
import Head from 'next/head'
import Meta from '../components/meta'
import Splash from '../components/splash'

export default function Index() {
  
  return (
    <>
        <Meta />
        <Head> 
          {/* adding other stuff to head */}
          <title>Angus Lee's portfolio</title>
        </Head>
          {/* <Intro /> */}
          <Splash/>

    </>
  )
}
