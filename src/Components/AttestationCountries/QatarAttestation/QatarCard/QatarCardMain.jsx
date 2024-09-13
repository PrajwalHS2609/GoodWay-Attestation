import React from "react";
import "./../../UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import qatarFlag from "./../../../../vid&img/Countries_Flag/Qatar.png";
import qatarEmbassy from "./../../../../vid&img/Embassy/Qatar Embassy.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const QatarCardMain = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={qatarFlag}
        altFlag="qatarFlag"
        embassy={qatarEmbassy}
        altEmbassy="qatarEmbassy"
      />
    </div>
  );
};

export default QatarCardMain;
