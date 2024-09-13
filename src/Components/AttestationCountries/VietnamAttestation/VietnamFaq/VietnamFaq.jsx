import React from "react";
import VietnamFaqMain from "./VietnamFaqMain";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const VietnamFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Vietnam Attestation in Bangalore - Goodway Attestation" />
        <VietnamFaqMain />
      </div>
    </div>
  );
};

export default VietnamFaq;
