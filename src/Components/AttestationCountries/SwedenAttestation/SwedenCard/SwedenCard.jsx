import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import swedenFlag from "./../../../../vid&img/Countries_Flag/Sweden.png";
import swedenEmbassy from "./../../../../vid&img/Embassy/Saudi.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const SwedenCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={swedenFlag}
        altFlag="swedenFlag"
        embassy={swedenEmbassy}
        altEmbassy="swedenEmbassy"
      />
    </div>
  );
};

export default SwedenCard;
