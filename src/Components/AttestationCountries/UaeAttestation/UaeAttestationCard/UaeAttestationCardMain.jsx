import React from "react";
import "./UaeAttestationCard.css";
import UaeAttestationCard from "./UaeAttestationCard";
import uaeEmbassy from "./../../../../vid&img/Embassy/UAE Embassy.png";
import uaeFlag from "./../../../../vid&img/Countries_Flag/UAE.png";
const UaeAttestationCardMain = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard flag={uaeFlag} altFlag="uaeFlag" embassy={uaeEmbassy} altEmbassy="uaeEmbassy" />
    </div>
  );
};

export default UaeAttestationCardMain;
