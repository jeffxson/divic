import { background, extendTheme } from "@chakra-ui/react";
import { buttonStyle as Button } from "./buttonStyle";
import { color } from "framer-motion";
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
    primary: "#60A5FA",
  },
});
