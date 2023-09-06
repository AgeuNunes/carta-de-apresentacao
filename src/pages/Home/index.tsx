import { Typography, Box, useTheme } from "@mui/material";
import { Container } from "./style";

export function Home() {
  const Theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          background: Theme.palette.primary.main,
          minWidth: "40px",
          minHeight: "100vh",
        }}
      />
    </Container>
  );
}