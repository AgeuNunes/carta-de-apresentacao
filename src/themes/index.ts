import { createTheme } from "@mui/material";
import { ColorsUse } from "./colors";

export const Theme = createTheme({
  palette: {
    primary: {
      main: ColorsUse.emphasis
    },
    background: {
      default: ColorsUse.background,
      paper: ColorsUse.backgroundEmphasis
    },
  },
  typography: {
    allVariants: {
      color: ColorsUse.text
    }
  }
});