import React from "react";
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";

const VietnamMofa = () => {
  return (
    <div className="uaeMofaContainer">
      <UaeMofaHead />
      <UaeMofaMain mofa="Ministry of Foreign Affairs of Vietnam (MOFA of Vietnam)* " />
    </div>
  );
};

export default VietnamMofa;
