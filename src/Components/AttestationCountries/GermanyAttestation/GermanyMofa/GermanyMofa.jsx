import React from 'react'
import UaeMofaHead from '../../UaeAttestation/UaeMofa/UaeMofaHead'
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";
import UaeMofaMain from '../../UaeAttestation/UaeMofa/UaeMofaMain';

const GermanyMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Germany (MOFA of Germany)* " />
  </div>
  )
}

export default GermanyMofa
