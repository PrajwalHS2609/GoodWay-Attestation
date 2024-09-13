import React from "react";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import "./../../UaeAttestation/UaeService/UaeService.css";
import MalaysiaServiceMain from "./MalaysiaServiceMain";

const MalaysiaService = () => {
  return (
    <div>
      <div className="uaeServiceContainer">
        <UaeServiceHead head="Malaysia Attestation Services in Bangalore" />
        <MalaysiaServiceMain />
      </div>
    </div>
  );
};

export default MalaysiaService;
