import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import netherlandFlag from "./../../../../vid_img/Countries_Flag/Netherlands.png";
import netherlandEmbassy from "./../../../../vid_img/Apostille_Embassy_Logo/Netherlands.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const NetherlandCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={netherlandFlag}
        altFlag="netherlandFlag"
        embassy={netherlandEmbassy}
        altEmbassy="netherlandEmbassy"
      />
    </div>
  );
};

export default NetherlandCard;
