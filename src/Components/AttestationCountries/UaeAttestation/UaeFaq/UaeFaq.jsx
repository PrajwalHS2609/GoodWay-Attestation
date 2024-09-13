import React from "react";
import FaqMain from "./FaqMain";
import "./../../../HomePage/Faq/Faq.css";
import FaqHead from "../../../HomePage/Faq/FaqHead";
const UaeFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for UAE Attestation in Bangalore - Goodway Attestation" />
        <FaqMain />
      </div>
    </div>
  );
};

export default UaeFaq;
