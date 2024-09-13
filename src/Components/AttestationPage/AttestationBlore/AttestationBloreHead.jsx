import React from "react";
import "./AttestationBlore.css";
const AttestationBloreHead = (props) => {
  return (
    <div className="attBloreHeadContainer">
      <h1>
        <span>{props.span}</span> {props.head}
      </h1>
    </div>
  );
};

export default AttestationBloreHead;
