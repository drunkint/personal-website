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

const BeingSeen = () => {
  const proj = PROJECTS[3];

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
              To tackle this project, I self-learned android studio, Spring Boot
              for backend APIs, and used MongoDB for database. These skills
              allowed me to design and implement the structure of the frontend,
              backend, and the database. Also, when we were stuck on
              implementing JWT token for the login and sign in features, in
              addition to the logic of switching recycler views, I was the one
              who volunteered to work on it and finished the feature. As a
              result, the App we made was bug free, and our team was able to
              achieve above 90 on the project.
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

export default BeingSeen;
