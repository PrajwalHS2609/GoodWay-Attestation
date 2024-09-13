import React from "react";
import "./../../UaeAttestation/UaeService/UaeService.css";
import MexicoServiceMain from "./MexicoServiceMain";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";

const MexicoService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="Mexico Apostille Services in Bangalore" />
      <MexicoServiceMain />
    </div>
  );
};

export default MexicoService;
