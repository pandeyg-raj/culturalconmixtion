import React from "react";
import "./App.css";
import { Icon } from "@iconify/react";
import facebookRect from "@iconify/icons-brandico/facebook-rect";
import youtubeOutlined from "@iconify/icons-ant-design/youtube-outlined";
import instagramFill from "@iconify/icons-akar-icons/instagram-fill";

function Social() {
  return (
    <div className="socials">
      <Icon className="yticon" icon={youtubeOutlined} />
      <Icon className="instaicon" icon={instagramFill} />
      <Icon className="fbicon" icon={facebookRect} />
    </div>
  );
}

export default Social;
