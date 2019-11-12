import React from "react";
import "./Sword.css";

class Sword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetHeight: 32,
      assetWidth: 32
    };
  }

  render() {
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
  }
}
export default Sword;
