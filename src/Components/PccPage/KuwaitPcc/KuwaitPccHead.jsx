import React from "react";
import KuwaitFlag from "./../../../vid_img/Countries_Flag/Kuwait.png";
import "./KuwaitHead.css";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";
const KuwaitPccHead = () => {
  return (
    <div className="HeadContainer">
      <div className="HeadCover">
        <TypeWriter txt="Kuwait PCC Verification in " />
      </div>
      <img src={KuwaitFlag} alt="KuwaitFlag" loading="lazy"/>
    </div>
  );
};

export default KuwaitPccHead;
