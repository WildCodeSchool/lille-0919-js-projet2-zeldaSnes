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
          <p>Music</p>
        </button>
        <audio autoPlay muted="false" loop src="mainMusic.mp3"></audio>
      </div>
    );
  }
}

export default Music;
