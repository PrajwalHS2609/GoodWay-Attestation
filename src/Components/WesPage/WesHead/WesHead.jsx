import React from "react";
import "./WesHead.css";
import WesBanner from "./../../../vid&img/WesBanner.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const WesHead = () => {
  return (
    <div className="wesHeadContainer">
      <div className="wesHeadCover">
          <TypeWriter txt="WES Attestation and Verification in  " />
      </div>
      <img src={WesBanner} alt="WesBanner" loading="lazy"/>
    </div>
  );
};

export default WesHead;
