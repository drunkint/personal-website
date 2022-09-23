const { Center, Text, Container, Grid, GridItem } = require("@chakra-ui/react");
import { getAllProjects } from '../../lib/project-api'
import HeroPost from '../../components/hero-post'
import ProjectPreview from '../../components/project-preview'


const Projects = ({allProjects}) => {
    const heroProject = allProjects[0];
    const moreProjects = allProjects.slice(1);
 
    return (
        <Container maxW='container.xl'>
            {heroProject && (
                <ProjectPreview project={heroProject} isHero='true' />
          )}
          {moreProjects.length > 0 && 
          <Center>
          <Grid templateColumns="1fr 1fr" templateRows="repeat(1, 1fr)" gap={3}>
            {moreProjects.map((project) => (
              <GridItem>
                <ProjectPreview project={project} isHero='false' key={project.slug} />
              </GridItem>
            ))}
          </Grid>
        </Center>
          }

        </Container>
    );
}

export default Projects


export async function getStaticProps() {
    const allProjects = getAllProjects([
      'title',
      'projectLink',
      'imageLink',
      'category',
      'description',
      'date',
      'slug'
    ])
  
    return {
      props: { allProjects },
    }
  }
  