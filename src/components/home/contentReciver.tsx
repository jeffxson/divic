import {
  Box,
  Flex,
  Heading,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepSeparator,
  Text,
  Grid,
  Avatar,
} from "@chakra-ui/react";
import { BsTruck } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { LuArrowDownToDot } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { boxPlus, boxRigth, boxSearch } from "../../images/svg";

function ContentReciver() {
  const steps = [
    {
      title: "Shipment created",
      date: "Dec 16, 2023",
      time: "12:05PM",
      description: "Shipment Description",
      avater: "https://bit.ly/tioluwani-kolawole",
      icon: boxPlus,
      name: "Abdo Saeed",
    },
    {
      title: "Shipment picked-up",
      date: "Dec 16, 2023",
      time: "14:05PM",
      description: "",
      avater: "https://bit.ly/tioluwani-kolawole",
      icon: boxRigth,
      name: "Beshouy Ezzat",
    },
    {
      title: "Proof of pick-up",
      date: "Dec 16, 2023",
      time: "14:08PM",
      description: "Proof of pick-up description",
      avater: "https://bit.ly/tioluwani-kolawole",
      icon: boxSearch,
      name: "James Collins",
    },
    {
      title: "Shipment on delivery",
      date: "Dec 16, 2023",
      time: "12:05PM",
      description: "Description goes here",
      avater: "",
      icon: <BsTruck />,
      name: "Abdo Saeed",
    },
  ];

  return (
    <Flex mt="40px" flexWrap="wrap">
      <Box
        w={["100%", "100%", "40%", "40%", "40%", "40%"]}
        border="1px solid #E5E7EB"
        p={["10px", "10px", "20px", "20px", "20px", "20px"]}
        borderRadius="20px"
      >
        <Heading mb="10px" size="md">
          4515645646466
        </Heading>
        <Text color="#6B7280">Last updated 16/12/2023 11:33 AM </Text>
        <Flex mb="30px" justifyContent="space-between">
          <Flex w="50%" color="#6B7280">
            <Text mt="4px" mr="9px">
              <MdOutlineArrowOutward />
            </Text>
            Sender
          </Flex>
          <Box w="50%" fontWeight="700">
            Mohamamd Manaa
          </Box>
        </Flex>
        <Flex mb="30px" justifyContent="space-between">
          <Flex w="50%" color="#6B7280">
            <Text mt="4px" mr="9px">
              <GoPerson />
            </Text>
            Consignee
          </Flex>
          <Box w="50%" fontWeight="700">
            Beshouy Ezzat
          </Box>
        </Flex>
        <Flex mb="30px" justifyContent="space-between">
          <Flex w="50%" color="#6B7280">
            <Text mt="4px" mr="9px">
              <LuArrowDownToDot />
            </Text>
            Origin Address
          </Flex>
          <Box w="50%" fontWeight="700">
            Ahmed Hassan
            <br />
            25, Nile Street, Zamalek
            <br />
            Cairo
            <br />
            Egypt
          </Box>
        </Flex>
        <Flex mb="30px" justifyContent="space-between">
          <Flex w="50%" color="#6B7280">
            <Text mt="4px" mr="9px">
              <IoLocationOutline />
            </Text>
            Destination Address
          </Flex>
          <Box w="50%" fontWeight="700">
            Fatima Ali
            <br /> 10, Corniche Road, Gleem
            <br /> Alexandria
            <br /> Egypt
          </Box>
        </Flex>
        <Flex mb="30px" justifyContent="space-between">
          <Flex w="50%" color="#6B7280">
            <Text mt="4px" mr="9px">
              <BsTruck />
            </Text>
            Express Service
          </Flex>
          <Box w="50%" fontWeight="700">
            Mohamamd Manaa
          </Box>
        </Flex>
        <Flex mb="30px" justifyContent="space-between">
          <Flex w="50%" color="#6B7280">
            <Text mt="4px" mr="9px">
              <BiMoneyWithdraw />
            </Text>
            Total COD Amount
          </Flex>
          <Box w="50%" fontWeight="700">
            499.55 EGP{" "}
          </Box>
        </Flex>
      </Box>
      <Box w={["100%", "100%", "60%", "60%", "60%", "60%"]}>
        <Heading
          ml={["2%", "2%", "20%", "12%", "12%", "12%"]}
          my="20px"
          size="md"
        >
          TIMELINE
        </Heading>
        <Grid templateColumns="1fr 3fr" gap={4} height="400px">
          <Box ml={["10px", "10px", "100px", "100px", "100px", "100px"]}>
            {steps.map((step, index) => (
              <Box
                color="#6B7280"
                mb={steps.length === index + 1 ? "" : "100px"}
                key={index}
              >
                <Box>{step?.time}</Box>
                <Box>{step?.date}</Box>
              </Box>
            ))}
          </Box>

          <Stepper index={0} orientation="vertical" gap="0">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={step?.icon}
                    incomplete={step?.icon}
                    active={step?.icon}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <Text fontWeight="700">{step.title}</Text>
                  <Text color="#6B7280">{step.description}</Text>
                  {step?.avater && (
                    <Flex fontWeight="700" mt="10px">
                      <Avatar
                        mr="5px"
                        size="xs"
                        name="Kola Tioluwani"
                        src="https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png"
                      />
                      {step?.name}
                    </Flex>
                  )}
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Box>
    </Flex>
  );
}

export default ContentReciver;
