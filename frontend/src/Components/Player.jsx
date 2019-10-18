import React from "react";
import "./Player.css";

// Affiche le player et calcul le mouvement a faire provenant de Map

class Player extends React.Component {
  // Fonction qui récupere l'input du clavier pour afficher le bon asset et faire bouger le player
  getAsset() {
    let direction;
    switch (this.props.keyCode) {
      case 37:
        direction = "link/linkLeft.png";
        break;

      case 38:
        direction = "link/linkBack.png";
        break;

      case 39:
        direction = "link/linkRight.png";
        break;

      case 40:
        direction = "link/linkFront.png";
        break;
      default:
        direction = "linkFront.png";
    }
    return direction;
  }

  render() {
    return (
      <div
        className="player"
        style={{
          top: `${this.props.y * 32}px`,
          left: `${this.props.x * 32}px`
        }}
      >
        <img src={this.getAsset()} alt={"Player"} />
      </div>
    );
  }
}

export default Player;
