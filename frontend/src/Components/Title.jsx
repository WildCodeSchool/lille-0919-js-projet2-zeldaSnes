import React from "react";
import ZeldaLogo from "../img/ZeldaLogo.svg";
import "./Title.css";

function Title() {
  return (
    <h1>
      <img alt="logo" src={ZeldaLogo} />
    </h1>
  );
}

export default Title;
