import React from 'react'
import UaeMofaMain from '../../UaeAttestation/UaeMofa/UaeMofaMain'
import UaeMofaHead from '../../UaeAttestation/UaeMofa/UaeMofaHead'
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";

const PhilippinesMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Philippines (MOFA of Philippines)* " />
  </div>
  )
}

export default PhilippinesMofa
