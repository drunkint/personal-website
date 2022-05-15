import '../styles/index.css'
import { ChakraProvider} from "@chakra-ui/react";
import theme from '../styles/theme.js'
import Navbar from '../components/navbar'
import { Router } from 'next/router'


export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar path={Router.asPath}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}
