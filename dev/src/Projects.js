import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Chip, Slider, CircularProgress  } from "@mui/material";
import ReactPlayer from "react-player";
import { Scrollbars } from "react-custom-scrollbars-2";

function valuetext(value) {
  switch (value) {
    case 0:
      return "RedEye Engine";
    case 1:
      return "Alita: Unbreakable Warrior";
    case 2:
      return "Honey Land";
    case 3:
      return "Age of Empires II - Defenders";
    case 4:
      return "Outzone Tribute";
    default:
      return "No suposed to be here";
  }
}

function Projects() {
  const [projectsdata, setProjectsdata] = useState([]);
  useEffect(() => {

    const getData = async () => {
      try {
        const response = await fetch("./data.json");
        const json = await response.json();
        setProjectsdata(json);
    } catch (error) {
        console.log("error", error);
    }
    };

    getData();
  }, []);

  const [projectid, setProjectid] = useState(0);
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number' && newValue !== projectid) {
      setProjectid(newValue);
    }
  };

  console.log(projectid.toString());
  console.log(projectsdata);
  console.log(projectsdata.length);
  console.log(projectsdata[4]);

  if(projectsdata && projectsdata.length > 0){
    return (
      <Box sx={{ width: "100%", height: "100vh" }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=OPb1lIkBqQM"
          width="100%"
          height="80%"
        />
  
        <Box sx={{ width: "100%", height: "3vh" }} textAlign="center">
          <Slider
            aria-label="Projects"
            defaultValue={0}
            getAriaValueText={valuetext}
            valueLabelFormat={valuetext}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={4}
            sx={{ width: "70%" }}
            size="small"
          />
        </Box>
  
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          height="17vh"
          px={0.7}
        >
          <Grid item xs={4}>
            <Grid container direction="column" height="17vh" pr={0.2}>
              <Grid item xs={3}>
                <Typography
                  component="div"
                  variant="h5"
                  style={{ height: "4.5vh" }}
                >
                  {projectsdata[projectid].title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ height: "4vh" }}
                >
                  {projectsdata[projectid].date}
                </Typography>
              </Grid>
  
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <Scrollbars style={{ width: "95%", height: "8.5vh" }}>
                  {projectsdata[projectid].tags.map(({ id, tag }) => {
                    return (
                      <Chip
                        key={id}
                        label={tag}
                        color="primary"
                        size="small"
                        sx={{ m: 0.2 }}
                      />
                    );
                  })}
                </Scrollbars>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Scrollbars
              style={{
                width: "100%",
                height: "100%",
                textAlign: "justify"
              }}
            >
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
  else
  {
    return (<CircularProgress color="primary" />);
  }

}

export default Projects;
