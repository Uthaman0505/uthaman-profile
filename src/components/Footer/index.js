import React from "react";
import { SocialConnect } from "../UI/SocialConnect";
import conversation from "../../assets/images/conversation.png";
import "./style.css";

export const Footer = () => {
  return (
    <div className="container">
      <div className="flexRow flexCol justify-sb align-center" style={{ margin: "50px 0" }}>
        <div className="mtb-10">
          <SocialConnect />
        </div>
        <div className="footerMenus mtb-10">
          <nav>
            <a href="www.google.com">Home</a>
            <a href="www.google.com">About</a>
            <a href="www.google.com">Portfolios</a>
            <a href="www.google.com">Blog</a>
            <a href="www.google.com">Contact</a>
          </nav>
        </div>
        <div className="conversationContainer primaryBgColor mtb-10">
          <img src={conversation} alt="" />
        </div>
      </div>
    </div>
  );
};
