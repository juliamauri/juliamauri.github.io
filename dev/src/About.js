import { Box, Fab } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function About(props) {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <h1>About me</h1>

      <Fab
        size="small"
        color="secondary"
        aria-label="Launch"
        sx={{ m: 0.2 }}
        onClick={() => {
          props.back("Home");
        }}
      >
        <ArrowBackIcon />
      </Fab>
    </Box>
  );
}

export default About;
