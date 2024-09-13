import React from "react";
import usaAttBanner from "./../../../../vid&img/ApostilleVids/usa.mp4";
import TypeWriter from "./../UsaTypeWriter/TypeWriter";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
const UsaHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>

      <TypeWriter />
      <video src={usaAttBanner} autoPlay loop muted />
    </div>
  );
};

export default UsaHeading;
