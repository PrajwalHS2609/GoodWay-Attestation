import React from 'react'
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import ukFlag from "./../../../../vid&img/Countries_Flag/UK.png";
import ukEmbassy from "./../../../../vid&img/Apostille_Embassy_Logo/UK.png";
import UaeAttestationCard from '../../UaeAttestation/UaeAttestationCard/UaeAttestationCard';
const UkCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={ukFlag}
      altFlag="ukFlag"
      embassy={ukEmbassy}
      altEmbassy="ukEmbassy"
    />
  </div>
  )
}

export default UkCard
