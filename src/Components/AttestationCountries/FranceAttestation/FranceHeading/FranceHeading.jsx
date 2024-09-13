import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import franceAttBanner from "./../../../../vid&img/ApostilleVids/France.mp4";
import TypeWriter from "../FranceTypeWriter/TypeWriter";
const FranceHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
            <div className="uaeAttHeadingCover"> </div>

      <TypeWriter />
      <video src={franceAttBanner} autoPlay loop muted />
    </div>
  );
};

export default FranceHeading;
