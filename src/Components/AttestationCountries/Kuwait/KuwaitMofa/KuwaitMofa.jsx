import React from 'react'
import UaeMofaHead from '../../UaeAttestation/UaeMofa/UaeMofaHead'
import UaeMofaMain from '../../UaeAttestation/UaeMofa/UaeMofaMain'
import "./../../UaeAttestation/UaeMofa/UaeMofa.css";

const KuwaitMofa = () => {
  return (
    <div className="uaeMofaContainer">
    <UaeMofaHead />
    <UaeMofaMain mofa="Ministry of Foreign Affairs of Kuwait (MOFA of Kuwait)*" />
  </div>
  )
}

export default KuwaitMofa
