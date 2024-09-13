import React from "react";
import "./../../AttestationPage/AttestationEdu/AttestationEdu.css";
import AttestationEduHead from "../../AttestationPage/AttestationEdu/AttestationEduHead";
import ApostilleEduMain from "./ApostilleEduMain";
import ApostilleEduTime from "./ApostilleEduTime";

const ApostilleEdu = () => {
  return (
    <div className="atteEduContainer" id="apoEduContainer" >
      <AttestationEduHead head="Apostille" />
      <ApostilleEduMain />
      <ApostilleEduTime />
    </div>
  );
};

export default ApostilleEdu;
