import React from 'react'
import ChinaAboutMain from './ChinaAboutMain'
import "./../../UaeAttestation/UaeAbout/UaeAbout.css";
import UaeAboutHead from '../../UaeAttestation/UaeAbout/UaeAboutHead';

const ChinaAbout = () => {
  return (
    <div className="uaeAboutUsContainer">
      <UaeAboutHead head="About China Attestation" />
      <ChinaAboutMain />
    </div>
  )
}

export default ChinaAbout
