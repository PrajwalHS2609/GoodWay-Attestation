import React from "react";
import TypeWriter from "../SaudiTypeWriter/TypeWriter";
import saudiAttBanner from "./../../../../vid_img/bannerVids/Saudi Arabia.mp4";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
const SaudiHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={saudiAttBanner} autoPlay loop muted />
    </div>
  );
};

export default SaudiHeading;
