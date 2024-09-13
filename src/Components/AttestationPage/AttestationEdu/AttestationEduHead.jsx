import React from "react";
import "./AttestationEdu.css";
const AttestationEduHead = (props) => {
  return (
    <div className="atteEduHeadContainer">
      <h2>Educational Certificate <span>{props.head}</span> in Bangalore</h2>
    </div>
  );
};

export default AttestationEduHead;
