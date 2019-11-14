import React from "react";
import Title from "./Title";
import { devTeam } from "./devTeam.js";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="aboutPage">
      <Title />
      <div className="aboutPageContainer">
        <div className="customerDiv">
          <div className="devCard">
            <h2>Mr. Loic Brassart</h2>
            <p>Mr. the Customer</p>
          </div>
        </div>
        <div className="devDiv">
          {devTeam.map((dev, devIndex) => {
            return (
              <div className="devCard" key={devIndex}>
                <h2>{dev.name}</h2>
                <p>{dev.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
