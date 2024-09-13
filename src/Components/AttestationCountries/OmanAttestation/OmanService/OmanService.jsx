import React from "react";
import "./../../UaeAttestation/UaeService/UaeService.css";
import OmanServiceMain from "./OmanServiceMain";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
const OmanService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="Oman Apostille Services in Bangalore" />
      <OmanServiceMain />
    </div>
  );
};

export default OmanService;
