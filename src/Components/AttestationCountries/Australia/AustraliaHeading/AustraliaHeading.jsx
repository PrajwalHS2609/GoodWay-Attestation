import React from "react";
import "../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import AustraliaAttBanner from "./../../../../vid&img/bannerVids/Australia.mp4";
import TypeWriter from "../AustraliaTypeWriter/TypeWriter";
const AustraliaHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={AustraliaAttBanner} autoPlay loop muted />
    </div>
  );
};

export default AustraliaHeading;
