import React from 'react'
import UaeMofaHead from '../../UaeAttestation/UaeMofa/UaeMofaHead'
import UaeMofaMain from '../../UaeAttestation/UaeMofa/UaeMofaMain'
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
const EgyptMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Egypt (MOFA of Egypt)*" />
  </div>
  )
}

export default EgyptMofa
