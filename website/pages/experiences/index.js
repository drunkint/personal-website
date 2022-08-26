import ChangingText from "../../components/changing-text";
import ExperiencePreview from "../../components/experience-preview";
import Splash from "../../components/splash";

const { Center, Grid, GridItem, Text } = require("@chakra-ui/react");

const Experiences = () => {
  return (
    <Center>
      <Grid templateRows="repeat(1, 1fr)">
        <GridItem>
          <ExperiencePreview/>
        </GridItem>
        
      </Grid>
    </Center>
  );
};

export default Experiences;
