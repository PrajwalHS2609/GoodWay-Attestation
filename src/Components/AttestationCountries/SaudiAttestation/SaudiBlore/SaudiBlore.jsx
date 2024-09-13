import React from "react";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
import SaudiBloreMain from './SaudiBloreMain';
const SaudiBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="Saudi Attestation in Bangalore" />
      <SaudiBloreMain />
    </div>
  );
};

export default SaudiBlore;
