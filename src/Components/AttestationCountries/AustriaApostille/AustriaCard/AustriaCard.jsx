import React from 'react'
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import austriaFlag from "./../../../../vid_img/Countries_Flag/austria.png";
import austriaEmbassy from "./../../../../vid_img/Apostille_Embassy_Logo/Austria.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const AustriaCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={austriaFlag}
      altFlag="austriaFlag"
      embassy={austriaEmbassy}
      altEmbassy="austriaEmbassy"
    />
  </div>
  )
}

export default AustriaCard
