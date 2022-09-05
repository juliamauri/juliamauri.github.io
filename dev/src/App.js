import React, { useState, useEffect } from "react";

import Home from "./Home";
import Expositor from "./Expositor";
import About from "./About";

function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => {
    document.title = `${page} - Julià Mauri Costa`;
  }, [page]);

  switch (page) {
    case "Home":
      return <Home go={setPage} />;
    case "Main Projects":
      return <Expositor back={setPage} dataJson="./Data/main_projects.json" />;
    case "Minor Projects":
      return <Expositor back={setPage} dataJson="./Data/minor_projects.json" />;
    case "About me":
      return <About back={setPage} />;
    default:
      return <h1>Not expected to be here</h1>;
  }
}

export default App;
