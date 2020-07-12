import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from "./components/layout/Navbar";
import SelfDescription from "./components/layout/SelfDescription";

import Home from "./components/pages/Home"
import About from "./components/pages/About"

function App() {
  return (
    <BrowserRouter>

      <div className = "container">
        <SelfDescription/>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path="/About" component={About}/>
          {/*<Route component={NotFound}/>*/}
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
