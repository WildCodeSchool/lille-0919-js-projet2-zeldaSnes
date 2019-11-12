import React from "react";
import WeaponSlot from "./WeaponSlot";
import RubySlot from "./RubySlot";
import HealthBar from "./HealthBar";
import "./GameTopBar.css";

class GameTopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gameTopBar">
        <HealthBar HP={this.props.HP} />

        <WeaponSlot haveSword={this.props.haveSword} />

        <RubySlot rubyCounter={this.props.rubyCounter} />
      </div>
    );
  }
}

export default GameTopBar;
