import { motion } from "framer-motion";
import { Center, Text, Box } from "@chakra-ui/react";
import { SplitText } from "@cyriacbr/react-split-text";
import { extendTheme } from "@chakra-ui/react";
import ChangingText from "./changing-text";

const Splash = () => {

  return (
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
  );
};

export default Splash;
