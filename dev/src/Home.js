import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Fab } from "@mui/material";
import Image from "mui-image";

function OpenCV()
{
     window.open(process.env.PUBLIC_URL + "/JuliàMauri_EngineDeveloper_CV.pdf","_blank");
}

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
          <Grid container sx={{ pb: 6 }}>
            <Grid item xs={4}>
              <Image
                alt="Julià Mauri Costa"
                src={process.env.PUBLIC_URL + "/Multimedia/Profile.jpg"}
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
  
          <Grid container
          justifyContent="center" textAlign="center">
            <Grid item xs={4}>
              <Fab color="primary" variant="extended" onClick={()=> { props.go("Projects") }}>Projects</Fab>
            </Grid>
            <Grid item xs={4}>
              <Fab color="primary" variant="extended" onClick={OpenCV}>CV</Fab>
            </Grid>
            <Grid item xs={4}>
              <Fab color="primary" variant="extended" onClick={()=> { props.go("About me") }}>About me</Fab>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      );

}

export default Home;