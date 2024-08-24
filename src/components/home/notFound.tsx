import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { notFound404 } from "../../images/svg";

function NotFound404() {
  return (
    <>
      <Box textAlign="center" color="black">
        <Center>
          <Heading pt="20vh">{notFound404}</Heading>
        </Center>
        <Heading my="10px" size="md">
          404
        </Heading>

        <Text>Oops! The page you're looking for can't be found.</Text>
        <Button variant="empty">Retry</Button>
      </Box>
    </>
  );
}

export default NotFound404;
