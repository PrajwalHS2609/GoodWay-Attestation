import React from "react";
import TypeWriter from "../OmanTypeWriter/TypeWriter";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import omanAttBanner from "./../../../../vid&img/ApostilleVids/Oman.mp4";

const OmanHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={omanAttBanner} autoPlay loop muted />
    </div>
  );
};

export default OmanHeading;
