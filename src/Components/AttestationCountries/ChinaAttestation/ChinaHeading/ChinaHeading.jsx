import React from "react";
import TypeWriter from "../ChinaTypeWriter/TypeWriter";
import chinaAttBanner from "./../../../../vid&img/bannerVids/China.mp4";

const ChinaHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <div className="uaeAttHeadingCover"> </div>
      <TypeWriter />
      <video src={chinaAttBanner} autoPlay loop muted />
    </div>
  );
};

export default ChinaHeading;
