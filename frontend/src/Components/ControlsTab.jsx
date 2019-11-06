import React from "react";
import spacebar from "../img/spacebar.svg";
import arrows from "../img/arrows.svg";
import Music from "./Music";
import "./ControlsTab.css";

class ControlsTab extends React.Component {
  render() {
    return (
      <div className="ControlsTab">
        <div className="ControlsBg">
          <img src={spacebar} alt="" />
          <p>MENU</p>
          <img src={arrows} alt="" />
          <p>MOOVES</p>
          <Music />
        </div>
      </div>
    );
  }
}

export default ControlsTab;
