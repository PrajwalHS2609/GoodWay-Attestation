import React, { useEffect } from "react";
import "./Benefits.css";
import "aos/dist/aos.css";
import AOS from "aos";
const BenefitsCard = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="benefitsCardContainer" data-aos="fade-right">
      <div className="benefitsCardWrapper">
        <div className="benefitsCardIcon">
          <img src={props.img} alt="" />
        </div>
        <div className="benefitsTxt">
          <p>{props.txt}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
