import React from "react";
import "./UaeMofa.css";
import UaeMofaHead from "./UaeMofaHead";
import UaeMofaMain from "./UaeMofaMain";
const UaeMofa = () => {
  return (
    <div className="uaeMofaContainer">
      <UaeMofaHead />
      <UaeMofaMain mofa="Ministry of Foreign Affairs of UAE (MOFA of UAE)*" />
    </div>
  );
};

export default UaeMofa;
