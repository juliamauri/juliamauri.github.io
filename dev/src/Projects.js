import { Box, Grid, Typography, Chip, Slider } from "@mui/material";
import ReactPlayer from "react-player";
import { Scrollbars } from "react-custom-scrollbars-2";

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

const badges = [
  {id: 1, label:'ARPG'},
  {id: 2, label:'Custom engine'},
  {id: 3, label:'Cel Shading'}
];

function Projects() {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=OPb1lIkBqQM"
        width="100%"
        height="80%"
      />

      <Box sx={{ width: "100%" }} textAlign="center">
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

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        height="16vh"
        px={1}
      >
        <Grid item xs={4}>

        <Grid
        container
        direction="column"
        height="16vh"
        mr={1}
      >
                <Grid item xs={3}>

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
          </Grid>

          <Grid item xs={6} sx={{textAlign:'center'}}>

          <Scrollbars style={{ width: "95%", height: "100%" }}>
          {badges.map(({id, label}) =>{
            return (<Chip key={id} label={label} color="primary" size="small" sx={{m:0.2}} />)
          })}
          </Scrollbars> 
          </Grid>
          </Grid>

        </Grid>
        <Grid item xs={8}>
          <Scrollbars style={{ width: "100%", height: "100%", textAlign: "justify" }}>
            <Typography component="div" variant="body1">
              Alita: Unbreakable Warrior is an RPG action game that will let you
              play as Alita, a female cyborg, as you explore the world and
              encounter a wide variety of enemies through different scenarios.
              The events in the game follow the story of the movie Alita: Battle
              Angel. JellyBit is the team behind Alita Unbreakable Warrior. We
              are a small group of 18 students from the Polytechnic University
              of Catalonia (UPC), currently in the third year of the Bachelor’s
              Degree in Video Game Design and Development. Based in Terrassa,
              Barcelona, our goal is to simulate an indie studio and develop a
              game within three months for the Project III subject. This is our
              first time working all together, so we expect to learn a lot from
              each other - as professionals and as individuals - and grow - as
              individuals and as a group. We are team players!{" "}
            </Typography>
          </Scrollbars>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
