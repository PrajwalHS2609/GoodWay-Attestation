import React from "react";
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
const MexicoMofa = () => {
  return (
    <div className="uaeMofaContainer">
      <UaeMofaHead />
      <UaeMofaMain mofa="Ministry of Foreign Affairs of Mexico (MOFA of Mexico)* " />
    </div>
  );
};

export default MexicoMofa;
