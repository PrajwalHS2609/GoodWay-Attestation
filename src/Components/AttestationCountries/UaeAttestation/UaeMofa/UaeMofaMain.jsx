import React from "react";
import "./UaeMofa.css";

const UaeMofaMain = (props) => {
  return (
    <div className="uaeMofaMainContainer">
      <p>
        We also take over {props.mofa}
        After Attesting from country from which the documents are issued it has
        to be Attested from MOFA Ministry of Foreign Affairs of the Country
        where you are going for employment.
      </p>
    </div>
  );
};

export default UaeMofaMain;
