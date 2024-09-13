import React from 'react'
import OmanFaqMain from './OmanFaqMain'
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const OmanFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for Oman Apostille in Bangalore - Goodway Attestation" />
        <OmanFaqMain />
      </div>
    </div>
  )
}

export default OmanFaq
