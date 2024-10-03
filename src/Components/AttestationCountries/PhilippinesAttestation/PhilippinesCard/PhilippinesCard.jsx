import React from "react";
import philippinesFlag from "./../../../../vid_img/Countries_Flag/philippines.png";
import philippinesEmbassy from "./../../../../vid_img/Embassy/Philippines.png";
import UaeAttestationCard from "../../UaeAttestation/UaeAttestationCard/UaeAttestationCard";
const PhilippinesCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
      <UaeAttestationCard
        flag={philippinesFlag}
        altFlag="philippinesFlag"
        embassy={philippinesEmbassy}
        altEmbassy="philippinesEmbassy"
      />
    </div>
  );
};

export default PhilippinesCard;
