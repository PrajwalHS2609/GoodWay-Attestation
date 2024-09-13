import React from 'react'
import UaeMofaHead from '../../UaeAttestation/UaeMofa/UaeMofaHead'
import UaeMofaMain from '../../UaeAttestation/UaeMofa/UaeMofaMain'
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";

const QatarMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Qatar (MOFA of Qatar)*" />
  </div>
  )
}

export default QatarMofa
