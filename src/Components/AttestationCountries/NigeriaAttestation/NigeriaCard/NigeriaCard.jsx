import React from "react";
import "./../../../AttestationCountries/UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import nigeriaFlag from "./../../../../vid_img/Countries_Flag/nigeria.png";
import nigeriaEmbassy from "./../../../../vid_img/Embassy/Nigeria.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const NigeriaCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={nigeriaFlag}
        altFlag="nigeriaFlag"
        embassy={nigeriaEmbassy}
        altEmbassy="nigeriaEmbassy"
      />
    </div>
  );
};

export default NigeriaCard;
