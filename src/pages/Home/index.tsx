import { Container } from "./style";
import { Box, useTheme } from "@mui/material";

import foto from "../../shared/assets/images/Perfil.jpg";

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
        <Box>
          <img
            src={foto}
            alt="Foto de perfil"
            style={{
              background: "#fff", //REMOVER depois de inserir a foto
              marginTop: "50px",
              width: "300px",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box
          aria-label="contatos"
          sx={{
            marginTop: "50px",
            display: "flex",
            gap: "10px",
          }}
        >
          <Box aria-label="ícones">
            <Box
              aria-label="ícone localização"
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
          <Box aria-label="textos">
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