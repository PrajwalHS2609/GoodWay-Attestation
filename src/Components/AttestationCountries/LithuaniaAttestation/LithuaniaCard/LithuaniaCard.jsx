import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import lithuaniaFlag from "./../../../../vid&img/Countries_Flag/lithuania.png";
import lithuaniaEmbassy from "./../../../../vid&img/Apostille_Embassy_Logo/Lithuania.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const LithuaniaCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={lithuaniaFlag}
        altFlag="lithuaniaFlag"
        embassy={lithuaniaEmbassy}
        altEmbassy="lithuaniaEmbassy"
      />
    </div>
  );
};

export default LithuaniaCard;
