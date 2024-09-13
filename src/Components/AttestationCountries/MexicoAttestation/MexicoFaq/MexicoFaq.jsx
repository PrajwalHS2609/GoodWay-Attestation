import React from "react";
import MexicoFaqMain from "./MexicoFaqMain";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const MexicoFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Mexico Apostille in Bangalore - Goodway Attestation" />
        <MexicoFaqMain />
      </div>
    </div>
  );
};

export default MexicoFaq;
