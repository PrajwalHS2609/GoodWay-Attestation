import React from "react";
import UaeServiceMain from "../../UaeAttestation/UaeService/UaeServiceMain";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import "./../../UaeAttestation/UaeService/UaeService.css";

const NigeriaService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="Nigeria Attestation Services in Bangalore" />
      <UaeServiceMain />
    </div>
  );
};

export default NigeriaService;
