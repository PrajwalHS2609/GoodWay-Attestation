import React from 'react'
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
const ItalyMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Italy (MOFA of Italy)* " />
  </div>
  )
}

export default ItalyMofa
