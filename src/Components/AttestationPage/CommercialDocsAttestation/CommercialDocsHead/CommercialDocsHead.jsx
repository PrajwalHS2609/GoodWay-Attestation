import React from "react";
import CommercialDocs from "./../../../../vid_img/CommercialDocs.jpg";
import TypeWriter from "../../BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const CommercialDocsHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <TypeWriter txt="Commercial Documents Certificate Attestation in" />
      </div>
      <img src={CommercialDocs} alt="CommercialDocs" />
    </div>
  );
};

export default CommercialDocsHead;
