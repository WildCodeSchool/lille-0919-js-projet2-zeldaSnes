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
      canMoove: true,
      lastDirection: 40
    };
  }

  // Fonction qui écoute les input du clavier sur toutela fenetre

  componentDidMount() {
    window.onkeydown = event => {
      if (this.state.canMoove) {
        this.setState({ canMoove: false });
        setTimeout(() => {
          this.setState({ canMoove: true });
        }, 140);
        this.getMouvment(event);
      }
    };
  }

  // Fonction qui récupere l'input du clavier pour afficher le bon asset et faire bouger le player
  getMouvment(event) {
    let newKeyCode = event.keyCode;
    if (this.state.lastDirection === newKeyCode) {
      switch (newKeyCode) {
        case 37:
          event.preventDefault();
          let newPosition = this.state.x - 1;
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
          let newPosition2 = this.state.y - 1;
          if (
            newPosition2 < 0 ||
            tilesMap[this.state.y - 1][this.state.x].includes("Z")
          ) {
            break;
          } else {
            this.setState({
              y: newPosition2,
              keyCode: newKeyCode
            });
          }
          break;

        case 39:
          event.preventDefault();
          let newPosition3 = this.state.x + 1;
          if (
            newPosition3 > 19 ||
            tilesMap[this.state.y][this.state.x + 1].includes("Z")
          ) {
            break;
          } else {
            this.setState({
              x: newPosition3,
              keyCode: newKeyCode
            });
          }
          break;

        case 40:
          event.preventDefault();
          let newPosition4 = this.state.y + 1;
          if (
            newPosition4 > 14 ||
            tilesMap[this.state.y + 1][this.state.x].includes("Z")
          ) {
            break;
          } else {
            this.setState({
              y: newPosition4,
              keyCode: newKeyCode
            });
          }
          break;
        default:
          return "";
      }
    } else {
      switch (newKeyCode) {
        case 37:
          event.preventDefault();
          this.setState({ lastDirection: newKeyCode });
          break;

        case 38:
          event.preventDefault();
          this.setState({ lastDirection: newKeyCode });
          break;

        case 39:
          event.preventDefault();
          this.setState({ lastDirection: newKeyCode });
          break;

        case 40:
          event.preventDefault();
          this.setState({ lastDirection: newKeyCode });
          break;
        default:
          break;
        //this.setState({ lastDirection: 40 });
      }
      console.log(this.state.lastDirection);
    }
  }

  render() {
    return (
      <div className="game">
        <div className="gameUI"></div>
        <div className="gameScreen">
          <Map />
          <Player
            lastDirection={this.state.lastDirection}
            keyCode={this.state.keyCode}
            x={this.state.x}
            y={this.state.y}
            canMoove={this.state.canMoove}
          />
        </div>
      </div>
    );
  }
}
export default Game;
