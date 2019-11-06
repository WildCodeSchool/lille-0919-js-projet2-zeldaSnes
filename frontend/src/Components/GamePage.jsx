import React from "react";
import Game from "./Game";
import Title from "./Title";
import LeftDiv from "./LeftDiv";
import ControlsTab from "./ControlsTab";
import "./GamePage.css";

function GamePage() {
  return (
    <div className="GamePage">
      <Title />
      <div className="Container">
        <LeftDiv />
        <Game />
        <ControlsTab />
      </div>
    </div>
  );
}

export default GamePage;
