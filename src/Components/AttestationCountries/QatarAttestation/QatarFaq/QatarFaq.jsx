import React from "react";
import QatarFaqMain from "./QatarFaqMain";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";

const QatarFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Qatar Attestation in Bangalore - Goodway Attestation" />
        <QatarFaqMain />
      </div>
    </div>
  );
};

export default QatarFaq;
