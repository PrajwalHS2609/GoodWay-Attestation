import React from "react";
import UaeFlag from "./../../../vid_img/Countries_Flag/UAE.png";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const UaePccHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
          <TypeWriter txt="UAE PCC Verification in " />
      </div>
      <img src={UaeFlag} alt="UaeFlag" loading="lazy"/>
    </div>
  );
};

export default UaePccHead;
