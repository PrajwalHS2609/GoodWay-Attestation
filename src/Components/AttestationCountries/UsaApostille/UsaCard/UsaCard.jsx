import React from 'react'
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import usaFlag from "./../../../../vid&img/Countries_Flag/USA.png";
import usaEmbassy from "./../../../../vid&img/Apostille_Embassy_Logo/USA.png";
import UaeAttestationCard from '../../UaeAttestation/UaeAttestationCard/UaeAttestationCard';
const UsaCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={usaFlag}
      altFlag="usaFlag"
      embassy={usaEmbassy}
      altEmbassy="usaEmbassy"
    />
  </div>
  )
}

export default UsaCard
