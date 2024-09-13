import React from "react";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
import ItalyFaqMain from "./ItalyFaqMain";
const ItalyFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Italy Apostille in Bangalore - Goodway Attestation" />
        <ItalyFaqMain />
      </div>
    </div>
  );
};

export default ItalyFaq;
