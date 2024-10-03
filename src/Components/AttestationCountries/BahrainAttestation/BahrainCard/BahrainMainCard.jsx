import React from "react";
import "./../../UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import bahrainFlag from "./../../../../vid_img/Countries_Flag/Baharain.png";
import bahrainEmbassy from "./../../../../vid_img/Embassy/Bahrain.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const BahrainMainCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={bahrainFlag}
        altFlag="qatarFlag"
        embassy={bahrainEmbassy}
        altEmbassy="qatarEmbassy"
      />
    </div>
  );
};

export default BahrainMainCard;
