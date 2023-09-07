import { BoxIcone, BoxTextoIcone, Container } from "./style";
import { Box, useTheme } from "@mui/material";

import Avatar from "../../shared/assets/images/Perfil.jpg";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

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
            src={Avatar}
            alt="Foto de perfil"
            style={{ //REMOVER depois de inserir a foto
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
            <BoxIcone style={{ background: Theme.palette.background.paper }}>
              <LocationOnIcon color="primary" sx={{ fontSize: 30 }} />
            </BoxIcone>
            <BoxIcone style={{ background: Theme.palette.background.paper }}>
              <PhoneIcon color="primary" sx={{ fontSize: 30 }} />
            </BoxIcone>
            <BoxIcone style={{ background: Theme.palette.background.paper }}>
              <EmailIcon color="primary" sx={{ fontSize: 30 }} />
            </BoxIcone>
          </Box>
          <Box aria-label="textos">
            <BoxTextoIcone style={{ background: Theme.palette.background.paper }} />
            <BoxTextoIcone style={{ background: Theme.palette.background.paper }} />
            <BoxTextoIcone style={{ background: Theme.palette.background.paper }} />
            <Box />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}