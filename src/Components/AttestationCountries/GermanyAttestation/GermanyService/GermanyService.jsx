import React from 'react'
import "./../../UaeAttestation/UaeService/UaeService.css";
import GermanyServiceMain from './GermanyServiceMain';
import UaeServiceHead from '../../UaeAttestation/UaeService/UaeServiceHead';
const GermanyService = () => {
  return (
    <div className="uaeServiceContainer">
    <UaeServiceHead head="Germany Services in Bangalore" />
    <GermanyServiceMain />
  </div>
  )
}

export default GermanyService
