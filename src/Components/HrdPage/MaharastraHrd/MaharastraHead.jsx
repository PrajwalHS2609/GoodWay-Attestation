import React from 'react'
import maharastraHrd from "./../../../vid_img/Hrd/MaharastraHrd.png";

const MaharastraHead = () => {
  return (
    <div className="kaHeadContainer">
    <div className="kaHeadCover">
      <h2>
      HRD Attestation in Maharastra by <span>Goodway Attestation</span>
      </h2>
    </div>
    <img src={maharastraHrd} alt="maharastraHrd" loading='lazy'/>
  </div>
  )
}

export default MaharastraHead
