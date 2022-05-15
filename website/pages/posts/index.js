const { Center, Text, Container } = require("@chakra-ui/react");
import { getAllPosts } from '../../lib/api'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'



const Posts = ({allPosts}) => {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <Container maxW='container.xl'>
            {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}

        </Container>
    );
}

export default Posts


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
  