import React from "react";
import "../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import kuwaitAttBanner from "./../../../../vid_img/bannerVids/Kuwait.mp4";
import TypeWriter from "./../KuwaitTypeWriter/TypeWriter";
const KuwaitHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={kuwaitAttBanner} autoPlay loop muted />
    </div>
  );
};

export default KuwaitHeading;
