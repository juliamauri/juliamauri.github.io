import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Chip,
  Slider,
  CircularProgress,
  Fab,
} from "@mui/material";

import { Scrollbars } from "react-custom-scrollbars-2";

import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import MediaCarrousel from "./MediaCarrousel";

let projectsTitles = [];
function valuetext(value) {
  return projectsTitles[value];
}

function Projects(props) {
  const [projectsdata, setProjectsdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("./Data/projects.json");
        const json = await response.json();

        projectsTitles = [];
        json.forEach((element) => {
          projectsTitles.push(element.title);
        });

        setProjectsdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    getData();
  }, []);

  const [itemcarrousel, setItemcarrousel] = useState(0);
  const [seekcarrousel, setSeekcarrousel] = useState(0);

  const [projectid, setProjectid] = useState(0);
  const handleChange = (event, newValue) => {
    if (typeof newValue === "number" && newValue !== projectid) {
      setProjectid(newValue);
      setSeekcarrousel(0);
      setItemcarrousel(0);
    }
  };

  if (projectsdata && projectsdata.length > 0) {
    return (
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Box sx={{ width: "100%", height: "70vh", position: "relative" }}>
          <Fab
            size="small"
            color="secondary"
            aria-label="Launch"
            sx={{ m: 0.2, position: "absolute", bottom: "1%", left: "1%" }}
            onClick={() => {
              props.back("Home");
            }}
          >
            <ArrowBackIcon />
          </Fab>

          <MediaCarrousel
            media={projectsdata[projectid].media}
            width="100%"
            height="70vh"
            itemIndex={itemcarrousel}
            changeitemIndex={setItemcarrousel}
            changeSeek={setSeekcarrousel}
            seekProgress={seekcarrousel}
            imageTimeStep={0.2}
          />
        </Box>
        <Box
          sx={{ width: "100%", height: "5vh" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
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
            max={projectsdata.length - 1}
            sx={{ width: "70%" }}
            size="small"
          />
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          height="25vh"
          px={0.7}
        >
          <Grid item xs={4}>
            <Grid container direction="column" height="25vh" pr={0.2}>
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
                  style={{ height: "5.5vh" }}
                >
                  {projectsdata[projectid].date}
                </Typography>
              </Grid>

              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <Scrollbars style={{ width: "95%", height: "15vh" }}>
                  <a
                    href={projectsdata[projectid].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="Launch"
                      sx={{ m: 0.2 }}
                    >
                      <LaunchIcon />
                    </Fab>
                  </a>
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
                textAlign: "justify",
              }}
            >
              {projectsdata[projectid].body.map(({ id, text }) => {
                return (
                  <Typography key={id} component="div" variant="p" pb={1}>
                    {text}
                  </Typography>
                );
              })}
            </Scrollbars>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{ width: "100%", height: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress color="primary" size="10vh" />
      </Box>
    );
  }
}

export default Projects;
