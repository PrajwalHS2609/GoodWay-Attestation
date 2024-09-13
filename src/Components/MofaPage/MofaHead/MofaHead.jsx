import React from "react";
import "./MofaHead.css";
import mofaBanner from "./../../../vid&img/mofaBanner.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";
const MofaHead = () => {
  return (
      <div className="mofaHeadContainer">
        <div className="mofaHeadCover">
          <TypeWriter txt="MOFA Attestation Service in "/>
        </div>
        <img src={mofaBanner} alt="mofaBanner" />
      </div>
  );
};

export default MofaHead;
