import React from "react";
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import UaeCertificateMain from "../../UaeAttestation/UaeCertificate/UaeCertificateMain";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
const SwedenCertificate = () => {
  return (
    <div className="uaeCertContainer">
      <UaeCertificateHead certHead="Certificates Required For Taiwan Embassy Attestation" />
      <UaeCertificateMain />
    </div>
  );
};

export default SwedenCertificate;
