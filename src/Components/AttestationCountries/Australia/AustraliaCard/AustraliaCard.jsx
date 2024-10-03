import React from 'react'
import UaeAttestationCard from '../../UaeAttestation/UaeAttestationCard/UaeAttestationCard'
import "./../../UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import australiaFlag from "./../../../../vid_img/Countries_Flag/australia.png";
import australiaEmbassy from "./../../../../vid_img/Embassy/Australia.png";
const AustraliaCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={australiaFlag}
      altFlag="australiaFlag"
      embassy={australiaEmbassy}
      altEmbassy="australiaEmbassy"
    />
  </div>
  )
}

export default AustraliaCard
