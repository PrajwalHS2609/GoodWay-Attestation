import React from 'react'
import UaeMofaHead from "../../UaeAttestation/UaeMofa/UaeMofaHead";
import UaeMofaMain from "../../UaeAttestation/UaeMofa/UaeMofaMain";
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
const TaiwanMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Taiwan (MOFA of Taiwan)* " />
  </div>
  )
}

export default TaiwanMofa
