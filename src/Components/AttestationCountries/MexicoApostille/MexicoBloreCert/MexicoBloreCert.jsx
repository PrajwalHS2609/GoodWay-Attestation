import React from "react";
import MexicoBloreCertMain from "./MexicoBloreCertMain";
import "./../../UaeAttestation/UaeService/UaeService.css";
import AustraliaBloreCertHead from "../../Australia/AustraliaBloreCert/AustraliaBloreCertHead";

const MexicoBloreCert = () => {
  return (
    <div className="uaeServiceContainer">
      <AustraliaBloreCertHead head="Mexico Apostille service in Bangalore for certificates" />
      <MexicoBloreCertMain />
    </div>
  );
};

export default MexicoBloreCert;
