import { FormEvent, useEffect } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { FormInput } from "../components/inputs/inputs";
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { getShippingDetails } from "../utils/fetch";
import ContentReciver from "../components/home/contentReciver";
import ValidAwb from "../components/home/validAwb";
//import ConnectionLost from "../components/home/connectionLost";
//import NotFound404 from "../components/home/notFound";
import NoResult from "../components/home/notResult";
import PullToRefresh from "react-pull-to-refresh";

function Login() {
  const toast = useToast();
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [shipNumber, setShipNumber] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showNotfound, setShowNotfound] = useState<boolean>(false);
  const [enterDetails, setEnterDetails] = useState<boolean>(true);

  useEffect(() => {
    setIsButtonDisabled(shipNumber.length < 11);
  }, [shipNumber]);

  const { mutate: shippingMutate } = useMutation(getShippingDetails, {
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
  });
  console.log(shippingMutate);

  const shippingHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEnterDetails(false);
    if (shipNumber === "210173066689") {
      setShowDetails(true);
      setShowNotfound(false);
    } else {
      setShowNotfound(true);
      setShowDetails(false);
    }

    // shippingMutate({
    //   doctype: "AWB",
    //   filters: {
    //     name: ["like", `%${shipNumber}%`],
    //   },
    // });
  };
  const shippingHandlerPull = () => {
    setShowDetails(true);

    // shippingMutate({
    //   doctype: "AWB",
    //   filters: {
    //     name: ["like", `%${shipNumber}%`],
    //   },
    // });
  };

  return (
    <Box p={["10px", "10px", "40px", "50px", "50px", "50px"]}>
      <Box
        bg="#F8FAFC"
        px={["10px", "10px", "40px", "50px", "50px", "50px"]}
        pt="30px"
      >
        <form onSubmit={shippingHandler}>
          <Flex m="auto" w={["100%", "100%", "80%", "70%", "70%", "70%"]}>
            <FormInput
              isRequired={true}
              type="number"
              placeholder="Enter AWB ID"
              onChange={(e) => setShipNumber(e.target.value)}
              invalidBorder={showNotfound}
              isInvalid={showNotfound && "Please enter a valid AWB"}
              bg="white"
            />
            <Button
              type="submit"
              ml="20px"
              px="40px"
              h="44px"
              variant="primary"
              isDisabled={isButtonDisabled}
            >
              Track
            </Button>
          </Flex>
        </form>
      </Box>
      <PullToRefresh
        // @ts-ignore
        onRefresh={shippingHandlerPull}
        style={{ height: "100vh", overflow: "auto" }}
      >
        {enterDetails && <ValidAwb />}
        {showNotfound && <NoResult />}
        {showDetails && <ContentReciver />}
        {/* <ConnectionLost /> */}
        {/* <NotFound404 /> */}
      </PullToRefresh>
    </Box>
  );
}

export default Login;
