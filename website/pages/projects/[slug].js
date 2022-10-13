import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProjectBySlug, getAllProjects } from "../../lib/project-api";
import {
  Text,
  Center,
  Image,
  Box,
  Grid,
  GridItem,
  Heading,
  Button
} from "@chakra-ui/react";
import Link from "next/link";
import { PROJECT_BASE } from "../../lib/constants";

export default function Project({ proj }) {
  const router = useRouter();
  const projectLink = PROJECT_BASE.concat(proj.slug);
  const contentlink = proj.content[0] ? proj.content[0] : "";
  const beginningContent = proj.content[1] ? proj.content[1] : "";
  const remainingcontent = proj.content.slice(2) ? proj.content.slice(2) : "";

  if (!router.isFallback && !proj?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Center>
        <Image
          my="5"
          w={{base: "90%", md: "50%"}}
          h="50vh"
          fit="cover"
          src={proj.imageLink}
          alt={proj.title}
        />
      </Center>
      <Center>
        <Text>{proj.imageCaption}</Text>
      </Center>
      <Box my="10" mx="auto" w={{base: "90%", md: "50%"}}>
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
            <Link href={proj.externalLink}>
              <Button colorScheme="blue" display='inline'>
                {contentlink}
              </Button>
            </Link>{" "}{beginningContent}
            <Text></Text>
          </GridItem>
          {remainingcontent.map((paragraph) => (
            <GridItem>
              <Text>{paragraph}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export async function getStaticProps({ params }) {
  const proj = getProjectBySlug(params.slug, [
    "title",
    "imageLink",
    "imageCaption",
    "category",
    "externalLink",
    "content",
    "slug",
  ]);

  return {
    props: {
      proj,
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
