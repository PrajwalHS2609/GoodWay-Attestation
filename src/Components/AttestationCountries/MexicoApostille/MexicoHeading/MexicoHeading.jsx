import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import mexicoAttBanner from "./../../../../vid&img/ApostilleVids/mexico.mp4";
import TypeWriter from "../MexicoTypeWriter/TypeWriter";
const MexicoHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
            <div className="uaeAttHeadingCover"> </div>

      <TypeWriter />
      <video src={mexicoAttBanner} autoPlay loop muted />
    </div>
  );
};

export default MexicoHeading;
