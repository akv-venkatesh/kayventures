import React from "react";
import {BrowserRouter } from "react-router-dom";
import Routes from "./Routes/route";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


class App extends React.Component{
  render():JSX.Element{
    return (
      <div>
        <BrowserRouter>
            <Routes />        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
