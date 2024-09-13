import React from 'react'
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
import AustraliaEduCert from './AustraliaEduCert';
import AustraliaNonEduCert from './AustraliaNonEduCert';

const AustraliaCertificateMain = () => {
  return (
    <div className="uaeCertMainContainer">
    <div className="uaeCertMainContent">
      <AustraliaEduCert />
    </div>
    <div className="uaeCertMainContent">
      <AustraliaNonEduCert />
    </div>
  </div>
  )
}

export default AustraliaCertificateMain
