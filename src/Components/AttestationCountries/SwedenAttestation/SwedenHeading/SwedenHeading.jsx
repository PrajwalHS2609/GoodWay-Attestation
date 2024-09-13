import React from "react";
import TypeWriter from "../SwedenTypeWriter/TypeWriter";
import saudiAttBanner from "./../../../../vid&img/bannerVids/Saudi Arabia.mp4";
const SwedenHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
            <div className="uaeAttHeadingCover"> </div>

      <TypeWriter />
      <video src={saudiAttBanner} autoPlay loop muted />
    </div>
  );
};

export default SwedenHeading;
