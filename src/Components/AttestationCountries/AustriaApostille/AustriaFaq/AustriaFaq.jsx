import React from 'react'
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
import AustriaFaqMain from './AustriaFaqMain';
const AustriaFaq = () => {
  return (
    <div className="faqContainer">
    <div className="faqContent">
      <FaqHead heading="FAQs for Austria Apostille in Bangalore - Goodway Attestation" />
      <AustriaFaqMain />
    </div>
  </div>
  )
}

export default AustriaFaq
