import React from "react";
import "../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import bahrainAttBanner from "./../../../../vid&img/bannerVids/Baharain.mp4";
import TypeWriter from "./../BahrainTypeWriter/TypeWriter";
const BahrainHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <TypeWriter />
      <video src={bahrainAttBanner} autoPlay loop muted />
    </div>
  );
};

export default BahrainHeading;
