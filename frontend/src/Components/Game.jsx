import React from "react";
import Map from "./Map";
import "./Game.css";
import Player from "./Player";
import { tileNames, tilesMap } from "./tilesMap.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 3,
      y: 4,
      keyCode: 40,
      canMoove: true
    };
  }

  // Method which get inputs from the keyboard on all the screen

  componentDidMount() {
    window.onkeydown = event => {
      if (this.state.canMoove) {
        this.setState({ canMoove: false });
        setTimeout(() => {
          this.setState({ canMoove: true });
        }, 120);
        this.getMouvment(event);
      }
    };
  }

  //  Method which get inputs from ComponentDidMount (Game component) and send the correct movment to do on the Player
  getMouvment(event) {
    let newKeyCode = event.keyCode;
    let newPosition = 0;
    switch (newKeyCode) {
      case 37:
        event.preventDefault();
        newPosition = this.state.x - 1;
        if (
          newPosition < 0 ||
          tilesMap[this.state.y][this.state.x - 1].includes("Z")
        ) {
          break;
        } else {
          this.setState({
            x: newPosition,
            keyCode: newKeyCode
          });
        }
        break;

      case 38:
        event.preventDefault();
        newPosition = this.state.y - 1;
        if (
          newPosition < 0 ||
          tilesMap[this.state.y - 1][this.state.x].includes("Z")
        ) {
          break;
        } else {
          this.setState({
            y: newPosition,
            keyCode: newKeyCode
          });
        }
        break;

      case 39:
        event.preventDefault();
        newPosition = this.state.x + 1;
        if (
          newPosition > 19 ||
          tilesMap[this.state.y][this.state.x + 1].includes("Z")
        ) {
          break;
        } else {
          this.setState({
            x: newPosition,
            keyCode: newKeyCode
          });
        }
        break;

      case 40:
        event.preventDefault();
        let newPosition = this.state.y + 1;
        if (
          newPosition > 14 ||
          tilesMap[this.state.y + 1][this.state.x].includes("Z")
        ) {
          break;
        } else {
          this.setState({
            y: newPosition,
            keyCode: newKeyCode
          });
        }
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="game">
        <div className="gameUI"></div>
        <div className="gameScreen">
          <Map />
          <Player
            keyCode={this.state.keyCode}
            x={this.state.x}
            y={this.state.y}
          />
        </div>
      </div>
    );
  }
}

export default Game;
