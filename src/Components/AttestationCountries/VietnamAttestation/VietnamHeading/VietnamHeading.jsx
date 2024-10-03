import React from "react";
import vietnamAttBanner from "./../../../../vid_img/bannerVids/Vietnam.mp4";
import TypeWriter from "./../VietnamTypeWriter/TypeWriter";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";

const VietnamHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={vietnamAttBanner} autoPlay loop muted />
    </div>
  );
};

export default VietnamHeading;
