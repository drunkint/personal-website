import { extendTheme } from "@chakra-ui/react";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  }
}

const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: ['48px', '72px'],
    // fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h2: {
    fontSize: ['36px', '48px'],
    // fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
  },
}


// 3. extend the theme
const theme = extendTheme({ colors , config, textStyles, fonts});

export default theme;
