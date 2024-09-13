import React from "react";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
import BahrainBloreMain from "./BahrainBloreMain";
const BahrainBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="Bahrain Attestation in Bangalore" />
      <BahrainBloreMain />
    </div>
  );
};

export default BahrainBlore;
