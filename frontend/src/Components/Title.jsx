import React from "react";
import zeldaLogo from "../img/zeldaLogo.svg";
import { Link } from "react-router-dom";
import "./Title.css";

function Title() {
  return (
    <Link exact to="/">
      <img className="titleImg" alt="logo" src={zeldaLogo} />
    </Link>
  );
}

export default Title;
