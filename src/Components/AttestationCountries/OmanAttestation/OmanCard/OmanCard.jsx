import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import omanFlag from "./../../../../vid&img/Countries_Flag/Oman.png";
import omanEmbassy from "./../../../../vid&img/Apostille_Embassy_Logo/Oman (2).png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const OmanCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={omanFlag}
        altFlag="omanFlag"
        embassy={omanEmbassy}
        altEmbassy="omanEmbassy"
      />
    </div>
  );
};

export default OmanCard;
