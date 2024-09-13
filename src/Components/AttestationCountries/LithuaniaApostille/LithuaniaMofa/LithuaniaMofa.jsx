import React from "react";
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
const LithuaniaMofa = () => {
  return (
    <div className="uaeMofaContainer">
      <UaeMofaHead />
      <UaeMofaMain mofa="Ministry of Foreign Affairs of Lithuania (MOFA of Lithuania)* " />
    </div>
  );
};

export default LithuaniaMofa;
