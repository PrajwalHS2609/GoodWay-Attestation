import React from "react";
import "./AttestationBlore.css";
const AttestationBloreMain = (props) => {
  return (
    <div className="attestationBloreMainContainer">
      <div className="attestationBloreMainContent">
        <img src={props.mainImg} alt="" loading="lazy"/>
      </div>
      <div className="attestationBloreMainContent">
        <div className="attestationBloreMainHead">
          <h3> {props.mainHead}</h3>
        </div>
        <div className="attestationBloreMainPara">
          <p>{props.mainPara1}</p>
          <p>{props.mainPara2}</p>
        </div>
      </div>
    </div>
  );
};

export default AttestationBloreMain;
