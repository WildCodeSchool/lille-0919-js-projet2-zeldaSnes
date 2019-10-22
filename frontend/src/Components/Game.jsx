import React from "react";
import Map from "./Map";
import "./Game.css";
import Player from "./Player";
import { tileNames, tilesMap, tilesMap2 } from "./tilesMap.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 3,
      y: 4,
      keyCode: 40,
      canMoove: true,
      mapNumber: tilesMap,
      shouldUpdate: false
    };
  }

  // Fonction qui écoute les input du clavier sur toutela fenetre

  componentDidMount() {
    window.onkeydown = event => {
      if (this.state.canMoove) {
        this.setState({ canMoove: false });
        setTimeout(() => {
          this.setState({ canMoove: true });
        }, 120);
        this.getMouvment(event);
      }
    };
  }

  // Fonction qui récupere l'input du clavier pour afficher le bon asset et faire bouger le player
  getMouvment(event) {
    let newKeyCode = event.keyCode;
    //téléportation du player au bout des chemins & modification de map
    if (
      this.state.x === 19 &&
      this.state.y === 4 &&
      newKeyCode === 39 &&
      this.state.mapNumber === tilesMap
    ) {
      return (
        this.setState({
          y: 14,
          x: 5,
          mapNumber: tilesMap2,
          shouldUpdate: true
        }),
        this.setState({
          shouldUpdate: false
        })
      );
    } else if (
      this.state.x === 5 &&
      this.state.y === 14 &&
      newKeyCode === 40 &&
      this.state.mapNumber === tilesMap
    ) {
      return (
        this.setState({
          y: 4,
          x: 19,
          mapNumber: tilesMap2,
          shouldUpdate: true
        }),
        this.setState({
          shouldUpdate: false
        })
      );
    } else if (
      this.state.x === 19 &&
      this.state.y === 4 &&
      newKeyCode === 39 &&
      this.state.mapNumber === tilesMap2
    ) {
      return (
        this.setState({
          y: 14,
          x: 5,
          mapNumber: tilesMap,
          shouldUpdate: true
        }),
        this.setState({
          shouldUpdate: false
        })
      );
    } else if (
      this.state.x === 5 &&
      this.state.y === 14 &&
      newKeyCode === 40 &&
      this.state.mapNumber === tilesMap2
    ) {
      return (
        this.setState({
          y: 4,
          x: 19,
          mapNumber: tilesMap,
          shouldUpdate: true
        }),
        this.setState({
          shouldUpdate: false
        })
      );
    }
    // fin téléportation du player au bout des chemins & modification de map
    else {
      switch (newKeyCode) {
        case 37:
          event.preventDefault();
          let newPosition = this.state.x - 1;
          if (
            newPosition < 0 ||
            this.state.mapNumber[this.state.y][this.state.x - 1].includes("Z")
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
            this.state.mapNumber[this.state.y - 1][this.state.x].includes("Z")
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
            this.state.mapNumber[this.state.y][this.state.x + 1].includes("Z")
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
            this.state.mapNumber[this.state.y + 1][this.state.x].includes("Z")
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
      console.log(this.state.mapNumber);
    }
  }

  render() {
    return (
      <div className="game">
        <div className="gameUI"></div>
        <div className="gameScreen">
          <Map
            mapNumber={this.state.mapNumber}
            shouldUpdate={this.state.shouldUpdate}
          />
          <Player
            keyCode={this.state.keyCode}
            x={this.state.x}
            y={this.state.y}
          />
        </div>
      </div>
    );
  }
}

export default Game;
