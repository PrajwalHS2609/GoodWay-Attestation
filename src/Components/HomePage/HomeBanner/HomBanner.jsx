import React from "react";
import "./HomeBanner.css";
import banner from "./../../../vid&img/goodway banner.png";
const HomeBanner = () => {
  return (
    <div className="homeBannerContainer">
      <img src={banner} alt="" />
    </div>
  );
};

export default HomeBanner;
