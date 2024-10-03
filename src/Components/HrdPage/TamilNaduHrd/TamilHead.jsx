import React from 'react'
import tamilHrd from "./../../../vid_img/Hrd/TamilNaduHrd.png";
const TamilHead = () => {
  return (
    <div className="kaHeadContainer">
    <div className="kaHeadCover">
      <h2>
      HRD Attestation in Tamil Nadu by <span>Goodway Attestation</span>
      </h2>
    </div>
    <img src={tamilHrd} alt="tamilHrd" loading='lazy'/>
  </div>
  )
}

export default TamilHead
