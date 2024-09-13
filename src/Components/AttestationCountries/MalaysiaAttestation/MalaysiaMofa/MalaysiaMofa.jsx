import React from "react";
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
const MalaysiaMofa = () => {
  return (
    <div className="uaeMofaContainer">
      <UaeMofaHead />
      <UaeMofaMain mofa="Ministry of Foreign Affairs of Malaysia (MOFA of Malaysia)* " />
    </div>
  );
};

export default MalaysiaMofa;
