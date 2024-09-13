import React from "react";
import TaiwanFaqMain from "./TaiwanFaqMain";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const TaiwanFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Taiwan Attestation in Bangalore - Goodway Attestation" />
        <TaiwanFaqMain />
      </div>
    </div>
  );
};

export default TaiwanFaq;
