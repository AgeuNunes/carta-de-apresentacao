import {
  BarraLateral,
  Barrinha,
  Box1,
  BoxAcoes,
  BoxApresentacao,
  BoxContatos,
  BoxIconeContatos,
  BoxImg,
  BoxTextoContatos,
  Container,
  MeuNome
} from "./style";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import Foto from "../../shared/assets/images/perfil1260.png";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Home() {
  const Theme = useTheme();

  return (
    <Container>
      <Box1>
        <BarraLateral style={{ background: Theme.palette.primary.main }} />
        <Box sx={{ width: "100%" }}>
          <BoxImg>
            <img src={Foto} alt="Foto do perfil" />
          </BoxImg>
          <BoxContatos>
            <Box>
              <BoxIconeContatos style={{ borderColor: Theme.palette.background.paper }}>
                <LocationOnIcon color="primary" />
              </BoxIconeContatos>
              <BoxIconeContatos style={{ borderColor: Theme.palette.background.paper }}>
                <PhoneIcon color="primary" />
              </BoxIconeContatos>
              <BoxIconeContatos style={{ borderColor: Theme.palette.background.paper }}>
                <EmailIcon color="primary" />
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
      </Box1>
      <BoxApresentacao>
        <MeuNome>
          <Barrinha style={{ background: Theme.palette.primary.main }} />
          <Typography style={{ fontSize: "30px" }}>
            Olá, meu nome é <strong
              style={{
                color: Theme.palette.primary.main,
                fontSize: "35px",
              }}>Ageu Nunes</strong>!
          </Typography>
        </MeuNome>
        <Box sx={{ textIndent: "18px", textAlign: "justify" }} >
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
        <BoxAcoes>
          <Button
            variant="contained"
            href="https://github.com/AgeuNunes/projeto04_carta-de-apresentacao/raw/master/src/shared/assets/docs/AgeuNunesCV.pdf"
            endIcon={<DownloadIcon />}
            sx={{
              height: "36px",
              borderRadius: "10px",
            }}
          >
            Currículo
          </Button>
        </BoxAcoes>
          <BoxAcoes>
            <IconButton color="inherit" href="https://wa.me/5592984404083" target="_blank">
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/ageu-nunes/" target="_blank">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" href="https://github.com/AgeuNunes" target="_blank">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </BoxAcoes>
      </BoxApresentacao>
    </Container>
  );
}