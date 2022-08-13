import { Box, Grid, Typography, Chip, Slider } from "@mui/material";
import ReactPlayer from "react-player";

function valuetext(value) {
  switch (value) {
    case 1:
      return "RedEye Engine";
    case 2:
      return "Alita: Unbreakable Warrior";
    case 3:
      return "Honey Land";
    case 4:
      return "Age of Empires II - Defenders";
    case 5:
      return "Outzone Tribute";
    default:
      return "No suposed to be here";
  }
}

function Projects() {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=OPb1lIkBqQM"
        width="100%"
        height="80%"
      />

      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        height="20vh"
      >
        <Grid item xs={9.8}>
          <Grid container direction="row">
            <Grid item xs={4}>
              <Typography component="div" variant="h5">
                Alita: Unbreakable Warrior
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                11 FEB 2019 – 6 JUN 2019
              </Typography>

              <Chip label="ARPG" color="primary" />
              <Chip label="Custom engine" color="primary" />
              <Chip label="Cel Shading" color="primary" />
              
            </Grid>
            <Grid item xs={8}>
              <Typography component="div" variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        
          <Box sx={{ width: "100%"  }} textAlign="center">
            <Slider
              aria-label="Projects"
              defaultValue={2}
              getAriaValueText={valuetext}
              valueLabelFormat={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={5}
              sx={{ width: "70%" }}
              size="small"
            />
          </Box>
      </Grid>
    </Box>
  );
}

export default Projects;
