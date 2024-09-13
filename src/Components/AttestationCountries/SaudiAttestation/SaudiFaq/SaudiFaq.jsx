import React from "react";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
import SaudiFaqMain from "./SaudiFaqMain";
const SaudiFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Saudi Attestation in Bangalore - Goodway Attestation" />
        <SaudiFaqMain />
      </div>
    </div>
  );
};

export default SaudiFaq;
