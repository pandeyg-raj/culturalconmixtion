import React from "react";
import "./App.css";
import Taj from "./Taj.png";
import chic from "./chic.png";

function Hero() {
  return (
    <div className="hero">
      <img className="chic" src={chic} alt="gro" />
      <p>Live the life with full of fun ~stefania</p>
      <img className="taj" src={Taj} alt="gro" />
    </div>
  );
}
export default Hero;
