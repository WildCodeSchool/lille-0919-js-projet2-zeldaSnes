import React from "react";
import Map from "./Map";
import "./Game.css";
import Player from "./Player";
import { tileNames, tilesMap } from "./tilesMap.js";
import UIfx from "uifx";
import blocked from "./Bounce.mp3";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 3,
      y: 4,
      keyName: "ArrowDown",
      canMove: true,
      blocked: false
    };
  }

  blocked = new UIfx({ asset: blocked });

  // Method which get inputs from the keyboard on all the screen

  componentDidMount() {
    window.onkeydown = event => {
      if (this.state.canMove) {
        this.setState({ canMove: false });
        setTimeout(() => {
          this.setState({ canMove: true });
        }, 120);
        this.getMovement(event);
      }
    };
  }

  //  Method which get inputs from ComponentDidMount (Game component) and send the correct movment to do on the Player
  getMovement(event) {
    let newKey = event.key;
    let newPosition;
    let x = this.state.x;
    let y = this.state.y;
    const topBorder = 0;
    const leftBorder = 0;
    const bottomBorder = 14;
    const rightBorder = 19;
    switch (newKey) {
      case "ArrowLeft":
        event.preventDefault();
        newPosition = x - 1;
        if (newPosition >= leftBorder && !tilesMap[y][x - 1].includes("Z")) {
          this.setState({
            x: newPosition,
            keyName: newKey
          });
        } else {
        }
        break;

      case "ArrowUp":
        event.preventDefault();
        newPosition = y - 1;
        if (newPosition >= topBorder && !tilesMap[y - 1][x].includes("Z")) {
          this.setState({
            y: newPosition,
            keyName: newKey
          });
        }
        break;

      case "ArrowRight":
        event.preventDefault();
        newPosition = x + 1;
        if (newPosition <= rightBorder && !tilesMap[y][x + 1].includes("Z")) {
          this.setState({
            x: newPosition,
            keyName: newKey
          });
        }
        break;

      case "ArrowDown":
        event.preventDefault();
        newPosition = y + 1;
        if (newPosition <= bottomBorder && !tilesMap[y + 1][x].includes("Z")) {
          this.setState({
            y: newPosition,
            keyName: newKey
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
            keyName={this.state.keyName}
            x={this.state.x}
            y={this.state.y}
            blocked={this.state.blocked}
          />
        </div>
      </div>
    );
  }
}

export default Game;
