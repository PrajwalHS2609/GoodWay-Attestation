import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import ukAttBanner from "./../../../../vid&img/ApostilleVids/uk.mp4";
import TypeWriter from "../UkTypeWriter/TypeWriter";
const UkHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={ukAttBanner} autoPlay loop muted />
    </div>
  );
};

export default UkHeading;
