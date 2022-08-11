import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Fab } from "@mui/material";

import Image from "mui-image";

import App from "./App";
import Clock from "./Clock";
import Toggle from "./Toggle";

const re_theme = createTheme({
  palette: {
    primary: {
      light: "#f05545",
      main: "#b71c1c",
      dark: "#7f0000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#4fb3bf",
      main: "#00838f",
      dark: "#005662",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0D0D0D",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function OpenCV()
{
     window.open(process.env.PUBLIC_URL + "/JuliàMauri_EngineDeveloper_CV.pdf","_blank");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={re_theme}>
    <CssBaseline />

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
            <Fab color="primary" variant="extended">Projects</Fab>
          </Grid>
          <Grid item xs={4}>
            <Fab color="primary" variant="extended" onClick={OpenCV}>CV</Fab>
          </Grid>
          <Grid item xs={4}>
            <Fab color="primary" variant="extended">About me</Fab>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
