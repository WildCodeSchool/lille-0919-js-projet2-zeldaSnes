import React from "react";
import Map from "./Map";
import "./Game.css";
import Player from "./Player";
import { tileNames, tilesMap } from "./tilesMap.js";
import PNJ from "./PNJ/PNJ";

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
      PNJIsAlive: true,
      PNJdirection: "h"
    };
  }

  indexpnjmove = 0;
  // Method which get inputs from the keyboard on all the screen

  componentDidMount() {
    setInterval(() => {
      if (this.indexpnjmove > this.pnjmoves.length - 1) {
        this.indexpnjmove = 0;
      }
      this.getPNJMove(this.indexpnjmove);
    }, 1000);

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
    let xPNJ = this.state.xPNJ;
    let yPNJ = this.state.yPNJ;
    let newDirection = "b";
    const topBorder = 0;
    const leftBorder = 0;
    const bottomBorder = 14;
    const rightBorder = 19;
    switch (newKey) {
      case "ArrowLeft":
        event.preventDefault();
        newPosition = x - 1;
        newDirection = "g";
        if (
          newPosition >= leftBorder &&
          !tilesMap[y][x - 1].includes("Z") &&
          (newPosition !== xPNJ || y !== yPNJ)
        ) {
          this.setState({
            direction: newDirection,
            x: newPosition,
            keyName: newKey
          });
        }
        break;

      case "ArrowUp":
        event.preventDefault();
        newPosition = y - 1;
        newDirection = "h";
        if (
          newPosition >= topBorder &&
          !tilesMap[y - 1][x].includes("Z") &&
          (newPosition !== yPNJ || x !== xPNJ)
        ) {
          this.setState({
            direction: newDirection,
            y: newPosition,
            keyName: newKey
          });
        }
        break;

      case "ArrowRight":
        event.preventDefault();
        newPosition = x + 1;
        newDirection = "d";
        if (
          newPosition <= rightBorder &&
          !tilesMap[y][x + 1].includes("Z") &&
          (newPosition !== xPNJ || y !== yPNJ)
        ) {
          this.setState({
            direction: newDirection,
            x: newPosition,
            keyName: newKey
          });
        }
        break;

      case "ArrowDown":
        event.preventDefault();
        newPosition = y + 1;
        newDirection = "b";
        if (
          newPosition <= bottomBorder &&
          !tilesMap[y + 1][x].includes("Z") &&
          (newPosition !== yPNJ || x !== xPNJ)
        ) {
          this.setState({
            direction: newDirection,
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
        newPNJPosition = this.state.xPNJ - 1;
        if (
          newPNJPosition === this.state.x &&
          this.state.y === this.state.yPNJ
        ) {
        } else {
          this.setState({
            xPNJ: newPNJPosition
          });
          this.indexpnjmove += 1;
          this.setState({ PNJdirection: this.pnjmoves[indexpnjmove] });
        }
        break;
      case "h":
        newPNJPosition = this.state.yPNJ - 1;
        if (
          newPNJPosition === this.state.y &&
          this.state.x === this.state.xPNJ
        ) {
        } else {
          this.setState({
            yPNJ: newPNJPosition
          });
          this.indexpnjmove += 1;
          this.setState({ PNJdirection: this.pnjmoves[indexpnjmove] });
        }
        break;
      case "d":
        newPNJPosition = this.state.xPNJ + 1;
        if (
          newPNJPosition === this.state.x &&
          this.state.y === this.state.yPNJ
        ) {
        } else {
          this.setState({
            xPNJ: newPNJPosition
          });
          this.indexpnjmove += 1;
          this.setState({ PNJdirection: this.pnjmoves[indexpnjmove] });
        }
        break;
      case "b":
        newPNJPosition = this.state.yPNJ + 1;
        if (
          newPNJPosition === this.state.y &&
          this.state.x === this.state.xPNJ
        ) {
        } else {
          this.setState({
            yPNJ: newPNJPosition
          });
          this.indexpnjmove += 1;
          this.setState({ PNJdirection: this.pnjmoves[indexpnjmove] });
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
