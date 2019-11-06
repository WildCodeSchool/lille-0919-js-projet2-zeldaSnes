import React from "react";
import Map from "./Map";
import "./Game.css";
import Player from "./Player";
import GameTopBar from "./GameTopBar";
import Ruby from "./Ruby";
import { tilesMap } from "./tilesMap.js";
import NPC from "./NPC/NPC.jsx";
import NPCmoves from "./NPC/NPCmoves.jsx";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 3,
      y: 4,
      keyName: "ArrowDown",
      blocked: false,
      canMove: true,
      rubyCounter: 0,
      rubyList: [
        { x: 3, y: 5, rubyClass: "Ruby" },
        { x: 6, y: 8, rubyClass: "Ruby" },
        { x: 9, y: 12, rubyClass: "Ruby" },
        { x: 15, y: 6, rubyClass: "Ruby" }
      ],
      direction: "down",
      NPC: {
        x: 10,
        y: 10,
        isAlive: true,
        direction: "up"
      }
    };
  }

  // Method which sets an event listener on keyboard inputs on all the screen as soon as the component mounts
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

  /* Player  Movement  */

  //  Method which get inputs from ComponentDidMount and send the movement to do on the Player
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
        } else {
          this.playBounce();
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
        } else {
          this.playBounce();
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
        } else {
          this.playBounce();
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
        } else {
          this.playBounce();
        }
        break;
      default:
        return;
    }
    this.getRuby();
  }
  // this method is a dependency of getMovement  that performs all the collision tests to determine whether to allow or to prevent movement of the player
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
  // this method is a dependency of getMovement that plays a sound effect when the player attempt to move on a blocking tile
  playBounce() {
    const bounce = new Audio("sound/Bounce.mp3");
    bounce.play();
  }

  /*  Ruby   */

  // This function checks if the ruby position correspond to the player position and remove the concerned ruby from the rubyList array + increments rubyCounter by 1
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
  // this method is a dependency of getRuby that plays a sound effect when the player collects a ruby
  playRuby() {
    const pickupRuby = new Audio("sound/getRuby.mp3");
    pickupRuby.play();
  }

  /*  NPC    */

  NPCMove(indexNPCmove) {
    let newNPCPositionX = this.state.NPC.x;
    let newNPCPositionY = this.state.NPC.y;

    switch (NPCmoves[indexNPCmove]) {
      case "left":
        newNPCPositionX = this.state.NPC.x - 1;
        break;
      case "up":
        newNPCPositionY = this.state.NPC.y - 1;
        break;
      case "right":
        newNPCPositionX = this.state.NPC.x + 1;
        break;
      case "down":
        newNPCPositionY = this.state.NPC.y + 1;
        break;
      default:
        return;
    }
    if (newNPCPositionY !== this.state.y || newNPCPositionX !== this.state.x) {
      this.setState({
        NPC: {
          ...this.state.NPC,
          y: newNPCPositionY,
          x: newNPCPositionX,
          direction: NPCmoves[indexNPCmove]
        }
      });
      this.indexNPCmove += 1;
    }
  }

  makeNpcMove = setInterval(() => {
    if (this.state.NPC.isAlive) {
      if (this.indexNPCmove > NPCmoves.length - 1) {
        this.indexNPCmove = 0;
      }
      this.NPCMove(this.indexNPCmove);
    } else {
      clearInterval(this.makeNpcMove);
    }
  }, 1000);

  /*   attack the NPC       */

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
        default:
          break;
      }
  }

  render() {
    return (
      <div className="game">
        <GameTopBar rubyCounter={this.state.rubyCounter} />
        <div className="gameScreen">
          <Map />
          <Player
            keyName={this.state.keyName}
            x={this.state.x}
            y={this.state.y}
            blocked={this.state.blocked}
          />
          {this.state.rubyList.map((ruby, index) => {
            return (
              <Ruby
                key={index}
                xRuby={ruby.x}
                yRuby={ruby.y}
                rubyClass={ruby.rubyClass}
              />
            );
          })}
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
