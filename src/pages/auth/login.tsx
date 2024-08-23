import { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  useToast,
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
import { loginUser } from "../../utils/fetch";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const validationSchema = Yup.object().shape({
    usr: Yup.string().required("Email is Required").email(),
    pwd: Yup.string().required("Password is Required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const { mutate: loginMutate, isLoading } = useMutation(loginUser, {
    onSuccess: (data) => {
      if (rememberMe) {
        localStorage.setItem(
          "rememberMe",
          JSON.stringify({
            email: email,
            password: pass,
          })
        );
      }

      toast({
        position: "top-right",
        description: `${data?.data?.message}`,
        status: "success",
        duration: 9000,
      });

      navigate("/app");
    },
    onError: (error) => {
      toast({
        position: "top-right",
        // @ts-ignore
        description: `${error?.response?.data?.message}`,
        status: "error",
        duration: 9000,
      });
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem("rememberMe");
    if (savedData) {
      const { email, password } = JSON.parse(savedData);
      setEmail(email);
      setPass(password);
      setRememberMe(true);
      setValue("usr", email);
      setValue("pwd", password);
    }
  }, [setValue]);

  const handleAutoFill = () => {
    const usr = document.querySelector('input[name="usr"]');
    const pwd = document.querySelector('input[name="pwd"]');

    if (usr && pwd) {
      // @ts-ignore
      setValue("usr", usr?.value);
      // @ts-ignore
      setEmail(usr?.value);
      // @ts-ignore
      setValue("pwd", pwd?.value);
      // @ts-ignore
      setPass(pwd?.value);
    }
  };
  const loginHandler = (data: any) => {
    loginMutate(data);
  };
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
          error={register("usr")}
          innerElement={<GoPeople color="#6B7280" />}
          isInvalid={errors.usr && errors.usr.message}
          onChange={handleAutoFill}
          value={email}
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
            error={register("pwd")}
            isInvalid={errors.pwd && errors.pwd.message}
            onChange={handleAutoFill}
            value={pass}
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
        <Checkbox
          mt="-20px"
          mb="30px"
          textAlign="left"
          isChecked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        >
          Remember me
        </Checkbox>
        <Button
          type="submit"
          w="100%"
          variant="primary"
          isDisabled={!pass || !email || isLoading}
        >
          {isLoading ? (
            <>
              <Spinner mr="5px" size="sm" /> Signing in
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Login;
