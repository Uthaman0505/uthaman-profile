import React from "react";
import "./style.css";

export const Card = ({ className = null, style, children, ...res }) => {
  const _class = className ? `card ${className}` : `card`;
  return (
    <div className={_class} style={style} {...res}>
      {children}
    </div>
  );
};
