import React from "react";
import Map from "./Map";
import "./Game.css";
import Player from "./Player";
import { tileNames, tilesMap } from "./tilesMap.js";
import NPC from "./NPC/NPC";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 3,
      y: 4,
      keyName: "ArrowDown",
      canMove: true,
      xNPC: 10,
      yNPC: 10,
      NPCIsAlive: true,
      NPCdirection: "h"
    };
  }

  indexNPCmove = 0;
  // Method which get inputs from the keyboard on all the screen

  componentDidMount() {
    setInterval(() => {
      if (this.indexNPCmove > this.NPCmoves.length - 1) {
        this.indexNPCmove = 0;
      }
      this.getNPCMove(this.indexNPCmove);
    }, 1000);

    window.onkeydown = event => {
      if (this.state.canMove) {
        this.setState({ canMove: false });
        setTimeout(() => {
          this.setState({ canMove: true });
        }, 120);
        this.getMovement(event);
      }
      this.getAttack(event);
    };
  }

  //  Method which get inputs from ComponentDidMount (Game component) and send the correct movment to do on the Player
  getMovement(event) {
    let newKey = event.key;
    let newPosition;
    let x = this.state.x;
    let y = this.state.y;
    let xNPC = this.state.xNPC;
    let yNPC = this.state.yNPC;
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
          (newPosition !== xNPC || y !== yNPC)
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
          (newPosition !== yNPC || x !== xNPC)
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
          (newPosition !== xNPC || y !== yNPC)
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
          (newPosition !== yNPC || x !== xNPC)
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

  getAttack(event) {
    let newKeyCode = event.keyCode;
    if (newKeyCode === 69)
      switch (this.state.direction) {
        case "g":
          if (this.state.xNPC === this.state.x - 1) {
            this.setState({ NPCIsAlive: false });
          }
          break;
        case "h":
          if (this.state.yNPC === this.state.y - 1) {
            this.setState({ NPCIsAlive: false });
          }
          break;
        case "d":
          if (this.state.xNPC === this.state.x + 1) {
            this.setState({ NPCIsAlive: false });
          }
          break;
        case "b":
          if (this.state.yNPC === this.state.y + 1) {
            this.setState({ NPCIsAlive: false });
          }
          break;
      }
  }

  NPCmoves = [
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

  getNPCMove(indexNPCmove) {
    let newNPCPosition = 0;
    switch (this.NPCmoves[indexNPCmove]) {
      case "g":
        newNPCPosition = this.state.xNPC - 1;
        if (
          newNPCPosition !== this.state.x ||
          this.state.y !== this.state.yNPC
        ) {
          this.setState({
            xNPC: newNPCPosition
          });
          this.indexNPCmove += 1;
          this.setState({ NPCdirection: this.NPCmoves[indexNPCmove] });
        }
        break;
      case "h":
        newNPCPosition = this.state.yNPC - 1;
        if (
          newNPCPosition !== this.state.y ||
          this.state.x !== this.state.xNPC
        ) {
          this.setState({
            yNPC: newNPCPosition
          });
          this.indexNPCmove += 1;
          this.setState({ NPCdirection: this.NPCmoves[indexNPCmove] });
        }
        break;
      case "d":
        newNPCPosition = this.state.xNPC + 1;
        if (
          newNPCPosition !== this.state.x ||
          this.state.y !== this.state.yNPC
        ) {
          this.setState({
            xNPC: newNPCPosition
          });
          this.indexNPCmove += 1;
          this.setState({ NPCdirection: this.NPCmoves[indexNPCmove] });
        }
        break;
      case "b":
        newNPCPosition = this.state.yNPC + 1;
        if (
          newNPCPosition !== this.state.y ||
          this.state.x !== this.state.xNPC
        ) {
          this.setState({
            yNPC: newNPCPosition
          });
          this.indexNPCmove += 1;
          this.setState({ NPCdirection: this.NPCmoves[indexNPCmove] });
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
          <NPC
            NPCIsAlive={this.state.NPCIsAlive}
            NPCdirection={this.state.NPCdirection}
            xNPC={this.state.xNPC}
            yNPC={this.state.yNPC}
          />
        </div>
      </div>
    );
  }
}

export default Game;
