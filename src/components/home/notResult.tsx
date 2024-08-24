import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { noResult } from "../../images/svg";

function NoResult() {
  return (
    <>
      <Box textAlign="center" color="black">
        <Center>
          <Heading pt="20vh">{noResult}</Heading>
        </Center>
        <Heading my="10px" size="md">
          No results found.
        </Heading>

        <Text>No results found Please try again.</Text>
        <Button variant="empty">Retry</Button>
      </Box>
    </>
  );
}

export default NoResult;
