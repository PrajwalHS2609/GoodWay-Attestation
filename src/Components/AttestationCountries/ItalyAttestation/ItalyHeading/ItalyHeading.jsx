import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import italyAttBanner from "./../../../../vid&img/ApostilleVids/Italy.mp4";
import TypeWriter from "./../ItalyTypeWriter/TypeWriter";
const ItalyHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={italyAttBanner} autoPlay loop muted />
    </div>
  );
};

export default ItalyHeading;
