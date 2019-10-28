import React from "react";
import Map from "./Map";
import "./Game.css";
import Player from "./Player";
import Ruby from "./Ruby";
import { tileNames, tilesMap } from "./tilesMap.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 3,
      y: 4,
      keyName: "ArrowDown",
      canMove: true,
      rubyCounter: 0,
      rubyList: [
        { x: 3, y: 5, rubyClass: "Ruby" },
        { x: 6, y: 8, rubyClass: "Ruby" },
        { x: 9, y: 12, rubyClass: "Ruby" },
        { x: 15, y: 6, rubyClass: "Ruby" }
      ]
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
    this.getRuby();
  }

  // This function check if the ruby position correspond to the player position and remove the concerned ruby from the rubyList array + incrementing rubyCounter by 1
  getRuby() {
    let xPlayer = this.state.x;
    let yPlayer = this.state.y;
    let newRubyList = this.state.rubyList;

    for (let i = 0; i < newRubyList.length; i++) {
      if (newRubyList[i].x === xPlayer && newRubyList[i].y === yPlayer) {
        this.setState((newRubyList[i] = { rubyClass: "RubyTaken" }));
        setTimeout(() => {
          this.setState({
            newRubyList: newRubyList.splice(i, 1),
            rubyCounter: this.state.rubyCounter + 1
          });
        }, 200);
        this.playRuby();
      }
    }
  }

  playRuby() {
    const pickupRuby = new Audio("sound/getRuby.mp3");
    pickupRuby.play();
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
          {this.state.rubyList.map((ruby, index) => {
            return (
              <Ruby xRuby={ruby.x} yRuby={ruby.y} rubyClass={ruby.rubyClass} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Game;
