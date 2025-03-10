import React from "react";
import SaudiFlag from "./../../../vid_img/Countries_Flag/Saudi Arabia.png";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const SaudiHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
          <TypeWriter txt="Saudi PCC Verification in " />
      </div>
      <img src={SaudiFlag} alt="SaudiFlag" loading="lazy"/>
    </div>
  );
};

export default SaudiHead;
