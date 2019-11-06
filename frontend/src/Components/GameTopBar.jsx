import React from "react";
import WeaponSlot from "./WeaponSlot";
import RubySlot from "./RubySlot";
import HealthBar from "./HealthBar";
import "./GameTopBar.css";

class GameTopBar extends React.Component {
  render() {
    return (
      <div className="gameTopBar">
        <HealthBar />

        <WeaponSlot />

        <RubySlot rubyCounter={this.props.rubyCounter} />
      </div>
    );
  }
}

export default GameTopBar;
