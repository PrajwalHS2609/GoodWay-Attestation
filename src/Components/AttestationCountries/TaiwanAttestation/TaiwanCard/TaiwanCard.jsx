import React from 'react'
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import taiwanFlag from "./../../../../vid&img/Countries_Flag/taiwan.png";
import taiwanEmbassy from "./../../../../vid&img/Embassy/Taiwan.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const TaiwanCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={taiwanFlag}
        altFlag="taiwanFlag"
        embassy={taiwanEmbassy}
        altEmbassy="taiwanEmbassy"
      />
    </div>
  )
}

export default TaiwanCard
