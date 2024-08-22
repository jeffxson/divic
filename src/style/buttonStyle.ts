import { border } from "@chakra-ui/react";

export const buttonStyle = {
  baseStyle: { fontWeight: "100" },
  sizes: {},
  variants: {
    primary: {
      bg: "primary",
      color: "white",
      h: "50px",
      boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      fontSize: "13px",
      _hover: {
        bg: "primary2",
      },
    },
    primary2: {
      bg: "secondaryGrade",
      color: "white",
      boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      fontSize: "13px",
    },
    secondary: {
      bg: "transparent",
      color: "secondary",
      border: "1px solid #ED7662",
      fontSize: "13px",
    },
    blacks: {
      bg: "transparent",
      color: "#5A5A5A",
      border: "",
      fontSize: "13px",
      borderRadius: "50px",
      _hover: {
        bg: "#333333",
        color: "white",
      },
    },
    blacksActive: {
      fontSize: "13px",
      borderRadius: "50px",
      bg: "#333333",
      color: "white",
    },
    secondary2: {
      h: "50px",
      bg: "transparent",
      color: "#5A5A5A",
      border: "1px solid #5A5A5A",
      fontSize: "13px",
    },
    secondary3: {
      bg: "transparent",
      color: "#A15547",
      border: "none",
      fontSize: "13px",
    },
    danger: {
      bg: "transparent",
      color: "#F24216",
      fontSize: "13px",
    },
  },
  defaultProps: {},
};
