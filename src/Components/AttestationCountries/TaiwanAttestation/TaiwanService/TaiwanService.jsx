import React from "react";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import "./../../UaeAttestation/UaeService/UaeService.css";
import TaiwanServiceMain from "./TaiwanServiceMain";

const TaiwanService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="Taiwan Attestation Services in Bangalore" />
      <TaiwanServiceMain />
    </div>
  );
};

export default TaiwanService;
