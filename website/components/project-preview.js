import { Flex, Box, Image, chakra, Link } from "@chakra-ui/react";

import NextLink from "next/link";

const ProjectPreview = ({project}) => {
  return (
    <NextLink href={project.projectLink}  passHref>
      <Box
        mx="auto"
        my="20px"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={project.imageLink}
          alt="article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{
                color: "brand.400",
              }}
            >
              {project.category}
            </chakra.span>
            <Link
              display="block"
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{
                color: "gray.600",
                textDecor: "underline",
              }}
            >
              {project.title}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {project.description}
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <chakra.span
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: "gray.300",
                }}
              >
                {project.date}
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </NextLink>
  );
};

export default ProjectPreview;
