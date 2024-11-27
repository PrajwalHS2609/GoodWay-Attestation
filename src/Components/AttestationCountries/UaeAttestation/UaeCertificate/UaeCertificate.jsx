// import React from 'react'
import "./UaeCertificate.css"
import UaeCertificateHead from './UaeCertificateHead'
import UaeCertificateMain from './UaeCertificateMain'
const UaeCertificate = () => {
  return (
    <div className='uaeCertContainer'>
      <UaeCertificateHead certHead="Certificates Required For UAE Embassy Attestation"/>
      <UaeCertificateMain />
    </div>
  )
}

export default UaeCertificate
