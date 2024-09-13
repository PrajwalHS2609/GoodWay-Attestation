import React from "react";
import "./MeaHead.css";
import mofaBanner from "./../../../vid&img/mofaBanner.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const MeaHead = () => {
  return (
    <div className="meaHeadContainer">
      <div className="meaHeadCover">
        <TypeWriter txt="MEA Attestation Service in " />
      </div>
      <img src={mofaBanner} alt="mofaBanner" loading="lazy"/>
    </div>
  );
};

export default MeaHead;
