import React from "react";
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import UaeCertificateMain from "../../UaeAttestation/UaeCertificate/UaeCertificateMain";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
const SaudiCertificate = () => {
  return (
    <div className="uaeCertContainer">
      <UaeCertificateHead certHead="Certificates Required For Saudi Embassy Attestation" />
      <UaeCertificateMain />
    </div>
  );
};

export default SaudiCertificate;
