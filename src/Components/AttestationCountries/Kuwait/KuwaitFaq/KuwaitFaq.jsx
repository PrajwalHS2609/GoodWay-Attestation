import React from "react";
import "./../../../HomePage/Faq/Faq.css";
import FaqHead from "../../../HomePage/Faq/FaqHead";
import KuwaitMainFaq from "./KuwaitMainFaq";
const KuwaitFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Kuwait Attestation in Bangalore - Goodway Attestation" />
        <KuwaitMainFaq />
      </div>
    </div>
  );
};

export default KuwaitFaq;
