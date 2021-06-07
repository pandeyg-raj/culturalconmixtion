import React from "react";
import "./App.css";
import Group1 from "./Group1.png";
import favpng from "./favpng.png";
import Bulbs from "./Bulbs";
import Nav from "./Nav";
import { Icon, InlineIcon } from "@iconify/react";
import facebookRect from "@iconify/icons-brandico/facebook-rect";
import youtubeOutlined from "@iconify/icons-ant-design/youtube-outlined";
import instagramFill from "@iconify/icons-akar-icons/instagram-fill";

function Header() {
  return (
    <div className="headercontainer">
      <img className="logo" src={Group1} alt="gro" />
      <img className="topimage" src={favpng} alt="gro" />
      <Bulbs className="bulbs" />
      <div className="socials">
        <Icon className="yticon" icon={youtubeOutlined} />
        <Icon className="instaicon" icon={instagramFill} />
        <Icon className="fbicon" icon={facebookRect} />
      </div>
      <Nav />
    </div>
  );
}
export default Header;
