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
import { FormInput } from "../components/inputs/inputs";
import AuthLayout from "../components/layout/authlayout";
import { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { GoPeople, GoLock } from "react-icons/go";
import { Checkbox } from "@chakra-ui/react";
import { getShippingDetails } from "../utils/fetch";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [invalidBorder, setInvalidBorder] = useState(false);
  const validationSchema = Yup.object().shape({
    shipNumber: Yup.number()
      .required("Shiping number is required")
      .typeError("Please input a number")
      .min(1000000000, "Shiping number must be at least 10 digits")
      .max(99999999999999, "Shiping number must be at most 14 digits"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const { mutate: shippingMutate, isLoading } = useMutation(
    getShippingDetails,
    {
      onSuccess: (data) => {
        console.log(data?.data);

        toast({
          position: "top-right",
          description: `${data?.data?.message}`,
          status: "success",
          duration: 9000,
        });
        navigate("/app");
      },
      onError: (data) => {
        toast({
          position: "top-right",
          // @ts-ignore
          description: `${data?.response?.data?.message}`,
          status: "error",
          duration: 9000,
        });
      },
    }
  );
  const shippingHandler = (data: any) => {
    console.log(data);
    shippingMutate({
      doctype: "AWB",
      filters: {
        name: ["like", "%210173066689%"],
      },
    });
  };
  // name: ["like", `%${data?.shipNumber}%`],
  return (
    <Box p="50px">
      <Box bg="#F8FAFC" px="50px" pt="30px">
        <form onSubmit={handleSubmit(shippingHandler)}>
          <Flex m="auto" w="70%">
            <FormInput
              placeholder="Username"
              error={register("shipNumber")}
              invalidBorder={invalidBorder}
              isInvalid={errors.shipNumber && errors.shipNumber.message}
              bg="white"
            />
            <Button
              type="submit"
              ml="20px"
              px="40px"
              h="44px"
              variant="primary"
              // isDisabled={!pass || !email || isLoading}
            >
              Track
            </Button>
          </Flex>
        </form>
      </Box>
      <Flex>
        <Box w="40%" border="1px solid #E5E7EB" p="20px" borderRadius="20px">
          <Heading size="sm"></Heading>
          <Text>6B7280</Text>
        </Box>
        <Box w="60%"></Box>
      </Flex>
    </Box>
  );
}

export default Login;
