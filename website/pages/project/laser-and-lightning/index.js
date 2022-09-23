import {
  Center,
  Grid,
  GridItem,
  Text,
  Image,
  Heading,
  Box,
  Link,
} from "@chakra-ui/react";
import { NextLink } from "next/link";
import { PROJECTS } from "../../../lib/constants";

const LaserAndLightning = () => {
  const proj = PROJECTS[1];

  return (
    <>
      <Center>
        <Image
          my="5"
          w="50%"
          h="50vh"
          fit="cover"
          src={proj.imageLink}
          alt={proj.title}
        />
      </Center>
      <Center>
        <Text>{proj.projectLink}</Text>
      </Center>
      <Box my="10" mx="auto" w="50%">
        <Text
          fontSize="sm"
          textTransform="uppercase"
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          {proj.category}
        </Text>
        <Heading as="h1" marginBottom="20px">
          {proj.title}
        </Heading>
        <Grid templateRows="repeat(1, 1fr)" gap={3} fontSize="lg">
          <GridItem>
            <Text>
              <Link href={proj.externalLink} style={{ color: "teal" }}>
                Laser and Lightning
              </Link>{" "}
              is a 256 * 512 bit horizontal scrolling game written in MIPS, an
              assembly language. It includes features such as collision
              detection, pickups(armo, health), shooting obstacles with laser
              beams, increased difficulty over time, and score tracking. Through
              this project, I implemented functions and conditional statements
              in assembly, and learned how to debug assembly code.
            </Text>
          </GridItem>
          <GridItem>
            <Text>
              The hardest part in this project is to modularize the code. To
              cope with this, I created and followed my own coding style
              standards. In addition, I also made good use of variables (stored
              in memory) so different sections of code wouldn't intefere with
              each other. Another difficult part is debugging. The solution,
              apart from the aforementioned modularization, is to step through
              the code and check how it flows, in addition to the value of the
              registers. In the end, this project got full marks from the
              professor. If I were to redo this project, I would create more
              functions so that I won't need to copy code that much. In
              addition, I would learn to incorporate different .asm files, since
              that would also modularize the code better.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default LaserAndLightning;
