// my-theme.ts
import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    gray: "#0B0D17",
    blue: {
      50: "#D0D6F9",
    },
    white: "#ffffff",
  },
};

const theme = { ...defaultTheme };

export { theme };
