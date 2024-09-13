import React from 'react'
import UaeAboutHead from '../../UaeAttestation/UaeAbout/UaeAboutHead'
import BahrainAboutMain from './BahrainAboutMain'
import "./../../UaeAttestation/UaeAbout/UaeAbout.css";

const BahrainAbout = () => {
  return (
    <div className="uaeAboutUsContainer">
    <UaeAboutHead head="About Bahrain Attestation" />
    <BahrainAboutMain />
  </div>
  )
}

export default BahrainAbout
