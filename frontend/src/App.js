import React from "react";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import GamePage from "./Components/GamePage";
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Gamepage" component={GamePage} />
      <Route path="/About" component={AboutPage} />
      <Route path="/Timeline" component={HomePage} />
    </Switch>
  );
}

export default App;
