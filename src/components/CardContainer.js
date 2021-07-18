import React from "react";

export const CardContainer = ({ left_card_content, right_card_content }) => {
  return (
    <div className="card-container">
      <div className="first-card-container">
        <div className="left-card-content">{left_card_content}</div>
      </div>
      <div className="second-card-container">
        <div className="right-card-content">{right_card_content}</div>
      </div>
    </div>
  );
};
