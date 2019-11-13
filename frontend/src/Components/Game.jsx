import React from "react";
import Map from "./Map";
import "./Game.css";
import Player from "./Player";
import GameTopBar from "./GameTopBar";
import Ruby from "./Ruby";
import { tilesMap, tilesMap2 } from "./tilesMap.js";
import Sword from "./Sword";
import NPC from "./NPC/NPC.jsx";
import NPCmoves from "./NPC/NPCmoves.jsx";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 3,
      y: 4,
      HP: 8,
      keyName: "ArrowDown",
      blocked: false,
      canMove: true,
      mapNumber: tilesMap,
      shouldUpdate: false,
      haveSword: false,
      swordPosition: [{ x: 6, y: 3, swordClass: "Sword", swordMap: tilesMap }],
      rubyCounter: 0,
      gampadConnected: false,
      rubyList: [
        { x: 3, y: 5, rubyClass: "Ruby", rubyMap: tilesMap },
        { x: 6, y: 8, rubyClass: "Ruby", rubyMap: tilesMap },
        { x: 9, y: 12, rubyClass: "Ruby", rubyMap: tilesMap },
        { x: 15, y: 6, rubyClass: "Ruby", rubyMap: tilesMap },
        { x: 3, y: 4, rubyClass: "Ruby", rubyMap: tilesMap2 }
      ],
      direction: "down",
      NPC: {
        x: 10,
        y: 10,
        isAlive: true,
        direction: "up",
        NPCMap: tilesMap
      },
      transition: 0.3,
      buttonPressed: {
        id: 0,
        axes: [0, 0],
        buttons: [
          { button_0: false },
          { button_1: false },
          { button_2: false },
          { button_3: false },
          { button_4: false },
          { button_5: false }
        ]
      },
      pressKey: 0,
      attackAction: false
    };
  }

  // Method which sets an event listener on keyboard inputs on all the screen as soon as the component mounts
  componentDidMount() {
    // this.getGamepad();

    window.onkeydown = event => {
      if (this.state.canMove) {
        this.setState({ canMove: false });
        setTimeout(() => {
          this.setState({ canMove: true });
        }, 120);
        this.getMovement(event);
      }
      this.mapModification(event);
      this.attack(event);
    };

    // if (this.state.canMove && this.state.gampadConnected) {
    //   this.setState({ canMove: false });
    //   setTimeout(() => {
    //     this.setState({ canMove: true });
    //   }, 120);
    //   this.gamepadMove();
    // }
  }

  pathFinding(xNPC, yNPC, x, y) {
    const easystarjs = require("easystarjs");
    const easystar = new easystarjs.js();

    const grid = tilesMap.map(row =>
      row.map(tile => {
        return tile.includes("Z") ? (tile = 1) : (tile = 0);
      })
    );

    easystar.setGrid(grid);
    easystar.setIterationsPerCalculation(1000);
    easystar.setAcceptableTiles([0]);

    easystar.findPath(xNPC, yNPC, x, y, path => {
      if (path.length > 0 && path.length < 10) {
        let newx = path[1].x;
        let newy = path[1].y;
        if (newx - xNPC !== 0) {
          if (xNPC - newx > 0) {
            this.setState({ NPC: { ...this.state.NPC, direction: "left" } });
          } else {
            this.setState({ NPC: { ...this.state.NPC, direction: "right" } });
          }
        } else {
          if (yNPC - newy > 0) {
            this.setState({ NPC: { ...this.state.NPC, direction: "up" } });
          } else {
            this.setState({ NPC: { ...this.state.NPC, direction: "down" } });
          }
        }
        if (newx !== this.state.x || newy !== this.state.y) {
          this.setState({
            NPC: {
              ...this.state.NPC,
              x: newx,
              y: newy
            }
          });
        } else {
          let newHP = this.state.HP - 1;
          this.setState({
            ...this.state,
            HP: newHP
          });
        }
      }
    });

    easystar.calculate();
  }

  // getGamepad() {
  //   window.addEventListener("gamepadconnected", event => {
  //     this.setState({ gampadConnected: true });
  //   });
  //   window.addEventListener("gamepaddisconnected", event => {
  //     this.setState({ gampadConnected: false });
  //   });
  //   let update = () => {
  //     const gamepads = navigator.getGamepads();
  //     if (gamepads[0]) {
  //       const gamepadState = {
  //         id: gamepads[0].id,
  //         axes: [
  //           gamepads[0].axes[0].toFixed(2),
  //           gamepads[0].axes[1].toFixed(2)
  //         ],
  //         buttons: [
  //           { button_0: gamepads[0].buttons[0].pressed },
  //           { button_1: gamepads[0].buttons[1].pressed },
  //           { button_2: gamepads[0].buttons[2].pressed },
  //           { button_3: gamepads[0].buttons[3].pressed },
  //           { button_4: gamepads[0].buttons[4].pressed },
  //           { button_5: gamepads[0].buttons[5].pressed }
  //         ]
  //       };

  //       this.setState({ buttonPressed: gamepadState });
  //     }
  //     window.requestAnimationFrame(update);

  //     if (this.state.canMove && this.state.gampadConnected) {
  //       this.setState({ canMove: false });
  //       setTimeout(() => {
  //         this.setState({ canMove: true });
  //       }, 120);
  //     }
  //   };
  //   window.requestAnimationFrame(update);

  // }

  /* Player  Movement  */
  gamepadMove() {
    let newPosition;
    let x = this.state.x;
    let y = this.state.y;
    let newDirection;
    if (this.state.buttonPressed.axes[1] === "1.00") {
      newPosition = y + 1;
      newDirection = "down";
      if (this.isMovePossible(x, y + 1)) {
        this.setState({
          direction: newDirection,
          y: newPosition,
          keyName: "ArrowDown"
        });
      } else {
        this.playBounce();
      }
    } else if (this.state.buttonPressed.axes[1] === "-1.00") {
      newPosition = y - 1;
      newDirection = "up";
      if (this.isMovePossible(x, y - 1)) {
        this.setState({
          direction: newDirection,
          y: newPosition,
          keyName: "ArrowUp"
        });
      } else {
        this.playBounce();
      }
    } else if (this.state.buttonPressed.axes[0] === "-1.00") {
      newPosition = x - 1;
      newDirection = "left";
      if (this.isMovePossible(x - 1, y)) {
        this.setState({
          direction: newDirection,
          x: newPosition,
          keyName: "ArrowLeft"
        });
      } else {
        this.playBounce();
      }
    } else if (this.state.buttonPressed.axes[0] === "1.00") {
      newPosition = x + 1;
      newDirection = "rigth";
      if (this.isMovePossible(x + 1, y)) {
        this.setState({
          direction: newDirection,
          x: newPosition,
          keyName: "ArrowRight"
        });
      } else {
        this.playBounce();
      }
    }
    this.getRuby();
    this.attack(this.state.keyName);
    this.setState({ pressKey: this.state.pressKey + 1 });
    this.getRuby();
    this.getSword();
  }

  mapModification(event) {
    if (
      this.state.x === 3 &&
      this.state.y === 3 &&
      this.state.keyName === "ArrowUp" &&
      this.state.mapNumber === tilesMap
    ) {
      return (
        this.setState({
          y: 10,
          x: 10,
          mapNumber: tilesMap2,
          shouldUpdate: true,
          transition: 0
        }),
        this.setState({
          shouldUpdate: false
        }),
        setTimeout(() => this.setState({ transition: 0.3 }), 300)
      );
    }
    if (
      this.state.x === 10 &&
      this.state.y === 11 &&
      event.key === "ArrowDown" &&
      this.state.mapNumber === tilesMap2
    ) {
      return (
        this.setState({
          y: 4,
          x: 3,
          mapNumber: tilesMap,
          shouldUpdate: true,
          transition: 0
        }),
        this.setState({
          shouldUpdate: false
        }),
        setTimeout(() => this.setState({ transition: 0.3 }), 300)
      );
    }
  }

  //  Method which get inputs from ComponentDidMount and send the movement to do on the Player
  getMovement(event) {
    let newKey = event.key;
    let newPositionX = this.state.x;
    let newPositionY = this.state.y;
    let x = this.state.x;
    let y = this.state.y;
    let newDirection;
    if (newKey === "e" && this.state.haveSword) {
      this.setState({ attackAction: true });
      setTimeout(() => this.setState({ attackAction: false }), 200);
      this.setState({ pressKey: this.state.pressKey + 1 });
    } else if (newKey === this.state.keyName) {
      this.setState({ pressKey: this.state.pressKey + 1 });
      switch (newKey) {
        case "ArrowLeft":
          event.preventDefault();
          newPositionX = x - 1;
          newDirection = "left";

          break;

        case "ArrowUp":
          event.preventDefault();
          newPositionY = y - 1;
          newDirection = "up";

          break;

        case "ArrowRight":
          event.preventDefault();
          newPositionX = x + 1;
          newDirection = "right";
          break;

        case "ArrowDown":
          event.preventDefault();
          newPositionY = y + 1;
          newDirection = "down";
          break;

        default:
          return;
      }
      if (this.isMovePossible(newPositionX, newPositionY)) {
        this.setState({
          direction: newDirection,
          x: newPositionX,
          y: newPositionY,
          keyName: newKey
        });
      } else {
        this.props.playBounce();
      }
    }
    //if player can not move just change the asset direction
    else {
      switch (newKey) {
        case "ArrowLeft":
          event.preventDefault();
          this.setState({
            direction: "left",
            keyName: newKey,
            pressKey: this.state.pressKey + 1
          });
          break;

        case "ArrowUp":
          event.preventDefault();
          this.setState({
            direction: "up",
            keyName: newKey,
            pressKey: this.state.pressKey + 1
          });
          break;

        case "ArrowRight":
          event.preventDefault();
          this.setState({
            direction: "right",
            keyName: newKey,
            pressKey: this.state.pressKey + 1
          });
          break;

        case "ArrowDown":
          event.preventDefault();
          this.setState({
            direction: "down",
            keyName: newKey,
            pressKey: this.state.pressKey + 1
          });
          break;
        default:
          break;
      }
    }

    this.getRuby();
    this.getSword();
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
      !this.state.mapNumber[y][x].includes("Z") &&
      (x !== this.state.NPC.x ||
        y !== this.state.NPC.y ||
        !this.state.NPC.isAlive ||
        this.state.mapNumber === tilesMap2)
    ) {
      return true;
    } else {
      return false;
    }
  }

  /*  Ruby   */

  // This function checks if the ruby position correspond to the player position and remove the concerned ruby from the rubyList array + increments rubyCounter by 1
  getRuby() {
    let xPlayer = this.state.x;
    let yPlayer = this.state.y;
    let newRubyList = this.state.rubyList;

    for (let i = 0; i < newRubyList.length; i++) {
      if (
        newRubyList[i].x === xPlayer &&
        newRubyList[i].y === yPlayer &&
        newRubyList[i].rubyMap === this.state.mapNumber
      ) {
        this.setState(
          (newRubyList[i] = { ...newRubyList[i], rubyClass: "RubyTaken" })
        );
        setTimeout(() => {
          this.setState({
            newRubyList: newRubyList.splice(i, 1),
            rubyCounter: this.state.rubyCounter + 1
          });
        }, 200);
        this.props.playRuby();
      }
    }
  }

  // This function check if the sword position correspond to the player position and remove the concerned sword from the swordPosition array + showing sword in WeaponSlot
  getSword() {
    let xPlayer = this.state.x;
    let yPlayer = this.state.y;
    const swordPosition = this.state.swordPosition;
    let haveSword = this.state.haveSword;
    for (let i = 0; i < swordPosition.length; i++) {
      if (
        swordPosition[i].x === xPlayer &&
        swordPosition[i].y === yPlayer &&
        haveSword === false
      ) {
        this.props.playSword();
        this.setState((swordPosition[i] = { swordClass: "SwordTaken" }));
        this.setState({
          swordPosition: swordPosition.splice(i, 1),
          haveSword: true
        });
      }
    }
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
    if (this.state.NPC.isAlive && this.state.mapNumber === tilesMap) {
      this.pathFinding(
        this.state.NPC.x,
        this.state.NPC.y,
        this.state.x,
        this.state.y
      );
    } else {
    }
  }, 1000);

  /*   attack the NPC       */

  attack(event) {
    let newKeyCode = event.key;
    if (
      (newKeyCode === "e" ||
        this.state.buttonPressed.buttons[2].button_2 === true) &&
      this.state.haveSword === true
    )
      switch (this.state.direction) {
        case "left":
          if (
            this.state.NPC.x === this.state.x - 1 &&
            this.state.NPC.NPCMap === this.state.mapNumber
          ) {
            this.setState({
              NPC: {
                ...this.state.NPC,
                isAlive: false
              }
            });
          }
          break;
        case "up":
          if (
            this.state.NPC.y === this.state.y - 1 &&
            this.state.NPC.NPCMap === this.state.mapNumber
          ) {
            this.setState({
              NPC: {
                ...this.state.NPC,
                isAlive: false
              }
            });
          }
          break;
        case "right":
          if (
            this.state.NPC.x === this.state.x + 1 &&
            this.state.NPC.NPCMap === this.state.mapNumber
          ) {
            this.setState({
              NPC: {
                ...this.state.NPC,
                isAlive: false
              }
            });
          }
          break;
        case "down":
          if (
            this.state.NPC.y === this.state.y + 1 &&
            this.state.NPC.NPCMap === this.state.mapNumber
          ) {
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
        <GameTopBar
          rubyCounter={this.state.rubyCounter}
          haveSword={this.state.haveSword}
          HP={this.state.HP}
        />
        <div className="gameScreen">
          <Map
            mapNumber={this.state.mapNumber}
            shouldUpdate={this.state.shouldUpdate}
          />
          <Player
            keyName={this.state.keyName}
            x={this.state.x}
            y={this.state.y}
            blocked={this.state.blocked}
            transition={this.state.transition}
            canMove={this.state.canMove}
            pressKey={this.state.pressKey}
            attackAction={this.state.attackAction}
            direction={this.state.direction}
          />
          {this.state.rubyList.map((ruby, index) => {
            return (
              <Ruby
                rubyMap={ruby.rubyMap}
                mapNumber={this.state.mapNumber}
                xRuby={ruby.x}
                yRuby={ruby.y}
                rubyClass={ruby.rubyClass}
                key={index}
              />
            );
          })}
          {this.state.swordPosition.map((sword, index) => {
            return (
              <Sword
                xSword={sword.x}
                ySword={sword.y}
                swordClass={sword.swordClass}
                swordMap={this.state.mapNumber}
                key={index}
              />
            );
          })}
          {this.state.NPC.isAlive && (
            <NPC
              NPCdirection={this.state.NPC.direction}
              xNPC={this.state.NPC.x}
              yNPC={this.state.NPC.y}
              NPCMap={this.state.NPC.NPCMap}
              mapNumber={this.state.mapNumber}
            />
          )}
          <p>{this.state.gampadConnected ? "GamePadConnected" : ""}</p>
        </div>
        <div className="gameMobileScreen">
          <h2>Sorry but our game is not avaible on mobile</h2>
        </div>
      </div>
    );
  }
}

export default Game;
