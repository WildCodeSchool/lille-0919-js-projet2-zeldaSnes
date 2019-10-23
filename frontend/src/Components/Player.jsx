import React from "react";
import "./Player.css";

// Affiche le player et calcul le mouvement a faire provenant de Map

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "link/linkFront.png"
    };
  }

  // Fonction qui récupere l'input du clavier pour afficher le bon asset et faire bouger le player

  getAsset(event) {
    let newKeyCode = event.keyCode;
    switch (newKeyCode) {
      case 37:
        this.setState({ direction: "link/linkLeft.png" });
        break;

      case 38:
        this.setState({ direction: "link/linkBack.png" });
        break;

      case 39:
        this.setState({ direction: "link/link-right-1-step.png" });
        setTimeout(() => {
          this.setState({ direction: "link/link-right-2-step.png" });
        }, 40);
        setTimeout(() => {
          this.setState({ direction: "link/link-right-3-step.png" });
        }, 40);
        setTimeout(() => {
          this.setState({ direction: "link/linkRight.png" });
        }, 40);
        break;

      case 40:
        this.setState({ direction: "link/linkFront.png" });
        break;
      default:
        this.setState({ direction: "linkFront.png" });
    }
  }
  componentDidMount() {
    window.onkeydown = event => {
      this.getAsset(event);
    };
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
        <img src={this.state.direction} alt={"Player"} />
      </div>
    );
  }
}

export default Player;
