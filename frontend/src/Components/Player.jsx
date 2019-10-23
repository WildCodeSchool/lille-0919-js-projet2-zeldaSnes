import React from "react";
import "./Player.css";

// Display the Player on the Map and get the movment from Map component

class Player extends React.Component {
  //  Method which get inputs from ComponentDidMount (Game component) and send the correct asset to do on the Player
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
