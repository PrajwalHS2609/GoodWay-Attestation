import React from "react";
import MalaysiaFaqMain from "./MalaysiaFaqMain";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";

const MalaysiaFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Malaysia  Attestation in Bangalore - Goodway Attestation" />
        <MalaysiaFaqMain />
      </div>
    </div>
  );
};

export default MalaysiaFaq;
