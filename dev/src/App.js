import React, { useState, useEffect } from "react";

import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => {
    document.title = `${page} - Julià Mauri Costa`;
  }, [page]);

  switch (page) {
    case "Home":
      return <Home go={setPage} />;
    case "Projects":
      return <Projects back={setPage} />;
    case "About me":
      return <About back={setPage} />;
    default:
      return <h1>Not expected to be here</h1>;
  }
}

export default App;
