import React from "react";
import Spacebar from "../img/Spacebar.svg";
import Arrows from "../img/Arrows.svg";
import Music from "./Music";
import "./ControlsTab.css";

class ControlsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canMusic: false
    };
  }

  getMusic() {
    this.setState({ canMusic: !this.state.canMusic });
  }

  render() {
    return (
      <div className="ControlsTab">
        <div className="ControlsBg">
          <img src={Spacebar} alt="" />
          <p>MENU</p>
          <img src={Arrows} alt="" />
          <p>MOOVES</p>
          <button
            onClick={event => {
              this.getMusic();
            }}
          >
            <Music canMusic={this.state.canMusic} />
            <p>Music</p>
          </button>
        </div>
      </div>
    );
  }
}

export default ControlsTab;
