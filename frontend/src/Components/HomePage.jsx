import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <Title />
      <div className="playButton">
        <Link exact to="/GamePage">
          Play
        </Link>
      </div>
      <div className="aboutTimeline">
        <Link to="/About">About</Link>

        <Link to="/Timeline">Timeline</Link>
      </div>
    </div>
  );
}

export default HomePage;
