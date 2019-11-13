import React from "react";
import Game from "./Game";
import Title from "./Title";
import LeftDiv from "./LeftDiv";
import ControlsTab from "./ControlsTab";
import "./GamePage.css";

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canMusic: true
    };
  }

  playRuby = () => {
    if (this.state.canMusic) {
      const pickupRuby = new Audio("sound/getRuby.mp3");
      pickupRuby.play();
    }
  };

  playBounce = () => {
    if (this.state.canMusic) {
      const bounce = new Audio("sound/Bounce.mp3");
      bounce.play();
    }
  };

  playSword = () => {
    if (this.state.canMusic) {
      const pickupSword = new Audio("sound/getSword.mp3");
      pickupSword.play();
    }
  };

  playPauseOpen = () => {
    if (this.state.canMusic) {
      const pauseOpen = new Audio("sound/PauseMenuOpen.mp3");
      pauseOpen.play();
    }
  };

  playPauseClose = () => {
    if (this.state.canMusic) {
      const pauseClose = new Audio("sound/PauseMenuClose.mp3");
      pauseClose.play();
    }
  };

  playAttack = () => {
    if (this.state.canMusic) {
      const playAttack = new Audio("sound/LinkAttackSound.mp3");
      playAttack.play();
    }
  };

  toggleMusic = () => {
    this.setState({ canMusic: !this.state.canMusic });
  };

  render() {
    return (
      <div className="GamePage">
        <Title />
        <div className="Container">
          <LeftDiv />
          <Game
            playBounce={this.playBounce}
            playRuby={this.playRuby}
            playSword={this.playSword}
            playPauseOpen={this.playPauseOpen}
            playPauseClose={this.playPauseClose}
            playAttack={this.playAttack}
          />
          <ControlsTab toggleMusic={this.toggleMusic} />
        </div>
      </div>
    );
  }
}

export default GamePage;
