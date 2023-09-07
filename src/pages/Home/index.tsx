import { Container } from "./style";
import { Box, useTheme } from "@mui/material";

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
      <Box
        sx={{
          marginLeft: "50px",
        }}
      >
        <Box
          aria-label="foto"
          sx={{
            background: "#fff",
            marginTop: "50px",
            width: "300px",
            height: "350px",
            borderRadius: "30px",
          }}
        />
        <Box
          aria-aria-label="contatos"
          sx={{
            marginTop: "50px",
            display: "flex",
            gap: "10px",
          }}
        >
          <Box aria-label="ícone ícones">
            <Box
              aria-label="localização"
              sx={{
                background: Theme.palette.background.paper,
                width: "60px",
                height: "60px",
                borderRadius: "15px",
                marginBottom: "10px",
              }} />
            <Box
              aria-label="ícone telefone"
              sx={{
                background: Theme.palette.background.paper,
                width: "60px",
                height: "60px",
                borderRadius: "15px",
                marginBottom: "10px",
              }} />
            <Box
              aria-label="ícone email"
              sx={{
                background: Theme.palette.background.paper,
                width: "60px",
                height: "60px",
                borderRadius: "15px",
              }} />
          </Box>
          <Box aria-label="texto">
            <Box
              aria-label="texto localização"
              sx={{
                background: Theme.palette.background.paper,
                width: "230px",
                height: "60px",
                borderRadius: "15px",
                marginBottom: "10px",
              }} />
            <Box
              aria-label="texto telefone"
              sx={{
                background: Theme.palette.background.paper,
                width: "230px",
                height: "60px",
                borderRadius: "15px",
                marginBottom: "10px",
              }} />
            <Box
              aria-label="texto email"
              sx={{
                background: Theme.palette.background.paper,
                width: "230px",
                height: "60px",
                borderRadius: "15px",
              }} />
            <Box />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}