import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import franceFlag from "./../../../../vid&img/Countries_Flag/France.png";
import franceEmbassy from "./../../../../vid&img/Apostille_Embassy_Logo/France.png"
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const FranceCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={franceFlag}
        altFlag="franceFlag"
        embassy={franceEmbassy}
        altEmbassy="franceEmbassy"
      />
    </div>
  );
};

export default FranceCard;
