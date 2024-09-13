import React from 'react'
import FaqHead from '../../../HomePage/Faq/FaqHead'
import "./../../../HomePage/Faq/Faq.css";
import LithuaniaFaqMain from './LithuaniaFaqMain';

const LithuaniaFaq = () => {
  return (
    <div className="faqContainer">
    <div className="faqContent">
      <FaqHead heading="FAQs for Lithuania Apostille in Bangalore - Goodway Attestation" />
      <LithuaniaFaqMain />
    </div>
  </div>
  )
}

export default LithuaniaFaq
