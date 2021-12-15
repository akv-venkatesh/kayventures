import React from "react";
import {HashRouter, Switch, BrowserRouter } from "react-router-dom";
import Routes from "./Routes/route";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
    <HashRouter>
        <Switch>
          <Routes />
        </Switch>
        </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
