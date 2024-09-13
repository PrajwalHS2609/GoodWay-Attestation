import React from 'react'
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
import AustraliaCertificateMain from '../../Australia/AustraliaCertificate/AustraliaCertificateMain';
const UkCertificate = () => {
  return (
    <div className="uaeCertContainer">
      <UaeCertificateHead certHead="Certificates Required For UK Embassy Apostille" />
      <AustraliaCertificateMain />
    </div>
  )
}

export default UkCertificate
