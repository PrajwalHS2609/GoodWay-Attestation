import React from "react";
import "./UaeAttestationHeading.css";
import uaeAttBanner from "./../../../../vid&img/UAE Attestation.mp4";
import TypeWriter from "../TypeWriter/TypeWriter";
const UaeAttestationHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={uaeAttBanner} autoPlay loop muted />
    </div>
  );
};

export default UaeAttestationHeading;
