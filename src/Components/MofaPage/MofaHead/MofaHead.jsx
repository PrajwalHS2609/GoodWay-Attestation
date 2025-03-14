import React from "react";
import "./MofaHead.css";
import mofaBanner from "./../../../vid_img/mofaBanner.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";
const MofaHead = () => {
  return (
      <div className="mofaHeadContainer">
        <div className="mofaHeadCover">
          <TypeWriter txt="MOFA Attestation Service in "/>
        </div>
        <img src={mofaBanner} alt="mofaBanner" loading="lazy"/>
      </div>
  );
};

export default MofaHead;
