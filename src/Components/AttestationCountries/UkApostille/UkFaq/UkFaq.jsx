import React from "react";
import UkFaqMain from "./UkFaqMain";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const UkFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for UK Apostille in Bangalore - Goodway Attestation" />
        <UkFaqMain />
      </div>
    </div>
  );
};

export default UkFaq;
