import React from "react";
import "./Heading.css";
import bannerVid from "./../../../vid&img/Attestationvid.mp4";
import TypeWriter from "../TypeWriter/TypeWriter";
const Heading = () => {
  return (
    <div className="headingContainer">
      <TypeWriter />
      <video src={bannerVid} autoPlay loop muted />
    </div>
  );
};

export default Heading;
