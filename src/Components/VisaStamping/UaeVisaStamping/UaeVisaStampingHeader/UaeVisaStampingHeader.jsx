import React from "react";
import "./UaeVisaStampingHeader.css";
import TypeWriter from "../../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";
import mofaBanner from "./../../../../vid_img/mofaBanner.jpg";

const UaeVisaStampingHeader = () => {
  return (
    <div className="uaeVisaStampingHeader">
      <div className="uaeVisaStampingHeaderCover">
        <TypeWriter txt="UAE Visa Stamping Service in " />
      </div>
      <img src={mofaBanner} alt="" loading="lazy" />
    </div>
  );
};

export default UaeVisaStampingHeader;
