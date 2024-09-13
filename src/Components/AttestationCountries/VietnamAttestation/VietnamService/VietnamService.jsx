import React from "react";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import UaeServiceMain from "../../UaeAttestation/UaeService/UaeServiceMain";
import "./../../UaeAttestation/UaeService/UaeService.css";

const VietnamService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="Vietnam Attestation Services in Bangalore" />
      <UaeServiceMain />
    </div>
  );
};

export default VietnamService;
