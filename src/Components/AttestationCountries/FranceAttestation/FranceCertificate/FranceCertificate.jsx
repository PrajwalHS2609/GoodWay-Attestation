import React from 'react'
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
import AustraliaCertificateMain from '../../Australia/AustraliaCertificate/AustraliaCertificateMain';
const FranceCertificate = () => {
  return (
    <div className="uaeCertContainer">
    <UaeCertificateHead certHead="Certificates Required For France Embassy Apostille" />
    <AustraliaCertificateMain />
  </div>
  )
}

export default FranceCertificate
