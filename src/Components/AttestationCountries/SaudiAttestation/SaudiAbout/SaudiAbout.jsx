import React from "react";
import SaudiAboutMain from "./SaudiAboutMain";
import UaeAboutHead from "../../UaeAttestation/UaeAbout/UaeAboutHead";
import "./../../UaeAttestation/UaeAbout/UaeAbout.css";

const SaudiAbout = () => {
  return (
    <div className="uaeAboutUsContainer">
      <UaeAboutHead head="About Saudi Attestation" />
      <SaudiAboutMain />
    </div>
  );
};

export default SaudiAbout;
