import React from "react";
import "./../../UaeAttestation/UaeService/UaeService.css";
import FranceBloreCertMain from "./FranceBloreCertMain";
import AustraliaBloreCertHead from "../../Australia/AustraliaBloreCert/AustraliaBloreCertHead";
const FranceBloreCert = () => {
  return (
    <div className="uaeServiceContainer">
      <AustraliaBloreCertHead head="France Apostille service in Bangalore for certificates" />
      <FranceBloreCertMain />
    </div>
  );
};

export default FranceBloreCert;
