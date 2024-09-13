import React from "react";
import "./WhyBlock.css";

const WhyBlockCard = (props) => {
  return (
    <div className="whyBlockCardContainer">
      <div className="whyBlockCardContent1">
        <img src={props.img} alt="" />
      </div>
      <div className="whyBlockCardContent2">
        <h3>{props.txt}</h3>
      </div>
    </div>
  );
};

export default WhyBlockCard;
