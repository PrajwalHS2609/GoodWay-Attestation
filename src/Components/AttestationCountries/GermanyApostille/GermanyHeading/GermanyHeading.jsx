import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import germanyAttBanner from "./../../../../vid_img/ApostilleVids/Germany.mp4";
import TypeWriter from "../GermanyTypeWriter/TypeWriter";

const GermanyHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={germanyAttBanner} autoPlay loop muted />
    </div>
  );
};

export default GermanyHeading;
