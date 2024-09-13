import React from 'react'
import FranceFaqMain from './FranceFaqMain'
import FaqHead from "../../../HomePage/Faq/FaqHead";
import "./../../../HomePage/Faq/Faq.css";
const FranceFaq = () => {
  return (
    <div className="faqContainer">
      <div className="faqContent">
        <FaqHead heading="FAQs for France Apostille in Bangalore - Goodway Attestation" />
        <FranceFaqMain />
      </div>
    </div>
  )
}

export default FranceFaq
