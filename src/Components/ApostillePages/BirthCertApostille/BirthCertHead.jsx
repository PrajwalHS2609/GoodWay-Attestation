import React from "react";
import BirthCert from "./../../../vid_img/birthCert.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const BirthCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <TypeWriter txt="Birth Apostille Certificate  in" />
      </div>
      <img src={BirthCert} alt="BirthCert" />
    </div>
  );
};

export default BirthCertHead;
