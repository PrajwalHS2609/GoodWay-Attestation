import React from 'react'
import "./UaeCertificate.css"

const UaeCertificateHead = (props) => {
  return (
    <div className='uaeCertHeadContainer'>
      <h2>{props.certHead}</h2>
      <div className="uaeCertUnderline"></div>
    </div>
  )
}

export default UaeCertificateHead
