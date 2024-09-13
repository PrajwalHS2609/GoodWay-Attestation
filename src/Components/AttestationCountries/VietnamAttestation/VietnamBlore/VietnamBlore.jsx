import React from "react";
import VietnamBloreMain from "./VietnamBloreMain";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
const VietnamBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="Vietnam Attestation in Bangalore" />
      <VietnamBloreMain />
    </div>
  );
};

export default VietnamBlore;
