import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import italyFlag from "./../../../../vid&img/Countries_Flag/Italy.png";
import italyEmbassy from "./../../../../vid&img/Apostille_Embassy_Logo/Italy.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const ItalyCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={italyFlag}
        altFlag="italyFlag"
        embassy={italyEmbassy}
        altEmbassy="italyEmbassy"
      />
    </div>
  );
};

export default ItalyCard;
