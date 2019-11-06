import React from "react";
import "./Music.css";

class Music extends React.Component {
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
      <div className="music">
        <button
          onClick={event => {
            this.toggleMusic();
          }}
        >
          <i
            className={
              this.state.canMusic ? "fas fa-volume-up" : "fas fa-volume-mute"
            }
          ></i>
        </button>
        <audio
          autoPlay
          muted={this.state.canMusic}
          loop
          src="mainMusic.mp3"
        ></audio>
      </div>
    );
  }
}

export default Music;
