import React from 'react'
import UaeAttestationCard from '../../UaeAttestation/UaeAttestationCard/UaeAttestationCard'
import "./../../UaeAttestation/UaeAttestationCard/UaeAttestationCard.css";
import chinaFlag from "./../../../../vid_img/Countries_Flag/chinaFlag.png";
import chinaEmbassy from "./../../../../vid_img/Embassy/China.png";
const ChinaCard = () => {
  return (
    <div className="uaeAttCardMainContainer">
    <UaeAttestationCard
      flag={chinaFlag}
      altFlag="chinaFlag"
      embassy={chinaEmbassy}
      altEmbassy="chinaEmbassy"
    />
  </div>
  )
}

export default ChinaCard
