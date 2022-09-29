import { motion } from "framer-motion";
import { Center, Text, Box , Button} from "@chakra-ui/react";
import { SplitText } from "@cyriacbr/react-split-text";
import { extendTheme } from "@chakra-ui/react";
import ChangingText from "./changing-text";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Splash = () => {
  return (
    <>
      <Center h="80vh">
        <Box
          textStyle="h1"
          textAlign={"center"}
          fontFamily={`'Raleway', sans-serif`}
        >
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <Text p={5}>Angus Lee</Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            \
          </motion.div>

          <ChangingText />
        </Box>
      </Center>
      <Center>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link href="#homePageBio" scroll={true}>
            <Button variant="ghost" p="0">
              <ArrowDownIcon />
            </Button>
          </Link>
        </motion.div>
      </Center>
      <Center h="100vh">
        <Box
          textStyle="h2"
          // textAlign={"center"}
          fontFamily={`'Raleway', sans-serif`}
          w="70%"
        >
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}

          >
            <Text p={5} id="homePageBio">
              4th year Co-op CS in University of Toronto. Proficient in Full
              Stack web development and large-scale debugging in Javascript, C#
              and Java. Self motivated to explore new tech, while gaining smart
              contract, machine learning, and android app development experience
              along the way.
            </Text>
          </motion.div>
        </Box>
      </Center>
    </>
  );
};

export default Splash;
