import React from "react";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import EgyptBloreMain from "./EgyptBloreMain";

const EgyptBlore = () => {
  return (
    <div className="uaeBloreContainer">
    <UaeBloreHead head="Egypt Attestation in Bangalore" />
    <EgyptBloreMain />
    </div>
  );
};

export default EgyptBlore;
