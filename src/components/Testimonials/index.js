import React from "react";
import { MediumHeading } from "../UI/MediumHeading";
import { SmallHeading } from "../UI/SmallHeading";
import testimonial from "../../assets/images/testimonial-pic.jpg";
import testimonialsLeft from "../../assets/images/testimonials-01.jpg";
import testimonialsRight from "../../assets/images/testimonials-02.jpg";
import "./style.css";
import { Card } from "../UI/Card";

export const Testimonials = () => {
  return (
    <div className="container">
      <div data-aos="fade-down">
        <SmallHeading text="testimonials" />
        <MediumHeading text="What people say" />
      </div>
      <div
        className="flexRow wrap align-center justify-sb"
        style={{ padding: "50px 0" }}
      >
        <div data-aos="fade-right" className="testimonialImgContainer">
          <img src={testimonialsLeft} alt="" />
        </div>
        <Card data-aos="zoom-in" className="myCard">
          <div className="flexRow align-center">
            <div className="profileImgContainer">
              <img src={testimonial} alt="" />
            </div>
            <div className="mlr-10">
              <p className="primaryColor font-16">Uthaman Muthaiah</p>
              <p className="textColor font-14 bold-600">Software Developer </p>
            </div>
          </div>
          <p className="mtb-10 textGrey font-16">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </Card>
        <div data-aos="fade-left" className="testimonialImgContainer">
          <img src={testimonialsRight} alt="" />
        </div>
      </div>
      <Card className="m-auto contactCard">
        <p className="text-center font-12 mtb-10">
          Have any project in mind?{" "}
          <span className="primaryColor">Say Hello At</span>
        </p>
        <p className="text-center font-25">uthaman@gmail.com</p>
      </Card>
    </div>
  );
};
