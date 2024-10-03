import React from "react";
import "./../../UaeAttestation/UaeAttestationHeading/UaeAttestationHeading.css";
import lithuaniaAttBanner from "./../../../../vid_img/ApostilleVids/Lithuania.mp4";
import TypeWriter from "../LithuaniaTypeWriter/TypeWriter";
const LithuaniaHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
            <div className="uaeAttHeadingCover"> </div>

      <TypeWriter />
      <video src={lithuaniaAttBanner} autoPlay loop muted />
    </div>
  );
};

export default LithuaniaHeading;
