import React from "react";
import MarriageCert from "./../../../../vid&img/MarriageCert.jpg";
import TypeWriter from "../../BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const MarriageCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <TypeWriter txt="Marriage Certificate Attestation in" />
      </div>
      <img src={MarriageCert} alt="MarriageCert" />
    </div>
  );
};

export default MarriageCertHead;
