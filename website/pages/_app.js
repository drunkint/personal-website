import "../styles/index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme.js";
import Navbar from "../components/navbar";
import { Router } from "next/router";
import { AnimatePresence } from "framer-motion";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence>
        <Navbar path={Router.asPath} />
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
