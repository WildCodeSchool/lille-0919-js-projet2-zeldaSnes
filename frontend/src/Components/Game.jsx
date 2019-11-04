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
      direction: "down",
      canMove: true,
      NPC: {
        x: 10,
        y: 10,
        isAlive: true,
        direction: "up"
      }
    };
  }

  indexNPCmove = 0;
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
      this.attack(event);
    };
  }

  makeNpcMove = setInterval(() => {
    if (this.state.NPC.isAlive) {
      if (this.indexNPCmove > this.NPCmoves.length - 1) {
        this.indexNPCmove = 0;
      }
      this.NPCMove(this.indexNPCmove);
    } else {
      clearInterval(this.makeNpcMove);
    }
  }, 1000);

  isMovePossible(x, y) {
    const topBorder = 0;
    const leftBorder = 0;
    const bottomBorder = 14;
    const rightBorder = 19;
    if (
      rightBorder >= x &&
      leftBorder <= x &&
      bottomBorder >= y &&
      topBorder <= y &&
      !tilesMap[y][x].includes("Z") &&
      (x !== this.state.NPC.x ||
        y !== this.state.NPC.y ||
        !this.state.NPC.isAlive)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //  Method which get inputs from ComponentDidMount (Game component) and send the correct movment to do on the Player
  getMovement(event) {
    let newKey = event.key;
    let newPosition;
    let x = this.state.x;
    let y = this.state.y;
    let newDirection = "down";

    switch (newKey) {
      case "ArrowLeft":
        event.preventDefault();
        newPosition = x - 1;
        newDirection = "left";
        if (this.isMovePossible(x - 1, y)) {
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
        newDirection = "up";
        if (this.isMovePossible(x, y - 1)) {
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
        newDirection = "right";
        if (this.isMovePossible(x + 1, y)) {
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
        newDirection = "down";
        if (this.isMovePossible(x, y + 1)) {
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

  attack(event) {
    let newKeyCode = event.key;
    if (newKeyCode === "e")
      switch (this.state.direction) {
        case "left":
          if (this.state.NPC.x === this.state.x - 1) {
            this.setState({
              NPC: {
                ...this.state.NPC,
                isAlive: false
              }
            });
          }
          break;
        case "up":
          if (this.state.NPC.y === this.state.y - 1) {
            this.setState({
              NPC: {
                ...this.state.NPC,
                isAlive: false
              }
            });
          }
          break;
        case "right":
          if (this.state.NPC.x === this.state.x + 1) {
            this.setState({
              NPC: {
                ...this.state.NPC,
                isAlive: false
              }
            });
          }
          break;
        case "down":
          if (this.state.NPC.y === this.state.y + 1) {
            this.setState({
              NPC: {
                ...this.state.NPC,
                isAlive: false
              }
            });
          }
          break;
      }
  }

  NPCmoves = [
    "up",
    "up",
    "left",
    "left",
    "left",
    "left",
    "down",
    "down",
    "down",
    "down",
    "down",
    "right",
    "right",
    "right",
    "right",
    "up",
    "up",
    "up"
  ];

  NPCMove(indexNPCmove) {
    let newNPCPosition = 0;
    switch (this.NPCmoves[indexNPCmove]) {
      case "left":
        newNPCPosition = this.state.NPC.x - 1;
        if (
          newNPCPosition !== this.state.x ||
          this.state.y !== this.state.NPC.y
        ) {
          this.setState({
            NPC: {
              ...this.state.NPC,
              x: newNPCPosition,
              direction: this.NPCmoves[indexNPCmove]
            }
          });
          this.indexNPCmove += 1;
        }
        break;
      case "up":
        newNPCPosition = this.state.NPC.y - 1;
        if (
          newNPCPosition !== this.state.y ||
          this.state.x !== this.state.xNPC
        ) {
          this.setState({
            NPC: {
              ...this.state.NPC,
              y: newNPCPosition,
              direction: this.NPCmoves[indexNPCmove]
            }
          });
          this.indexNPCmove += 1;
        }
        break;
      case "right":
        newNPCPosition = this.state.NPC.x + 1;
        if (
          newNPCPosition !== this.state.x ||
          this.state.y !== this.state.yNPC
        ) {
          this.setState({
            NPC: {
              ...this.state.NPC,
              x: newNPCPosition,
              direction: this.NPCmoves[indexNPCmove]
            }
          });
          this.indexNPCmove += 1;
        }
        break;
      case "down":
        newNPCPosition = this.state.NPC.y + 1;
        if (
          newNPCPosition !== this.state.y ||
          this.state.x !== this.state.xNPC
        ) {
          this.setState({
            NPC: {
              ...this.state.NPC,
              y: newNPCPosition,
              direction: this.NPCmoves[indexNPCmove]
            }
          });
          this.indexNPCmove += 1;
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
          {this.state.NPC.isAlive && (
            <NPC
              NPCdirection={this.state.NPC.direction}
              xNPC={this.state.NPC.x}
              yNPC={this.state.NPC.y}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Game;
