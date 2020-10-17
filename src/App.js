import React from "react";
import Tasks from "./components/center/Tasks";
import Toolbar from "./components/left/Toolbar";
import Detailbar from "./components/right/Detailbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Tasks />
      <Detailbar />
    </div>
  );
}

export default App;
