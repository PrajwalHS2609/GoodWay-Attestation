import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./../../UaeAttestation/UaeService/UaeService.css";
const UsaServiceMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>
        
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>

        </li>
      </ul>
    </div>
  );
};

export default UsaServiceMain;
