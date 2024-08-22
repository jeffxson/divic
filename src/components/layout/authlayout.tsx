import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Logo } from "../../images/svg";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Box p="50px">{Logo}</Box>
      <Box w={["90%", "90%", "50%", "30%", "30%", "30%"]} m="auto">
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
