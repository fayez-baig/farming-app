import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRouter from "./routes/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppRouter />
    </div>
  );
}

export default App;
