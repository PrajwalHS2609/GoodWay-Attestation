import React from "react";
import AustraliaBloreCertHead from "../../Australia/AustraliaBloreCert/AustraliaBloreCertHead";
import UsaBloreCertMain from "./UsaBloreCertMain";
import "./../../UaeAttestation/UaeService/UaeService.css";

const UsaBloreCert = () => {
  return (
    <div className="uaeServiceContainer">
      <AustraliaBloreCertHead head="USA Apostille service in Bangalore for certificates" />
      <UsaBloreCertMain />
    </div>
  );
};

export default UsaBloreCert;
