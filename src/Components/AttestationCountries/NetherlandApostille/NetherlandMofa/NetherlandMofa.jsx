import React from 'react'
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
const NetherlandMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Netherlands (MOFA of Netherlands)* " />
  </div>
  )
}

export default NetherlandMofa
