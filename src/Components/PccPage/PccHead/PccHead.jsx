import React from "react";
import Pcc from "./../../../vid&img/mofa.png";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";
import "./PccHead.css";
const PccHead = () => {
  return (
    <div className="pccHeadContainer">
      <div className="pccHeadCover">
        <TypeWriter txt="PCC Attestation Service in " />
      </div>
      <img src={Pcc} alt="pcc" loading="lazy"/>
    </div>
  );
};

export default PccHead;
