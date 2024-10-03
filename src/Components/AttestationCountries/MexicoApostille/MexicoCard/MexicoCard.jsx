import React from 'react'
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import mexicoFlag from "./../../../../vid_img/Countries_Flag/Mexico.png";
import mexicoEmbassy from "./../../../../vid_img/Apostille_Embassy_Logo/Mexico.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const MexicoCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={mexicoFlag}
      altFlag="mexicoFlag"
      embassy={mexicoEmbassy}
      altEmbassy="mexicoEmbassy"
    />
  </div>
)
}

export default MexicoCard
