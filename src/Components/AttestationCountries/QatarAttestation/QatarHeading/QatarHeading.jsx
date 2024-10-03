import React from "react";
import "../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import qatarAttBanner from "./../../../../vid_img/bannerVids/Qatar.mp4";
import TypeWriter from "../QatarTypeWriter/TypeWriter";

const QatarHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <TypeWriter />
      <video src={qatarAttBanner} autoPlay loop muted />
    </div>
  );
};

export default QatarHeading;
