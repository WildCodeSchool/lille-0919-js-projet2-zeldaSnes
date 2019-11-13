import React from "react";
import spacebar from "../img/spacebar.svg";
import arrows from "../img/arrows.svg";
import p_key from "../img/p_key.svg";
import Music from "./Music";
import "./ControlsTab.css";

class ControlsTab extends React.Component {
  render() {
    return (
      <div className="ControlsTab">
        <div className="ControlsBg">
          <img src={spacebar} alt="" />
          <p className="ControlsTabTitle">MENU</p>
          <img src={arrows} alt="" />
          <p className="ControlsTabTitle">MOOVES</p>

          <div className="SingleKey">
            <img src={p_key} alt="" />
            <p>Pause</p>
          </div>
          <Music toggleMusic={this.props.toggleMusic} />
        </div>
      </div>
    );
  }
}

export default ControlsTab;
