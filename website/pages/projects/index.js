const { Center, Text, Grid, GridItem } = require("@chakra-ui/react");
import ProjectPreview from "../../components/project-preview";
import { PROJECTS } from "../../lib/constants";
const Projects = () => {

  const projectsReverse = PROJECTS.slice().reverse();
  return (
    <Center>
      <Grid templateColumns="1fr 1fr" templateRows="repeat(1, 1fr)" gap={3}>
        {projectsReverse.map((project) => (
          <GridItem>
            <ProjectPreview project={project} />
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};

export default Projects;
