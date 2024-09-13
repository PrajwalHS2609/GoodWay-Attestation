import React from "react";
import SwedenBloreMain from "./SwedenBloreMain";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";

const SwedenBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="Sweden Attestation in Bangalore" />
      <SwedenBloreMain />
    </div>
  );
};

export default SwedenBlore;
