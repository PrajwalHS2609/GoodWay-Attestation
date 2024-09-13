import React from "react";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import TaiwanBloreMain from "./TaiwanBloreMain";

const TaiwanBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="Taiwan Attestation in Bangalore" />
      <TaiwanBloreMain />
    </div>
  );
};

export default TaiwanBlore;
