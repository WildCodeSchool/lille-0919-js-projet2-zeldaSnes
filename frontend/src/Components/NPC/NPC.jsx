import React from "react";
import "./NPC.css";

class NPC extends React.Component {
  getAsset() {
    let direction;
    switch (this.props.NPCdirection) {
      case "left":
        direction = "NPC/enemies-left.png";
        break;
      case "up":
        direction = "NPC/enemies-top.png";
        break;
      case "right":
        direction = "NPC/enemies-right.png";
        break;
      case "down":
        direction = "NPC/enemies-bottom.png";
        break;
      default:
        direction = "NPC/enemies-top.png";
    }
    return direction;
  }

  render() {
    if (this.props.mapNumber === this.props.NPCMap) {
      return (
        <div
          className="NPC"
          style={{
            top: `${this.props.yNPC * 32}px`,
            left: `${this.props.xNPC * 32}px`
          }}
        >
          <img src={this.getAsset()} alt={"NPC"} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default NPC;
