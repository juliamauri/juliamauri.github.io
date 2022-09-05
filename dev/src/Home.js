import { Container, Grid, Fab, IconButton, SvgIcon } from "@mui/material";

import Image from "mui-image";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { ReactComponent as ArtStationIcon } from "./ArtStation-logomark-white.svg";

function Home(props) {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Image
              alt="Julià Mauri Costa"
              src={process.env.PUBLIC_URL + "/Data/Multimedia/Home/Profile.jpg"}
              fit="contain"
              duration={0}
              style={{ borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={8} textAlign="center">
            <h1>Julià Mauri Costa</h1>
            <h2>Engine developer</h2>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          textAlign="center"
          sx={{ pb: 6 }}
        >
          <Grid item xs={1}>
            <a
              href="https://www.linkedin.com/in/juli%C3%A0-mauri-costa-293a82105/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton color="secondary" variant="extended" size="large">
                <LinkedInIcon />
              </IconButton>
            </a>
          </Grid>
          <Grid item xs={1}>
            <a
              href="https://www.artstation.com/juliamauri"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                color="secondary"
                variant="extended"
                size="small"
                sx={{ pt: 0.9 }}
              >
                <SvgIcon fontSize="large">
                  <ArtStationIcon />
                </SvgIcon>
              </IconButton>
            </a>
          </Grid>
          <Grid item xs={1}>
            <a
              href="https://github.com/juliamauri"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton color="secondary" variant="extended" size="large">
                <GitHubIcon />
              </IconButton>
            </a>
          </Grid>
          <Grid item xs={1}>
            <a
              href="mailto:julimacowork@gmail.com?subject=Game Engine"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton color="secondary" variant="extended" size="large">
                <EmailOutlinedIcon />
              </IconButton>
            </a>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" textAlign="center">
          <Grid item xs={4}>
            <Fab
              color="primary"
              variant="extended"
              onClick={() => {
                props.go("Main Projects");
              }}
            >
              Main Projects
            </Fab>
          </Grid>
          <Grid item xs={4}>
            <a
              href={
                process.env.PUBLIC_URL +
                "/Data/JuliàMauri_EngineDeveloper_CV.pdf"
              }
              target="_blank"
              rel="noreferrer"
            >
              <Fab color="primary" variant="extended">
                CV
              </Fab>
            </a>
          </Grid>
          <Grid item xs={4}>
            <Fab
              color="primary"
              variant="extended"
              onClick={() => {
                props.go("Minor Projects");
              }}
            >
              Minor Projects
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

//        <Grid container justifyContent="center" textAlign="center" mt={5}>

//<Grid item xs={6}>
//<Fab
//  color="primary"
//  variant="extended"
//  onClick={() => {
//    props.go("About me");
//  }}
//>
//  About me
//</Fab>
//</Grid>

//       </Grid>

export default Home;
