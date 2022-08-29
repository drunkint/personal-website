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
            <Heading as="h2">Maintaining the Credit Driver for Lenders</Heading>
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
            <Heading as="h3">Example 1</Heading>
          </GridItem>
          <GridItem>
            <Text>
            I once received a bug where a list of "undefined" is showing in a dropdown for a specific account. Since our tester tests in the  UAT (User Acceptance Testing) environment, I try to duplicate that error in local first. Interestingly, the error didn't appear when I duplicate the application, and I immediately thought that this is a data issue. However, after looking into the database I realized that the required data is there. After that, I found the stored procedure defined for grabbing the dropdown and it did grab data correctly. In the end, I had to open the Profiler for MS SQL, and compare the requests the database received for working/buggy accounts when populating the dropdown. It turns out that the buggy account had additional stored procedure calls and when looking back at the code, I realized what caused the additional call and how to prevent it from calling. After debugging this issue (and other similar ones), I learned how to utilize debugging tools: Dev tools for JS, Visual Studio Debugger for .Net Backend, and MS SQL's Profiler. If I were to debug a similar issue again, I will make sure to be more patient and step into every function potentially related to the issue.
            </Text>
          </GridItem>

        </Grid>
      </Box>
    </>
  );
};

export default Taq2022Summer;
