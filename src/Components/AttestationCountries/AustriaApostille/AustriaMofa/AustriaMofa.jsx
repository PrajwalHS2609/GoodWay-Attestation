import React from "react";
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
const AustriaMofa = () => {
  return (
    <div className="uaeMofaContainer">
      <UaeMofaHead />
      <UaeMofaMain mofa="Ministry of Foreign Affairs of Austria (MOFA of Austria)* " />
    </div>
  );
};

export default AustriaMofa;
