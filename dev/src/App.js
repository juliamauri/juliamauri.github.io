import React, { useState, useEffect } from "react";

import Home from "./Home";
import Projects from "./Projects";

function App() {
  const [page, setPage] = useState("Home");
  useEffect(() => {
    document.title = `${page} - Julià Mauri Costa`;
  }, [page]);

  switch(page){
    case "Home": return <Home go={setPage} />;
    case "Projects": return <Projects />;
    case "About me": return <h1>About me</h1>;
    default: return <h1>Not expected to be here</h1>;
  }
}

export default App;