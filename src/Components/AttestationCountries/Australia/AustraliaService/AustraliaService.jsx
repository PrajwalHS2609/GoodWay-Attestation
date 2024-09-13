import React from "react";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import "./../../UaeAttestation/UaeService/UaeService.css";
import AustraliaServiceMain from "./AustraliaServiceMain";

const AustraliaService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="Australia Apostille Services in Bangalore" />
      <AustraliaServiceMain />
    </div>
  );
};

export default AustraliaService;
