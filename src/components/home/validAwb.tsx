import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { validAwb } from "../../images/svg";

function ValidAwb() {
  return (
    <>
      <Box textAlign="center" color="black">
        <Center>
          <Heading pt="20vh">{validAwb}</Heading>
        </Center>

        <Text>Enter a valid AWB ID to display details</Text>
      </Box>
    </>
  );
}

export default ValidAwb;
