import React from "react";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
import PhilippinesFaqMain from "./PhilippinesFaqMain";
const PhilippinesFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Qatar Attestation in Bangalore - Goodway Attestation" />
        <PhilippinesFaqMain />
      </div>
    </div>
  );
};

export default PhilippinesFaq;
