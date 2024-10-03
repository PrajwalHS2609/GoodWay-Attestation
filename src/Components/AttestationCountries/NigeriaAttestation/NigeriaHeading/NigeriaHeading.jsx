import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import nigeriaAttBanner from "./../../../../vid_img/bannerVids/Nigeria.mp4";
import TypeWriter from "./../NigeriaTypeWriter/TypeWriter";
const NigeriaHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={nigeriaAttBanner} autoPlay loop muted />
    </div>
  );
};

export default NigeriaHeading;
