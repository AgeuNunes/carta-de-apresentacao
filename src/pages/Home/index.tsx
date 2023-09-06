import { Box, useTheme } from "@mui/material";
import { Container } from "./style";

export function Home() {
  const { palette } = useTheme()
  return (
    <Container>
      <Box
        aria-label="barra lateral"
        sx={{
          background: palette.primary.main,
          minWidth: "40px",
          minHeight: "100vh",
        }}
      />
      
    </Container>

  )
};