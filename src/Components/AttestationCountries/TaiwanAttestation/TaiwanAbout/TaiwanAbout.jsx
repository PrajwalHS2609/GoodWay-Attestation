import React from "react";
import "./../../UaeAttestation/UaeAbout/UaeAbout.css";
import TaiwanAboutMain from "./TaiwanAboutMain";
import UaeAboutHead from "../../UaeAttestation/UaeAbout/UaeAboutHead";
const TaiwanAbout = () => {
  return (
    <div className="uaeAboutUsContainer">
    <UaeAboutHead head="About Taiwan Attestation" />
    <TaiwanAboutMain />
  </div>
  );
};

export default TaiwanAbout;
