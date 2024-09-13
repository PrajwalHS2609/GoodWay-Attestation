import React from "react";
import UaeBloreHead from "../../UaeAttestation/UaeBlore/UaeBloreHead";
import "./../../UaeAttestation/UaeBlore/UaeBlore.css";
import UkBloreMain from "./UkBloreMain";
const UkBlore = () => {
  return (
    <div className="uaeBloreContainer">
      <UaeBloreHead head="UK Apostille in Bangalore" />
      <UkBloreMain />
    </div>
  );
};

export default UkBlore;
