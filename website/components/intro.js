import { Center, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
export default function Intro() {
  return (
    <Container maxW="container.xl" p={0}>
      <Center h="80vh">
        <VStack>
          <Heading size="2xl" >Angus Lee</Heading>
          <Text>this is some text</Text>
          <ArrowLeftIcon w={6} h={8}/>
        </VStack>
      </Center>
    </Container>
  )
}
