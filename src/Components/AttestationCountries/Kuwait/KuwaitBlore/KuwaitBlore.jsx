import React from "react";
import KuwaitBloreMain from "./KuwaitBloreMain";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
const KuwaitBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="Kuwait Attestation in Bangalore" />
      <KuwaitBloreMain />
    </div>
  );
};

export default KuwaitBlore;
