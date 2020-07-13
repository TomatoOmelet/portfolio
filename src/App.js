import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from "./components/layout/Navbar";
import SelfDescription from "./components/layout/SelfDescription";

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/layout/Contact"

function App() {
  return (
    <BrowserRouter>

      <div className = "container">
        <SelfDescription/>
        <Navbar/>
        <Switch>
          <Route exact path = {process.env.PUBLIC_URL + "/"} component={Home}/>
          <Route exact path= {process.env.PUBLIC_URL + "/About"} component={About}/>
          <Route component={Home}/>
        </Switch>
        <Contact/>
      </div>

    </BrowserRouter>
  );
}

export default App;
