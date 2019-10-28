import React from "react";
import Game from './Components/Game';
import Title from './Components/Title';
import LeftDiv from './Components/LeftDiv';
import ControlsTab from './Components/ControlsTab';
import "./App.css";


function Gamepage() {
  return <div className="App">
    <Title />
    <div className="Container">
      <LeftDiv />
      <Game />
      <ControlsTab />
    </div>
  </div>;
}

export default Gamepage;
