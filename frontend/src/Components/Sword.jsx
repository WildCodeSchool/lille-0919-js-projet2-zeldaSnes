import React from "react";
import "./Sword.css";
import { tilesMap } from "./tilesMap";

class Sword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetHeight: 32,
      assetWidth: 32
    };
  }

  render() {
    if (this.props.swordMap === tilesMap) {
      return (
        <div>
          <div
            className={this.props.swordClass}
            style={{
              top: `${this.props.ySword * this.state.assetHeight}px`,
              left: `${this.props.xSword * this.state.assetWidth}px`
            }}
          ></div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default Sword;
