import React from "react";
import UaeCertificateHead from "../../UaeAttestation/UaeCertificate/UaeCertificateHead";
import "./../../UaeAttestation/UaeCertificate/UaeCertificate.css";
import AustraliaCertificateMain from "../../Australia/AustraliaCertificate/AustraliaCertificateMain";
const LithuaniaCertificate = () => {
  return (
    <div className="uaeCertContainer">
      <UaeCertificateHead certHead="Certificates Required For Lithuania Embassy Apostille" />
      <AustraliaCertificateMain />
    </div>
  );
};

export default LithuaniaCertificate;
