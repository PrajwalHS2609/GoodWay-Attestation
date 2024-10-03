import React from 'react'
import andhraHrd from "./../../../vid_img/Hrd/AndhraHrd.png"

const AndhraHead = () => {
  return (
    <div className="kaHeadContainer">
    <div className="kaHeadCover">
      <h2>
      HRD Attestation in Andhra Pradesh by <span>Goodway Attestation</span>
      </h2>
    </div>
    <img src={andhraHrd} alt="andhraHrd" loading='lazy'/>
  </div>
  )
}

export default AndhraHead
