import React from "react";
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
const FranceMofa = () => {
  return (
    <div className="uaeMofaContainer">
      <UaeMofaHead />
      <UaeMofaMain mofa="Ministry of Foreign Affairs of France (MOFA of France)* " />
    </div>
  );
};

export default FranceMofa;
