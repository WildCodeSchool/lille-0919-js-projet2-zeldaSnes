import React from "react";
import spacebar from "../img/spacebar.svg";
import arrows from "../img/arrows.svg";
import Music from "./Music";
import "./ControlsTab.css";

class ControlsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canMusic: false
    };
  }

  toggleMusic() {
    this.setState({ canMusic: !this.state.canMusic });
  }

  render() {
    return (
      <div className="ControlsTab">
        <div className="ControlsBg">
          <img src={spacebar} alt="" />
          <p>MENU</p>
          <img src={arrows} alt="" />
          <p>MOOVES</p>
          <button
            onClick={event => {
              this.toggleMusic();
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
