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
      canMove: true
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
      }
    };
  }

  //  Method which get inputs from ComponentDidMount (Game component) and send the correct movment to do on the Player
  getMovement(event) {
    let newKey = event.key;
    let newPosition;
    switch (newKey) {
      case "ArrowLeft":
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
            keyName: newKey
          });
        }
        break;

      case "ArrowUp":
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
            keyName: newKey
          });
        }
        break;

      case "ArrowRight":
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
            keyName: newKey
          });
        }
        break;

      case "ArrowDown":
        event.preventDefault();
        newPosition = this.state.y + 1;
        if (
          newPosition > 14 ||
          tilesMap[this.state.y + 1][this.state.x].includes("Z")
        ) {
          break;
        } else {
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
          />
        </div>
      </div>
    );
  }
}

export default Game;
