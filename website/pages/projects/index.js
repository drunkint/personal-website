const { Center, Text, Grid, GridItem } = require("@chakra-ui/react");
import ProjectPreview from "../../components/project-preview";
const Projects = () => {
    const cuteCatVsLingChieh = {
        projectLink: "/projects/cute-cat-vs-ling-chieh",
        imageLink: "/project-photos/cute-cat-vs-ling-chieh.png",
        category: "C++, SFML, MakeFile, Agile, Git, Github",
        title: "Cute Cat Vs. Ling Chieh - Board Game App",
        description: "In this project, I researched, architeched, and implemented all the non-UI code. I learned about finite state machines, game engines, rendering, and C++ from a low level. If I were to make changes to the project, I'll use more advanced C++ features such as virtual base classes, or even create my own namespace.",
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
