import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
        secondary: "#b5b5b3",
      },
    },
    typography: {
      h5: {
        fontSize: "0.7rem",
        "@media (min-width:330px)": {
          fontSize: "0.8rem",
        },
        "@media (min-width:410px)": {
          fontSize: "1rem",
        },
        "@media (min-width:750px)": {
          fontSize: "1.3rem",
        },
        "@media (min-width:1050px)": {
          fontSize: "1.8rem",
        },
      },
      subtitle1: {
        fontSize: "0.45rem",
        "@media (min-width:330px)": {
          fontSize: "0.5rem",
        },
        "@media (min-width:410px)": {
          fontSize: "0.6rem",
        },
        "@media (min-width:750px)": {
          fontSize: "1rem",
        },
        "@media (min-width:1050px)": {
          fontSize: "1.2rem",
        },
      },
    }
  });
  
  export default theme;