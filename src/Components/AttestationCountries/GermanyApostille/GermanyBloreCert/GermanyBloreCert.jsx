import React from "react";
import "./../../UaeAttestation/UaeService/UaeService.css";
import GermanyBloreCertMain from "./GermanyBloreCertMain";
import AustraliaBloreCertHead from "../../Australia/AustraliaBloreCert/AustraliaBloreCertHead";

const GermanyBloreCert = () => {
  return (
    <div className="uaeServiceContainer">
      <AustraliaBloreCertHead head="Germany Apostille service in Bangalore for certificates" />
      <GermanyBloreCertMain />
    </div>
  );
};

export default GermanyBloreCert;
