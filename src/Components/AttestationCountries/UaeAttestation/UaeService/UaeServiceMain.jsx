import React from "react";
import "./UaeService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const UaeServiceMain = () => {
  return (
    <div className="uaeServiceMainContainer">
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span> Service for Certificate Attestation for UAE:</span> The
          Government of UAE need all educational or Personal certificates,
          professional or academic, originated from India to be attested by the
          Indian Embassy/Consulate in UAE for further attestation by UAE
          Government Ministry of Foreign Affairs before permit UAE Visa.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Personal Document Attestation for UAE:</span> Each Personal or
          Non Educational certificate needs to be pre authenticated initially
          from the concerned home department. Generally, Home department
          certificate attestation is performed by the respective states
          themselves. The needed Embassy Attestation is carried out after the HD
          Attestation.
        </li>
        <li>
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="eduCertIcon"
          ></FontAwesomeIcon>{" "}
          <span>Educational Documents Attestation for UAE: </span>
          Each Educational certificate needs to be pre authenticated initially
          from HRD. Generally, HRD certificate attestation is performed by the
          respective states themselves. The needed Embassy Attestation is
          carried out after the HRD Attestation.
        </li>
      </ul>
    </div>
  );
};

export default UaeServiceMain;
