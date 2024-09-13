import React from 'react'
import UaeAttestationCard from '../../UaeAttestation/UaeAttestationCard/UaeAttestationCard'
import "./../../UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import egyptFlag from "./../../../../vid&img/Countries_Flag/Egypt.png";
import egyptEmbassy from "./../../../../vid&img/Embassy/Egypt.png";

const EgyptCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={egyptFlag}
      altFlag="egyptFlag"
      embassy={egyptEmbassy}
      altEmbassy="egyptEmbassy"
    />
  </div>
  )
}

export default EgyptCard
