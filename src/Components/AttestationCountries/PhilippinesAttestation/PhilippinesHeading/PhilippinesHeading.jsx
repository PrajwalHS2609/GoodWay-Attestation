import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import philippinesAttBanner from "./../../../../vid_img/bannerVids/Philippines.mp4";
import TypeWriter from "./../PhilippinesTypewriter/TypeWriter";
const PhilippinesHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={philippinesAttBanner} autoPlay loop muted />
    </div>
  );
};

export default PhilippinesHeading;
