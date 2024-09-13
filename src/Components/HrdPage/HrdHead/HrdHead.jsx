import React from "react";
import "./HrdHead.css";
import mofaBanner from "./../../../vid&img/mofaBanner.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const HrdHead = () => {
  return (
    <div className="hrdHeadContainer">
      <div className="hrdHeadCover">
        <TypeWriter txt="State HRD and Home Department in  " />
      </div>
      <img src={mofaBanner} alt="" />
    </div>
  );
};

export default HrdHead;
