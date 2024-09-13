import React from "react";
import "./AboutUs.css";
import price from "./../../../vid&img/About Us - Features/24x7 Customer Support.png";
import efficiency from "./../../../vid&img/About Us - Features/Efficiency.png";
import expertise from "./../../../vid&img/About Us - Features/Expertise.png";
import govt from "./../../../vid&img/About Us - Features/Government Approved.png";
const AboutUsIcons = () => {
  return (
    <div className="aboutUsIcons">
      <div className="aboutUsImgContent">
        <img src={price} alt="" /> <p>Competitive Price</p>
      </div>
      <div className="aboutUsImgContent">
        <img src={efficiency} alt="" /> <p>ISO Certified </p>
      </div>
      <div className="aboutUsImgContent">
        <img src={expertise} alt="" /> <p>25000+ Customers</p>
      </div>
      <div className="aboutUsImgContent">
        <img src={govt} alt="" /> <p>16 Years of Experience</p>
      </div>
    </div>
  );
};

export default AboutUsIcons;
