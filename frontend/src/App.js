import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from './Components/Game';
import Title from './Components/Title';

function App() {
  return <div className="App">
    <Title />
    <div className="Container">
      <Game />
    </div>
  </div>;
}

export default App;
