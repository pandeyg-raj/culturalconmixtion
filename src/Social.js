import React from "react";
import "./App.css";
import { Icon } from "@iconify/react";
import facebookRect from "@iconify/icons-brandico/facebook-rect";
import youtubeOutlined from "@iconify/icons-ant-design/youtube-outlined";
import instagramFill from "@iconify/icons-akar-icons/instagram-fill";

function Social() {
  return (
    <div className="socials">
      <a
        href="https://youtube.com/channel/UCxH2yi2iDwDQ1oW8gAbCeEw"
        target="_blank"
        title="culural conmixtion"
      >
        <Icon className="yticon" icon={youtubeOutlined} />
      </a>
      <a
        href="https://www.instagram.com/culturalconmixtion"
        target="_blank"
        title="culural conmixtion"
      >
        <Icon className="instaicon" icon={instagramFill} />
      </a>
      <a 
        href="https://www.facebook.com/CulturalConmixtion/" 
        target="_blank" title="culural conmixtion">
        <Icon className="fbicon" icon={facebookRect} />
      </a>
    </div>
  );
}

export default Social;
