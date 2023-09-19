import { createTheme } from "@mui/material";
import { ColorsUse } from "./colors";

export const Theme = createTheme({
  palette: {
    background: {
      default: ColorsUse.backgroundPrimary,
      paper: ColorsUse.backgroundSecondary
    },
    text: {
      primary: ColorsUse.textPrimary,
      secondary: ColorsUse.textSecondary
    },
    primary: {
      main: ColorsUse.primary
    },
    secondary: {
      main: ColorsUse.secondary
    },
  }
});