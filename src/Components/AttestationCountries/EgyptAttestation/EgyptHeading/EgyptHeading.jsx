import React from "react";
import egyptAtteBanner from "./../../../../vid_img/bannerVids/Egypt.mp4";
import TypeWriter from "../EgyptTypeWritter/TypeWriter";
const EgyptHeading = () => {
  return (
    <div className="uaeAttHeadingContainer">
      <TypeWriter />
      <video src={egyptAtteBanner} autoPlay loop muted />
    </div>
  );
};

export default EgyptHeading;
