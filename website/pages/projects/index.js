const { Center, Text, Container, Grid, GridItem } = require("@chakra-ui/react");
import { getAllProjects } from "../../lib/project-api";
import HeroPost from "../../components/hero-post";
import ProjectPreview from "../../components/project-preview";
import { motion } from "framer-motion";

const Projects = ({ allProjects }) => {
  const heroProject = allProjects[0];
  const moreProjects = allProjects.slice(1);

  return (
    // <motion.div variants={motionContainer} initial="hidden" animate="show">
    <Container maxW="container.xl">
      {heroProject && (
        <motion.div
          initial={{ opacity: 0, translateY: 50}}
          whileInView={{opacity: 1, translateY: 0}}
          viewport={{once: true}}
          transition={{delay: 0.6}}

        >
          <ProjectPreview project={heroProject} isHero="true" />
        </motion.div>
      )}
      {moreProjects.length > 0 && (
        <Center>
          <Grid templateColumns="1fr 1fr" templateRows="repeat(1, 1fr)" gap={3}>
            {moreProjects.map((project) => (
              <motion.div
                initial={{ opacity: 0, translateY: 50}}
                whileInView={{opacity: 1, translateY: 0}}
                viewport={{once: true}}
                transition={{delay: 0.6}}
              >
                <GridItem>
                  <ProjectPreview
                    project={project}
                    isHero="false"
                    key={project.slug}
                  />
                </GridItem>
              </motion.div>
            ))}
          </Grid>
        </Center>
      )}
    </Container>
    // </motion.div>
  );
};

export default Projects;

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "projectLink",
    "imageLink",
    "category",
    "description",
    "date",
    "slug",
  ]);

  return {
    props: { allProjects },
  };
}
