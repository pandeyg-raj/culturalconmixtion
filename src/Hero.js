import React from "react";
import "./App.css";
import Taj from "./Taj.png";
import chic from "./chic.png";

function Hero() {
  return (
    <div className="hero">
      <img className="chic" src={chic} alt="gro" />
      <p>
        Welcome everyone, this is cultural conmixtion, the union of two
        different cultures, Indian and Mexican. I want to show you the contrast
        between the life of the Asian continent and the American continent.
        <br></br>
        <b>Enjoy the time on this website </b>
        <br></br> <br></br>Are you interested in more? Follow me on social pages{" "}
        <br></br>
        ~stefania
      </p>
      <img className="taj" src={Taj} alt="gro" />
    </div>
  );
}
export default Hero;
