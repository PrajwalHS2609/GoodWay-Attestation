import React from "react";
import OurServicesHead from "./OurServicesHead";
import OurServicesMain from "./OurServicesMain";
import "./OurServices.css";
import Anim from "./Anim";

const OurServices = () => {
  return (
    <div className="ourServicesContainer">
      <OurServicesHead />
      <OurServicesMain />
      <Anim />
    </div>
  );
};

export default OurServices;
