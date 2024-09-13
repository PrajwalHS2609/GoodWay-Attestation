import React from "react";
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import UaeCertificateMain from "../../UaeAttestation/UaeCertificate/UaeCertificateMain";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
const AustriaCertificate = () => {
  return (
    <div>
      <div className="uaeCertContainer">
        <UaeCertificateHead certHead="Certificates Required For Austria Embassy Apostille" />
        <UaeCertificateMain />
      </div>
    </div>
  );
};

export default AustriaCertificate;
