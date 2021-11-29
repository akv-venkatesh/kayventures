import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Routes from "./Routes/route";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
