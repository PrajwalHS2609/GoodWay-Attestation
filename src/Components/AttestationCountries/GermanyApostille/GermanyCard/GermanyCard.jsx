import React from 'react'
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import germanyFlag from "./../../../../vid_img/Countries_Flag/Germany.png";
import germanyEmbassy from "./../../../../vid_img/Apostille_Embassy_Logo/Germany.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const GermanyCard = () => {
  return (
       <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={germanyFlag}
        altFlag="germanyFlag"
        embassy={germanyEmbassy}
        altEmbassy="germanyEmbassy"
      />
    </div>
  )
}

export default GermanyCard
