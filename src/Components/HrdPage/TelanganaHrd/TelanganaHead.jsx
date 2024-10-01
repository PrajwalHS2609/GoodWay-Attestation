import React from 'react'
import telanganaHrd from "./../../../vid&img/Hrd/TelenganaHrd.png";

const TelanganaHead = () => {
  return (
    <div className="kaHeadContainer">
    <div className="kaHeadCover">
      <h2>
      HRD Attestation in Telangana by <span>Goodway Attestation</span>
      </h2>
    </div>
    <img src={telanganaHrd} alt="telanganaHrd" loading='lazy'/>
  </div>
  )
}

export default TelanganaHead
