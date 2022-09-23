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
import ProjectPreview from "../../../components/project-preview";
import { PROJECTS } from "../../../lib/constants";

const DoctorApp = () => {
  const proj = PROJECTS[2];

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
              The
              <Link href={proj.externalLink} style={{ color: "teal" }}>
                Doctor App
              </Link>{" "}
              was made by R2D2, a group of 5. It was written and tested in Java,
              and was developed using Android Studio. This project marks a
              milestone for me because it was the first time that I used git as
              a team. In addition, it revealed several new concepts: the MVC
              model, Agile, unit tests, and the frontend-backend-database
              structure.
            </Text>
          </GridItem>
          <GridItem>
            <Text>
              Personally, there are two parts that I spent a lot on. First is
              the booking architecture. Initially, another experienced
              teammember structured the booking class. However, it turned out
              that it's tedious to be serialized, hence making it hard to store
              it into the database. After realizing this problem, I talked to
              other teammembers about this issue and proposed a solution (which
              I've already implemented). In the end, they all agreed that my
              solution is a better option. As a person who was usually not brave
              enough to voice my own opinions, this was a big breakthrough.
              After this, I became more confident as a software developer and as
              a person.
            </Text>
          </GridItem>
          <GridItem>
            <Text>
              The second part that I spent a lot of time on is making the list
              of available timeslots show. Having no experience on Android
              Studio, it took me a while that we should use the newer Recycler
              View instead of the older List View. Secondly, the Recycler View
              was seperated into several different files for MVC, and this
              caused a lot of confusion since I couldn't find a simple example
              on the web. In the end I read the docs, my friends code, in
              addition to some tutorials, and finally it worked. After this
              experience, I became more capable of doing independent research,
              and more confident when dealing with new technology.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default DoctorApp;
