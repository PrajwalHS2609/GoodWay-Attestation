import React, { useEffect } from "react";
import "./AboutUs.css";
import AboutUsMain from "./AboutUsMain";
import AboutUsHead from "./AboutUsHead";
import about from "./../../../vid&img/Attributes Banner/aboutUs.png";
import AboutUsIcons from "./AboutUsIcons";
import "aos/dist/aos.css";
import AOS from "aos";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="aboutUsContainer " data-aos="fade-up">
      <AboutUsHead />
      <div className="aboutUsWrapper">
        <div className="aboutUsContent">
          <AboutUsMain />
          <AboutUsIcons />
        </div>
        <div className="aboutUsContent">
          <img src={about} alt="aboutImg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
