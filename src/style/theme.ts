import { extendTheme } from "@chakra-ui/react";
import { buttonStyle as Button } from "./buttonStyle";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },

  fonts: {
    heading: `Poppins, sans-serif`,
    body: `Poppins, sans-serif`,
  },

  components: {
    Button,
  },
  colors: {
    primary: "#2563EB",
    primary2: "#60A5FA",
    appGray: "#6B7280",
  },
});
