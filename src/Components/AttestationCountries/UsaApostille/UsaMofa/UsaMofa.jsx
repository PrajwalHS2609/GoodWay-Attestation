import React from "react";
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
const UsaMofa = () => {
  return (
    <div className="uaeMofaContainer">
      <UaeMofaHead />
      <UaeMofaMain mofa="Ministry of Foreign Affairs of USA (MOFA of USA)* " />
    </div>
  );
};

export default UsaMofa;
