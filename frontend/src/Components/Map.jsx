import React from "react";
import Player from "./Player";
import "./Map.css";

const map1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 9,
      y: 6,
      keyCode: 40,
      canMoove: true
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
    switch (newKeyCode) {
      case 37:
        let newPosition = this.state.x - 1;
        if (newPosition < 0) {
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
        if (newPosition2 < 0) {
          break;
        } else {
          this.setState({
            y: newPosition2,
            keyCode: newKeyCode
          });
        }
        break;

      case 39:
        let newPosition3 = this.state.x + 1;
        if (newPosition3 > 19) {
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
        if (newPosition4 > 14) {
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
  }

  render() {
    return (
      <div className="map">
        <Player
          keyCode={this.state.keyCode}
          x={this.state.x}
          y={this.state.y}
        />
        {map1.map(row => {
          return row.map(column => {
            return <div className="tile"></div>;
          });
        })}
      </div>
    );
  }
}

export default Map;
