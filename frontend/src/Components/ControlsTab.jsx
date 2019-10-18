import React from "react";
import Spacebar from "../img/Spacebar.svg";
import Arrows from "../img/Arrows.svg";
import "./ControlsTab.css";

function ControlsTab() {
  return (
    <div className="ControlsTab">
      <div className="ControlsBg">
        <img src={Spacebar} alt="" />
        <p>MENU</p>
        <img src={Arrows} alt="" />
        <p>MOOVES</p>
        <button>
          <p>Music</p>
        </button>
      </div>
    </div>
  );
}

export default ControlsTab;
