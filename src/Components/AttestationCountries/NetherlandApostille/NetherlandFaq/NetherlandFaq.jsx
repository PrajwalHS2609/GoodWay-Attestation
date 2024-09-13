import React from "react";
import NetherlandFaqMain from "./NetherlandFaqMain";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const NetherlandFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Netherland Apostille in Bangalore - Goodway Attestation" />
        <NetherlandFaqMain />
      </div>
    </div>
  );
};

export default NetherlandFaq;
