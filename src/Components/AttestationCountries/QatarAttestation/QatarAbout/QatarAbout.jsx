import React from "react";
import "./../../UaeAttestation/UaeAbout/UaeAbout.css";
import UaeAboutHead from "../../UaeAttestation/UaeAbout/UaeAboutHead";
import QatarAboutMain from "./QatarAboutMain";

const QatarAbout = () => {
  return (
    <div className="uaeAboutUsContainer">
      <UaeAboutHead head="About Bahrain Attestation" />
      <QatarAboutMain />
    </div>
  );
};

export default QatarAbout;
