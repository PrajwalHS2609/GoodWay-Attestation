import React from "react";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
import AustraliaFaqMain from './AustraliaFaqMain';

const AustraliaFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Australia Apostille in Bangalore - Goodway Attestation" />
        <AustraliaFaqMain />
      </div>
    </div>
  );
};

export default AustraliaFaq;
