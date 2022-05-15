import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  NextLink,
  Link
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

// const LinkItem = ({href, path, children}) => {
//   const active = path === href;
//   const inactiveColor = useColorModeValue('gray200', 'whiteAlpha');
//   return (
//   <NextLink>
//     <Link
//       p={2}
//       bg={active ? 'glassTeal' : undefined}
//       color={active ? '#202023' : inactiveColor}>
//         {children}
//       </Link>
//   </NextLink>
//   );
// }


const Navbar = props => {
  const {path} = props;
  console.log(path);
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <Box {...props}>

      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={3}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Angus</VisuallyHidden>
            </chakra.a>
            <Link href="/">
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              LHS
              </chakra.h1>
            </Link>
            
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link href="/experiences">
                <Button variant="ghost">Experiences</Button>
              </Link>
              <Link href="/projects" >
                <Button variant="ghost">Projects</Button>
              </Link>
              <Link href="/posts">
                <Button variant="ghost">Posts</Button>
              </Link>
            </HStack>
            <Button colorScheme="teal" size="sm">
              Resume
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Experiences
                </Button>
                <Button w="full" variant="ghost">
                  Projects
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
      </Box>
    </React.Fragment>
  );
}

export default Navbar