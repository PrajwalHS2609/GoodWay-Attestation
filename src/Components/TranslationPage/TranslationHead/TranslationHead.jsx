import React from "react";
import "./TranslationHead.css";
import translationBanner from "./../../../vid&img/translationBanner.jpg";
import TypeWriter from "../../AttestationPage/BirthCertAttestation/BirthCertHead/TypeWriter/TypeWriter";

const TranslationHead = () => {
  return (
    <div className="transHeadContainer">
      <div className="transHeadCover">
        <TypeWriter txt="Translation Service in "/>
      </div>
      <img src={translationBanner} alt="translationBanner" loading="lazy"/>
    </div>
  );
};

export default TranslationHead;
