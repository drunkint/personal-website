import { Box, Text, Center, Button, IconButton } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  const sizeOfIcons = 50;
  return (
    <>
      <Box w="full" h="10vh" mt={5}>
        <Center>
          <Link href="https://www.linkedin.com/in/hsu-shen-lee-0a80681a7/">
            <Button variant="ghost" p="0" mx="10px">
              <AiFillLinkedin p="0" border="0" m="0" size={sizeOfIcons} />
            </Button>
          </Link>
          <Link href="https://github.com/drunkint">
            <Button variant="ghost" p="0" mx="10px">
              <AiFillGithub p="0" border="0" m="0" size={sizeOfIcons} />
            </Button>
          </Link>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
