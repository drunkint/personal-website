import ChangingText from "../../components/changing-text";
import Splash from "../../components/splash";

const { Center, Grid, GridItem, Text } = require("@chakra-ui/react");

const Experiences = () => {
  return (
    <Center>
      <Grid templateRows="repeat(2, 1fr)">
        <GridItem>
          <Text>Experiences page in construction</Text>
        </GridItem>
        <GridItem>
          <ChangingText />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Experiences;
