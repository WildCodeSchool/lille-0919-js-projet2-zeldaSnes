import React from "react";
import "./PNJ.css";

class PNJ extends React.Component {
  getAsset() {
    let direction;
    switch (this.props.PNJdirection) {
      case "g":
        direction = "PNJ/enemies-left.png";
        break;

      case "h":
        direction = "PNJ/enemies-top.png";
        break;

      case "d":
        direction = "PNJ/enemies-right.png";
        break;

      case "b":
        direction = "PNJ/enemies-bottom.png";
        break;
      default:
        direction = "PNJ/enemies-top.png";
    }
    return direction;
  }

  render() {
    return (
      <div
        className="PNJ"
        style={{
          display: this.props.PNJIsAlive ? "block" : "none",
          top: `${this.props.yPNJ * 32}px`,
          left: `${this.props.xPNJ * 32}px`
        }}
      >
        <img src={this.getAsset()} alt={"PNJ"} />
      </div>
    );
  }
}

export default PNJ;
