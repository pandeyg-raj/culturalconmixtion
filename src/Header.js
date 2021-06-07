import React from "react";
import "./App.css";
import Group1 from "./Group1.png";
import favpng from "./favpng.png";
import Bulbs from "./Bulbs";
import Nav from "./Nav";

function Header() {
  return (
    <div className="headercontainer">
      <img className="logo" src={Group1} alt="gro" />
      <img className="topimage" src={favpng} alt="gro" />
      <Bulbs className="bulbs" />
      <Nav />
    </div>
  );
}
export default Header;
