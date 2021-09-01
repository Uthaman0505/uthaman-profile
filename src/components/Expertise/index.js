import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { colors } from "../../style";
import { Card } from "../UI/Card";
import { MediumHeading } from "../UI/MediumHeading";
import { SmallHeading } from "../UI/SmallHeading";
import me from "../../assets/images/me-left.png";
import "./style.css";
import { SocialConnect } from "../UI/SocialConnect";

export const Expertise = () => {
  const percentage = 70;

  return (
    <div className="container" style={{ marginTop: "50px", padding: "50px 0" }}>
      <div data-aos="fade-right" className="rightImgMeContainer">
        <img src={me} alt="" />
        <SocialConnect style={{ position: "absolute", bottom: "-40px" }} />
      </div>
      <div>
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills" />
      </div>
      <Card
        style={{
          padding: "30px",
          width: "320px",
          margin: "100px auto",
          position: "relative",
          zIndex: 1,
        }}
        data-aos="flip-up"
      >
        <div className="flexRow align-center">
          <div style={{ width: "80px", height: "80px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: colors.primaryColor,
                pathColor: colors.primaryColor,
              })}
            />
          </div>
          <h2 className="textColor mlr-10">Development</h2>
        </div>
        <p className="textGrey mtb-10 font-12">
          JavaScript is one of the greatest programming language
        </p>
      </Card>
      <div></div>
    </div>
  );
};
