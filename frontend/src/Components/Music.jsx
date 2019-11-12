import React from "react";
import "./Music.css";

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicIcon: false
    };
  }

  onClickFunction() {
    this.props.toggleMusic();
    this.setState({ musicIcon: !this.state.musicIcon });
  }

  render() {
    return (
      <div className="music">
        <button
          onClick={() => {
            this.onClickFunction();
          }}
        >
          <i
            className={
              this.state.musicIcon ? "fas fa-volume-mute" : "fas fa-volume-up"
            }
          ></i>
        </button>
        <audio
          autoPlay
          muted={this.state.musicIcon}
          loop
          src="mainMusic.mp3"
        ></audio>
      </div>
    );
  }
}

export default Music;
