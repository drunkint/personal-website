import { Flex, Box, Image, chakra, Link } from "@chakra-ui/react";

import NextLink from "next/link";

const ExperiencePreview = () => {
  return (
    <NextLink href="/experiences/taq-2022-summer" passHref>
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
          src="/experience-photos/taq-dashboard.png"
          alt="taq article"
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
              Intern
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
              My Summer Intern at Taq Automative
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              I worked in the Credit Driver Maintenance team during my Summer Co-op term in Taq. Our team consists of 9 developers, and our job is to add and modify features of the credit application according to Lenders' requests.
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
                25 AUG 2022
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </NextLink>
  );
};

export default ExperiencePreview;
