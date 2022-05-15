import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Meta from '../components/meta'
import Navbar from '../components/navbar'
import { Router } from 'next/router'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
        <Meta />
        <Head> 
          {/* adding other stuff to head */}
          <title>Angus Lee's portfolio</title>
        </Head>
          <Navbar path={Router.asPath}/>
          <Intro />

          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}

    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
