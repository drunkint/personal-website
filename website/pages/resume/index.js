const { Center, Image, Box, Button } = require("@chakra-ui/react");
import Link from "next/link";
const Resume = () => {
  return (
    <>
    <Center mt="10">
      <Box>
        <a href="/AngusLee_Resume.pdf" download>
          <Button >Download Resume PDF</Button>
        </a>
      </Box>
    </Center>
      <Center h="80hv">
        <Image w="70%" mt="5" src="/resume-photos/resume-2022Sep.png" />
      </Center>
    </>
  );
};

export default Resume;
