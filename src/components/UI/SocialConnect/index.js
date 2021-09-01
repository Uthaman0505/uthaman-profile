import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./style.css";

export const SocialConnect = ({ style }) => {
  return (
    <div style={style} className="socialConnect">
      <span className="textColor font-12">Follow me on: </span>
      <a className="socialLink" href="www.goole.com">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="www.goole.com">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="www.goole.com">
        <img src={socialIcons.youtube} alt="" />
      </a>
      <a className="socialLink" href="www.goole.com">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};
