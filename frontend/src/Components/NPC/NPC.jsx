import React from "react";
import "./NPC.css";

class NPC extends React.Component {
  getAsset() {
    let direction;
    switch (this.props.NPCdirection) {
      case "g":
        direction = "NPC/enemies-left.png";
        break;

      case "h":
        direction = "NPC/enemies-top.png";
        break;

      case "d":
        direction = "NPC/enemies-right.png";
        break;

      case "b":
        direction = "NPC/enemies-bottom.png";
        break;
      default:
        direction = "NPC/enemies-top.png";
    }
    return direction;
  }

  render() {
    return (
      <div
        className="NPC"
        style={{
          display: this.props.NPCIsAlive ? "block" : "none",
          top: `${this.props.yNPC * 32}px`,
          left: `${this.props.xNPC * 32}px`
        }}
      >
        <img src={this.getAsset()} alt={"NPC"} />
      </div>
    );
  }
}

export default NPC;
