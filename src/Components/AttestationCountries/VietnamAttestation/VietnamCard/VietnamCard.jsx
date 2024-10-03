import React from 'react'
import UaeAttestationCard from '../../UaeAttestation/UaeAttestationCard/UaeAttestationCard'
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import vietnamFlag from "./../../../../vid_img/Countries_Flag/vietnam.png";
import vietnamEmbassy from "./../../../../vid_img/Embassy/Vietnam.png";
const VietnamCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={vietnamFlag}
      altFlag="vietnamFlag"
      embassy={vietnamEmbassy}
      altEmbassy="vietnamEmbassy"
    />
  </div>
  )
}

export default VietnamCard
