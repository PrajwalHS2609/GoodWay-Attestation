import React from "react";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
import BahrainFaqMain from "./BahrainFaqMain";
const BahrainFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Bahrain Attestation in Bangalore - Goodway Attestation" />
        <BahrainFaqMain />
      </div>
    </div>
  );
};

export default BahrainFaq;
