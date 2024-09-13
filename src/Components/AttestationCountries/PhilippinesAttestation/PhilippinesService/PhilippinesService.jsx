import React from "react";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import "./../../UaeAttestation/UaeService/UaeService.css";
import PhilippinesServiceMain from "./PhilippinesServiceMain";
const PhilippinesService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="Philippines Attestation Services in Bangalore" />
      <PhilippinesServiceMain />
    </div>
  );
};

export default PhilippinesService;
