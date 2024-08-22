import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FormInput } from "../../components/inputs/inputs";
import AuthLayout from "../../components/layout/authlayout";
import { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { GoPeople, GoLock } from "react-icons/go";
import { Checkbox } from "@chakra-ui/react";
function Login() {
  const [show, setShow] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is Required").email(),
    password: Yup.string().required("Password is Required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const loginHandler = (data: any) => {};
  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(loginHandler)}>
        <Heading textAlign="center" mt="100px" size="md">
          Sign in
        </Heading>
        <Center color="houseGray" mb="50px">
          Don’t have an account yet?
          <Button pl="2px" variant="empty" size="sm">
            Sign up here
          </Button>
        </Center>
        <FormInput
          label="Username"
          placeholder="Username"
          error={register("email")}
          innerElement={<GoPeople color="#6B7280" />}
          isInvalid={errors.email && errors.email.message}
        />

        <Flex justifyContent="right" mb="-26px">
          <Button variant="empty" size="sm">
            Forgot Password?
          </Button>
        </Flex>
        <InputGroup size="md">
          <FormInput
            innerElement={<GoLock color="#6B7280" />}
            placeholder="your Password"
            label="Password"
            type={show ? "text" : "password"}
            error={register("password")}
            isInvalid={errors.password && errors.password.message}
          />

          <InputRightElement
            width="2.5rem"
            mt="27px"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <LuEyeOff color="#D9D9D9" size="26px" />
            ) : (
              <LuEye color="gray" size="26px" />
            )}
          </InputRightElement>
        </InputGroup>
        <Checkbox mt="-20px" mb="30px" textAlign="left">
          Remember me
        </Checkbox>
        <Button type="submit" w="100%" variant="primary">
          Login
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Login;
