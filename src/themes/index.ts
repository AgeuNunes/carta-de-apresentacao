import { createTheme } from "@mui/material";
import { ColorsDarkGreen } from "./colors";


export const Theme = createTheme({
  palette: {
    primary: {
      main: ColorsDarkGreen.emphasis
    },
    background: {
      default: ColorsDarkGreen.background
    },
  },
  typography: {
    allVariants: {
      color: ColorsDarkGreen.text
    }
  }
});