import React from "react";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import UkServiceMain from "./UkServiceMain";
import "./../../UaeAttestation/UaeService/UaeService.css";

const UkService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="UK Apostille Services in Bangalore" />
      <UkServiceMain />
    </div>
  );
};

export default UkService;
