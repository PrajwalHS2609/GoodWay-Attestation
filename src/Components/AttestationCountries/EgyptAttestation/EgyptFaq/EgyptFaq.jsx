import React from "react";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
import EgyptFaqMain from "./EgyptFaqMain";
const EgyptFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Qatar Attestation in Bangalore - Goodway Attestation" />
        <EgyptFaqMain />
      </div>
    </div>
  );
};

export default EgyptFaq;
