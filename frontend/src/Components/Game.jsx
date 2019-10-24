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
      keyName: "ArrowDown",
      canMove: true,
      xPNJ: 10,
      yPNJ: 10,
      PNJIsAlive: true
    };
  }

  // Method which get inputs from the keyboard on all the screen

  componentDidMount() {
    window.onkeydown = event => {
      if (this.state.canMove) {
        this.setState({ canMove: false });
        setTimeout(() => {
          this.setState({ canMove: true });
        }, 120);
        this.getMovement(event);

        setInterval(() => {
          if (this.indexpnjmove > this.pnjmoves.length - 1) {
            this.indexpnjmove = 0;
          }
          this.getPNJMove(this.indexpnjmove);
        }, 1000);
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

  pnjmoves = [
    "h",
    "h",
    "g",
    "g",
    "g",
    "g",
    "b",
    "b",
    "b",
    "b",
    "b",
    "d",
    "d",
    "d",
    "d",
    "h",
    "h",
    "h"
  ];

  getPNJMove(indexpnjmove) {
    let newPNJPosition = 0;
    switch (this.pnjmoves[indexpnjmove]) {
      case "g":
        this.setState({
          xPNJ: newPNJPosition
        });
        this.indexpnjmove += 1;
        break;
      case "h":
        this.setState({
          yPNJ: newPNJPosition
        });
        this.indexpnjmove += 1;
        break;
      case "d":
        this.setState({
          xPNJ: newPNJPosition
        });
        this.indexpnjmove += 1;
        break;
      case "b":
        this.setState({
          yPNJ: newPNJPosition
        });
        this.indexpnjmove += 1;
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
          />
          <PNJ
            PNJIsAlive={this.state.PNJIsAlive}
            PNJdirection={this.state.PNJdirection}
            xPNJ={this.state.xPNJ}
            yPNJ={this.state.yPNJ}
          />
        </div>
      </div>
    );
  }
}

export default Game;
