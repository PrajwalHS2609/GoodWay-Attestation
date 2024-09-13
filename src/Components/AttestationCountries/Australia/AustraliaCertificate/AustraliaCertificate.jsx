import React from 'react'
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
import AustraliaCertificateMain from './AustraliaCertificateMain';
const AustraliaCertificate = () => {
  return (
    <div className="uaeCertContainer">
    <UaeCertificateHead certHead="Certificates Required For Australia Embassy Apostille" />
    <AustraliaCertificateMain />
  </div>
  )
}

export default AustraliaCertificate
