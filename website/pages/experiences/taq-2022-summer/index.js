import {
  Center,
  Grid,
  GridItem,
  Text,
  Image,
  Heading,
  Box,
} from "@chakra-ui/react";
const Taq2022Summer = () => {
  return (
    <>
      <Center>
        <Image
          my="5"
          w="50%"
          h="50vh"
          fit="cover"
          src="/experience-photos/taq-dashboard.png"
          alt="taq article"
        />
      </Center>
      <Center>
        <Text>Status List of taq 2022/8/25</Text>
      </Center>
      <Box my="10" mx="auto" w="50%">
        <Heading as="h1" marginBottom="20px">My Work @ Taq Automative</Heading>
        <Grid templateRows="repeat(1, 1fr)" gap={3}>
          <GridItem>
            <Heading as="h3">Maintaining the Credit Driver for Lenders</Heading>
          </GridItem>
          <GridItem>
            <Text>
            I worked in the Credit Driver Maintenance team during my Summer Co-op term in Taq. Our team consists of 9 developers, and our job is to add and modify features of the credit application according to Lenders' requests.
            </Text>
          </GridItem>
          <GridItem>
            <Text>
            The credit application is where the user enters their information to apply for a car lease. Because of confidentiality, I couldn't reveal most of its UI and code structure (so I cannot provide Artifacts). Instead, I will give some similar examples.            
            </Text>
          </GridItem>
          <GridItem>
            <Text>
            Suppose we need to add a new Tax Type. First, depending on the situation, we might set up a feature toggle for this tax. Then, we'll need to add this new field in document templates, the json object passed between frontend and backend, 
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Taq2022Summer;
