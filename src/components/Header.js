import React from "react";
import image_2 from "../images/image_2.jpeg";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="image-container">
        <img src={image_2} alt="" />
      </div>
      <div className="navbar-container">
        <nav className="navbar">
          <ul className="navbar-list-container">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Me</li>
            <li className="nav-item">Skills</li>
            <li className="nav-item">Knowledge</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
