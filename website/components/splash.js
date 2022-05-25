import { motion } from "framer-motion";
import { Center, RangeSlider, Box} from "@chakra-ui/react";
import { SplitText } from "@cyriacbr/react-split-text";
import { extendTheme } from '@chakra-ui/react'


const Splash = () => {
  const displayText = 'hi, my name\n is angus'

  return (
    <Center h='container.sm'>

    <Box
      textStyle='h1'
      >
    <SplitText
      WordWrapper={({ wordIndex, countIndex, children }) => (
        <motion.div
          initial={{opacity: 0, translateX: -50, translateY: 50}}
          animate={{ opacity: 1 , translateX: 0, translateY: 0}} 
          transition={{ duration: 0.5 , delay: wordIndex * 0.3}}
          >
          {children}
        </motion.div>
      )}
    >
        {displayText}
    </SplitText>
    </Box>
    
   
      
    </Center>
  );
};

export default Splash;
