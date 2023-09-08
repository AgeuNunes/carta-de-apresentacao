import {
  BarraLateral,
  Barrinha,
  BoxContatos,
  BoxIconeContatos,
  BoxMideaSocial,
  BoxTextoContatos,
  Container,
  MeuNome
} from "./style";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import Foto from "../../shared/assets/images/Perfil.jpg";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Home() {
  const Theme = useTheme();

  return (
    <Container>
      <BarraLateral style={{ background: Theme.palette.primary.main }} />
      <Box>
        <Box>
          <img
            src={Foto}
            alt="Foto do perfil"
            style={{
              margin: "50px",
              width: "300px",
              borderRadius: "50%",
            }}
          />
        </Box>
        <BoxContatos>
          <Box aria-label="ícones contatos">
            <BoxIconeContatos style={{ borderColor: Theme.palette.background.paper }}>
              <LocationOnIcon color="primary" sx={{ fontSize: 30 }} />
            </BoxIconeContatos>
            <BoxIconeContatos style={{ borderColor: Theme.palette.background.paper }}>
              <PhoneIcon color="primary" sx={{ fontSize: 30 }} />
            </BoxIconeContatos>
            <BoxIconeContatos style={{ borderColor: Theme.palette.background.paper }}>
              <EmailIcon color="primary" sx={{ fontSize: 30 }} />
            </BoxIconeContatos>
          </Box>
          <Box aria-label="textos contatos">
            <BoxTextoContatos style={{ borderColor: Theme.palette.background.paper }}>
              <Typography>
                Lírio do Vale <br /> Manaus/AM - Brasil
              </Typography>
            </BoxTextoContatos>
            <BoxTextoContatos style={{ borderColor: Theme.palette.background.paper }}>
              <Typography>
                +55 92 98440-4083
              </Typography>
            </BoxTextoContatos>
            <BoxTextoContatos style={{ borderColor: Theme.palette.background.paper }}>
              <Typography>
                nunes.ageu@gmail.com
              </Typography>
            </BoxTextoContatos>
            <Box />
          </Box>
        </BoxContatos>
      </Box>
      <Box sx={{ marginRight: "50px" }}>
        <MeuNome>
          <Barrinha style={{ background: Theme.palette.primary.main }} />
          <Typography style={{ fontSize: "40px" }}>
            Olá, meu nome é <strong
              style={{
                color: Theme.palette.primary.main,
                fontSize: "45px",
              }}>Ageu Nunes</strong>!
          </Typography>
        </MeuNome>
        <Box sx={{ marginTop: "50px", textIndent: "18px", textAlign: "justify" }} >
          <p>
            Venho de uma trajetória profissional com sólidos conhecimentos na área de
            planejamento de manutenção e manutenabilidade do sistema de controle da qualidade,
            mas sempre acreditando na tecnologia como solução dos mais diferentes tipos de
            necessidades.
          </p>
          <p>
            Decidi então migrar para a área pela qual sempre fui apaixonando. Hoje sou acadêmico
            no curso de engenharia de software e atuo como estagiário no Institudo de Pesquisas e
            Desenvolvimento Grupo ICTS, utilizando as principais tecnologias e ferramentas existentes
            ao passo que evoluo a cada dia na área de desenvolvimento de sistemas.
          </p>
          <p>
            Considero-me um profissional focado, disciplinado, organizado, comunicativo e
            empenhado nas atividades designadas.
          </p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" href="https://github.com/AgeuNunes/carta-de-apresentacao/raw/master/src/shared/assets/docs/AgeuNunesCV.pdf" >
            Download CV
          </Button>
        </Box>
        <BoxMideaSocial>
          <IconButton color="inherit" href="https://wa.me/5592984404083" target="_blank">
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/in/ageu-nunes/" target="_blank">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" href="https://github.com/AgeuNunes" target="_blank">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </BoxMideaSocial>
      </Box>
    </Container>
  );
}