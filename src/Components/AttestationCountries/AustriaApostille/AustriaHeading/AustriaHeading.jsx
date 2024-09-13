import React from "react";
import TypeWriter from "../AustriaTypeWriter/TypeWriter";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import austriaAttBanner from "./../../../../vid&img/ApostilleVids/Austria.mp4";

const AustriaHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={austriaAttBanner} autoPlay loop muted />
    </div>
  );
};

export default AustriaHeading;
