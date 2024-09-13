import React from 'react'
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
import AustraliaCertificateMain from '../../Australia/AustraliaCertificate/AustraliaCertificateMain';
const GermanyCertificate = () => {
  return (
    <div className="uaeCertContainer">
    <UaeCertificateHead certHead="Certificates Required For Germany Embassy Apostille" />
    <AustraliaCertificateMain />
  </div>
  )
}

export default GermanyCertificate
