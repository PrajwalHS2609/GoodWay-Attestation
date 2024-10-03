import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import malaysiaFlag from "./../../../../vid_img/Countries_Flag/Malaysia.png";
import malaysiaEmbassy from "./../../../../vid_img/Embassy/Malaysia.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const MalaysiaCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={malaysiaFlag}
        altFlag="malaysiaFlag"
        embassy={malaysiaEmbassy}
        altEmbassy="malaysiaEmbassy"
      />
    </div>
  );
};

export default MalaysiaCard;
