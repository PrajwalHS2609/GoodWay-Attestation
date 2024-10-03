import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import taiwanAttBanner from "./../../../../vid_img/bannerVids/Taiwan.mp4";
import TypeWriter from "./../TaiwanTypeWriter/TypeWriter";
const TaiwanHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={taiwanAttBanner} autoPlay loop muted />
    </div>
  );
};

export default TaiwanHeading;
