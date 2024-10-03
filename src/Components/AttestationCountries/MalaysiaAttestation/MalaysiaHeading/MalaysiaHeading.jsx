import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import malaysiaAttBanner from "./../../../../vid_img/bannerVids/Malaysia.mp4";
import TypeWriter from "./../MalaysiaTypewriter/TypeWriter";
const MalaysiaHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={malaysiaAttBanner} autoPlay loop muted />
    </div>
  );
};

export default MalaysiaHeading;
