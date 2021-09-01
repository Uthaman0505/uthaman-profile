import React from "react";
import { MediumHeading } from "../UI/MediumHeading";
import { SmallHeading } from "../UI/SmallHeading";
import me from "../../assets/images/me-left.png";
import Button from "../UI/Button";
import "./style.css";
import { Tile } from "../UI/Tile";

export const Qualification = () => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualification" />
      <MediumHeading text="My Education" />
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right">
          <img src={me} alt="" />
          <div
            style={{
              background: "#fff",
              padding: "10px 1px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button label="Download CV" inverse />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <Tile title="MMU" mediumTitle="Engineering" desc="something" />
          <Tile title="MMU" mediumTitle="Engineering" desc="something" />
          <Tile title="MMU" mediumTitle="Engineering" desc="something" />
        </div>
      </div>
    </div>
  );
};
