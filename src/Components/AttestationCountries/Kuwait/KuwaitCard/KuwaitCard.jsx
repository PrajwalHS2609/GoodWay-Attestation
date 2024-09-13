import React from 'react'
import UaeAttestationCard from '../../UaeAttestation/UaeAttestationCard/UaeAttestationCard'
import "./../../UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import kuwaitFlag from "./../../../../vid&img/Countries_Flag/Kuwait.png";
import kuwaitEmbassy from "./../../../../vid&img/Embassy/Kuwait.png";
const KuwaitCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={kuwaitFlag}
      altFlag="kuwaitFlag"
      embassy={kuwaitEmbassy}
      altEmbassy="kuwaitEmbassy"
    />
  </div>
  )
}

export default KuwaitCard
