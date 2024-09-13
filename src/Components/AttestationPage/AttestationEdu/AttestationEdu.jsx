import React from "react";
import "./AttestationEdu.css";
import AttestationEduHead from "./AttestationEduHead";
import AttestationEduMain from "./AttestationEduMain";
import AttestationEduTime from "./AttestationEduTime";
const AttestationEdu = () => {
  return (
    <div className="atteEduContainer" id="atteEduContainer">
      <AttestationEduHead head="Attestation" />
      <AttestationEduMain />
      <AttestationEduTime/>
    </div>
  );
};

export default AttestationEdu;
