import {
  Box,
  Button,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FormInput } from "../../components/inputs/inputs";
import AuthLayout from "../../components/layout/authlayout";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Login() {
  const [show, setShow] = useState(false);
  return (
    <AuthLayout>
      <Heading mt="100px" size="md">
        Welcome Back!
      </Heading>
      <Text color="houseGray" mb="50px">
        Welcome back! Please enter your details
      </Text>
      <FormInput placeholder="Username" />

      <InputGroup size="md">
        <FormInput
          isRequired={true}
          placeholder="Password"
          type={show ? "text" : "password"}
        />
        <InputRightElement
          width="2.5rem"
          mt="6px"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <AiFillEye color="#D9D9D9" size="26px" />
          ) : (
            <AiFillEyeInvisible color="gray" size="26px" />
          )}
        </InputRightElement>
      </InputGroup>
      <Flex justifyContent="right" mb="40px" mt="-20px">
        <Button variant="secondary3" color="#F24216" size="sm">
          Forgot Password?
        </Button>
      </Flex>
      <Button w="100%" variant="primary">
        Login
      </Button>
    </AuthLayout>
  );
}

export default Login;
