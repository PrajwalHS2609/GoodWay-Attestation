import React from "react";
import "./Faq.css";
const FaqHead = (props) => {
  return (
    <div className="faqHeadContainer">
      <h2>{props.heading}</h2>
    </div>
  );
};

export default FaqHead;
