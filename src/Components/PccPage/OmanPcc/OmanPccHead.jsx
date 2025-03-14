import React from "react";
import OmanFlag from "./../../../vid_img/Countries_Flag/Oman.png";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const OmanPccHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <TypeWriter txt="Oman PCC Verification in " />
      </div>
      <img src={OmanFlag} alt="OmanFlag" loading="lazy"/>
    </div>
  );
};

export default OmanPccHead;
