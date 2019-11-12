import React from "react";
import Title from "./Title";
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
          <div className="devCard">
            <h2>Mr. Theo Boschetti</h2>
            <p>Development team</p>
          </div>
          <div className="devCard">
            <h2>Mr. Bastien Saulnier</h2>
            <p>Development team</p>
          </div>
          <div className="devCard">
            <h2>Mr. Gautier Mille</h2>
            <p>Development team</p>
          </div>
          <div className="devCard">
            <h2>Mr. David Derancourt</h2>
            <p>Development team</p>
          </div>
          <div className="devCard">
            <h2>Ms. Pauline Roche</h2>
            <p>Development team</p>
          </div>
          <div className="devCard">
            <h2>Mr. Arnaud Demaret</h2>
            <p>Development team</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
