import React from "react";
import QatarFlag from "./../../../vid&img/Countries_Flag/Qatar.png";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const QatarPccHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <TypeWriter txt="Qatar PCC Verification in " />
      </div>
      <img src={QatarFlag} alt="QatarFlag" loading="lazy"/>
    </div>
  );
};

export default QatarPccHead;
