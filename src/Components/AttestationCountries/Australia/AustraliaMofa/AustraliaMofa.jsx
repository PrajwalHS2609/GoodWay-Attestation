import React from 'react'
import UaeMofaHead from '../../UaeAttestation/UaeMofa/UaeMofaHead'
import UaeMofaMain from '../../UaeAttestation/UaeMofa/UaeMofaMain'
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
const AustraliaMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Australia (MOFA of Australia)*" />
  </div>
  )
}

export default AustraliaMofa

