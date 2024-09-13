import React from 'react'
import UsaFaqMain from './UsaFaqMain'
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const UsaFaq = () => {
  return (
    <div className="faqContainer">
    <div className="faqContent">
      <FaqHead heading="FAQs for USA Apostille in Bangalore - Goodway Attestation" />
      <UsaFaqMain />
    </div>
  </div>
  )
}

export default UsaFaq
