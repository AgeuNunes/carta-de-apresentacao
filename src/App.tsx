import { ThemeProvider } from "@mui/material";
import { Theme } from "./themes";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
//zera o css
import CssBaseline from '@mui/material/CssBaseline';

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CssBaseline />
        
          <AppRoutes />
        
      </BrowserRouter>
    </ThemeProvider>
  );
};