const { Center, Text, Grid, GridItem } = require("@chakra-ui/react");
import ProjectPreview from "../../components/project-preview";
const Projects = () => {
    const cuteCatVsLingChieh = {
        projectLink: "/project/cute-cat-vs-ling-chieh",
        imageLink: "/project-photos/cute-cat-vs-ling-chieh.png",
        category: "C++, SFML, MakeFile, Agile, Git, Github",
        title: "Cute Cat Vs. Ling Chieh - Board Game App",
        description: "des",
        date: "JAN 2021"
    }

  return (
    <Center>
      <Grid templateRows="repeat(1, 1fr)">
        <GridItem>
          <ProjectPreview project={cuteCatVsLingChieh} />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Projects;
