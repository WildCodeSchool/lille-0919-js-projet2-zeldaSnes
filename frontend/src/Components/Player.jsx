import React from "react";
import "./Player.css";

// Display the Player on the Map and get the movment from Map component

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetHeight: 32,
      assetWidth: 32
    };
  }
  //  Method which get inputs from ComponentDidMount (Game component) and send the correct asset to do on the Player
  getAsset() {
    let direction;
    switch (this.props.keyName) {
      case "ArrowLeft":
        direction = "link/linkLeft.png";
        break;

      case "ArrowUp":
        direction = "link/linkBack.png";
        break;

      case "ArrowRight":
        direction = "link/linkRight.png";
        break;

      case "ArrowDown":
        direction = "link/linkFront.png";
        break;
      default:
        direction = "link/linkFront.png";
    }
    return direction;
  }

  render() {
    return (
      <div
        className="player"
        style={{
          top: `${this.props.y * this.state.assetHeight}px`,
          left: `${this.props.x * this.state.assetWidth}px`,
          transition: `${this.props.transition}s`
        }}
      >
        <img src={this.getAsset()} alt={"Player"} />
      </div>
    );
  }
}

export default Player;
