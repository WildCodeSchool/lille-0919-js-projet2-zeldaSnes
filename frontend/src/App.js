import React from "react";
import Game from './Components/Game';
import Title from './Components/Title';
import EmptyDiv from './Components/EmptyDiv';
import ControlsTab from './Components/ControlsTab';
import "./App.css";

function App() {
  return <div className="App">
    <Title />
    <div className="Container">
      <EmptyDiv />
      <Game />
      <ControlsTab />
    </div>
  </div>;
}

export default App;
