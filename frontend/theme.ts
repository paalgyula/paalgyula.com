import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "brand.background",
        fontSize: "14px",
        color: "#444",
      },
    },
  },
  colors: {
    brand: {
      background: "#f5f5f5",
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

export default theme;
