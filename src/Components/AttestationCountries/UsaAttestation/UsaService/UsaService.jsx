import React from "react";
import UaeServiceHead from "../../UaeAttestation/UaeService/UaeServiceHead";
import "./../../UaeAttestation/UaeService/UaeService.css";
import UsaServiceMain from "./UsaServiceMain";

const UsaService = () => {
  return (
    <div className="uaeServiceContainer">
      <UaeServiceHead head="USA Apostille Services in Bangalore" />
      <UsaServiceMain />
    </div>
  );
};

export default UsaService;
