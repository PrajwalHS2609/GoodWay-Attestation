import React from "react";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
import ChinaFaqMain from "./ChinaFaqMain";
const ChinaFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for China Attestation in Bangalore - Goodway Attestation" />
        <ChinaFaqMain />
      </div>
    </div>
  );
};

export default ChinaFaq;
