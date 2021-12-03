import React from "react";
import {HashRouter, Switch, BrowserRouter } from "react-router-dom";
import Routes from "./Routes/route";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';


function App() {
  return (
    <div>
      {/* <HashRouter> */}
        <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
