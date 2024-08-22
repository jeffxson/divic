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

      _hover: {
        bg: "primary2",
      },
    },
    empty: {
      bg: "none",
      color: "primary2",
      fontWeight: "800",
      _hover: {
        color: "black",
      },
    },
  },
  defaultProps: {},
};
