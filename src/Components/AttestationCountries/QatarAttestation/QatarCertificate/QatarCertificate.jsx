import React from "react";
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import UaeCertificateMain from "../../UaeAttestation/UaeCertificate/UaeCertificateMain";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
const QatarCertificate = () => {
  return (
    <div className="uaeCertContainer">
      <UaeCertificateHead certHead="Certificates Required For Qatar Embassy Attestation" />
      <UaeCertificateMain />
    </div>
  );
};

export default QatarCertificate;
