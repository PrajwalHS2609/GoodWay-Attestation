import React from "react";
import "./BirthCertHead.css";
import BirthCert from "./../../../../vid_img/birthCert.jpg";
import TypeWriter from "./TypeWriter/TypeWriter";

const BirthCertHead = () => {
  return (
    <div className="birthCertHeadContainer">
      <div className="birthCertHeadCover">
          <TypeWriter txt="Birth Certificate Apostille in "/>
      </div>
      <img src={BirthCert} alt="BirthCert" />
    </div>
  );
};

export default BirthCertHead;
