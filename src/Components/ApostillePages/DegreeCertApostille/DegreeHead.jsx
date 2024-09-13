import React from "react";
import DegreeCert from "./../../../vid&img/DegreeCert.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const DegreeHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
        <TypeWriter txt="Degree Apostille Certificate in" />
      </div>
      <img src={DegreeCert} alt="DegreeCert" />
    </div>
  );
};

export default DegreeHead;
