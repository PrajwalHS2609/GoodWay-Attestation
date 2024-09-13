import React from "react";
import AustriaServiceMain from "./AustriaServiceMain";
import "./../../UaeAttestation/UaeService/UaeService.css";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";

const AustriaService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="Austria Services in Bangalore" />
      <AustriaServiceMain />
    </div>
  );
};

export default AustriaService;
