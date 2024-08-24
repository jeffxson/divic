import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { connectionLost } from "../../images/svg";

function ConnectionLost() {
  return (
    <>
      <Box textAlign="center" color="black">
        <Center>
          <Heading pt="20vh">{connectionLost}</Heading>
        </Center>
        <Heading my="10px" size="md">
          Connection Lost
        </Heading>

        <Text>Oops! It seems you're currently offline.</Text>
        <Button variant="empty">Retry</Button>
      </Box>
    </>
  );
}

export default ConnectionLost;
