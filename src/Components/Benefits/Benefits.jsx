import React, { useEffect } from "react";
import "./Benefits.css";
import BenefitsHead from "./BenefitsHead";
import BenefitsMain from "./BenefitsMain";
import "aos/dist/aos.css";
import AOS from "aos";
const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="benefitsContainer" data-aos="fade-right">
      <div className="benefitsContent" id="benefitsContent1">
        <BenefitsHead />
      </div>
      <div className="benefitsContent" id="benefitsContent2">
        <BenefitsMain />
      </div>
    </div>
  );
};

export default Benefits;
