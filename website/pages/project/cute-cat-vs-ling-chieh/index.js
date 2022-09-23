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

const CuteCatVsLingChieh = () => {
  const proj = PROJECTS[0];

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
        <Text>{proj.imageCaption}</Text>
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
                This
              </Link>{" "}
              was my first project. It was a group project for the
              &ldquo;Introduction to Programming&rdquo; course taught by Prof.
              Kung LingChieh, and I am responsible for designing and
              implementing all non-UI related code. Big up to 林宗勳, who
              designed and implemented the UI design; 呂紀廷, our team leader;
              and 劉頤憲 &amp; 游紫茵, who designed the rules of the game.
            </Text>
          </GridItem>
          <GridItem>
            <Text>
              The challenging part was that we had only three weeks to build a
              game from scratch with no prior experience, so effective
              communication is required to make rapid changes. To do so, I
              established a meeting schedule and planned to meet every three
              days. In each meeting, we had a clear list of what to discuss and
              finished each meeting within one hour. In addition, I also set up
              a git workflow, allowing the UI designer to create branches and
              update the graphics. In the end, our team was able to finish the
              project before the due date, and all teammates gave positive
              feedback of my effort in the team.
            </Text>
          </GridItem>
          <GridItem>
            <Text>
              Back then, I knew nothing about OOP, and there are a ton of things
              that I would change if I were to redo the project. First of all, I
              would make an abstract data type for players and locations, and
              implement inheritance. Also, I&rsquo;ll break my code into several
              header files and .c files for each class for modulability. This
              project made me realize the importance of structuring code and
              invoked my interest for game development.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default CuteCatVsLingChieh;
