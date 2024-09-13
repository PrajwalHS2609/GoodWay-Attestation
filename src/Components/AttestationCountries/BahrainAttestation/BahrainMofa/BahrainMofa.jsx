import React from 'react'
import UaeMofaHead from '../../UaeAttestation/UaeMofa/UaeMofaHead'
import UaeMofaMain from '../../UaeAttestation/UaeMofa/UaeMofaMain'
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";

const BahrainMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Bahrain (MOFA of Bahrain)*" />
  </div>
  )
}

export default BahrainMofa
