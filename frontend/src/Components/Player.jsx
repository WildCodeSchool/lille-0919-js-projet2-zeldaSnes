import React from "react";
import "./Player.css";

// Affiche le player et calcul le mouvement a faire provenant de Map

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: "link/linkFront-Step4.png"
    };
  }

  assetAnimation(direction) {
    for (let i = 1, delay = 0; i <= 4; i++, delay = delay + 30) {
      setTimeout(() => {
        this.setState({ asset: `link/link${direction}-Step${i}.png` });
        console.log(this.state.asset);
      }, delay);
    }
  }
  // Fonction qui récupere l'input du clavier pour afficher le bon asset et faire bouger le player
  getAsset() {
    let newKeyCode = this.props.keyCode;
    if (this.props.lastDirection === newKeyCode) {
      switch (newKeyCode) {
        case 37:
          this.assetAnimation("Left");
          console.log("bip");

          break;

        case 38:
          this.assetAnimation("Back");
          break;

        case 39:
          this.assetAnimation("Right");
          break;

        case 40:
          this.assetAnimation("Front");
          break;
        default:
          this.setState({ asset: "link/linkFront-Step4.png" });
      }
    } else {
      switch (this.props.lastDirection) {
        case 37:
          console.log("bip2");

          this.setState({ asset: "link/linkLeft-Step4.png" });
          break;

        case 38:
          this.setState({ asset: "link/linkBack-Step4.png" });
          break;

        case 39:
          this.setState({ asset: "link/linkRight-Step4.png" });
          break;

        case 40:
          this.setState({ asset: "link/linkFront-Step4.png" });
          break;
        default:
          this.setState({ asset: "link/linkFront-Step4.png" });
          break;
      }
    }
  }

  componentWillReceiveProps() {
    this.getAsset();
  }

  render() {
    //this.getAsset();
    return (
      <div
        className="player"
        style={{
          top: `${this.props.y * 32}px`,
          left: `${this.props.x * 32}px`,
          transition: "all 300ms"
        }}
      >
        <img src={this.state.asset} alt={"Player"} />
      </div>
    );
  }
}
export default Player;
