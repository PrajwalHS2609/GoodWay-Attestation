import React from "react";
import GermanyFaqMain from "./GermanyFaqMain";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const GermanyFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Germany Apostille in Bangalore - Goodway Attestation" />
        <GermanyFaqMain />
      </div>
    </div>
  );
};

export default GermanyFaq;
